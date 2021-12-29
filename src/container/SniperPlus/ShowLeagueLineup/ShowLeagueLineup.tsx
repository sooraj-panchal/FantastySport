import React, { useEffect, useMemo } from 'react';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Label from '../../../components/Label';
import { greenColor, OrangeColor, PrimaryColor } from '../../../assets/colors';
import { ScrollView } from 'react-native-gesture-handler';
import { ListRenderItem, View, Alert } from 'react-native';
import MyPlayersList from '../../../components/MyPlayersList';
import Img from '../../../components/Img';
import { LeaguePlayerTypes, PlayerPositionTypes } from '../../../types/flatListTypes';
import { IWeek, myPlayers, positions, positionsLength } from '../../../utils/jsonArray'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../types/reduxTypes';
import { screenWidth } from '../../../types/sizes';
import { useCreateGameMutation, useCreateLeaguePlayerMutation, useCreateTeamMutation, useGetLeaguePlayerListQuery, useGetMyTeamsQuery, useJoinPrivateLeagueMutation } from '../../../features/league';
import { addToMyPlayerWatcher, setMyTeamWatcher } from '../../../store/slices/myPlayerList';
import { UserResponse } from '../../../types/responseTypes';
import { SvgUri } from 'react-native-svg';
import { AppStack } from '../../../navigator/navActions';
import { medium } from '../../../assets/fonts/fonts';
import CreatePlayer from '../../../components/CreatePlayer';
import { AppImages } from '../../../assets/images/map';
import moment from 'moment';
import Players from '../JoinSniperPlusLeague/Players';
import Lineup from './Lineup';

const ShowLeagueLineup: React.FC<navigationProps> = ({
    navigation
}) => {
    const { leagueDetails } = useSelector((state: RootState) => state.selectedLeague)

    const { data: getMyTeam, isLoading: getMyTeamLoding, isFetching: getMyTeamFetching, refetch } = useGetLeaguePlayerListQuery({
        league_id: leagueDetails.league_id
    })
    const [joinLeagueWatcher, { data: joinLeagueRes, isLoading: joinLeagueLoading }] = useJoinPrivateLeagueMutation<any>()

    const JoinLeagueHandler = () => {
        let formData = new FormData()
        formData.append('unique_code', '')
        formData.append('week_id', leagueDetails?.week[0]?.week_id)
        formData.append('type', 'public')
        formData.append('league_id', leagueDetails.league_id)
        console.log("data", JSON.stringify(formData))
        joinLeagueWatcher(formData).unwrap().then(() => {
            // navigation.dispatch(AppStack)
            navigation.navigate('tabs', {
                screen: 'MyLeague'
            })
        })
    }

    React.useLayoutEffect(() => {
        return (
            navigation.setOptions({
                headerTitle: `${leagueDetails.name}'s Lineup`,
                ...leagueDetails.you_join_league ? null : {
                    headerRight: () => {
                        if (getMyTeam?.players?.length) {
                            return (
                                <Btn
                                    title="Join league"
                                    labelSize={14}
                                    labelStyle={{
                                        color: 'white'
                                    }}
                                    radius={8}
                                    mpBtn={{ mt: 5 }}
                                    btnStyle={{
                                        backgroundColor: OrangeColor,
                                        width: 100,
                                        opacity: 1
                                    }}
                                    onPress={() => {
                                        JoinLeagueHandler()
                                    }}
                                />
                            )
                        }
                    }
                }
            })
        )
    }, [leagueDetails,getMyTeam])



    const renderItem = (item: PlayerPositionTypes) => {
        return <Lineup
            {...item}
        />
    }

    // console.log('getMyTeam',JSON.stringify(getMyTeam))

    return <MainContainer
        style={{ backgroundColor: 'white' }}
        loading={getMyTeamLoding}
        absoluteLoading={getMyTeamFetching}
        successMessage={joinLeagueRes?.message}
        absoluteModalLoading={joinLeagueLoading}
    >
        <ScrollView>
            <Container
                containerStyle={{
                    borderBottomWidth: 1,
                    borderTopWidth: 1,
                    borderColor: 'lightgrey',
                    flexDirection: "row",
                    alignItems: 'center'
                }}
                mpContainer={{ pv: 10, ph: 15 }}
            >
                <Label labelSize={14} style={{ width: screenWidth * 0.65 }} >Offense</Label>
                <Label labelSize={12} style={{ width: screenWidth * 0.40, textAlign: 'center' }}  >Proj.Pts</Label>
            </Container>
            {
                getMyTeam?.players.map((item, index) => {
                    return <View key={index.toString()}>
                        {renderItem(item)}
                    </View>
                })
            }
        </ScrollView>
    </MainContainer>
}
export default ShowLeagueLineup;
