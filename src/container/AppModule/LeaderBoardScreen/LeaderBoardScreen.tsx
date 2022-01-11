import React, { useEffect, useLayoutEffect, useRef } from 'react';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { FlatList } from 'react-native-gesture-handler';
import { Alert, ListRenderItem, RefreshControl, ScrollView, View } from 'react-native';
import { navigationProps } from '../../../types/nav';
import WinnerList from '../../../components/WinnerList';
import { useGameDetailsQuery, useLeagueDetailsQuery, useLeagueListQuery, useWinnerTeamListQuery } from '../../../features/league';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Modalize } from 'react-native-modalize';
import LeagueListModal from '../../../components/Modals/LeagueListModal';
import GamePlayerList from '../../../components/GamePlayerList';
import { leagueDetailsWatcher, leagueUpdateWatcher } from '../../../store/slices/selectedLeague';
import Img from '../../../components/Img';
import { AppImages } from '../../../assets/images/map';
import { medium } from '../../../assets/fonts/fonts';
interface props extends navigationProps {

}

const LeaderBoardScreen: React.FC<props> = ({
    navigation
}) => {
    const leagueModalizeRef = useRef<Modalize>(null)
    const { data: leagueList } = useLeagueListQuery(null)
    const { leagueData } = useSelector((store: RootState) => store.selectedLeague)
    const leagueId = leagueData?.league_id || leagueList?.[0]?.league_id

    const dispatch = useDispatch()

    // useEffect(() => {
    //     if (leagueList?.length) {
    //         dispatch(leagueUpdateWatcher({
    //             league_id: leagueList?.[0]?.league_id,
    //             week_id: leagueList?.[0]?.week[0]?.week_id
    //         }))
    //     }
    // }, [])

    console.log('leagueList', leagueList)

    const { data: LeagueDetails, isFetching: isFetchingForLeague, isLoading: loadingForLeagueDetail, error: leagueDetailError, refetch: refetchForLeagueDetails } = useLeagueDetailsQuery(leagueId, {
        skip: leagueList?.length ? false : true
    })

    console.log('LeagueDetails', LeagueDetails)

    const { data, isLoading, error, isFetching, refetch } = useGameDetailsQuery<any>({
        league_id: LeagueDetails?.league_id,
        week_id: LeagueDetails?.week[0]?.week_id
    }, {
        skip: LeagueDetails == undefined ? true : false
    })

    console.log('data', data)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <MaterialIcons
                    name='filter-list-alt'
                    size={30}
                    color='white'
                    onPress={() => {
                        leagueModalizeRef.current?.open()
                    }}
                />
            }
        })
    }, [])

    const renderItem: ListRenderItem<any> = ({ item, index }) => {
        console.log(item)
        return (
            <GamePlayerList
                {...item}
                index={index}
                onPress={() => {
                    if (item.is_game_created) {
                        console.log(LeagueDetails)
                        dispatch(leagueDetailsWatcher({ ...LeagueDetails }))
                        navigation.navigate('TeamDetail', {
                            team_id: item.team_id,
                            fromOtherUser: true
                        })
                    } else {
                        Alert.alert("Fantasy sniper", 'This participant user have not created match for league yet.')
                    }
                }}
                compareMatchHandler={() => {
                    if (LeagueDetails?.team_id) {
                        if (LeagueDetails?.participant_user >= 2) {
                            const WithoutMyTeam = data.filter((item: any) => {
                                return item.team_id != LeagueDetails?.team_id
                            })
                            if (item.is_game_created) {
                                dispatch(leagueDetailsWatcher({ ...LeagueDetails }))
                                navigation.navigate('LiveMatchDetail', {
                                    team_id: LeagueDetails?.team_id,
                                    op_team_id: item.team_id == LeagueDetails?.team_id ? WithoutMyTeam[0]?.team_id : item.team_id
                                })
                            } else {
                                Alert.alert("Fantasy sniper", 'This participant user have not created match for league yet.')
                            }
                        } else {
                            Alert.alert('Fantasy sniper', 'Wait for other players to join the league')
                        }
                    } else {
                        Alert.alert('Fantasy sniper', 'You should Join the league to compare match with others.')
                    }
                }}
            />
        )
    }

    // console.log("useWinnerTeamListQuery", data)
    // let imageType = LeagueDetails?.team_logo?.split('.').pop() == 'svg';

    return <MainContainer
        style={{ backgroundColor: 'white' }}
        loading={isLoading || loadingForLeagueDetail}
    // absoluteLoading={isFetching}
    >
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={isFetching || isFetchingForLeague}
                    onRefresh={() => {
                        refetch()
                        refetchForLeagueDetails()
                    }}
                />
            }
        >
            {
                LeagueDetails != undefined ?
                    <>
                        <Container
                            containerStyle={{
                                backgroundColor: 'white',
                                borderRadius: 5
                            }}
                            mpContainer={{ mt: 10, mh: 15 }}
                        >
                            {
                                LeagueDetails?.is_your_league ?
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
                                            >{LeagueDetails?.name}</Label>
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
                                            >Created by {LeagueDetails?.user_name}</Label>
                                            <Label style={{
                                                fontFamily: medium
                                            }}
                                                labelSize={18}
                                                textColor='black'
                                                numberOfLines={2}
                                            >{LeagueDetails?.name}</Label>
                                        </Container>
                                    </Container>
                            }
                            <Label
                                mpLabel={{ mt: 5 }}
                                labelSize={15}
                            >Scope: {LeagueDetails?.week_type == 'singleWeek' ? `Week #${LeagueDetails.week[0]?.week_no}` : 'Multiple games'}</Label>
                            <Label
                                mpLabel={{ mt: 5 }}
                                labelSize={15}
                            >No. of Participant: {!LeagueDetails?.participant_user ? 0 : LeagueDetails?.participant_user}/{LeagueDetails?.max_participant}</Label>
                            <Label
                                mpLabel={{ mt: 5 }}
                                labelSize={15}
                            >Scoring points: {LeagueDetails?.scoring_system}</Label>
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
                        <Container
                            containerStyle={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                            mpContainer={{ mh: 10, mt: 20, mb: 5 }}
                        >
                            <Label
                                labelSize={16}
                                mpLabel={{ ml: 10 }}
                                numberOfLines={1}
                                style={{
                                    fontWeight: 'bold'
                                }}
                            >Rank</Label>
                            <Label
                                labelSize={15}
                                mpLabel={{ ml: 20 }}
                                style={{
                                    fontWeight: 'bold'
                                }}
                            >Team</Label>
                            <Container containerStyle={{
                                position: 'absolute',
                                right: 5,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }} >
                                <Label
                                    labelSize={14}
                                    style={{
                                        fontWeight: 'bold'

                                    }}
                                >SnPts</Label>
                                <Label
                                    labelSize={14}
                                    mpLabel={{ ml: 10 }}
                                    style={{
                                        fontWeight: 'bold'
                                    }}
                                >Compare</Label>
                            </Container>
                        </Container>
                        <View>
                            <FlatList
                                data={data || []}
                                renderItem={renderItem}
                                keyExtractor={(item, index) => `Winners${index.toString()}`}
                            />
                        </View>
                    </>
                    :
                    <Container
                        containerStyle={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        height={300}
                    >
                        <Label
                            labelSize={20}

                        >No Data found..</Label>
                    </Container>
            }
        </ScrollView>
        <LeagueListModal
            closeModal={function (league_id, week_id): void {
                dispatch(leagueUpdateWatcher({ league_id, week_id }))
                leagueModalizeRef.current?.close()
            }}
            modalizeRef={leagueModalizeRef}
        />
    </MainContainer>
}
export default LeaderBoardScreen;


