import React from "react";
import { ScrollView, FlatList, StatusBar, ListRenderItem, RefreshControl, View } from "react-native";
import Btn from "../../../components/Btn";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";
import Container from "../../../components/Container";
import { navigationProps } from "../../../types/nav";
import News from "./News";
import MyLeague from "./MyLeague";
import LiveMatch from "./LiveMatch";
import Img from "../../../components/Img";
import { AppImages } from "../../../assets/images/map";
import styles from "./styles";
import { PrimaryColor } from "../../../assets/colors";
import { medium } from "../../../assets/fonts/fonts";
import AllLeague from "./AllLeague";
import { useAllLeagueListQuery, useLeagueListQuery, useLiveMatchupRankingQuery } from "../../../features/league";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

interface props extends navigationProps {

}

const HomeScreen: React.FC<props> = ({
    navigation
}) => {
    // const leagueGameArray: Array<string> = ['Private game', 'Public game']
    const leagueGameArray: Array<string> = ['Public game']
    const { isFetching, refetch } = useLeagueListQuery(null)
    const { isFetching: fetchingForAllLeague, refetch: refetchForAllLeague } = useAllLeagueListQuery(null)
    const { NFLCurrentWeek } = useSelector((store: RootState) => store.leaguePlayer)
    const {data, isFetching: fetchingForLiveMatchupRanking, refetch: refetchForLivematch } = useLiveMatchupRankingQuery({
        current_week: NFLCurrentWeek,
        limit: 3
    })
    console.log('data',data)

    const renderLeague: ListRenderItem<string> = ({ item, index }) => {
        return <Container
            containerStyle={styles.container}
        >
            <Label
                labelSize={25}
                style={styles.leagueText}
                mpLabel={{ pl: 15, pt: 15 }}
            >Fantasy league</Label>
            <Label
                labelSize={16}
                mpLabel={{ pl: 15, pt: 5 }}
            >{item}</Label>
            <Container
                containerStyle={styles.btnContainer}
            >
                <Btn
                    title="Create"
                    onPress={() => {
                        navigation.navigate("CreateLeague")
                    }}
                    btnHeight={40}
                    btnStyle={[styles.playBtn]}
                    radius={4}
                    labelSize={14}
                    textColor="white"
                    labelStyle={{ fontFamily: medium }}
                />
                <Btn
                    title="Join"
                    onPress={() => {
                        // navigation.navigate("CreateOrJoin")
                        // if (index == 1) {
                        navigation.navigate('PublicLeague')
                        // } else {
                        //     navigation.navigate("JoinLeague")
                        // }
                    }}
                    btnHeight={40}
                    btnStyle={[styles.playBtn, { backgroundColor: 'white', borderWidth: 1.2, borderColor: PrimaryColor }]}
                    radius={4}
                    labelSize={14}
                    textColor={PrimaryColor}
                    mpBtn={{ ml: 10 }}
                    labelStyle={{ fontFamily: medium }}
                />
            </Container>
            <Container
                containerStyle={styles.middleView}
            >
                <Container
                    containerStyle={styles.separater}
                />
                <Container
                    containerStyle={styles.separater1}
                    mpContainer={{ ml: 10 }}
                />
            </Container>
            <Container
                containerStyle={styles.leagueBGContainer}
            >
                <Img
                    imgStyle={styles.leagueBGImage}
                    imgSrc={AppImages.league_bg_image}
                />
            </Container>
        </Container>
    }

    return (
        <View style={{flex:1,backgroundColor:'#f2f2f2'}} >
            <StatusBar backgroundColor="transparent" barStyle="light-content" />
            <ScrollView
                key={1}
                contentContainerStyle={{ paddingBottom: 40 }}
                refreshControl={
                    <RefreshControl
                        refreshing={isFetching || fetchingForAllLeague}
                        onRefresh={() => {
                            refetch()
                            refetchForAllLeague()
                            refetchForLivematch()
                        }}
                        title='Updating data'
                    />
                }
            >
                <News />
                <FlatList
                    data={leagueGameArray}
                    renderItem={renderLeague}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={() => <Container mpContainer={{ pl: 20 }} />}
                    ItemSeparatorComponent={() => <Container mpContainer={{ pl: 10 }} />}
                    contentContainerStyle={{ marginTop: 20, paddingRight: 20 }}
                    keyExtractor={(item, index) => `MyLeague ${index.toString()}`}
                />
                <MyLeague
                    // leagueList={LeagueList}
                    // loading={isLoading}
                />
                <AllLeague />
                <LiveMatch />
            </ScrollView>
        </View>
    )
}

export default HomeScreen;


