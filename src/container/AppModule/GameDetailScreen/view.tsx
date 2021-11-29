import React, { useLayoutEffect } from 'react';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { FlatList } from 'react-native-gesture-handler';
import { Alert, ListRenderItem } from 'react-native';
import { GameDetailNav } from '../../../types/nav';
import GamePlayerList from '../../../components/GamePlayerList';
import { useGameDetailsQuery } from '../../../features/league';

const GameDetailScreen: React.FC<GameDetailNav> = ({
    route,
    navigation
}) => {
    let newData = {
        league_id: route.params?.league_id,
        week_id: route.params?.week_id,
    }
    const { data, isLoading, error } = useGameDetailsQuery<any>(newData, {
        refetchOnMountOrArgChange: true
    })

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: route.params?.league_name
        })
    })

    console.log('data', JSON.stringify(data))

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
                    console.log('route.params?.my_team_id', route.params?.my_team_id)
                    if (route.params?.my_team_id) {
                        const WithoutMyTeam = data.filter((item: any) => {
                            return item.id != route.params?.my_team_id
                        })
                        navigation.navigate('LiveMatchDetail', {
                            team_id: route.params?.my_team_id,
                            op_team_id: item.id == route.params?.my_team_id ? WithoutMyTeam[0]?.id : item.id
                        })
                    } else {
                        Alert.alert('Fantasy sniper', 'You should Join the league to compare match with others.')
                    }

                    // }
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
                mpLabel={{ ml: 35 }}
                style={{
                    fontWeight: 'bold'
                }}
            >Team</Label>
            <Label
                labelSize={15}
                style={{
                    position: 'absolute',
                    right: 15,
                    fontWeight: 'bold'
                }}
            >SNIPER pts</Label>
        </Container>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => `Winners${index.toString()}`}
        />
    </MainContainer>
}
export default GameDetailScreen;