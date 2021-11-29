// import React, { useEffect, useMemo } from 'react';
// import Btn from '../../../components/Btn';
// import Container from '../../../components/Container';
// import MainContainer from '../../../components/MainContainer';
// import { navigationProps, TeamDetailNav } from '../../../types/nav';
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import Label from '../../../components/Label';
// import { greenColor, OrangeColor, PrimaryColor } from '../../../assets/colors';
// import { FlatList, ScrollView } from 'react-native-gesture-handler';
// import { ListRenderItem, View } from 'react-native';
// import PlayerList from '../../../components/MyPlayersList';
// import { AppImages } from '../../../assets/images/map';
// import Img from '../../../components/Img';
// import { useSelector } from 'react-redux';
// import { useGetMyTeamsQuery, useGetTeamDetailByLeagueQuery } from '../../../features/league';
// import { RootState } from '../../../store';
// import { SvgUri } from 'react-native-svg';
// const TeamDetailScreen: React.FC<TeamDetailNav> = ({
//     navigation,
//     route
// }) => {
//     const { data: getMyTeam, isLoading } = useGetTeamDetailByLeagueQuery(route.params?.team_id)

//     const imageType = useMemo(() => {
//         return getMyTeam?.team_logo?.split('.').pop() == 'svg';
//     }, [getMyTeam])

//     React.useLayoutEffect(() => {
//         return (
//             navigation.setOptions({
//                 headerTitle: getMyTeam?.team_name || ''
//             })
//         )
//     }, [getMyTeam])

//     console.log('getMyTeam', getMyTeam)

//     return <MainContainer
//         style={{ backgroundColor: 'white' }}
//         loading={isLoading}
//     >
//         <ScrollView>
//             <Container
//                 containerStyle={{
//                     flexDirection: "row",
//                 }}
//                 mpContainer={{ mh: 15, mt: 20, mb: 10 }}
//                 height={80}
//             >
//                 {imageType ?
//                     <SvgUri
//                         width={40}
//                         height={40}
//                         uri={`https://chessmafia.com/php/fantasy/public/uploads/${getMyTeam?.team_logo}` || 'dummy'}
//                     />
//                     :
//                     <Img
//                         imgStyle={{ borderRadius: 40 }}
//                         width={45} height={45}
//                         mpImage={{ ml: 10 }}
//                         imgSrc={{ uri: `https://chessmafia.com/php/fantasy/public/uploads/${getMyTeam?.team_logo}` || 'dummy' }} />
//                 }
//                 <Container
//                     mpContainer={{ ml: 10 }}
//                 >
//                     <Label labelSize={16} style={{ fontWeight: "bold", letterSpacing: 0.5 }}  >{getMyTeam?.team_name}</Label>
//                     {/* <Label labelSize={14} style={{ letterSpacing: 0.5 }} >4-3-3 | - of 1</Label> */}
//                 </Container>
//                 <Container
//                     containerStyle={{
//                         alignItems: "flex-end",
//                         position: 'absolute',
//                         right: 10,
//                         top: 5
//                     }}
//                 >
//                     <Label labelSize={16} style={{ letterSpacing: 0.5, color: OrangeColor }} >Sniper Pts {getMyTeam?.sniper_points?.toFixed(2)}</Label>

//                     <Label labelSize={14} style={{ color: 'black' }} mpLabel={{ mt: 5 }} >Fantasy Pts {getMyTeam?.actual_points?.toFixed(2)}</Label>
//                     <Label labelSize={14} style={{ letterSpacing: 0.5, color: 'black' }} mpLabel={{ mt: 5 }}>Prediction Pts. {getMyTeam?.prediction_points?.toFixed(2)}</Label>
//                     <Label labelSize={14} style={{ letterSpacing: 0.5, color: 'grey' }} mpLabel={{ mt: 5 }}>Projection Pts. {getMyTeam?.projection_points?.toFixed(2)}</Label>
//                 </Container>
//             </Container>

