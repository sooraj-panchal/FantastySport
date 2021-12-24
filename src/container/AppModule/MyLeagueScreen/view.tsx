import React from 'react';
import { ListRenderItem, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../../components/Container';
import MainContainer from '../../../components/MainContainer';
import PublicGameList from '../../../components/PublicGameList';
import { useJoinPrivateLeagueMutation, useLeaguesAndGamesQuery } from '../../../features/league';
import { AppStack } from '../../../navigator/navActions';
import { RootState } from '../../../store';
import { addToMyPlayerWatcher, setMyTeamWatcher } from '../../../store/slices/myPlayerList';
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
    const [joinLeagueWatcher, { data: joinLeagueRes, isLoading: joinLeagueLoading }] = useJoinPrivateLeagueMutation<any>()

    const dispatch = useDispatch()

    const renderPublicGame: ListRenderItem<MyLeagueResponse> = ({ item, index }) => {
        return <PublicGameList
            {...item}
            createMatchHandler={() => {
                // console.log('item',item)
                dispatch(leagueDetailsWatcher({ ...item }))
                dispatch(addToMyPlayerWatcher([]))
                dispatch(setMyTeamWatcher([]))
                navigation.navigate('CreateMatch')
            }}
            goToTeamDetail={() => {
                dispatch(leagueDetailsWatcher({ ...item }))
                navigation.navigate('TeamDetail', {
                    team_id: item.team_id
                })
            }}
            joinLeagueHandler={() => {
                let formData = new FormData()
                formData.append('unique_code', '')
                formData.append('week_id', item.week[0]?.week_id)
                formData.append('type', 'public')
                formData.append('league_id', item.league_id)
                console.log("data", JSON.stringify(formData))
                joinLeagueWatcher(formData).unwrap().then(() => {
                    navigation.dispatch(AppStack)
                })
            }}
        />
    }

    console.log('publicLeagueList error', JSON.stringify(error))

    return (
        <MainContainer
            loading={publicLeagueLoading}
            absoluteModalLoading={joinLeagueLoading}
            successMessage={joinLeagueRes?.message}
        >
            <FlatList
                data={publicLeagueList}
                renderItem={renderPublicGame}
                keyExtractor={(item, index) => `${index.toString()}`}
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