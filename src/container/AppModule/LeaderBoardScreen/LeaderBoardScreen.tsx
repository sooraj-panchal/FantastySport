import React, { useEffect, useLayoutEffect, useRef } from 'react';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItem, View } from 'react-native';
import { navigationProps } from '../../../types/nav';
import WinnerList from '../../../components/WinnerList';
import { useGameDetailsQuery, useLeagueListQuery, useWinnerTeamListQuery } from '../../../features/league';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Modalize } from 'react-native-modalize';
import LeagueListModal from '../../../components/Modals/LeagueListModal';
import GamePlayerList from '../../../components/GamePlayerList';
import { leagueUpdateWatcher } from '../../../store/slices/selectedLeague';
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
        dispatch(leagueUpdateWatcher({
            league_id: leagueList?.[0]?.league_id,
            week_id: leagueList?.[0]?.week[0]?.week_id
        }))
    }, [])

    // console.log("leagueData", leagueData ? leagueData : { league_id: leagueList?.[0]?.league_id, week_id: leagueList?.[0]?.week[0]?.week_id })

    console.log('leagueList', leagueList)

    // let newData = {
    //     league_id: leagueList?.[0]?.league_id,
    //     week_id: leagueList?.[0]?.week[0]?.week_id,
    // }

    const { data, isLoading, error, isFetching } = useGameDetailsQuery<any>(leagueData, {
        refetchOnMountOrArgChange: true,
    })

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

    return <MainContainer
        style={{ backgroundColor: 'white' }}
        loading={isLoading}
        absoluteLoading={isFetching}
    >
        <Container
            containerStyle={{
                flexDirection: 'row',
                alignItems: 'center',
            }}
            mpContainer={{ mh: 10, mt: 15, mb: 5 }}
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
        </Container>
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => `Winners${index.toString()}`}
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


