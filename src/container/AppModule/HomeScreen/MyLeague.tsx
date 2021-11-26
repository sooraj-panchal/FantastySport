// import { useNavigation } from '@react-navigation/core';
// import React from 'react';
// import { View } from 'react-native-animatable';
// import PagerView from 'react-native-pager-view';
// import { useDispatch, useSelector } from 'react-redux';
// import { DarkBlueColor } from '../../../assets/colors';
// import { medium } from '../../../assets/fonts/fonts';
// import { AppImages } from '../../../assets/images/map';
// import Container from '../../../components/Container';
// import Img from '../../../components/Img';
// import Label from '../../../components/Label';
// import MainContainer from '../../../components/MainContainer';
// import { useLeagueListQuery } from '../../../features/league';
// import useGetMatchStatus from '../../../hooks/matchStatus';
// import { RootState } from '../../../store';
// import { leagueDetailsWatcher } from '../../../store/slices/selectedLeague';
// import { homeNavProps } from '../../../types/nav';
// import { UserResponse } from '../../../types/responseTypes';
// import { screenWidth } from '../../../types/sizes';


// const MyLeague: React.FC = ({

// }) => {
//     const dispatch = useDispatch()
//     const [page, setPage] = React.useState<Number>(0)
//     const { data, isLoading, isFetching } = useLeagueListQuery(null)
//     const user: UserResponse = useSelector((store: RootState) => store.auth.user)
//     console.log('data', JSON.stringify(data))
//     const navigation = useNavigation<homeNavProps>()

//     return (
//         <MainContainer loading={isLoading || isFetching}  >
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
//                 >My Leagues</Label>
//                 <Label
//                     labelSize={16}
//                     style={{
//                         color: "grey"
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
//                         const { dateText, matchDate, weekText } = useGetMatchStatus(item.week)

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
//                                 mpContainer={{ ph: 10 }}
//                                 onPress={() => {
//                                     // console.log(item)
//                                     // let parsedWeek = JSON.parse(item.week)
//                                     dispatch(leagueDetailsWatcher({ ...item }))
//                                     navigation.navigate('MyTeamTab', {
//                                         screen: 'MyTeam'
//                                     })
//                                 }}
//                             >
//                                 <Container containerStyle={{
//                                     flexDirection: "row",
//                                 }}
//                                     mpContainer={{ mt: 10 }}
//                                 >
//                                     <Img
//                                         imgSrc={AppImages.league_icon}
//                                         imgStyle={{
//                                             height: 40, width: 40,
//                                             resizeMode: 'contain'
//                                         }}
//                                     />
//                                     <Container
//                                         containerStyle={{

//                                         }}
//                                         mpContainer={{ ml: 10 }}
//                                     >
//                                         <Label
//                                             labelSize={14}
//                                             style={{
//                                                 color: "black"
//                                             }}
//                                         // mpLabel={{ mt: 10 }}
//                                         >{`${user.first_name} ${user.last_name}`}</Label>
//                                         <Label
//                                             labelSize={20}
//                                             style={{
//                                                 color: "black"
//                                             }}
//                                             mpLabel={{ mt: -5 }}
//                                         >{item.name}</Label>
//                                     </Container>
//                                 </Container>
//                                 <Label
//                                     labelSize={14}
//                                     style={{ color: 'black' }}
//                                     mpLabel={{ pl: 10, mt: 5 }}
//                                 >{`${dateText}: ${matchDate}`}</Label>
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
//                                     imgSrc={AppImages.team}
//                                     imgStyle={{
//                                         width: 35, height: 35,
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
// export default MyLeague;


import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View } from 'react-native-animatable';
import PagerView from 'react-native-pager-view';
import { useDispatch, useSelector } from 'react-redux';
import { DarkBlueColor } from '../../../assets/colors';
import { medium } from '../../../assets/fonts/fonts';
import { AppImages } from '../../../assets/images/map';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import MyLeagueItem from '../../../components/MyLeagueItem';
import { useLeagueListQuery } from '../../../features/league';
import useGetMatchStatus from '../../../hooks/matchStatus';
import { RootState } from '../../../store';
import { leagueDetailsWatcher } from '../../../store/slices/selectedLeague';
import { homeNavProps } from '../../../types/nav';
import { UserResponse } from '../../../types/responseTypes';
import { screenWidth } from '../../../types/sizes';


const MyLeague: React.FC = ({

}) => {
    const dispatch = useDispatch()
    const [page, setPage] = React.useState<Number>(0)
    const { data, isLoading, isFetching } = useLeagueListQuery(null)
    const user: UserResponse = useSelector((store: RootState) => store.auth.user)
    console.log('data', JSON.stringify(data))
    const navigation = useNavigation<homeNavProps>()

    return (
        <MainContainer loading={isLoading || isFetching}  >
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
                >My Top Leagues</Label>
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
                            <MyLeagueItem
                                {...item}
                                createMatchHandler={() => {

                                }}
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
        </MainContainer>
    )
}
export default MyLeague;
