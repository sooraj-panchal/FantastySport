import React, { useEffect, useMemo } from 'react';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Label from '../../../components/Label';
import { greenColor, OrangeColor, PrimaryColor } from '../../../assets/colors';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Alert } from 'react-native';
import MyPlayersList from '../../../components/MyPlayersList';
import Img from '../../../components/Img';
import { LeaguePlayerTypes, PlayerPositionTypes } from '../../../types/flatListTypes';
import { myPlayers, positions, positionsLength } from '../../../utils/jsonArray'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../types/reduxTypes';
import { screenWidth } from '../../../types/sizes';
import { useCreateGameMutation, useGetMyTeamsQuery, useUpdateGameMutation } from '../../../features/league';
import { addToMyPlayerWatcher, setMyTeamWatcher } from '../../../store/slices/myPlayerList';
import UpdatePlayerList from '../../../components/UpdatePlayerItem';
import { AppStack } from '../../../navigator/navActions';
import { medium } from '../../../assets/fonts/fonts';

const UpdateTeamScreen: React.FC<navigationProps> = ({
    navigation
}) => {
    const dispatch = useDispatch()
    const [myPlayerListData, setMyPlayerListData] = React.useState<PlayerPositionTypes[] | any>(myPlayers)
    const myPlayerListArray: PlayerPositionTypes[] = useSelector((state: RootState) => state.myPlayer.data)
    const { leagueDetails } = useSelector((state: RootState) => state.selectedLeague)

    const [updateGameWatcher, { isLoading, data, error }] = useUpdateGameMutation()

    React.useEffect(() => {
        if (myPlayerListArray.length) {
            let groupedPlayers: any = {}
            positions.forEach((position) => {
                groupedPlayers[position] = myPlayerListArray.filter((i) => {
                    return i.Position == position
                })
                for (let i = groupedPlayers[position].length; i < positionsLength[position]; i++) {
                    groupedPlayers[position].push(null)
                }
            })
            setMyPlayerListData(groupedPlayers)
        }
    }, [myPlayerListArray])

    React.useLayoutEffect(() => {
        return (
            navigation.setOptions({
                headerTitle: 'Edit Lineup',
                headerRight: () => {
                    return <Btn
                        title="Save"
                        labelSize={14}
                        labelStyle={{
                            color: 'white'
                        }}
                        radius={8}
                        mpBtn={{ mt: 5 }}
                        btnStyle={{
                            backgroundColor: OrangeColor,
                            width: 85,
                            alignSelf: "flex-end",
                        }}
                        onPress={saveTeamHandler}
                    />
                }
            })
        )
    }, [myPlayerListData])

    const renderItem = (item: PlayerPositionTypes, position: string) => {
        return <UpdatePlayerList
            Position={position}
            {...item}
        />
    }

    // console.log('myPlayerListData', JSON.stringify(myPlayerListData))

    const saveTeamHandler = () => {
        // Alert.alert(
        //     "Alert!",
        //     "Do you want to edit your prediction points for Line up.",
        //     [
        //         {
        //             text: "No",
        //             style: 'destructive'
        //         },
        //         {
        //             text: 'Yes', onPress: () => {
        //                 // console.log(playerListByPosition)
        //                 dispatch(setMyTeamWatcher({ data: playerListByPosition, isFromEdit: true }))
        //                 navigation.navigate('AddPlayerPoint')
        //             }
        //         }
        //     ]
        // );
        if (myPlayerListArray.length == 10) {
            let playerListByPosition: PlayerPositionTypes[] = []
            Object.keys(myPlayerListData).map((item, index) => {
                myPlayerListData[item].map((item: LeaguePlayerTypes) => {
                    playerListByPosition.push(item)
                })
            })
            const isAllPredictionPointsAdded = playerListByPosition?.every((item, index) => { return item.PredictionPoints })
            if (isAllPredictionPointsAdded) {
                const saveLeaguePlayers = playerListByPosition.map((item, index) => {
                    return {
                        PlayerID: item.PlayerID,
                        Name: item.Name,
                        Position: item.Position,
                        Team: item.Team,
                        Opponent: item.Opponent,
                        Accuracy: item.Accuracy,
                        GameDate: item.GameDate,
                        photoUrl: item.photoUrl,
                        PredictionPoints: item.PredictionPoints,
                        SniperPoints: item.SniperPoints,
                        FantasyPointsDraftKings: item.FantasyPointsDraftKings,
                        HomeOrAway: item.HomeOrAway || ''
                    }
                })
                console.log('saveLeaguePlayers', JSON.stringify(saveLeaguePlayers))
                let data = new FormData()
                data.append('players', JSON.stringify(saveLeaguePlayers))
                data.append('team_id', leagueDetails.team_id)
                console.log(JSON.stringify(data))
                updateGameWatcher(data).unwrap().then(() => {
                    navigation.dispatch(AppStack)
                    dispatch(addToMyPlayerWatcher([]))
                    dispatch(setMyTeamWatcher([]))
                })
            } else {
                Alert.alert(
                    "Alert!",
                    "You need to add the fantasy player points prediction.",
                    [
                        {
                            text: "Cancel",
                            style: "cancel"
                        },
                        {
                            text: "ADD POINTS", onPress: () => {
                                // console.log(playerListByPosition)
                                dispatch(setMyTeamWatcher({ data: playerListByPosition, isFromEdit: true }))
                                navigation.navigate('AddPlayerPoint')
                            }
                        }
                    ]
                );
            }
        } else {
            Alert.alert(
                "Alert!",
                "All Players required.",
            );
        }
    }

    // console.log('myPlayerListArray', myPlayerListArray)

    return <MainContainer
        style={{ backgroundColor: 'white' }}
        absoluteModalLoading={isLoading}
        successMessage={data?.message}
    >
        <Container containerStyle={{
            flexDirection: 'row',
            alignItems: "center"
        }}
            mpContainer={{ mt: 5, ml: 15 }}
        >
            <Label
                labelSize={12}
                textColor={greenColor}
                style={{ fontFamily: medium, textAlign: 'center', }}
            >Do you want to edit your line up PredPts.</Label>
            <Label
                labelSize={14}
                textColor={OrangeColor}
                mpLabel={{ ml: 10 }}
                style={{ fontFamily: medium, textAlign: 'center', }}
                onPress={() => {
                    let playerListByPosition: PlayerPositionTypes[] = []
                    Object.keys(myPlayerListData).map((item, index) => {
                        myPlayerListData[item].map((item: LeaguePlayerTypes) => {
                            playerListByPosition.push(item)
                        })
                    })
                    dispatch(setMyTeamWatcher({ data: playerListByPosition, isFromEdit: true }))
                    navigation.navigate('AddPlayerPoint')

                }}
            >Edit</Label>
        </Container>

        {/* <Btn
            title="Save"
            labelSize={14}
            labelStyle={{
                color: 'white'
            }}
            radius={8}
            mpBtn={{ mt: 5 }}
            btnStyle={{
                backgroundColor: OrangeColor,
                width: 85,
                alignSelf: "flex-end",
            }}
            // onPress={saveTeamHandler}
        /> */}
        <Container
            containerStyle={{
                borderBottomWidth: 1,
                borderTopWidth: 1,
                borderColor: 'lightgrey',
                flexDirection: "row",
                alignItems: 'center'
            }}
            mpContainer={{ pv: 10, ph: 15, mt: 10 }}
        >
            <Label labelSize={16} style={{ width: screenWidth * 0.52 }} >Offense</Label>
            <Label labelSize={15} style={{ width: screenWidth * 0.15, textAlign: 'center' }} >Proj</Label>
            <Label labelSize={15} style={{ width: screenWidth * 0.15, textAlign: 'center' }} >Pred</Label>
        </Container>
        <ScrollView>
            {
                Object.keys(myPlayerListData).map((position, index) => {
                    return (
                        myPlayerListData[position].map((item: LeaguePlayerTypes, index: number) => {
                            return <View key={index.toString()}>
                                {renderItem(item, position)}
                            </View>
                        })
                    )
                })
            }
        </ScrollView>
    </MainContainer>
}
export default UpdateTeamScreen;
