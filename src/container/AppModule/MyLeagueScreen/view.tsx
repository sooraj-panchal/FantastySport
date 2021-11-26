import React from 'react';
import { ListRenderItem } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import PrivateGameList from '../../../components/PrivateGameList';
import PublicGameList from '../../../components/PublicGameList';
import { useGetPrivateLeagueQuery, useGetPublicLeagueQuery, useLeaguesAndGamesQuery } from '../../../features/league';
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
    const { data: publicLeagueList, isLoading: publicLeagueLoading, error } = useLeaguesAndGamesQuery({
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

    const renderPublicGame: ListRenderItem<any> = ({ item, index }) => {
        return <PublicGameList
            {...item}
            createMatchHandler={() => {
                // console.log('item',item)
                dispatch(leagueDetailsWatcher({ ...item }))
                navigation.navigate('CreateMatch')
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
            />
            {/* </ScrollView> */}
        </MainContainer>
    )
}
export default MyLeagueScreen