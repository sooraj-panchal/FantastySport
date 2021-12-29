import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { greenColor } from '../../../assets/colors';
import { medium } from '../../../assets/fonts/fonts';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import LiveMatchupRankingItem from '../../../components/LiveMatchupRankingItem';
import MainContainer from '../../../components/MainContainer';
import { useLiveMatchupRankingQuery } from '../../../features/league';
import { RootState } from '../../../store';
import { leagueDetailsWatcher } from '../../../store/slices/selectedLeague';
import { navigationProps } from '../../../types/nav';
import { screenWidth } from '../../../types/sizes';

const LiveMatchupRankings: React.FC<navigationProps> = ({
    navigation
}) => {
    const { NFLCurrentWeek } = useSelector((store: RootState) => store.leaguePlayer)
    const { data, isLoading, isFetching } = useLiveMatchupRankingQuery({
        current_week: NFLCurrentWeek,
        limit: 10
    })
    const dispatch = useDispatch()

    console.log('NFLCurrentWeek===>', JSON.stringify(NFLCurrentWeek))

    const renderItem: ListRenderItem<any> = ({ item, index }) => {
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
        // absoluteLoading={isFetching}
        >
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
                    mpContainer={{ ph: 10 }}
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
        </MainContainer>
    )
}
export default LiveMatchupRankings