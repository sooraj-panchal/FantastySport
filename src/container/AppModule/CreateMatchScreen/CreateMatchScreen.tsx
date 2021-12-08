import React, { useEffect, useMemo } from 'react';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Label from '../../../components/Label';
import { greenColor, OrangeColor, PrimaryColor } from '../../../assets/colors';
import { ScrollView } from 'react-native-gesture-handler';
import { ListRenderItem, View, Alert } from 'react-native';
import MyPlayersList from '../../../components/MyPlayersList';
import Img from '../../../components/Img';
import { AppImages } from '../../../assets/images/map';
import { LeaguePlayerTypes, PlayerPositionTypes } from '../../../types/flatListTypes';
import { IWeek, myPlayers, positions, positionsLength } from '../../../utils/jsonArray'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../types/reduxTypes';
import { screenWidth } from '../../../types/sizes';
import { useCreateGameMutation, useCreateTeamMutation, useGetMyTeamsQuery } from '../../../features/league';
import { addToMyPlayerWatcher, setMyTeamWatcher } from '../../../store/slices/myPlayerList';
import { UserResponse } from '../../../types/responseTypes';
import { SvgUri } from 'react-native-svg';
import { AppStack } from '../../../navigator/navActions';

const MyTeamScreen: React.FC<navigationProps> = ({
    navigation
}) => {

    const dispatch = useDispatch()
    const [myPlayerListData, setMyPlayerListData] = React.useState<PlayerPositionTypes[] | any>(myPlayers)
    const [totalPredictionPoints, setTotalPredictionPoints] = React.useState<number | any>(0.00)
    const [totalProjectedPoints, setTotalProjectedPoints] = React.useState<number | any>(0.00)
    const [totalSniperPoints, setTotalSniperPoints] = React.useState<number | any>(0.00)
    const [totalActualPoints, setTotalActualPoints] = React.useState<number | string>(0.00)
    const myPlayerListArray: PlayerPositionTypes[] = useSelector((state: RootState) => state.myPlayer.data)
    const currentWeek: number = useSelector((state: RootState) => state.schedule.currentWeek)
    const { leagueDetails } = useSelector((state: RootState) => state.selectedLeague)
    const user: UserResponse = useSelector((state: RootState) => state.auth.user)
    const [createGameWatcher, { data, isLoading }] = useCreateGameMutation()
    const havePlayers = useSelector((state: RootState) => state.myPlayer.MyTeamList)

    const { data: getMyTeam, isLoading: getMyTeamLoding, isFetching: getMyTeamFetching, refetch } = useGetMyTeamsQuery({
        league_id: leagueDetails.league_id,
        week_id: leagueDetails.week[0].week_id || '',
    }, {
        pollingInterval: havePlayers?.length == 10 ? 300000 : 0,
        refetchOnMountOrArgChange: true
    })

    // useEffect(() => {
    //     refetch()
    // }, [])
    // console.log('haveData', JSON.stringify(myPlayerListArray))

    useEffect(() => {

        if (getMyTeam?.players?.length) {
            let playerList = getMyTeam?.players
            let groupedPlayers: any = {}

            positions.forEach((position) => {
                groupedPlayers[position] = playerList.filter((i) => {
                    return i.Position == position
                })
                for (let i = groupedPlayers[position].length; i < positionsLength[position]; i++) {
                    groupedPlayers[position].push(null)
                }
            })

            setMyPlayerListData(groupedPlayers)
            let isPredictionPoints = playerList.every((item, index) => item.PredictionPoints !== "")
            if (isPredictionPoints) {
                const PredictionPoints = playerList.reduce(function (a, b) {
                    return a + Number(b.PredictionPoints);
                }, 0);
                const FantasyPointsDraftKings = playerList.reduce(function (a, b) {
                    return a + Number(b.FantasyPointsDraftKings);
                }, 0);
                const sniperPoints = playerList.reduce(function (a, b) {
                    return a + Number(b.SniperPoints);
                }, 0);
                setTotalPredictionPoints(Math.abs(PredictionPoints / 10).toFixed(2))
                setTotalProjectedPoints(Math.abs(FantasyPointsDraftKings / 10).toFixed(2))
                setTotalSniperPoints(Math.abs(sniperPoints / 10).toFixed(2))
                setTotalActualPoints(Math.abs(FantasyPointsDraftKings / 10).toFixed(2))
            }
        }
    }, [getMyTeam])

    React.useEffect(() => {
        if (myPlayerListArray.length) {
            // let newModifiedData = myPlayerListArray.map((item, index) => {
            //     let B2 = item.PredictionPoints
            //     let C2 = item.FantasyPointsDraftKings
            //     item.SniperPoints = item.FantasyPointsDraftKings == 0 ? 0 : ((1 - Math.abs((B2 - C2) / C2)) * C2).toFixed(0)
            //     return item;
            // })
            let groupedPlayers: any = {}
            positions.forEach((position) => {
                groupedPlayers[position] = myPlayerListArray.map((item, index) => {
                    let B2 = item.PredictionPoints
                    let C2 = item.FantasyPointsDraftKings
                    item.SniperPoints = item.FantasyPointsDraftKings == 0 ? 0 : ((1 - Math.abs((B2 - C2) / C2)) * C2).toFixed(0)
                    return item;
                }).filter((i) => {
                    return i.Position == position
                })
                for (let i = groupedPlayers[position].length; i < positionsLength[position]; i++) {
                    groupedPlayers[position].push(null)
                }
            })
            totalPointsHandler()
            setMyPlayerListData(groupedPlayers)
        }
    }, [myPlayerListArray])

    const totalPointsHandler = () => {
        let isPredictionPoints = myPlayerListArray.every((item, index) => item.PredictionPoints !== "")
        if (isPredictionPoints) {
            const PredictionPoints = myPlayerListArray.reduce(function (a, b) {
                return a + Number(b.PredictionPoints);
            }, 0);
            const FantasyPointsDraftKings = myPlayerListArray.reduce(function (a, b) {
                return a + Number(b.FantasyPointsDraftKings);
            }, 0);
            const sniperPoints = myPlayerListArray.reduce(function (a, b) {
                console.log('sniperPoints', b.SniperPoints)
                return a + Number(b.SniperPoints);
            }, 0);
            setTotalPredictionPoints(Math.abs(PredictionPoints / 10).toFixed(2))
            setTotalProjectedPoints(Math.abs(FantasyPointsDraftKings / 10).toFixed(2))
            setTotalSniperPoints(Math.abs(sniperPoints / 10).toFixed(2))
            setTotalActualPoints(Math.abs(FantasyPointsDraftKings / 10).toFixed(2))
        }
    }

    // React.useLayoutEffect(() => {
    //     return (
    //         navigation.setOptions({
    //             headerRight: () => {
    //                 return <Container
    //                     containerStyle={{
    //                         flexDirection: "row",
    //                         alignItems: "center"
    //                     }}
    //                     mpContainer={{ mr: 15, mt: 5 }}
    //                 >
    //                     <Btn
    //                         title="Invite friends"
    //                         labelSize={12}
    //                         labelStyle={{
    //                             color: 'white'
    //                         }}
    //                         radius={8}
    //                         mpBtn={{ ph: 10, mr: 10 }}
    //                         btnStyle={{
    //                             backgroundColor: OrangeColor
    //                         }}
    //                         onPress={() => {
    //                             navigation.navigate('InviteFriend')
    //                         }}
    //                     />
    //                     <Ionicons
    //                         name="ios-settings"
    //                         size={22}
    //                         color='white'
    //                     />
    //                 </Container>
    //             }
    //         })
    //     )
    // }, [])

    const renderItem = (item: PlayerPositionTypes, position: string) => {
        return <MyPlayersList
            Position={position}
            {...item}
        />
    }

    const imageType = useMemo(() => {
        return getMyTeam?.team_logo?.split('.').pop() == 'svg';
    }, [getMyTeam])


    // console.log(leagueDetails?.week[0]?.week)
    const renderListHeader = () => {
        return <>
            <Container containerStyle={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}
                mpContainer={{ ml: 15, mt: 10 }}
            >
                <Container containerStyle={{ flexDirection: "row", alignItems: "center" }} >
                    <Label labelSize={15}  >Week {leagueDetails.week[0].week_no}</Label>
                    <Ionicons
                        name="ios-chevron-forward"
                        size={20}
                        color="black"
                    />
                </Container>
                <Btn
                    title="Edit Team"
                    labelSize={14}
                    labelStyle={{
                        color: 'white'
                    }}
                    radius={8}
                    mpBtn={{ mr: 10 }}
                    btnStyle={{
                        backgroundColor: PrimaryColor,
                        width: 85,
                        alignSelf: "flex-end",
                        display: getMyTeam?.team_id ? 'flex' : 'none'
                    }}
                    onPress={() => {
                        navigation.navigate('EditTeamInfo', {
                            team_id: getMyTeam?.team_id,
                            team_name: getMyTeam?.team_name,
                            team_logo: getMyTeam?.team_logo,
                        })
                        // navigation.navigate('AddPlayer')
                    }}
                />
            </Container>
            <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} mpContainer={{ mv: 10, mh: 15 }} />
            <Container
                containerStyle={{
                    flexDirection: "row",
                    // justifyContent: "space-between"
                }}
                mpContainer={{ mh: 15 }}
                height={80}
            >
                {imageType ?
                    <SvgUri
                        width={40}
                        height={40}
                        uri={`https://chessmafia.com/php/fantasy/public/uploads/${getMyTeam?.team_logo}` || 'dummy'}
                    />
                    :
                    <Img
                        imgStyle={{}}
                        width={40} height={40}
                        mpImage={{ ml: 15 }}
                        imgSrc={{ uri: `https://chessmafia.com/php/fantasy/public/uploads/${getMyTeam?.team_logo}` || 'dummy' }} />
                }
                <Container mpContainer={{ ml: 5 }} >
                    <Label labelSize={16} style={{ fontWeight: "bold", letterSpacing: 0.5 }}  > {getMyTeam?.team_name}</Label>
                    {/* <Label labelSize={14} style={{ letterSpacing: 0.5 }} >4-3-3 | - of 1</Label> */}
                </Container>
                <Container
                    containerStyle={{
                        alignItems: "flex-end",
                        position: 'absolute',
                        right: 10
                    }}
                >
                    <Label labelSize={14} style={{ color: greenColor }} >Sniper Pts. {totalSniperPoints}</Label>
                    <Label labelSize={16} style={{ color: 'black' }}  >Fantasy Pts {totalActualPoints}</Label>
                    <Label labelSize={14} style={{ color: OrangeColor }} >Prediction Pts. {totalPredictionPoints}</Label>
                    <Label labelSize={14} style={{ color: 'grey' }} >Projection Pts. {totalProjectedPoints}</Label>
                </Container>
            </Container>
            {
                myPlayerListArray?.length == 10 ?
                    <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} mpContainer={{ mv: 10, mh: 15 }} /> : null
            }
        </>
    }

    // console.log('myPlayerListArray', myPlayerListArray)

    const renderSelectedWeekItem: ListRenderItem<IWeek> = ({ item, index }) => {
        let isCurrentWeek = item.week == currentWeek;
        return <Container
            containerStyle={{
                justifyContent: 'center',
                backgroundColor: isCurrentWeek ? '#f7dfd2' : 'white',
                borderWidth: 1,
                borderColor: "grey",
                borderRadius: 4,
                // width:screenWidth*0.15,
                flex: 0.32,
                alignItems: "center",
                opacity: isCurrentWeek ? 1 : 0.5
            }}
            height={40}
            mpContainer={{ mt: 10, ml: 15 }}
            onPress={() => {
            }}
        >
            <Label
                labelSize={14}
                style={{
                    letterSpacing: 0.5,
                }}
            >Week {item.week}</Label>
            {
                isCurrentWeek ?
                    <Container
                        containerStyle={{
                            // borderRadius: 30,
                            position: 'absolute',
                            right: 0,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: 'black',
                            top: 0,
                            borderBottomLeftRadius: 10
                        }}
                        width={20} height={20}
                    // onPress={onPress}
                    >
                        <Ionicons
                            name="md-checkmark"
                            size={15}
                            color={'white'}
                        />
                    </Container> : null
            }
        </Container>
    }

    const saveTeamHandler = () => {
        // const isAllPredictionPointsAdded = myPlayerListArray?.every((item, index) => { return item.PredictionPoints })
        // console.log('isAllPredictionPointsAdded', isAllPredictionPointsAdded)
        // if (isAllPredictionPointsAdded) {
        //     const saveLeaguePlayers = myPlayerListArray.map((item, index) => {
        //         return {
        //             PlayerID: item.PlayerID,
        //             Name: item.Name,
        //             Position: item.Position,
        //             Team: item.Team,
        //             Opponent: item.Opponent,
        //             Accuracy: item.Accuracy,
        //             GameDate: item.GameDate,
        //             photoUrl: item.photoUrl,
        //             PredictionPoints: item.PredictionPoints,
        //             SniperPoints: item.SniperPoints,
        //             FantasyPointsDraftKings: item.FantasyPointsDraftKings,
        //             HomeOrAway: item.HomeOrAway
        //         }
        //     })
        //     let data = new FormData()
        //     data.append('players', JSON.stringify(saveLeaguePlayers))
        //     data.append('team_id', leagueDetails.team_id)
        //     createGameWatcher(data).unwrap().then(() => {
        //         navigation.dispatch(AppStack)
        //         dispatch(addToMyPlayerWatcher([]))
        //         refetch()
        //     })
        // } else {
        //     Alert.alert(
        //         "Alert!",
        //         "You need to add the fantasy player points prediction.",
        //         [
        //             {
        //                 text: "Cancel",
        //                 style: "cancel"
        //             },
        //             {
        //                 text: "ADD POINTS", onPress: () => {
        //                     navigation.navigate('AddPlayerPoint')
        //                 }
        //             }
        //         ]
        //     );
        // }

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
                createGameWatcher(data).unwrap().then(() => {
                    navigation.dispatch(AppStack)
                    dispatch(addToMyPlayerWatcher([]))
                    dispatch(setMyTeamWatcher([]))
                    refetch()
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
                                dispatch(setMyTeamWatcher({ data: playerListByPosition, isFromEdit: false }))
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

    return <MainContainer
        style={{ backgroundColor: 'white' }}
        absoluteModalLoading={isLoading}
        successMessage={data?.message}
        loading={getMyTeamLoding}
        absoluteLoading={getMyTeamFetching}
    >
        {renderListHeader()}
        {
            myPlayerListArray.length == 10 ?
                <Container containerStyle={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                }}>
                    <Btn
                        title="Save"
                        labelSize={14}
                        labelStyle={{
                            color: 'white'
                        }}
                        radius={8}
                        mpBtn={{ mr: 10 }}
                        btnStyle={{
                            backgroundColor: PrimaryColor,
                            width: 85,
                            alignSelf: "flex-end",
                        }}
                        onPress={saveTeamHandler}
                    />
                </Container> : null
        }
        <ScrollView>
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
                <Label labelSize={14} style={{ width: screenWidth * 0.45 }} >Offense</Label>
                <Label labelSize={12} style={{ width: screenWidth * 0.10, textAlign: 'center' }}  >Proj</Label>
                <Label labelSize={12} style={{ width: screenWidth * 0.15, textAlign: 'center' }} >Pred</Label>
                <Label labelSize={12} style={{ width: 50, textAlign: 'center' }} >Sniper</Label>
            </Container>
            {/* <ScrollView> */}
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
            {/* </ScrollView> */}
            {/* </View> */}
        </ScrollView>
    </MainContainer>
}
export default MyTeamScreen;
