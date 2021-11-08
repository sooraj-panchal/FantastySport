import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useSelector } from 'react-redux';
import { greenColor } from '../../../assets/colors';
import { medium } from '../../../assets/fonts/fonts';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import LiveMatchupRankingItem from '../../../components/LiveMatchupRankingItem';
import MainContainer from '../../../components/MainContainer';
import { useLiveMatchupRankingQuery } from '../../../features/league';
import { RootState } from '../../../store';
import { navigationProps } from '../../../types/nav';
import { screenWidth } from '../../../types/sizes';

const LiveMatchupRankings: React.FC<navigationProps> = ({

}) => {
    const {NFLCurrentWeek} = useSelector((store:RootState)=>store.leaguePlayer)
    const { data, isLoading, error } = useLiveMatchupRankingQuery({
        current_week:NFLCurrentWeek
    })

    console.log('NFLCurrentWeek===>', JSON.stringify(NFLCurrentWeek))

    const renderItem: ListRenderItem<any> = ({ item, index }) => {
        return <LiveMatchupRankingItem
            {...item}
        />
    }

    return (
        <MainContainer
            loading={isLoading}
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
                    mpContainer={{ ph: 15 }}
                    height={45}
                >
                    <Label
                        labelSize={14}
                        style={{ color: 'white', fontFamily: medium, flex: 0.4 }}
                    >Team</Label>
                    <Label
                        labelSize={14}
                        style={{ color: 'white', fontFamily: medium, flex: 0.5 }}
                    >League</Label>
                    <Label
                        labelSize={14}
                        style={{ color: 'white', fontFamily: medium, flex: 0.2 }}
                    >Pts</Label>
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
                />
            </Container>
        </MainContainer>
    )
}
export default LiveMatchupRankings