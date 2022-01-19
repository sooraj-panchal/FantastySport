import React, { useLayoutEffect } from 'react';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { FlatList } from 'react-native-gesture-handler';
import { Alert, ListRenderItem } from 'react-native';
import { GameDetailNav } from '../../../types/nav';
import GamePlayerList from '../../../components/GamePlayerList';
import { useGameDetailsQuery } from '../../../features/league';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import SniperRankingPlayer from '../../../components/SniperRankingPlayer';

const GameDetailScreen: React.FC<GameDetailNav> = ({
    route,
    navigation
}) => {
    const { leagueDetails: { name, league_id, week, team_id, team_name } } = useSelector((state: RootState) => state.selectedLeague)

    let newData = {
        league_id: league_id,
        week_id: week[0].week_id,
    }
    const { data, isLoading, error } = useGameDetailsQuery<any>(newData, {
        refetchOnMountOrArgChange: true
    })

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: name
        })
    }, [])

    console.log('error', JSON.stringify(error))

    const renderItem: ListRenderItem<any> = ({ item, index }) => {
        // console.log(item)
        return (
            <SniperRankingPlayer
                {...item}
                index={index}
                onPress={() => {
                    if (item.is_game_created) {
                        navigation.navigate('TeamDetail', {
                            team_id: item.team_id,
                        })
                    } else {
                        Alert.alert("Fantasy sniper", 'This participant user have not created match for league yet.')
                    }
                }}
            />
        )
    }

    return <MainContainer
        style={{ backgroundColor: 'white' }}
        loading={isLoading}
    >
        <Container
            containerStyle={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: "space-between"
            }}
            mpContainer={{ mt: 15, mb: 5 }}
        >
            <Label
                labelSize={16}
                mpLabel={{ ml: 25 }}
                numberOfLines={1}
                style={{
                    fontWeight: 'bold'
                }}
            >Rank</Label>
            <Label
                labelSize={15}
                mpLabel={{ ml: 25 }}
                style={{
                    fontWeight: 'bold'
                }}
            >Team</Label>
            <Label
                labelSize={15}
                style={{
                    position: 'absolute',
                    right: 20,
                    fontWeight: 'bold'
                }}
            >SNiPER PTS</Label>
        </Container>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => `Winners${index.toString()}`}
        />
    </MainContainer>
}
export default GameDetailScreen;