import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ListRenderItem } from 'react-native';
import { View } from 'react-native-animatable';
import { FlatList } from 'react-native-gesture-handler';
import PagerView from 'react-native-pager-view';
import { useDispatch, useSelector } from 'react-redux';
import { MyLeagueList } from '../../../../arrayList';
import { DarkBlueColor, greenColor, OrangeColor } from '../../../assets/colors';
import { medium, regular } from '../../../assets/fonts/fonts';
import { AppImages } from '../../../assets/images/map';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import LiveMatchupRankingItem from '../../../components/LiveMatchupRankingItem';
import MainContainer from '../../../components/MainContainer';
import { useLiveMatchupRankingQuery } from '../../../features/league';
import { RootState } from '../../../store';
import { leagueDetailsWatcher } from '../../../store/slices/selectedLeague';
import { homeNavProps, navigationProps } from '../../../types/nav';
import { LiveMatchUpResponse, MyLeagueResponse } from '../../../types/responseTypes';
import { screenWidth } from '../../../types/sizes';


const LiveMatch: React.FC = ({

}) => {
    const { NFLCurrentWeek } = useSelector((store: RootState) => store.leaguePlayer)
    const { data, isLoading, error } = useLiveMatchupRankingQuery({
        current_week: NFLCurrentWeek,
        limit: 3
    })
    const dispatch = useDispatch()
    console.log('LiveMatchupRanking===>', JSON.stringify(data))

    const navigation = useNavigation<homeNavProps>()

    const renderItem: ListRenderItem<LiveMatchUpResponse> = ({ item, index }) => {
        return <LiveMatchupRankingItem
            {...item}
            onPressTeam={() => {
                let week = []
                week.push({ week_id: item.week_id, week_no: item.week_no })
                const data = {
                    ...item,
                    week: week
                }
                // console.log(data)
                dispatch(leagueDetailsWatcher({ ...data }))
                navigation.navigate('TeamDetail', {
                    team_id: item.id,
                    fromOtherUser: true
                })
            }}
        />
    }

    return (
        <MainContainer
            loading={isLoading}
        >
            {
                data?.length ?
                    <>
                        <Container containerStyle={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                            mpContainer={{ pt: 20, ph: 20 }}
                        >
                            <Label
                                labelSize={16}
                                style={{
                                    fontFamily: medium
                                }}
                            >Live Matchup Rankings</Label>
                            <Label
                                labelSize={16}
                                style={{
                                    color: "grey"
                                }}
                                onPress={() => {
                                    navigation.navigate('LiveMatchupRankings')
                                }}
                            >View all</Label>
                        </Container>
                        <Container
                            containerStyle={{
                                width: screenWidth * 0.90,
                                backgroundColor: "white",
                                elevation: 2,
                                alignSelf: 'center',
                                borderRadius: 10,
                                overflow: "hidden"
                            }}
                            mpContainer={{ mt: 10, pb: 10 }}
                        >
                            <Container
                                containerStyle={{
                                    // flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    backgroundColor: greenColor,
                                    borderRadius: 10,
                                    elevation: 5
                                }}
                                mpContainer={{ ph: 15 }}
                                height={45}
                            >
                                <Container containerStyle={{
                                    flex: 0.70
                                }} >
                                    <Label
                                        labelSize={10}
                                        style={{ color: 'white', fontFamily: medium }}
                                    >League name</Label>
                                    <Label
                                        labelSize={14}
                                        style={{ color: 'white', fontFamily: medium }}
                                    >Team name</Label>
                                </Container>
                                <Label
                                    labelSize={12}
                                    style={{ color: 'white', fontFamily: medium, flex: 0.3 }}
                                >FanPts</Label>
                                <Label
                                    labelSize={14}
                                    style={{ color: 'white', fontFamily: medium, flex: 0.2 }}
                                >Rank</Label>
                            </Container>
                            <FlatList
                                data={data}
                                renderItem={renderItem}
                                showsVerticalScrollIndicator={false}
                                scrollEnabled={false}
                                keyExtractor={(_, index) => `livematchRanking${index.toString()}`}
                                ItemSeparatorComponent={() => {
                                    return <Container height={1} containerStyle={{ backgroundColor: 'lightgrey' }} mpContainer={{ mh: 10 }} />
                                }}
                            />
                        </Container>
                    </>
                    : null
            }
        </MainContainer>
    )
}

export default LiveMatch;
