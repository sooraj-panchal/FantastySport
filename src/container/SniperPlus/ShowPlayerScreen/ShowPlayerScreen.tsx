import React, { useEffect, useMemo } from 'react';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import Label from '../../../components/Label';
import { OrangeColor } from '../../../assets/colors';
import { ScrollView } from 'react-native-gesture-handler';
import Img from '../../../components/Img';
import { LeaguePlayerTypes, PlayerPositionTypes } from '../../../types/flatListTypes';
import { positions, positionsLength, sniperPlusPlayers, sniperPlusPositionLength } from '../../../utils/jsonArray'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../types/reduxTypes';
import { screenWidth } from '../../../types/sizes';
import { useCreateLeaguePlayerMutation, useGetMyTeamsQuery } from '../../../features/league';
import { addToMyPlayerWatcher, setMyTeamWatcher } from '../../../store/slices/myPlayerList';
import CreatePlayer from '../../../components/CreatePlayer';
import { AppImages } from '../../../assets/images/map';
import moment from 'moment';
import { medium } from '../../../assets/fonts/fonts';
import { Alert, View } from 'react-native';

const ShowPlayerScreen: React.FC<navigationProps> = ({
    navigation
}) => {

    const dispatch = useDispatch()
    const [myPlayerListData, setMyPlayerListData] = React.useState<PlayerPositionTypes[] | any>(sniperPlusPlayers)
    const myPlayerListArray: PlayerPositionTypes[] = useSelector((state: RootState) => state.myPlayer.data)
    const { leagueDetails } = useSelector((state: RootState) => state.selectedLeague)
    const [createLeaguePlayerWatcher, { data, isLoading }] = useCreateLeaguePlayerMutation()

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

    console.log('getMyTeam', JSON.stringify(getMyTeam))

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
        }
    }, [getMyTeam])

    React.useEffect(() => {
        if (myPlayerListArray?.length) {
            let groupedPlayers: any = {}
            positions.forEach((position) => {
                groupedPlayers[position] = myPlayerListArray.map((item, index) => {
                    let B2 = item.PredictionPoints
                    let C2 = item.FantasyPointsDraftKings
                    if (B2 > C2) {
                        item.SniperPoints = 0
                    } else {
                        item.SniperPoints = C2 <= 0 ? 0 : ((B2 / C2) * B2).toFixed()
                    }
                    return item;
                }).filter((i) => {
                    return i.Position == position
                })
                for (let i = groupedPlayers[position].length; i < sniperPlusPositionLength[position]; i++) {
                    groupedPlayers[position].push(null)
                }
            })
            setMyPlayerListData(groupedPlayers)
        }
    }, [myPlayerListArray])


    React.useLayoutEffect(() => {
        return (
            navigation.setOptions({
                headerTitle: leagueDetails.name,
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
                            opacity: myPlayerListArray?.length == 12 ? 1 : 0.4
                        }}
                        onPress={saveTeamHandler}
                        disabled={myPlayerListArray?.length == 12 ? false : true}
                    />
                }
            })
        )
    }, [leagueDetails, myPlayerListArray, myPlayerListData])


    const renderItem = (item: PlayerPositionTypes, position: string) => {
        return <CreatePlayer
            Position={position}
            {...item}
        />
    }

    const renderListHeader = () => {
        return <>
            <Container
                containerStyle={{
                    backgroundColor: 'white',
                    marginHorizontal: 10,
                }}
                mpContainer={{ pv: 10, ph: 10 }}
            >
                {
                    leagueDetails?.is_your_league ?
                        <Container containerStyle={{
                            flexDirection: 'row'
                        }}>
                            <Img
                                imgSrc={AppImages.league_icon}
                                imgStyle={{
                                    width: 40,
                                    height: 40,
                                    resizeMode: 'contain',
                                }}
                            />
                            <Container
                                containerStyle={{
                                    flex: 0.8
                                }}
                                mpContainer={{ ml: 10 }}
                            >
                                <Label
                                    labelSize={12}
                                    textColor='grey'
                                    // mpLabel={{ pl: 10 }}
                                    style={{ fontFamily: medium }}
                                >Created by you</Label>
                                <Label style={{
                                    fontFamily: medium
                                }}
                                    labelSize={18}
                                    textColor='black'
                                    numberOfLines={2}
                                >{leagueDetails?.name}</Label>
                            </Container>
                        </Container>
                        : <Container containerStyle={{
                            flexDirection: 'row'
                        }}>
                            <Img
                                imgSrc={AppImages.green_logo}
                                imgStyle={{
                                    width: 40,
                                    height: 40,
                                    resizeMode: 'contain',
                                }}
                            />
                            <Container
                                containerStyle={{
                                    flex: 0.8
                                }}
                                mpContainer={{ ml: 10 }}
                            >
                                <Label
                                    labelSize={12}
                                    textColor='grey'
                                    // mpLabel={{ pl: 10 }}
                                    style={{ fontFamily: medium }}
                                >Created by {leagueDetails?.user_name}</Label>
                                <Label style={{
                                    fontFamily: medium
                                }}
                                    labelSize={18}
                                    textColor='black'
                                    numberOfLines={2}
                                >{leagueDetails?.name}</Label>
                            </Container>
                        </Container>
                }
                <Label
                    mpLabel={{ mt: 5 }}
                    labelSize={15}
                >Scope: {leagueDetails?.week_type == 'singleWeek' ? `Week #${leagueDetails.week[0]?.week_no}` : 'Multiple games'}</Label>
                <Label
                    mpLabel={{ mt: 5 }}
                    labelSize={15}
                >Mode: {leagueDetails.scoring_system}</Label>
                <Label
                    labelSize={14}
                    style={{ color: 'black' }}
                    mpLabel={{ mt: 5 }}
                >{`${leagueDetails?.league_flag?.dateText}: ${moment(leagueDetails?.league_flag?.matchDate).format('MMM D, LT')}`}</Label>
                <Label
                    style={{
                        color: "green",
                    }}
                    labelSize={14}
                    mpLabel={{ mt: 5 }}
                >{leagueDetails?.league_flag?.weekText}</Label>
                <Img
                    imgSrc={AppImages.team}
                    width={40} height={40}
                    imgStyle={{
                        top: 10,
                        resizeMode: 'contain',
                        position: 'absolute',
                        right: 10
                    }}
                />
            </Container>
        </>
    }

    const saveTeamHandler = () => {
        if (myPlayerListArray.length == 12) {
            let playerListByPosition: PlayerPositionTypes[] = []
            Object.keys(myPlayerListData).map((item, index) => {
                myPlayerListData[item].map((item: LeaguePlayerTypes) => {
                    playerListByPosition.push(item)
                })
            })
            const saveLeaguePlayers = playerListByPosition.map((item, index) => {
                return {
                    PlayerID: item.PlayerID,
                    Name: item.Name,
                    Position: item.Position,
                    Team: item.Team,
                    Opponent: item.Opponent,
                    Accuracy: 0,
                    GameDate: item.GameDate,
                    photoUrl: item.photoUrl,
                    PredictionPoints: 0,
                    SniperPoints: 0,
                    FantasyPointsDraftKings: item.FantasyPointsDraftKings,
                    HomeOrAway: item.HomeOrAway || ''
                }
            })
            console.log('saveLeaguePlayers', JSON.stringify(saveLeaguePlayers))
            let data = new FormData()
            data.append('players', JSON.stringify(saveLeaguePlayers))
            data.append('league_id', leagueDetails.league_id)
            console.log('data', data)
            createLeaguePlayerWatcher(data).unwrap().then(() => {
                navigation.navigate('MyLeague')
                dispatch(addToMyPlayerWatcher([]))
                dispatch(setMyTeamWatcher([]))
                refetch()
            })
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
        <ScrollView>
            <Container
                containerStyle={{
                    borderBottomWidth: 1,
                    borderTopWidth: 1,
                    borderColor: 'lightgrey',
                    flexDirection: "row",
                    alignItems: 'center'
                }}
                mpContainer={{ pv: 10, ph: 15 }}
            >
                <Label labelSize={14} style={{ width: screenWidth * 0.45 }} >Offense</Label>
                <Label labelSize={12} style={{ width: screenWidth * 0.45, textAlign: 'center' }}  >Proj.Pts</Label>
            </Container>
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
export default ShowPlayerScreen;
