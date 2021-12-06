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
    const { data: publicLeagueList, isLoading: publicLeagueLoading, isFetching, error, refetch } = useLeaguesAndGamesQuery({
        current_week: NFLCurrentWeek
    }, { refetchOnMountOrArgChange: true })

    const dispatch = useDispatch()

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

    console.log('publicLeagueList', JSON.stringify(publicLeagueList))

    return (
        <MainContainer
            loading={publicLeagueLoading}
        >
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
        </MainContainer>
    )
}
export default MyLeagueScreen