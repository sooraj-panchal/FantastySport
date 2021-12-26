// import { useNavigation } from '@react-navigation/core';
// import React from 'react';
// import { View } from 'react-native-animatable';
// import PagerView from 'react-native-pager-view';
// import { useDispatch, useSelector } from 'react-redux';
// import { MyLeagueList } from '../../../../arrayList';
// import { DarkBlueColor, OrangeColor, redColor } from '../../../assets/colors';
// import { medium } from '../../../assets/fonts/fonts';
// import { AppImages } from '../../../assets/images/map';
// import Container from '../../../components/Container';
// import Img from '../../../components/Img';
// import Label from '../../../components/Label';
// import MainContainer from '../../../components/MainContainer';
// import { useAllLeagueListQuery, useLeagueListQuery } from '../../../features/league';
// import { RootState } from '../../../store';
// import { leagueDetailsWatcher } from '../../../store/slices/selectedLeague';
// import { homeNavProps, navigationProps } from '../../../types/nav';
// import { UserResponse } from '../../../types/responseTypes';
// import { screenWidth } from '../../../types/sizes';


// const AllLeague: React.FC = ({

// }) => {
//     const dispatch = useDispatch()
//     const [page, setPage] = React.useState<Number>(0)
//     const { data, isLoading, error } = useAllLeagueListQuery(null)
//     const user: UserResponse = useSelector((store: RootState) => store.auth.user)

//     console.log('error', JSON.stringify(error))

//     const navigation = useNavigation<homeNavProps>()

//     return (
//         <MainContainer loading={isLoading} >
//             <Container containerStyle={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 justifyContent: "space-between"
//             }}
//                 mpContainer={{ pt: 20, ph: 20 }}
//             >
//                 <Label
//                     labelSize={16}
//                     style={{
//                         fontFamily: medium
//                     }}
//                 >Join Leagues</Label>
//                 <Label
//                     labelSize={16}
//                     style={{
//                         color: "grey"
//                     }}
//                     onPress={() => {
//                         navigation.navigate('PublicLeague')
//                     }}
//                 >View all</Label>
//             </Container>
//             <PagerView
//                 initialPage={0}
//                 style={{
//                     height: 150,
//                     marginTop: 10,
//                 }}
//                 onPageSelected={(event) => {
//                     console.log(event.nativeEvent.position)
//                     setPage(event.nativeEvent.position)
//                 }}
//                 key={'PagerView'}
//             >
//                 {
//                     data?.map((item, index) => {
//                         return <View key={index}>
//                             <Container
//                                 containerStyle={{
//                                     width: screenWidth * 0.90,
//                                     height: 140,
//                                     backgroundColor: "white",
//                                     elevation: 2,
//                                     alignSelf: 'center',
//                                     borderRadius: 10
//                                 }}
//                                 mpContainer={{ pl: 15 }}
//                                 onPress={() => {
//                                     // console.log(item)
//                                     // let parsedWeek = JSON.parse(item.week)
//                                     // dispatch(leagueDetailsWatcher({ ...item }))
//                                     // navigation.navigate('MyTeamTab', {
//                                     //     screen: 'MyTeam'
//                                     // })
//                                     // navigation.navigate('CreateTeam', {
//                                     //     week_id: item.week[0]?.week_id,
//                                     //     type: 'public',
//                                     //     league_id: item.league_id
//                                     // })
//                                     navigation.navigate('LeagueDetail', {
//                                         league_id: item.league_id,
//                                         week_id: item.week?.[0]?.week_id,
//                                     })
//                                 }}
//                             >
//                                 <Label
//                                     labelSize={17}
//                                     style={{
//                                         letterSpacing: 0.5,
//                                         color: "black"
//                                     }}
//                                     mpLabel={{ mt: 10 }}
//                                 >{item.user_name}</Label>
//                                 <Container containerStyle={{
//                                     flexDirection: "row",
//                                     alignItems: 'center'
//                                 }} mpContainer={{ mt: 10 }} >
//                                     <Img
//                                         imgSrc={AppImages.green_logo}
//                                         imgStyle={{
//                                             height: 40, width: 40,
//                                             resizeMode: 'contain'
//                                         }}
//                                     />
//                                     <Label
//                                         labelSize={20}
//                                         style={{
//                                             letterSpacing: 0.5,
//                                             color: "black",
//                                             fontWeight: "900"
//                                         }}
//                                         mpLabel={{ ml: 10 }}
//                                     >{item.name}</Label>
//                                 </Container>
//                                 {/* <Container containerStyle={{
//                                     flexDirection: "row",
//                                     alignItems: 'center'
//                                 }} mpContainer={{ mt: 10 }} >
//                                     <Label
//                                         labelSize={18}
//                                         style={{
//                                             letterSpacing: 0.5,
//                                             color: "black",
//                                             fontWeight: "900"
//                                         }}
//                                     >Match time : </Label>
//                                     <Label
//                                         labelSize={15}
//                                         style={{
//                                             letterSpacing: 0.5,
//                                             color: "black",
//                                             fontWeight: "900"
//                                         }}
//                                     >{item.league_match[0]?.start_time}</Label>
//                                 </Container> */}
//                                 <Img
//                                     imgSrc={AppImages.private}
//                                     imgStyle={{
//                                         width: 45, height: 45,
//                                         position: 'absolute',
//                                         right: 10,
//                                         top: 10,
//                                         resizeMode: 'contain'
//                                     }}
//                                 />
//                             </Container>
//                         </View>
//                     })
//                 }
//             </PagerView>
//             <Container
//                 containerStyle={{
//                     flexDirection: "row",
//                     alignSelf: "center"
//                 }}
//                 mpContainer={{ mt: 5 }}
//             >
//                 {data?.map((item, index) => {
//                     return (
//                         <Container key={`paginDot ${index}`}
//                             containerStyle={{
//                                 backgroundColor: index == page ? DarkBlueColor : "#f2f2f2",
//                                 borderRadius: 40,
//                                 elevation: 0.5,
//                                 borderWidth: index == page ? 0 : 1,
//                                 borderColor: "grey"
//                             }}
//                             mpContainer={{ mh: 2 }}
//                             width={8} height={8}
//                         >
//                         </Container>
//                     )
//                 })}
//             </Container>
//         </MainContainer>
//     )
// }
// export default AllLeague;



