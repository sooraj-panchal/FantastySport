// import React, { useEffect, useState } from 'react';
// import Btn from '../../../components/Btn';
// import Container from '../../../components/Container';
// import MainContainer from '../../../components/MainContainer';
// import { AddPlayerProps } from '../../../types/nav';
// import Label from '../../../components/Label';
// import { PrimaryColor } from '../../../assets/colors';
// import { medium } from '../../../assets/fonts/fonts';
// import { LeaguePlayerTypes, PlayerPositionTypes } from '../../../types/flatListTypes';
// import PointAddedPlayerList from '../../../components/PointAddedPlayerList';
// import { ListRenderItem, FlatList, Alert } from 'react-native';
// import { addToMyPlayerWatcher } from '../../../store/slices/myPlayerList';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../../types/reduxTypes';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { useGetLeaguePlayerListQuery } from '../../../features/league';


// const JoinSniperPlusLeague: React.FC<AddPlayerProps> = ({
//     navigation
// }) => {
//     const { leagueDetails } = useSelector((state: RootState) => state.selectedLeague)
//     const { data: playerList, isLoading, error } = useGetLeaguePlayerListQuery({
//         league_id: leagueDetails.league_id
//     })
//     const [playerData, setPlayerData] = useState<PlayerPositionTypes[]>([])

//     // const dispatch = useDispatch()
//     useEffect(() => {
//         if (playerList?.length) {
//             setPlayerData(playerList)
//         }
//     }, [playerList])

//     console.log('playerList', playerList)

//     // const addPlayerToTeam = () => {
//     //     let isPredictionPoints = playerList.every((item, index) => item.PredictionPoints !== "")
//     //     console.log(isPredictionPoints)
//     //     if (isPredictionPoints) {
//     //         const data = playerList.map((item, index) => {
//     //             let B2 = item.PredictionPoints
//     //             let C2 = item.FantasyPointsDraftKings
//     //             let sniper;
//     //             if (B2 > C2) {
//     //                 sniper = 0
//     //             } else {
//     //                 sniper = (B2 / C2) * B2
//     //             }
//     //             return {
//     //                 ...item,
//     //                 Accuracy: B2 && C2 ? Math.abs(B2 / C2).toFixed(0) : 0,
//     //                 SniperPoints: sniper.toFixed(2)
//     //             }
//     //         })
//     //         console.log(data)
//     //         // dispatch(addToMyPlayerWatcher(data))
//     //             // navigation.dispatch(Appsta)
//     //     } else {
//     //         Alert.alert('Fantasy sniper App', "Please Add All Player's prediction points")
//     //     }
//     // }

//     React.useLayoutEffect(() => {
//         return (
//             navigation.setOptions({
//                 headerRight: () => {
//                     return <Btn
//                         title="Save"
//                         labelSize={18}
//                         labelStyle={{
//                             color: 'white',
//                             fontFamily: medium
//                         }}
//                         radius={8}
//                         mpBtn={{ ph: 10 }}
//                         btnStyle={{
//                             backgroundColor: PrimaryColor
//                         }}
//                         onPress={() => {
//                             // addPlayerToTeam()
//                             // console.log(playerList)
//                         }}
//                     />
//                 }
//             })
//         )
//     }, [playerList])

//     const renderItem: ListRenderItem<LeaguePlayerTypes> = ({
//         item, index
//     }) => {
//         return <PointAddedPlayerList
//             {...item}
//             onChangeText={(val) => {
//                 // const data = [...playerList]
//                 let data = playerData.map((item, placeIndex) => {
//                     return {
//                         ...item,
//                         PredictionPoints: index == placeIndex ? val : item.PredictionPoints
//                     }
//                 })
//                 data[index]['PredictionPoints'] = val
//                 setPlayerData(data)
//             }}
//         // Position={item.isWRTPosition ? 'W/R/T' : item.Position}
//         />
//     }

