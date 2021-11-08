import React from 'react';
import { ListRenderItem } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../../components/Container';
import MainContainer from '../../../components/MainContainer';
import MyGameList from '../../../components/MyGameList';
import PublicGameList from '../../../components/PublicGameList';
import { useMyGameListQuery } from '../../../features/league';
import { RootState } from '../../../store';
import { leagueDetailsWatcher } from '../../../store/slices/selectedLeague';
import { navigationProps } from '../../../types/nav';
import { MyLeagueResponse } from '../../../types/responseTypes';

interface props extends navigationProps { }

const MyGamesScreen: React.FC<props> = ({
    navigation
}) => {
    const { NFLCurrentWeek } = useSelector((store: RootState) => store.leaguePlayer)

    const { data, isLoading, isFetching, error } = useMyGameListQuery({
        current_week: NFLCurrentWeek
    }, {
        refetchOnMountOrArgChange: true
    })

    const dispatch = useDispatch()

    const renderMyGameItem: ListRenderItem<MyLeagueResponse> = ({ item, index }) => {
        return <MyGameList
            {...item}
            createMatchHandler={() => {
                // console.log('item', item)
                dispatch(leagueDetailsWatcher({ ...item }))
                navigation.navigate('CreateMatch')
            }}
        />
    }

    // console.log('error', data)

    return (
        <MainContainer
            loading={isLoading}
            absoluteLoading={isFetching}
        >
            <FlatList
                data={data}
                renderItem={renderMyGameItem}
                keyExtractor={(item, index) => `GameList ${index.toString()}`}
                ListHeaderComponent={() => <Container mpContainer={{ mt: 10 }} />}
                ListFooterComponent={() => <Container mpContainer={{ mb: 10 }} />}
                ItemSeparatorComponent={() => <Container mpContainer={{ mt: 10 }} />}
            />
        </MainContainer>
    )
}
export default MyGamesScreen