import React from 'react';
import { ListRenderItem, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../../components/Container';
import MainContainer from '../../../components/MainContainer';
import PublicGameList from '../../../components/PublicGameList';
import { useLeaguesAndGamesQuery } from '../../../features/league';
import { RootState } from '../../../store';
import { leagueDetailsWatcher } from '../../../store/slices/selectedLeague';
import { navigationProps } from '../../../types/nav';
import { MyLeagueResponse } from '../../../types/responseTypes';

interface props extends navigationProps { }

const MyLeagueScreen: React.FC<props> = ({
    navigation
}) => {
    const { NFLCurrentWeek } = useSelector((store: RootState) => store.leaguePlayer)

    // const { data: privateLeagueList, isLoading: privateLeagueLoading, isFetching, error } = useGetPrivateLeagueQuery({
    //     current_week: NFLCurrentWeek
    // }, { refetchOnMountOrArgChange: true, pollingInterval: 10000 })

    // const { data: publicLeagueList, isLoading: publicLeagueLoading } = useGetPublicLeagueQuery({
    //     current_week: NFLCurrentWeek
    // }, { refetchOnMountOrArgChange: true, pollingInterval: 10000 })
    const { data: publicLeagueList, isLoading: publicLeagueLoading, isFetching, error, refetch } = useLeaguesAndGamesQuery({
        current_week: NFLCurrentWeek
    }, { refetchOnMountOrArgChange: true })

    const dispatch = useDispatch()

    // const renderPrivateGame: ListRenderItem<MyLeagueResponse> = ({ item, index }) => {
    //     return <PrivateGameList
    //         {...item}
    //         createMatchHandler={() => {
    //             dispatch(leagueDetailsWatcher({ ...item }))
    //             navigation.navigate('CreateMatch')
    //         }}
    //     />
    // }

    const renderPublicGame: ListRenderItem<MyLeagueResponse> = ({ item, index }) => {
        return <PublicGameList
            {...item}
            createMatchHandler={() => {
                // console.log('item',item)
                dispatch(leagueDetailsWatcher({ ...item }))
                navigation.navigate('CreateMatch')
            }}
            goToTeamDetail={() => {
                dispatch(leagueDetailsWatcher({ ...item }))
                navigation.navigate('TeamDetail', {
                    team_id: item.team_id
                })
            }}
        />
    }

    console.log('publicLeagueList error', JSON.stringify(error))

    return (
        <MainContainer
            loading={publicLeagueLoading}
        // absoluteLoading={isFetching}
        >
            {/* <ScrollView> */}
            {/* <Label
                    labelSize={18}
                    mpLabel={{ mt: 15, ml: 20 }}
                >Private game</Label>
                <FlatList
                    data={privateLeagueList}
                    renderItem={renderPrivateGame}
                    keyExtractor={(item, index) => `Private game ${index.toString()}`}
                    ListHeaderComponent={() => <Container mpContainer={{ mt: 10 }} />}
                    ListFooterComponent={() => <Container mpContainer={{ mb: 10 }} />}
                    ItemSeparatorComponent={() => <Container mpContainer={{ mt: 10 }} />}
                /> */}
            {/* <Label
                    labelSize={18}
                    mpLabel={{ mt: 5, ml: 20 }}
                >Public game</Label> */}
            <FlatList
                data={publicLeagueList}
                renderItem={renderPublicGame}
                keyExtractor={(item, index) => `Public game ${index.toString()}`}
                ListHeaderComponent={() => <Container mpContainer={{ mt: 10 }} />}
                ListFooterComponent={() => <Container mpContainer={{ mb: 10 }} />}
                ItemSeparatorComponent={() => <Container mpContainer={{ mt: 10 }} />}
                refreshing={isFetching}
                onRefresh={() => {
                    refetch()
                }}
            />
            {/* </ScrollView> */}
        </MainContainer>
    )
}
export default MyLeagueScreen