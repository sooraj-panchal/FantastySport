import React, { useEffect, useLayoutEffect, useRef } from 'react';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItem, View } from 'react-native';
import { navigationProps } from '../../../types/nav';
import WinnerList from '../../../components/WinnerList';
import { useGameDetailsQuery, useLeagueDetailsQuery, useLeagueListQuery, useWinnerTeamListQuery } from '../../../features/league';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Modalize } from 'react-native-modalize';
import LeagueListModal from '../../../components/Modals/LeagueListModal';
import GamePlayerList from '../../../components/GamePlayerList';
import { leagueUpdateWatcher } from '../../../store/slices/selectedLeague';
import Img from '../../../components/Img';
import { AppImages } from '../../../assets/images/map';
import { medium } from '../../../assets/fonts/fonts';
interface props extends navigationProps {

}

const LeaderBoardScreen: React.FC<props> = ({
    navigation
}) => {
    const leagueModalizeRef = useRef<Modalize>(null)
    const { NFLCurrentWeek } = useSelector((store: RootState) => store.leaguePlayer)
    const { leagueData } = useSelector((store: RootState) => store.selectedLeague)
    const dispatch = useDispatch()
    const { data: leagueList, isLoading: loadingForLeague } = useLeagueListQuery(null)

    useEffect(() => {
        if (leagueList?.length) {
            dispatch(leagueUpdateWatcher({
                league_id: leagueList?.[0]?.league_id,
                week_id: leagueList?.[0]?.week[0]?.week_id
            }))
        }
    }, [])

    // console.log("leagueData", leagueData ? leagueData : { league_id: leagueList?.[0]?.league_id, week_id: leagueList?.[0]?.week[0]?.week_id })

    console.log('leagueData', leagueData)

    // let newData = {
    //     league_id: leagueList?.[0]?.league_id,
    //     week_id: leagueList?.[0]?.week[0]?.week_id,
    // }

    const { data, isLoading, error, isFetching } = useGameDetailsQuery<any>(leagueData, {
        refetchOnMountOrArgChange: true,
    })
    const { data: LeagueDetails, isLoading: loadingForLeagueDetail, error: leagueDetailError } = useLeagueDetailsQuery(leagueData?.league_id)

    // const { data, isLoading } = useWinnerTeamListQuery({
    //     current_week: NFLCurrentWeek
    // })

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

    // const renderItem: ListRenderItem<any> = ({ item, index }) => {
    //     return (
    //         <WinnerList
    //             {...item}
    //             index={index}
    //         />
    //     )
    // }


    const renderItem: ListRenderItem<any> = ({ item, index }) => {
        console.log(item)
        return (
            <GamePlayerList
                {...item}
                index={index}
                onPress={() => {
                    // if (route.params?.fromMyLeague) {
                    //     navigation.navigate('TeamDetail', {
                    //         team_id: item.id
                    //     })
                    // } else {
                    // console.log('route.params?.my_team_id', route.params?.my_team_id)
                    // if (route.params?.my_team_id) {
                    //     const WithoutMyTeam = data.filter((item: any) => {
                    //         return item.id != route.params?.my_team_id
                    //     })
                    //     if(item.is_game_created){
                    //         navigation.navigate('LiveMatchDetail', {
                    //             team_id: route.params?.my_team_id,
                    //             op_team_id: item.id == route.params?.my_team_id ? WithoutMyTeam[0]?.id : item.id
                    //         })
                    //     }else{
                    //         Alert.alert("Fantasy sniper",'This participant user have not created match for league yet.')
                    //     }

                    // } else {
                    //     Alert.alert('Fantasy sniper', 'You should Join the league to compare match with others.')
                    // }

                    // }
                }}
            />
        )
    }

    // console.log("useWinnerTeamListQuery", data)
    // let imageType = LeagueDetails?.team_logo?.split('.').pop() == 'svg';

    return <MainContainer
        style={{ backgroundColor: 'white' }}
        loading={isLoading || loadingForLeagueDetail}
        absoluteLoading={isFetching}
    >
        {
            leagueList?.length ?
                <Container
                    containerStyle={{
                        backgroundColor: 'white',
                        marginTop: 10,
                        marginHorizontal: 15,
                        borderRadius: 5
                    }}
                    mpContainer={{ pv: 10, ph: 10 }}
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
                    {/* <Label>No. of. week: 4 Week</Label> */}
                    {/* <Label
                        labelSize={15}
                        mpLabel={{ mt: 5 }}
                    >Week no: {LeagueDetails?.week[0]?.week_no} Week</Label> */}
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
                </Container> : null
        }
        {
            leagueList?.length ?
                <Container
                    containerStyle={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                    mpContainer={{ mh: 10, mt: 5, mb: 5 }}
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
                    <Label
                        labelSize={15}
                        style={{
                            position: 'absolute',
                            right: 5,
                            fontWeight: 'bold'
                        }}
                    >FanPts</Label>
                </Container> : null
        }
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => `Winners${index.toString()}`}
                ListEmptyComponent={() => {
                    return <Container
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
                }}
            />
        </View>
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