import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ListRenderItem } from 'react-native';
import { View } from 'react-native-animatable';
import PagerView from 'react-native-pager-view';
import { useDispatch, useSelector } from 'react-redux';
import { MyLeagueList } from '../../../../arrayList';
import { DarkBlueColor, OrangeColor, redColor } from '../../../assets/colors';
import { medium } from '../../../assets/fonts/fonts';
import { AppImages } from '../../../assets/images/map';
import AllLeagueItem from '../../../components/AllLeagueItem';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { useAllLeagueListQuery, useLeagueListQuery } from '../../../features/league';
import { RootState } from '../../../store';
import { leagueDetailsWatcher } from '../../../store/slices/selectedLeague';
import { homeNavProps, navigationProps } from '../../../types/nav';
import { UserResponse } from '../../../types/responseTypes';
import { screenWidth } from '../../../types/sizes';


const AllLeague: React.FC = ({

}) => {
    const [page, setPage] = React.useState<Number>(0)
    const { data, isLoading, error } = useAllLeagueListQuery(null)

    console.log('useAllLeagueListQuery', JSON.stringify(data))

    const navigation = useNavigation<homeNavProps>()

    return (
        <MainContainer loading={isLoading} >
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
                            >Join Leagues</Label>
                            <Label
                                labelSize={16}
                                style={{
                                    color: "grey"
                                }}
                                onPress={() => {
                                    navigation.navigate('PublicLeague')
                                }}
                            >View all</Label>
                        </Container>
                        <PagerView
                            initialPage={0}
                            style={{
                                height: 150,
                                marginTop: 10,
                            }}
                            onPageSelected={(event) => {
                                console.log(event.nativeEvent.position)
                                setPage(event.nativeEvent.position)
                            }}
                            key={'PagerView'}
                        >
                            {
                                data?.map((item, index) => {
                                    return <View key={index}>
                                        <AllLeagueItem
                                            {...item}
                                        // createMatchHandler={() => {
                                        //     // console.log('item',item)
                                        //     dispatch(leagueDetailsWatcher({ ...item }))
                                        //     navigation.navigate('CreateMatch')
                                        // }}
                                        />
                                    </View>
                                })
                            }
                        </PagerView>
                        <Container
                            containerStyle={{
                                flexDirection: "row",
                                alignSelf: "center"
                            }}
                            mpContainer={{ mt: 5 }}
                        >
                            {data?.map((item, index) => {
                                return (
                                    <Container key={`paginDot ${index}`}
                                        containerStyle={{
                                            backgroundColor: index == page ? DarkBlueColor : "#f2f2f2",
                                            borderRadius: 40,
                                            elevation: 0.5,
                                            borderWidth: index == page ? 0 : 1,
                                            borderColor: "grey"
                                        }}
                                        mpContainer={{ mh: 2 }}
                                        width={8} height={8}
                                    >
                                    </Container>
                                )
                            })}
                        </Container>
                    </>
                    : null
            }

        </MainContainer>
    )
}
export default AllLeague;