//     return <MainContainer
//         style={{ backgroundColor: 'white' }}
//     >
//         <Container
//             containerStyle={{
//                 borderBottomWidth: 1,
//                 borderColor: 'lightgrey',
//                 flexDirection: "row",
//                 alignItems: 'center'
//             }}
//             mpContainer={{ pv: 10, ph: 15 }}
//         >
//             <Label labelSize={16} style={{ width: 225 }} >Offense</Label>
//             <Label labelSize={15} style={{ letterSpacing: 0.5, width: 45, textAlign: 'center' }}  >Proj</Label>
//             <Label labelSize={15} style={{ letterSpacing: 0.5, width: 75, textAlign: 'center' }} >Pred</Label>
//         </Container>
//         <KeyboardAwareScrollView
//             extraScrollHeight={100}
//         >
//             <FlatList
//                 data={playerList}
//                 renderItem={renderItem}
//                 keyExtractor={(item) => `${item.PlayerID}`}
//                 removeClippedSubviews={true}
//                 keyboardShouldPersistTaps='handled'
//             />
//         </KeyboardAwareScrollView>
//     </MainContainer >
// }
// export default JoinSniperPlusLeague;

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
import { LeaguePlayerTypes, PlayerPositionTypes } from '../../../types/flatListTypes';
import { IWeek, myPlayers, positions, positionsLength } from '../../../utils/jsonArray'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../types/reduxTypes';
import { screenWidth } from '../../../types/sizes';
import { useCreateGameMutation, useCreateSniperPlusGameMutation, useCreateTeamMutation, useGetLeaguePlayerListQuery, useGetMyTeamsQuery } from '../../../features/league';
import { addToMyPlayerWatcher, setMyTeamWatcher } from '../../../store/slices/myPlayerList';
import { UserResponse } from '../../../types/responseTypes';
import { SvgUri } from 'react-native-svg';
import { AppStack } from '../../../navigator/navActions';
import { medium } from '../../../assets/fonts/fonts';
import Players from './Players';
import { imageBaseUrl } from '../../../utils/globals';

