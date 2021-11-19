import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { greenColor } from '../../../assets/colors';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import GamePlayerList from '../../../components/GamePlayerList';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { useGameDetailsQuery } from '../../../features/league';
import { LeagueDetailNav, navigationProps } from '../../../types/nav';


interface props extends LeagueDetailNav {

}

const LeagueDetailScreen: React.FC<props> = ({
    navigation,
    route
}) => {

    let newData = {
        league_id: route.params?.league_id,
        week_id: route.params?.week_id,
    }

    const { data, isLoading, error } = useGameDetailsQuery<any>(newData, {
        refetchOnMountOrArgChange: true
    })

    const renderItem: ListRenderItem<any> = ({ item, index }) => {
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
                    //     const WithoutMyTeam = data.filter((item: any) => {
                    //         return item.id != route.params?.my_team_id
                    //     })
                    //     navigation.navigate('LiveMatchDetail', {
                    //         team_id: route.params?.my_team_id,
                    //         op_team_id: item.id == route.params?.my_team_id ? WithoutMyTeam[0]?.id : item.id
                    //     })
                    // }
                }}
            />
        )
    }

    const renderTeamList = () => {
        return (
            <MainContainer
                style={{ backgroundColor: 'white' }}
            // loading={isLoading}
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
        )
    }

    return (
        <MainContainer>
            <Container
                containerStyle={{
                    backgroundColor: 'white',
                    marginTop: 10,
                    marginHorizontal: 15,
                    elevation: 1,
                    borderRadius: 5
                }}
                mpContainer={{ pv: 10, ph: 10 }}
            >
                <Label style={{
                    fontSize: 20,
                    color: 'black'
                }} >Redbullys league</Label>
                {/* <Label
                    labelSize={12}
                    mpLabel={{ mt: 5 }}
                >Metal Milita</Label> */}
                <Label
                    mpLabel={{ mt: 5 }}
                    labelSize={14}
                >Match time: 18/6, 2:00 PM</Label>
                <Label>Total Joined Team 4/4</Label>
            </Container>
            <Container
                mpContainer={{ mt: 10 }}
                containerStyle={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: "center"
                }}
            >
                <Label
                    labelSize={15}
                    style={{
                        color: 'black',
                    }}
                >Do you want to join League ? </Label>
                <Btn
                    title='Join'
                    onPress={() => {
                        navigation.navigate('CreateTeam', {
                            week_id: route.params?.week_id,
                            type: 'public',
                            league_id: route.params?.league_id
                        })
                    }}
                    btnStyle={{
                        backgroundColor: greenColor,
                        width: 50, height: 30,
                        borderRadius: 20,
                        elevation: 1
                    }}
                    textColor="white"
                    mpBtn={{ ml: 10 }}
                />
            </Container>
            <Label
                labelSize={20}
                mpLabel={{ mt: 10, ml: 15, mb: 10 }}
            >Teams: </Label>
            {renderTeamList()}
        </MainContainer>
    )
}
export default LeagueDetailScreen;