//             <View>
//                 <ScrollView horizontal={true} >
//                     <ScrollView>
//                         <Container
//                             containerStyle={{
//                                 borderBottomWidth: 1,
//                                 borderTopWidth: 1,
//                                 borderColor: 'lightgrey',
//                                 flexDirection: "row",
//                                 alignItems: 'center'
//                             }}
//                             mpContainer={{ pv: 10, ph: 15, mt: 10 }}
//                         >
//                             <Label labelSize={16} style={{ width: 225 }} >{ }</Label>
//                             <Label labelSize={15} style={{ letterSpacing: 0.5, width: 50, textAlign: 'center' }}  >Proj</Label>
//                             <Label labelSize={15} style={{ letterSpacing: 0.5, width: 70, textAlign: 'center' }} >Pred</Label>
//                             <Label labelSize={15} style={{ letterSpacing: 0.5, width: 70, textAlign: 'center' }} >FanPts</Label>
//                             <Label labelSize={15} style={{ letterSpacing: 0.5, width: 60, textAlign: 'center' }} >SnPts</Label>
//                             {/* <Label labelSize={15} style={{ letterSpacing: 0.5, width: 90, textAlign: 'center' }} >Accuracy</Label> */}
//                         </Container>
//                         {getMyTeam?.players.map((item, index) => {
//                             let { photoUrl, Name, Position, SniperPoints, PredictionPoints, Accuracy, ProjectionPoints, ActualPoints } = item
//                             let imageType = photoUrl?.split('.').pop() == 'svg';
//                             return <>
//                                 <Container
//                                     containerStyle={{ flexDirection: "row", alignItems: "center" }}
//                                     mpContainer={{ mh: 15 }}
//                                     height={60}
//                                 >
//                                     <Container height={45} width={45} mpContainer={{ mh: 10 }} >
//                                         {
//                                             imageType ?
//                                                 <SvgUri
//                                                     width={40}
//                                                     height={40}
//                                                     uri={photoUrl || ''}
//                                                 />
//                                                 :
//                                                 <Img
//                                                     imgSrc={{ uri: photoUrl || '' }}
//                                                     width={40} height={45}
//                                                 />
//                                         }
//                                     </Container>
//                                     <Container containerStyle={{ width: 120 }} mpContainer={{ ml: 20 }} >
//                                         <Label labelSize={15} style={{ letterSpacing: 0.5, color: "black" }} >{Name}</Label>
//                                         <Label labelSize={13} style={{ letterSpacing: 0.5, color: "grey" }} >{Position}</Label>
//                                     </Container>
//                                     <Container containerStyle={{ justifyContent: 'center', alignItems: 'center' }} width={90} >
//                                         <Label labelSize={14} style={{ letterSpacing: 0.5, color: 'black', textAlign: 'center' }}>{ProjectionPoints}</Label>
//                                     </Container>
//                                     <Container containerStyle={{ justifyContent: 'center', alignItems: 'center' }} width={45} >
//                                         <Label labelSize={14} style={{ letterSpacing: 0.5, color: "black", textAlign: 'center' }}>{PredictionPoints}</Label>
//                                     </Container>
//                                     <Container containerStyle={{ justifyContent: 'center', alignItems: 'center' }} width={70} >
//                                         <Label labelSize={14} style={{ letterSpacing: 0.5, color: "black", textAlign: 'center' }}>{ActualPoints}</Label>
//                                     </Container>
//                                     <Container containerStyle={{ justifyContent: 'center', alignItems: 'center' }} width={70} >
//                                         <Label labelSize={14} style={{ letterSpacing: 0.5, color: "green", textAlign: 'center' }}>{`${SniperPoints} (${Accuracy}%)`}</Label>
//                                     </Container>
//                                     {/* <Container containerStyle={{ justifyContent: 'center', alignItems: 'center' }} width={70} >
//                                         <Label labelSize={14} style={{ letterSpacing: 0.5, color: "black" }}>{Accuracy}</Label>
//                                     </Container> */}
//                                 </Container>
//                                 <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} />
//                             </>
//                         })}
//                     </ScrollView>
//                 </ScrollView>
//             </View>
//         </ScrollView>
//     </MainContainer>
// }
// export default TeamDetailScreen;