const JoinSniperPlusLeague: React.FC<navigationProps> = ({
    navigation
}) => {

    const dispatch = useDispatch()
    const [myPlayerListData, setMyPlayerListData] = React.useState<PlayerPositionTypes[]>([])
    const [totalPredictionPoints, setTotalPredictionPoints] = React.useState<number | any>(0.00)
    const [totalProjectedPoints, setTotalProjectedPoints] = React.useState<number | any>(0.00)
    const [totalSniperPoints, setTotalSniperPoints] = React.useState<number | any>(0.00)
    const [totalActualPoints, setTotalActualPoints] = React.useState<number | string>(0.00)
    const { leagueDetails } = useSelector((state: RootState) => state.selectedLeague)
    const [useCreateSniperPlusGame, { data, isLoading }] = useCreateSniperPlusGameMutation()

    const { data: getMyTeam, isLoading: getMyTeamLoding, isFetching: getMyTeamFetching, refetch } = useGetLeaguePlayerListQuery({
        league_id: leagueDetails.league_id
    })
    const myPlayerListArray: PlayerPositionTypes[] = useSelector((state: RootState) => state.myPlayer.data)

    console.log('leagueDetails', JSON.stringify(leagueDetails))

    useEffect(() => {

        if (getMyTeam?.players?.length) {
            let playerList = getMyTeam?.players
            const data = playerList.map((item, index) => {
                return {
                    ...item,
                    FantasyPointsDraftKings: item.ProjectionPoints,
                    PredictionPoints: item.PredictionPoints || ''
                }
            })
            setMyPlayerListData(data)
            let isPredictionPoints = playerList.every((item, index) => item.PredictionPoints !== "")
            if (isPredictionPoints) {
                const PredictionPoints = playerList.reduce(function (a, b) {
                    return a + Number(b.PredictionPoints);
                }, 0);
                const FantasyPointsDraftKings = playerList.reduce(function (a, b) {
                    return a + Number(b.ProjectionPoints);
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
        if (myPlayerListArray?.length) {
            let data = myPlayerListArray.map((item, index) => {
                let B2 = item.PredictionPoints
                let C2 = item.FantasyPointsDraftKings || item.ProjectionPoints
                console.log('B2', B2)
                console.log('C2', C2)

                if (B2 > C2) {
                    item.SniperPoints = 0
                } else {
                    item.SniperPoints = C2 <= 0 ? 0 : ((B2 / C2) * B2).toFixed()
                }
                return item;
            })
            totalPointsHandler()
            setMyPlayerListData(data)
        }
    }, [myPlayerListArray])

    const totalPointsHandler = () => {
        let isPredictionPoints = myPlayerListArray.every((item, index) => item.PredictionPoints !== "")
        if (isPredictionPoints) {
            const PredictionPoints = myPlayerListArray.reduce(function (a, b) {
                return a + Number(b.PredictionPoints);
            }, 0);
            const FantasyPointsDraftKings = myPlayerListArray.reduce(function (a, b) {
                return a + Number(b.ProjectionPoints);
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

    React.useLayoutEffect(() => {
        return (
            navigation.setOptions({
                headerTitle: leagueDetails.name,
                headerRight: () => {
                    // if (myPlayerListArray?.length == 10) {
                    const isAllPredictionPointsAdded = myPlayerListData?.every((item, index) => { return item.PredictionPoints })
                    console.log(isAllPredictionPointsAdded)
                    if (!isAllPredictionPointsAdded) {
                        return <Btn
                            title="Predict points"
                            labelSize={14}
                            labelStyle={{
                                color: 'white'
                            }}
                            radius={8}
                            mpBtn={{ mt: 5 }}
                            btnStyle={{
                                backgroundColor: OrangeColor,
                                width: 120,
                                opacity: 1
                            }}
                            onPress={() => {
                                dispatch(setMyTeamWatcher({ data: myPlayerListData, isFromEdit: true }))
                                navigation.navigate('AddPlayerPoint')
                            }}
                        />
                    } else {
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
                                opacity: 1
                            }}
                            onPress={() => {
                                const saveLeaguePlayers = myPlayerListData.map((item, index) => {
                                    return {
                                        PlayerID: item.PlayerID,
                                        PredictionPoints: item.PredictionPoints,
                                    }
                                })
                                let data = new FormData()
                                data.append('players', JSON.stringify(saveLeaguePlayers))
                                data.append('team_id', leagueDetails.team_id)
                                data.append('league_id', leagueDetails.league_id)
                                console.log('data', JSON.stringify(data))
                                useCreateSniperPlusGame(data).unwrap().then(() => {
                                    // navigation.dispatch(AppStack)
                                    navigation.navigate('tabs',{screen:'MyLeague'})
                                    dispatch(addToMyPlayerWatcher([]))
                                    dispatch(setMyTeamWatcher([]))
                                    refetch()
                                })
                            }}
                        />
                    }
                    // } else {
                    //     return null
                    // }
                }
            })
        )
    }, [leagueDetails, myPlayerListData])

    const renderItem = (item: PlayerPositionTypes) => {
        return <Players
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
            </Container>
            <Container
                containerStyle={{
                    flexDirection: "row",
                }}
                mpContainer={{ mh: 15 }}
                height={80}
            >
                {imageType ?
                    <SvgUri
                        width={40}
                        height={40}
                        uri={`${imageBaseUrl}${getMyTeam?.team_logo}` || 'dummy'}
                    />
                    :
                    getMyTeam?.team_logo ?
                        <Container
                            containerStyle={{
                                borderWidth: 1,
                                borderColor: '#f2f2f2',
                                borderRadius: 40,
                                justifyContent: 'center',
                                alignItems: 'center',
                                overflow: 'hidden'
                            }}
                            width={40} height={40}
                        >
                            <Img
                                width={40} height={40}
                                imgSrc={{ uri: `${imageBaseUrl}${getMyTeam?.team_logo}` || 'dummy' }} />

                        </Container> :
                        <Container
                            containerStyle={{
                                borderWidth: 1,
                                borderColor: '#f2f2f2',
                                borderRadius: 40,
                                justifyContent: 'center',
                                alignItems: 'center',
                                overflow: 'hidden'
                            }}
                            width={45} height={45}
                        >
                            <Ionicons
                                name='person'
                                size={45}
                                color='grey'
                            />
                        </Container>
                }
                <Container mpContainer={{ ml: 10 }} >
                    <Label labelSize={16} style={{ fontFamily: medium }}  > {getMyTeam?.team_name}</Label>
                    <Container containerStyle={{ flexDirection: "row", alignItems: "center" }} mpContainer={{ ml: 5 }} >
                        <Label labelSize={12}  >Week {leagueDetails.week[0].week_no}</Label>
                        <Ionicons
                            name="ios-chevron-forward"
                            size={16}
                            color="black"
                        />
                    </Container>
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
        </>
    }

    // console.log('myPlayerListArray', myPlayerListArray)

    const saveTeamHandler = () => {
        console.log('myPlayerListData', myPlayerListData)
        const isAllPredictionPointsAdded = myPlayerListData?.every((item, index) => { return item.PredictionPoints })
        if (isAllPredictionPointsAdded) {
            const saveLeaguePlayers = myPlayerListData.map((item, index) => {
                return {
                    PlayerID: item.PlayerID,
                    PredictionPoints: item.PredictionPoints,
                }
            })
            let data = new FormData()
            data.append('players', JSON.stringify(saveLeaguePlayers))
            // data.append('team_id', leagueDetails.team_id)
            data.append('league_id', leagueDetails.league_id)
            console.log('data', JSON.stringify(data))
            useCreateSniperPlusGame(data).unwrap().then(() => {
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

                            dispatch(setMyTeamWatcher({ data: myPlayerListData, isFromEdit: true }))
                            navigation.navigate('AddPlayerPoint')
                        }
                    }
                ]
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
                <Label labelSize={14} style={{ width: screenWidth * 0.55 }} >Offense</Label>
                <Label labelSize={12} style={{ width: screenWidth * 0.10, textAlign: 'center' }}  >Proj</Label>
                <Label labelSize={12} style={{ width: screenWidth * 0.15, textAlign: 'center' }} >Pred</Label>
                <Label labelSize={12} style={{ width: 50, textAlign: 'center' }} >Sniper</Label>
            </Container>
            {
                myPlayerListData.map((item, index) => {
                    return <View key={index.toString()}>
                        {renderItem(item)}
                    </View>
                })
            }
        </ScrollView>
    </MainContainer>
}
export default JoinSniperPlusLeague;
