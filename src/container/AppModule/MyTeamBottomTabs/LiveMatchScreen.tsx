// // import React from 'react';
// // import { ListRenderItem } from 'react-native';
// // import { FlatList } from 'react-native-gesture-handler';
// // import Container from '../../../components/Container';
// // import LiveMatchList from '../../../components/LiveMatchList';
// // import MainContainer from '../../../components/MainContainer';
// // import { navigationProps } from '../../../types/nav';

// // interface props extends navigationProps { };

// // const LiveMatchScreen: React.FC<props> = ({

// // }) => {
// //     const renderItem: ListRenderItem<{}> = ({ item, index }) => {
// //         return <LiveMatchList />
// //     }
// //     return (
// //         <MainContainer>
// //             <FlatList
// //                 data={[1, 2, 3, 4, 5, 6, 7]}
// //                 renderItem={renderItem}
// //                 keyExtractor={(_, index) => `LiveMatch ${index.toString()}`}
// //                 ListHeaderComponent={() => <Container mpContainer={{ mt: 10 }} />}
// //                 ItemSeparatorComponent={() => <Container mpContainer={{ mt: 10 }} />}
// //                 ListFooterComponent={() => <Container mpContainer={{ mb: 10 }} />}
// //             />
// //         </MainContainer>
// //     )
// // }

// // export default LiveMatchScreen;

// import React from 'react';
// import { ListRenderItem } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
// import { greenColor } from '../../../assets/colors';
// import { medium, semiBold } from '../../../assets/fonts/fonts';
// import Container from '../../../components/Container';
// import Label from '../../../components/Label';
// import LiveMatchList from '../../../components/LiveMatchList';
// import MainContainer from '../../../components/MainContainer';
// import { navigationProps } from '../../../types/nav';
// import { screenWidth } from '../../../types/sizes';

// interface props extends navigationProps { };

// const LiveMatchScreen: React.FC<props> = ({
//     navigation, route
// }) => {

//     const renderItem: ListRenderItem<null> = ({ item, index }) => {
//         return (
//             <Container
//                 containerStyle={{
//                     flexDirection: 'row',
//                     alignItems: 'center'
//                 }}
//                 mpContainer={{ mh: 20 }}
//                 height={40}
//                 onPress={() => navigation.navigate('LiveMatchList')}
//             >
//                 <Label
//                     labelSize={14}
//                     style={{ color: 'black', fontFamily: medium, width: screenWidth * 0.25 }}
//                     numberOfLines={1}
//                 >John's official team</Label>
//                 <Label
//                     labelSize={14}
//                     style={{ color: 'black', fontFamily: medium, width: screenWidth * 0.15 }}
//                     numberOfLines={1}
//                     mpLabel={{ mh: 15 }}
//                 >102.8</Label>
//                 <Label
//                     labelSize={14}
//                     style={{ color: 'black', fontFamily: medium, width: screenWidth * 0.20 }}
//                     mpLabel={{ ml: 5 }}
//                 >(98%)</Label>
//                 <Label
//                     labelSize={14}
//                     style={{ color: 'black', fontFamily: medium, textAlign: 'right', width: screenWidth * 0.18 }}
//                 >99.2 pts</Label>
//             </Container>
//         )
//     }
//     return (
//         <MainContainer style={{ backgroundColor: 'white' }} >
//             <Label labelSize={18} style={{ fontFamily: semiBold }} mpLabel={{ mt: 15, ml: 20 }} >Live Match</Label>
//             <Container
//                 containerStyle={{
//                     // flex: 1,
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                     borderBottomWidth: 1,
//                     borderColor: 'lightgrey'
//                 }}
//                 mpContainer={{ ph: 20, mt: 5 }}
//                 height={45}
//             >
//                 <Label
//                     labelSize={14}
//                     style={{ color: 'black', fontFamily: medium, width: screenWidth * 0.30 }}
//                 >Team</Label>
//                 <Label
//                     labelSize={14}
//                     style={{ color: 'black', fontFamily: medium, width: screenWidth * 0.20 }}
//                 >Pred.</Label>
//                 <Label
//                     labelSize={14}
//                     style={{ color: 'black', fontFamily: medium, width: screenWidth * 0.20 }}
//                 >Actual</Label>
//                 <Label
//                     labelSize={14}
//                     style={{ color: 'black', fontFamily: medium, width: screenWidth * 0.25 }}
//                 >SNIPER Pts</Label>
//             </Container>
//             <FlatList
//                 data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
//                 renderItem={renderItem}
//                 showsVerticalScrollIndicator={false}
//                 scrollEnabled={false}
//                 keyExtractor={(_, index) => `livematchRanking${index.toString()}`}
//             />
//         </MainContainer>
//     )
// }

// export default LiveMatchScreen;

import React, { useLayoutEffect, useRef } from 'react';
import { ListRenderItem } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { greenColor, OrangeColor } from '../../../assets/colors';
import Container from '../../../components/Container';
import LiveMatchList from '../../../components/LiveMatchList';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import { Modalize } from 'react-native-modalize';
import ChangeTeamModal from '../../../components/Modals/ChangeTeamModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useGetLiveMatchesQuery } from '../../../features/league';

interface props extends navigationProps { };

const LiveMatchScreen: React.FC<props> = ({
    navigation
}) => {
    const modalizeRef = useRef<Modalize>(null);
    const { leagueDetails } = useSelector((state: RootState) => state.selectedLeague)
    const { LiveMatchList: liveMatchData } = useSelector((state: RootState) => state.myPlayer)

    const { data, isLoading, error, isFetching } = useGetLiveMatchesQuery({
        league_id: leagueDetails.league_id,
        week: 1,
    }, {
        // pollingInterval: 3000
    })

    console.log("LiveMatchList", liveMatchData)

    const renderItem: ListRenderItem<any> = ({ item, index }) => {
        let color = index % 2 ? OrangeColor : greenColor
        return <LiveMatchList
            color={color}
            onChangeTeam={() => {
                modalizeRef.current?.open()
            }}
            {...item}
            team_logo={`https://chessmafia.com/php/fantasy/public/uploads/${item.team_logo}`}
        />
    }

    return (
        <MainContainer
            loading={isLoading}
        // absoluteLoading={isFetching}
        >
            <FlatList
                data={liveMatchData}
                renderItem={renderItem}
                keyExtractor={(_, index) => `LiveMatch ${index.toString()}`}
                ListHeaderComponent={() => <Container mpContainer={{ mt: 5 }} />}
                ItemSeparatorComponent={() => <Container mpContainer={{ mt: 5 }} />}
                ListFooterComponent={() => <Container mpContainer={{ mb: 10 }} />}
            />
            <ChangeTeamModal
                modalizeRef={modalizeRef}

                closeModal={() => {
                    modalizeRef.current?.close();
                }}
            />
        </MainContainer>
    )
}

export default LiveMatchScreen;