import React, { useEffect, useMemo } from 'react';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import MainContainer from '../../../components/MainContainer';
import { navigationProps, TeamDetailNav } from '../../../types/nav';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Label from '../../../components/Label';
import { greenColor, OrangeColor, PrimaryColor } from '../../../assets/colors';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ListRenderItem, View } from 'react-native';
import PlayerList from '../../../components/MyPlayersList';
import { AppImages } from '../../../assets/images/map';
import Img from '../../../components/Img';
import { useDispatch, useSelector } from 'react-redux';
import { useGetMyTeamsQuery, useGetTeamDetailByLeagueQuery } from '../../../features/league';
import { RootState } from '../../../store';
import { SvgUri } from 'react-native-svg';
import { addToMyPlayerWatcher, setMyTeamWatcher } from '../../../store/slices/myPlayerList';
const TeamDetailScreen: React.FC<TeamDetailNav> = ({
    navigation,
    route
}) => {
    const dispatch = useDispatch()
    const { data: getMyTeam, isLoading } = useGetTeamDetailByLeagueQuery(route.params?.team_id)
    const { leagueDetails } = useSelector((state: RootState) => state.selectedLeague)

    const imageType = useMemo(() => {
        return getMyTeam?.team_logo?.split('.').pop() == 'svg';
    }, [getMyTeam])

    // React.useLayoutEffect(() => {
    //     return (
    //         navigation.setOptions({
    //             headerTitle: getMyTeam?.team_name || ''
    //         })
    //     )
    // }, [getMyTeam])

    React.useLayoutEffect(() => {
        return (
            navigation.setOptions({
                headerTitle: getMyTeam?.team_name || '',
                // headerRight: () => {
                //     return <Btn
                //         title="Edit match"
                //         labelSize={12}
                //         labelStyle={{
                //             color: 'white'
                //         }}
                //         radius={8}
                //         mpBtn={{ ph: 10 }}
                //         btnStyle={{
                //             backgroundColor: OrangeColor
                //         }}
                //         onPress={() => {

                //             let data = getMyTeam?.players?.map((item, index) => {
                //                 if (item.Position == 'DEF') {

                //                 }
                //                 return {
                //                     ...item,
                //                     isSelected: true
                //                 }
                //             })
                //             // console.log(data)
                //             dispatch(setMyTeamWatcher(data))
                //             navigation.navigate('updateTeam', {
                //                 team_id: route.params?.team_id
                //             })
                //         }}
                //     />
                // }
            })
        )
    }, [getMyTeam])


    console.log('getMyTeam', getMyTeam)

    return <MainContainer
        style={{ backgroundColor: 'white' }}
        loading={isLoading}
    >
        <ScrollView>
            <Container containerStyle={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}
                mpContainer={{ ml: 15, mt: 10 }}
            >
                <Container containerStyle={{ flexDirection: "row", alignItems: "center" }} >
                    <Label labelSize={15}  >Week {leagueDetails.week[0].week_no}</Label>
                    <Ionicons
                        name="ios-chevron-forward"
                        size={20}
                        color="black"
                    />
                </Container>
                <Container containerStyle={{ flexDirection: 'row', alignItems: 'center' }} >
                    <Btn
                        title="Edit Team"
                        labelSize={12}
                        labelStyle={{
                            color: 'white'
                        }}
                        radius={8}
                        mpBtn={{ mr: 10 }}
                        btnStyle={{
                            backgroundColor: OrangeColor,
                            width: 85,
                        }}
                        onPress={() => {
                            navigation.navigate('EditTeamInfo', {
                                team_id: getMyTeam?.team_id,
                                team_name: getMyTeam?.team_name,
                                team_logo: getMyTeam?.team_logo,
                            })
                            // navigation.navigate('AddPlayer')
                        }}
                    />
                    <Btn
                        title="Edit match"
                        labelSize={12}
                        labelStyle={{
                            color: 'white'
                        }}
                        radius={8}
                        mpBtn={{ mr: 10 }}
                        btnStyle={{
                            backgroundColor: PrimaryColor,
                            width: 85,
                        }}
                        onPress={() => {
                            let data = getMyTeam?.players?.map((item, index) => {
                                if (item.Position == 'DEF') {

                                }
                                return {
                                    ...item,
                                    isSelected: true
                                }
                            })
                            dispatch(setMyTeamWatcher(data))
                            navigation.navigate('updateTeam', {
                                team_id: route.params?.team_id
                            })
                        }}
                    />
                </Container>
            </Container>
            <Container
                containerStyle={{
                    flexDirection: "row",
                }}
                mpContainer={{ mh: 15, mt: 20, mb: 10 }}
                height={80}
            >
                {imageType ?
                    <SvgUri
                        width={40}
                        height={40}
                        uri={`https://chessmafia.com/php/fantasy/public/uploads/${getMyTeam?.team_logo}` || 'dummy'}
                    />
                    :
                    <Img
                        imgStyle={{ borderRadius: 40 }}
                        width={45} height={45}
                        mpImage={{ ml: 10 }}
                        imgSrc={{ uri: `https://chessmafia.com/php/fantasy/public/uploads/${getMyTeam?.team_logo}` || 'dummy' }} />
                }
                <Container
                    mpContainer={{ ml: 10 }}
                >
                    <Label labelSize={16} style={{ fontWeight: "bold", letterSpacing: 0.5 }}  >{getMyTeam?.team_name}</Label>
                    {/* <Label labelSize={14} style={{ letterSpacing: 0.5 }} >4-3-3 | - of 1</Label> */}
                </Container>
                <Container
                    containerStyle={{
                        alignItems: "flex-end",
                        position: 'absolute',
                        right: 10,
                        top: 0
                    }}
                >
                    <Label labelSize={15} style={{ color: greenColor }} >Sniper Pts {getMyTeam?.sniper_points?.toFixed(2)}</Label>

                    <Label labelSize={14} style={{ color: 'black' }} mpLabel={{ mt: 5 }} >Fantasy Pts {getMyTeam?.actual_points?.toFixed(2)}</Label>
                    <Label labelSize={14} style={{ color: OrangeColor }} mpLabel={{ mt: 5 }}>Prediction Pts. {getMyTeam?.prediction_points?.toFixed(2)}</Label>
                    <Label labelSize={14} style={{ color: 'grey' }} mpLabel={{ mt: 5 }}>Projection Pts. {getMyTeam?.projection_points?.toFixed(2)}</Label>
                </Container>
            </Container>
            <ScrollView horizontal={true} >
                <ScrollView>
                    <Container
                        containerStyle={{
                            borderBottomWidth: 1,
                            borderTopWidth: 1,
                            borderColor: 'lightgrey',
                            flexDirection: "row",
                            alignItems: 'center'
                        }}
                        mpContainer={{ pv: 10, mt: 20 }}
                    >
                        <Label labelSize={14} style={{ width: 160 }} >{ }</Label>
                        <Label labelSize={12} style={{ width: 55 }}  >SnPts</Label>
                        <Label labelSize={12} style={{ width: 55 }} >FanPts</Label>
                        <Label labelSize={12} style={{ width: 50 }} >Pred</Label>
                        <Label labelSize={12} style={{ width: 60 }} >Proj</Label>
                        {/* <Label labelSize={15} style={{ letterSpacing: 0.5, width: 90, textAlign: 'center' }} >Accuracy</Label> */}
                    </Container>
                    {getMyTeam?.players.map((item, index) => {
                        let { photoUrl, Name, Position, SniperPoints, PredictionPoints, Accuracy, ProjectionPoints, ActualPoints, Team } = item
                        let imageType = photoUrl?.split('.').pop() == 'svg';
                        return <>
                            <Container
                                containerStyle={{ flexDirection: "row", alignItems: "center" }}
                                mpContainer={{ mr: 20, ml: 15 }}
                                height={60}
                            >
                                <Container height={35} width={45} >
                                    {
                                        imageType ?
                                            <SvgUri
                                                width={30}
                                                height={30}
                                                uri={photoUrl || ''}
                                            />
                                            :
                                            <Img
                                                imgSrc={{ uri: photoUrl || '' }}
                                                width={30} height={45}
                                            />
                                    }
                                </Container>
                                <Container
                                    containerStyle={{ width: 90 }}
                                >
                                    <Label labelSize={12} style={{ color: "black" }} >{Name}</Label>
                                    <Container containerStyle={{ flexDirection: 'row', alignItems: "center", top: 2 }} >
                                        <Label labelSize={11} style={{ color: "grey" }} >{Position}</Label>
                                        <Label labelSize={11} style={{ color: "grey" }} mpLabel={{ ml: 4 }}  >{`(${Team})`}</Label>
                                    </Container>
                                </Container>
                                <Container containerStyle={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} width={60} >
                                    <Label labelSize={12} style={{ color: "green", textAlign: 'center' }}>{SniperPoints}</Label>
                                    <Label labelSize={12} style={{ color: "green", textAlign: 'center' }}>{`(${Accuracy}%)`}</Label>
                                </Container>
                                <Container containerStyle={{ justifyContent: 'center', alignItems: 'center' }} width={50} >
                                    <Label labelSize={12} style={{ color: 'black', textAlign: 'center' }}>{ActualPoints}</Label>
                                </Container>
                                <Container containerStyle={{ justifyContent: 'center', alignItems: 'center' }} width={45} >
                                    <Label labelSize={12} style={{ color: OrangeColor, textAlign: 'center' }}>{PredictionPoints}</Label>
                                </Container>
                                <Container containerStyle={{ justifyContent: 'center', alignItems: 'center' }} width={50} >
                                    <Label labelSize={12} style={{ color: "grey", textAlign: 'center' }}>{ProjectionPoints}</Label>
                                </Container>
                            </Container>
                            <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} />
                        </>
                    })}
                </ScrollView>
            </ScrollView>
        </ScrollView>
    </MainContainer>
}
export default TeamDetailScreen;
