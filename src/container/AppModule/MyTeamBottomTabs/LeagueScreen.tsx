import React from 'react';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { OrangeColor, PrimaryColor } from '../../../assets/colors';
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItem } from 'react-native';
import { navigationProps } from '../../../types/nav';
import Btn from '../../../components/Btn';
import { useGetTeamsByLeagueQuery } from '../../../features/league';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { TeamListResponse } from '../../../types/responseTypes';
interface props extends navigationProps {

}

const LeagueScreen: React.FC<props> = ({
    navigation
}) => {
    const { leagueDetails } = useSelector((state: RootState) => state.selectedLeague)

    const { data, isLoading, isFetching } = useGetTeamsByLeagueQuery(leagueDetails.league_id)

    React.useLayoutEffect(() => {
        return (
            navigation.setOptions({
                headerRight: () => {
                    return <Container
                        containerStyle={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                        mpContainer={{ mr: 15, mt: 5 }}
                    >
                        <Btn
                            title="Invite friends"
                            labelSize={12}
                            labelStyle={{
                                color: 'white'
                            }}
                            radius={8}
                            mpBtn={{ ph: 10, mr: 10 }}
                            btnStyle={{
                                backgroundColor: OrangeColor
                            }}
                            onPress={() => {
                                navigation.navigate('InviteFriend')
                            }}
                        />
                        <Ionicons
                            name="ios-settings"
                            size={22}
                            color='white'
                        />
                    </Container>
                }
            })
        )
    }, [])

    const renderItem: ListRenderItem<TeamListResponse> = ({ item, index }) => {
        const { team_name, fantasyPoint, accuracy,team_id } = item
        return (
            <Container
                containerStyle={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // justifyContent: "space-between",
                    // width:"88%"
                }}
                mpContainer={{ mh: 10, mt: 10 }}
                onPress={() => {
                    navigation.navigate('TeamDetail',{
                        team_id:team_id
                    })
                }}
            >
                <Label
                    labelSize={14}
                    style={{
                        // fontWeight: 'bold',
                        width: "32%"
                    }}
                    numberOfLines={1}
                >{team_name}</Label>
                <Container
                    containerStyle={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                    mpContainer={{ ml: 20 }}
                >
                    <Label
                        labelSize={14}
                        style={{
                            width:80
                        }}
                    >3-1-0</Label>
                    <Label
                        labelSize={14}
                        style={{
                            width:60
                        }}
                    >{accuracy}%</Label>
                    <Label
                        labelSize={14}
                        style={{
                            width:50
                        }}
                    >{fantasyPoint.toFixed(2)}</Label>
                </Container>
            </Container>
        )
    }

    return <MainContainer
        loading={isLoading}
    >
        <Container
            containerStyle={{ backgroundColor: 'white', borderRadius: 10, elevation: 2 }}
            mpContainer={{ mh: 20, mt: 10, pv: 10 }}
        >
            <Container
                containerStyle={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: "space-between"
                }}
                mpContainer={{ mh: 10, mt: 5 }}
                onPress={() => {
                    navigation.navigate('Standing')

                }}
            >
                <Label
                    labelSize={16}
                    style={{
                        fontWeight: 'bold'
                    }}
                >Standings</Label>
            </Container>
            <Container
                containerStyle={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // justifyContent: "space-between"
                }}
                mpContainer={{ mh: 10, mt: 15 }}
            >
                <Label
                    labelSize={16}
                    style={{
                        fontWeight: 'bold',
                        width: "38%"
                    }}
                >Team</Label>
                <Container
                    containerStyle={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <Label
                        labelSize={15}
                        style={{
                        }}
                    >W-L-T</Label>
                    <Label
                        labelSize={15}
                        style={{
                        }}
                        mpLabel={{ mh: 15 }}
                    >Accuracy</Label>
                    <Label
                        labelSize={15}
                        style={{
                        }}
                    >All pts</Label>
                </Container>
            </Container>
            <Container height={1} containerStyle={{ backgroundColor: 'lightgrey' }} mpContainer={{ mt: 10, mh: 10 }} />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => `league ${index.toString()}`}
            />
        </Container>
    </MainContainer>
}
export default LeagueScreen;