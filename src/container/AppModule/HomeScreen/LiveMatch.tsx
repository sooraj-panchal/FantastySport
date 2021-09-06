import React, { useState } from 'react';
import { ListRenderItem } from 'react-native';
import { View } from 'react-native-animatable';
import { FlatList } from 'react-native-gesture-handler';
import PagerView from 'react-native-pager-view';
import { MyLeagueList } from '../../../../arrayList';
import { DarkBlueColor, greenColor, OrangeColor } from '../../../assets/colors';
import { medium, regular } from '../../../assets/fonts/fonts';
import { AppImages } from '../../../assets/images/map';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { screenWidth } from '../../../types/sizes';


const LiveMatch: React.FC = ({

}) => {
    const [page, setPage] = React.useState<Number>(0)

    const renderItem: ListRenderItem<null> = ({ item, index }) => {
        return (
            <Container
                containerStyle={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
                mpContainer={{ mh: 10 }}
                height={35}
            >
                <Label
                    labelSize={14}
                    style={{ color: 'black', fontFamily: medium, flex: 0.35 }}
                    numberOfLines={1}
                >John's official team</Label>
                <Label
                    labelSize={14}
                    style={{ color: 'black', fontFamily: medium, flex: 0.35 }}
                    numberOfLines={1}
                    mpLabel={{ mh: 20 }}
                >BBC</Label>
                <Label
                    labelSize={14}
                    style={{ color: 'black', fontFamily: medium, flex: 0.2, textAlign: "center" }}
                >75 pts</Label>
                <Label
                    labelSize={14}
                    style={{ color: 'black', fontFamily: medium, flex: 0.3, textAlign: 'center' }}
                >1st</Label>
            </Container>
        )
    }

    return (
        <Container>
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
                    data={[1, 2, 3, 4]}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                    keyExtractor={(_, index) => `livematchRanking${index.toString()}`}
                />
            </Container>
        </Container>
    )
}

export default LiveMatch;
