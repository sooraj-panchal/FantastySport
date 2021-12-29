// import React, { useMemo } from 'react';
// import Btn from '../../../components/Btn';
// import Container from '../../../components/Container';
// import MainContainer from '../../../components/MainContainer';
// import { LiveMatchDetailNav, navigationProps } from '../../../types/nav';
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import Label from '../../../components/Label';
// import { greenColor, OrangeColor, PrimaryColor } from '../../../assets/colors';
// import { FlatList, ScrollView } from 'react-native-gesture-handler';
// import { ListRenderItem, View } from 'react-native';
// import PlayerList from '../../../components/MyPlayersList';
// import * as Progress from 'react-native-progress';
// import { screenWidth } from '../../../types/sizes';
// import Img from '../../../components/Img';
// import { AppImages } from '../../../assets/images/map';
// import { medium, regular } from '../../../assets/fonts/fonts';
// import { useTeamMatchDetailsQuery } from '../../../features/league';
// import { TeamMatchDetailsResponse } from '../../../types/responseTypes';
// import { SvgUri } from 'react-native-svg';
// import moment from 'moment'
// import { useTime } from '../../../utils/timeZone';

// const LiveMatchDetailScreen: React.FC<LiveMatchDetailNav> = ({
//     navigation,
//     route,

// }) => {
//     const { data, isLoading, isFetching,error } = useTeamMatchDetailsQuery({
//         team_id: route.params?.team_id,
//         op_team_id: route.params?.op_team_id,
//     }, {
//         pollingInterval: 3000
//     })

//     console.log(route.params)
//     console.log('data',data)
//     console.log('error',error)

//     // const { imageType, imageType1 } = useMemo(() => {
//     //     return {
//     //         imageType: data?.[0].team_logo?.split('.').pop() == 'svg',
//     //         imageType1: data?.[1].team_logo?.split('.').pop() == 'svg'
//     //     }
//     // }, [data])


//     // React.useLayoutEffect(() => {
//     //     return (
//     //         navigation.setOptions({
//     //             headerRight: () => {
//     //                 return <Container
//     //                     containerStyle={{
//     //                         flexDirection: "row",
//     //                         alignItems: "center"
//     //                     }}
//     //                     mpContainer={{ mr: 15, mt: 5 }}
//     //                 >
//     //                     <Btn
//     //                         title="Invite friends"
//     //                         labelSize={12}
//     //                         labelStyle={{
//     //                             color: 'white'
//     //                         }}
//     //                         radius={8}
//     //                         mpBtn={{ ph: 10, mr: 10 }}
//     //                         btnStyle={{
//     //                             backgroundColor: OrangeColor
//     //                         }}
//     //                         onPress={() => {
//     //                             navigation.navigate('InviteFriend')
//     //                         }}
//     //                     />
//     //                     <Ionicons
//     //                         name="ios-settings"
//     //                         size={22}
//     //                         color='white'
//     //                     />
//     //                 </Container>
//     //             }
//     //         })
//     //     )
//     // }, [])

//     const renderItem: ListRenderItem<{}> = ({ item, index }) => {
//         return <>
//             <Container
//                 containerStyle={{ flexDirection: "row", alignItems: "center" }}
//                 mpContainer={{ mh: 15 }}
//                 height={55}
//             >
//                 <Label labelSize={16} style={{ letterSpacing: 0.5, color: 'grey' }} >QB</Label>
//                 <Ionicons
//                     name="md-person"
//                     size={52}
//                     color={'grey'}
//                     style={{
//                         alignSelf: "flex-end",
//                         marginHorizontal: 20,
//                         marginTop: 10,
//                     }}
//                 />
//                 <Label labelSize={16} style={{ letterSpacing: 0.5, color: "grey" }} >Empty</Label>
//                 <Container
//                     containerStyle={{
//                         borderWidth: 2,
//                         borderRadius: 30,
//                         borderColor: 'red',
//                         position: 'absolute',
//                         right: 0,
//                         borderStyle: "dashed",
//                         justifyContent: "center",
//                         alignItems: "center"
//                     }}
//                     width={30} height={30}
//                 >
//                     <Ionicons
//                         name="add-sharp"
//                         size={25}
//                         style={{

//                         }}
//                         color={'red'}
//                     />
//                 </Container>
//             </Container>
//             <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} mpContainer={{ mh: 15 }} />
//         </>
//     }

//     const renderVS = () => {
//         return <Container containerStyle={{ flexDirection: "row", alignItems: "center" }} >
//             <Label
//                 labelSize={18}
//                 style={{ color: 'red', fontWeight: 'bold' }}
//             >V</Label>
//             <Container
//                 containerStyle={{
//                     height: 25, width: 2,
//                     backgroundColor: 'red',
//                     transform: [{
//                         rotate: "20deg"
//                     }]
//                 }}
//             />
//             <Label
//                 labelSize={18}
//                 style={{ color: 'red', fontWeight: 'bold', top: 4 }}
//             >S</Label>
//         </Container>
//     }

//     const renderTeamFight = () => {
//         return (
//             <Container>
//                 <Container containerStyle={{ flexDirection: "row" }} mpContainer={{ mt: 10, ml: 20 }} >
//                     <Container
//                         containerStyle={{
//                             width: "40%",
//                             alignItems: "flex-start"
//                         }}
//                     >
//                         <Label
//                             labelSize={16}
//                             style={{ color: "black" }}
//                         >{data?.[1].team_name}</Label>
//                         <Container
//                             containerStyle={{
//                                 flexDirection: "row",
//                                 alignItems: "center"
//                             }}
//                         >

//                             {/* <Container height={40} width={40}>
//                                 {
//                                     imageType ?
//                                         <SvgUri
//                                             width={40}
//                                             height={40}
//                                             uri={`https://chessmafia.com/php/fantasy/public/uploads/${data?.[1].team_logo}` || ''}
//                                         />
//                                         :
//                                         <Img
//                                             imgSrc={{ uri: `https://chessmafia.com/php/fantasy/public/uploads/${data?.[1].team_logo}` || 'dummy' }}
//                                             width={40} height={45} />
//                                 }
//                             </Container> */}
//                             <Label
//                                 labelSize={35}
//                                 style={{ color: "black" }}
//                                 mpLabel={{ ml: 10 }}
//                             >{data?.[1].sniper_points}</Label>
//                         </Container>
//                     </Container>
//                     <Container
//                         mpContainer={{ mt: 30, ml: 15, mr: 20 }}
//                     >
//                         {renderVS()}
//                     </Container>
//                     <Container
//                         containerStyle={{
//                             width: "40%",
//                             alignItems: "flex-start"
//                         }}
//                     >
//                         <Label
//                             labelSize={16}
//                             style={{ color: "black" }}
//                         >{data?.[0].team_name}</Label>
//                         <Container
//                             containerStyle={{
//                                 flexDirection: "row",
//                                 alignItems: "center"
//                             }}
//                         >
//                             <Label
//                                 labelSize={35}
//                                 style={{ color: "black" }}
//                             >{data?.[0].sniper_points}</Label>
//                             {/* <Img
//                                 imgStyle={{ width: 35, height: 40 }}
//                                 imgSrc={AppImages.green_logo}
//                                 mpImage={{ ml: 10 }}
//                             /> */}
//                             {/* <Container
//                                 mpContainer={{ ml: 10 }}
//                             >
//                                 {
//                                     imageType1 ?
//                                         <SvgUri
//                                             width={40}
//                                             height={40}
//                                             uri={`https://chessmafia.com/php/fantasy/public/uploads/${data?.[0].team_logo}` || ''}
//                                         />
//                                         :
//                                         <Img
//                                             imgSrc={{ uri: `https://chessmafia.com/php/fantasy/public/uploads/${data?.[0].team_logo}` || 'dummy' }}
//                                             width={40} height={45} />
//                                 }
//                             </Container> */}
//                         </Container>
//                     </Container>
//                 </Container>
//                 <Container containerStyle={{
//                     flexDirection: 'row',
//                     alignItems: "center",
//                     justifyContent: 'center'
//                 }}
//                     mpContainer={{ mt: 5 }}
//                 >
//                     <Label
//                         labelSize={16}
//                         style={{ color: greenColor, fontFamily: medium }}
//                     >{data?.[1].sniper_points}</Label>
//                     <Label
//                         labelSize={14}
//                         style={{ color: OrangeColor, fontFamily: medium, width: 70, textAlign: 'center' }}
//                     >S.Pts</Label>
//                     <Label
//                         labelSize={16}
//                         style={{ color: 'grey', fontFamily: medium }}
//                     >{data?.[0].sniper_points}</Label>
//                 </Container>
//                 <Container containerStyle={{
//                     flexDirection: 'row',
//                     alignItems: "center",
//                     justifyContent: 'center'
//                 }}
//                     mpContainer={{ mt: 5 }}
//                 >
//                     <Label
//                         labelSize={16}
//                         style={{ color: greenColor, fontFamily: medium }}
//                     >3</Label>
//                     <Label
//                         labelSize={14}
//                         style={{ color: OrangeColor, fontFamily: medium, width: 70, textAlign: 'center' }}
//                     >Rank</Label>
//                     <Label
//                         labelSize={16}
//                         style={{ color: greenColor, fontFamily: medium }}
//                     >3</Label>
//                 </Container>
//             </Container>
//         )
//     }

//     const renderChance = () => {
//         let sniperpoints1: any = data?.[1].sniper_points
//         let chance1 = sniperpoints1 / 100

//         let sniperpoints2: any = data?.[0].sniper_points
//         let chance2 = sniperpoints2 / 100

//         return <Container>
//             <Label
//                 labelSize={15}
//                 style={{
//                     textAlign: 'center',
//                     color: 'lightgrey',
//                     fontWeight: 'bold'
//                 }}
//                 mpLabel={{ mt: 10 }}
//             >Chance of winning</Label>
//             <Container
//                 containerStyle={{
//                     flexDirection: 'row',
//                     alignItems: "center",
//                     alignSelf: 'center'
//                 }}
//                 mpContainer={{ mt: 10 }}
//             >
//                 <Container
//                     containerStyle={{
//                         flexDirection: "row",
//                         alignItems: 'center'
//                     }}
//                 >
//                     <Label
//                         labelSize={16}
//                         style={{ color: 'green' }}
//                         mpLabel={{ mr: 10 }}
//                     >{sniperpoints1}%</Label>
//                     <Progress.Bar
//                         progress={chance1}
//                         width={screenWidth * 0.32}
//                         borderColor={OrangeColor}
//                         color={greenColor}
//                         borderWidth={0}
//                         unfilledColor="lightgrey"
//                         height={8}
//                     />
//                 </Container>
//                 <Container
//                     containerStyle={{
//                         flexDirection: "row",
//                         alignItems: 'center'
//                     }}
//                     mpContainer={{ ml: 10 }}
//                 >
//                     <Progress.Bar
//                         progress={chance2} width={screenWidth * 0.32}
//                         borderColor={OrangeColor}
//                         color={greenColor}
//                         borderWidth={0}
//                         unfilledColor="lightgrey"
//                         height={8}
//                         useNativeDriver={true}
//                     />
//                     <Label
//                         labelSize={16}
//                         style={{ color: 'green' }}
//                         mpLabel={{ ml: 10 }}
//                     >{sniperpoints2}%</Label>
//                 </Container>
//             </Container>
//         </Container>
//     }

//     return <MainContainer
//         style={{ backgroundColor: 'white' }}
//         loading={isLoading}
//     // absoluteLoading={isFetching}
//     >
//         <ScrollView>
//             {/* <Container containerStyle={{ flexDirection: "row", alignItems: "center" }}
//                 mpContainer={{ ml: 15, mt: 15 }}
//             >
//                 <Label labelSize={15}  >Week 1</Label>
//                 <Ionicons
//                     name="ios-chevron-forward"
//                     size={20}
//                     color="black"
//                 />
//             </Container> */}
//             {renderTeamFight()}
//             {/* {renderChance()} */}
//             <Container
//                 containerStyle={{
//                     borderBottomWidth: 1,
//                     borderTopWidth: 1,
//                     borderColor: 'lightgrey',
//                     justifyContent: 'center',
//                     alignItems: 'center'
//                 }}
//                 mpContainer={{ pv: 10, ph: 15, mt: 10 }}
//             >
//                 <Label labelSize={16}  >Lineup</Label>
//             </Container>
//             <View>
//                 <ScrollView>
//                     {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
//                         return <> */}
//                     {/* <Container
//                         containerStyle={{
//                             flexDirection: 'row',
//                             justifyContent: 'center',
//                             alignItems: 'center'
//                         }}
//                         height={75}
//                     > */}
//                     <Container
//                         containerStyle={{
//                             flexDirection: 'row',
//                             justifyContent: 'center',
//                             alignItems: 'center'
//                         }}
//                     >
//                         <View style={{
//                             width: "40%",
//                         }} >
//                             {data?.[1]?.players.map((item, index) => {
//                                 return <>
//                                     <Container
//                                         containerStyle={{
//                                             flexDirection: "row",
//                                             justifyContent: 'space-between',
//                                             alignItems: 'center',
//                                             height: 75
//                                         }}
//                                         mpContainer={{ mr: 5 }}
//                                     >
//                                         <Container>
//                                             <Label labelSize={12} style={{ color: "black", fontFamily: medium }} >{item.Name}</Label>
//                                             <Container containerStyle={{ flexDirection: 'row', alignItems: "center" }} mpContainer={{ mv: 5 }}  >
//                                                 <Container containerStyle={{
//                                                     flexDirection: 'row',
//                                                     alignItems: 'center'
//                                                 }}
//                                                 >
//                                                     <Label labelSize={15} style={{ color: 'green', fontFamily: medium }} >{item.PredictionPoints}</Label>
//                                                     <Label labelSize={12} style={{ color: 'grey', fontFamily: regular }} >({item.SniperPoints})</Label>
//                                                 </Container>
//                                                 <Label labelSize={12} style={{ color: 'black' }} mpLabel={{ ml: 5 }} >{item.Position}</Label>
//                                             </Container>
//                                             <Label labelSize={12} style={{ color: "grey" }} >{moment(item.GameDate).format('ddd')} {useTime(item.GameDate)} v {item.Opponent}</Label>
//                                         </Container>
//                                         {/* <Container
//                                             containerStyle={{ bottom: 4 }}
//                                         >
//                                             <Label labelSize={18} style={{ letterSpacing: 5, color: 'black' }} >---</Label>
//                                         </Container> */}
//                                     </Container>
//                                     <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} />
//                                 </>
//                             })}
//                         </View>
//                         <View style={{
//                             width: "12%",
//                             // marginHorizontal: 8
//                         }}
//                         >
//                             {
//                                 ['QB', 'WR', 'WR', 'WR', 'RB', 'RB', 'TE', 'W/R/T', 'K', 'DEF'].map((item, index) => {
//                                     return <>
//                                         <Container
//                                             containerStyle={{
//                                                 justifyContent: 'center',
//                                                 backgroundColor: '#f2f2f2',
//                                                 alignItems: 'center'
//                                             }}
//                                             height={75}
//                                         >
//                                             <Label
//                                                 labelSize={item == 'W/R/T' ? 12 : 15}
//                                                 style={{
//                                                     color: 'red'
//                                                 }}
//                                             >{item}</Label>
//                                         </Container>
//                                         <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} />
//                                     </>
//                                 })
//                             }
//                         </View>
//                         <View
//                             style={{
//                                 width: "40%",
//                             }}
//                         >
//                             {data?.[0].players.map((item, index) => {
//                                 return <>
//                                     <Container
//                                         containerStyle={{
//                                             flexDirection: "row",
//                                             justifyContent: 'space-between',
//                                             height: 75,
//                                             alignItems: 'center',
//                                         }}
//                                         mpContainer={{ ml: 10 }}
//                                     >
//                                         <Container>
//                                             <Label labelSize={12} style={{ color: "black", fontFamily: medium }} >{item.Name}</Label>
//                                             <Container containerStyle={{ flexDirection: 'row', alignItems: "center" }} mpContainer={{ mv: 5 }}  >
//                                                 <Container containerStyle={{
//                                                     flexDirection: 'row',
//                                                     alignItems: 'center'
//                                                 }}
//                                                 >
//                                                     <Label labelSize={15} style={{ color: 'grey', fontFamily: medium }} >{item.PredictionPoints}</Label>
//                                                     <Label labelSize={12} style={{ color: 'green', fontFamily: regular }} >({item.SniperPoints})</Label>
//                                                 </Container>
//                                                 <Label labelSize={12} style={{ color: 'black' }} mpLabel={{ ml: 5 }} >{item.Position}</Label>
//                                             </Container>
//                                             <Label labelSize={12} style={{ color: "grey" }} >{moment(item.GameDate).format('ddd')} {useTime(item.GameDate)} v {item.Opponent}</Label>
//                                         </Container>
//                                         {/* <Container
//                                             containerStyle={{ bottom: 4 }}
//                                         >
//                                             <Label labelSize={18} style={{ letterSpacing: 5, color: 'black' }} >---</Label>
//                                             <Label labelSize={15} style={{ letterSpacing: 0.5, color: 'grey' }} >38.3</Label>
//                                         </Container> */}
//                                     </Container>
//                                     <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} />
//                                 </>
//                             })}
//                         </View>
//                     </Container>
//                     {/* <Container
//                         containerStyle={{
//                             width: "10%",
//                             justifyContent: 'center',
//                             backgroundColor: '#f2f2f2',
//                             alignItems: 'center'
//                         }}
//                         height={75}
//                         mpContainer={{ mh: 8 }}
//                     >
//                         <Label
//                             labelSize={15}
//                             style={{
//                                 color: 'red'
//                             }}
//                         >QB</Label>
//                     </Container>
//                     <Container
//                         containerStyle={{
//                             flexDirection: "row",
//                             justifyContent: 'space-between',
//                             width: "40%"
//                         }}
//                     >
//                         <Container
//                             containerStyle={{ bottom: 4 }}
//                         >
//                             <Label labelSize={18} style={{ letterSpacing: 5, color: 'black' }} >---</Label>
//                             <Label labelSize={15} style={{ letterSpacing: 0.5, color: 'grey' }} >38.3</Label>
//                         </Container>
//                         <Container
//                             containerStyle={{
//                                 alignItems: 'flex-end'
//                             }}
//                         >
//                             <Label labelSize={12} style={{ letterSpacing: 0.5, color: "black" }} >P. Mahomes</Label>
//                             <Label labelSize={12} style={{ letterSpacing: 0.5, color: 'black' }} mpLabel={{ mv: 5 }} >QB</Label>
//                             <Label labelSize={12} style={{ letterSpacing: 0.5, color: "grey" }} >Sun 4:25 vs Sea</Label>
//                         </Container>
//                     </Container> */}
//                     {/* </Container> */}
//                     {/* </>
//                     })} */}
//                 </ScrollView>
//             </View>
//         </ScrollView>
//     </MainContainer>
// }
// export default LiveMatchDetailScreen;


import React, { useMemo } from 'react';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import MainContainer from '../../../components/MainContainer';
import { LiveMatchDetailNav, navigationProps } from '../../../types/nav';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Label from '../../../components/Label';
import { greenColor, OrangeColor, PrimaryColor } from '../../../assets/colors';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ListRenderItem, View } from 'react-native';
import PlayerList from '../../../components/MyPlayersList';
import * as Progress from 'react-native-progress';
import { screenWidth } from '../../../types/sizes';
import Img from '../../../components/Img';
import { AppImages } from '../../../assets/images/map';
import { bold, medium, regular } from '../../../assets/fonts/fonts';
import { useTeamMatchDetailsQuery } from '../../../features/league';
import { TeamMatchDetailsResponse } from '../../../types/responseTypes';
import { SvgUri } from 'react-native-svg';
import moment from 'moment'
import { useTime } from '../../../utils/timeZone';
import { imageBaseUrl } from '../../../utils/globals';

const LiveMatchDetailScreen: React.FC<LiveMatchDetailNav> = ({
    navigation,
    route,

}) => {
    const teamDetailParams = {
        team_id: route.params?.team_id,
        op_team_id: route.params?.op_team_id,
    }
    const { data, isLoading, isFetching, error } = useTeamMatchDetailsQuery(teamDetailParams, {
        pollingInterval: 3000
    })

    console.log('teamDetailParams', teamDetailParams)
    console.log('error from teammatch compare', error)
    console.log('data from teammatch compare', JSON.stringify(data))

    // console.log('error', error)

    const { imageType, imageType1 } = useMemo(() => {
        return {
            imageType: data?.[0].team_logo?.split('.').pop() == 'svg',
            imageType1: data?.[1].team_logo?.split('.').pop() == 'svg'
        }
    }, [data])


    const renderVS = () => {
        return <Container containerStyle={{ flexDirection: "row", alignItems: "center" }} >
            <Label
                labelSize={18}
                style={{ color: 'red', fontWeight: 'bold' }}
            >V</Label>
            <Container
                containerStyle={{
                    height: 25, width: 2,
                    backgroundColor: 'red',
                    transform: [{
                        rotate: "20deg"
                    }]
                }}
            />
            <Label
                labelSize={18}
                style={{ color: 'red', fontWeight: 'bold', top: 4 }}
            >S</Label>
        </Container>
    }

    const renderTeamFight = () => {
        return (
            <Container>
                <Container containerStyle={{ flexDirection: "row" }} mpContainer={{ mt: 10, ml: 20 }} >
                    <Container
                        containerStyle={{
                            width: "40%",
                            alignItems: "flex-start"
                        }}
                    >
                        <Label
                            labelSize={16}
                            style={{ color: "black" }}
                        >{data?.[0].team_name}</Label>
                        <Container
                            containerStyle={{
                                flexDirection: "row",
                                alignItems: "center"
                            }}
                        >
                            <Container height={40} width={40}>
                                {
                                    imageType ?
                                        <SvgUri
                                            width={40}
                                            height={40}
                                            uri={`${imageBaseUrl}${data?.[0].team_logo}` || ''}
                                        />
                                        :
                                        <Img
                                            imgSrc={{ uri: `${imageBaseUrl}${data?.[0].team_logo}` || 'dummy' }}
                                            width={40} height={45} />
                                }
                            </Container>
                            <Label
                                labelSize={35}
                                style={{ color: "black" }}
                                mpLabel={{ ml: 10 }}
                            >{data?.[0].sniper_points}</Label>
                        </Container>
                    </Container>
                    <Container
                        mpContainer={{ mt: 30, ml: 15, mr: 20 }}
                    >
                        {renderVS()}
                    </Container>
                    <Container
                        containerStyle={{
                            width: "40%",
                            alignItems: "flex-start"
                        }}
                    >
                        <Label
                            labelSize={16}
                            style={{ color: "black" }}
                        >{data?.[1].team_name}</Label>
                        <Container
                            containerStyle={{
                                flexDirection: "row",
                                alignItems: "center"
                            }}
                        >
                            <Label
                                labelSize={35}
                                style={{ color: "black" }}
                            >{data?.[1].sniper_points}</Label>
                            {/* <Img
                                imgStyle={{ width: 35, height: 40 }}
                                imgSrc={AppImages.green_logo}
                                mpImage={{ ml: 10 }}
                            /> */}
                            <Container
                                mpContainer={{ ml: 10 }}
                            >
                                {
                                    imageType1 ?
                                        <SvgUri
                                            width={40}
                                            height={40}
                                            uri={`https://chessmafia.com/php/fantasy/public/uploads/${data?.[1].team_logo}` || ''}
                                        />
                                        :
                                        <Img
                                            imgSrc={{ uri: `https://chessmafia.com/php/fantasy/public/uploads/${data?.[1].team_logo}` || 'dummy' }}
                                            width={40} height={45} />
                                }
                            </Container>
                        </Container>
                    </Container>
                </Container>
                <Container containerStyle={{
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: 'center'
                }}
                    mpContainer={{ mt: 5 }}
                >
                    <Label
                        labelSize={16}
                        style={{ color: greenColor, fontFamily: medium }}
                    >{data?.[0].prediction_points}</Label>
                    <Label
                        labelSize={14}
                        style={{ color: OrangeColor, fontFamily: medium, width: 70, textAlign: 'center' }}
                    >PredPts</Label>
                    <Label
                        labelSize={16}
                        style={{ color: 'grey', fontFamily: medium }}
                    >{data?.[1].prediction_points}</Label>
                </Container>
                <Container containerStyle={{
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: 'center'
                }}
                    mpContainer={{ mt: 5 }}
                >
                    <Label
                        labelSize={16}
                        style={{ color: greenColor, fontFamily: medium }}
                    >{data?.[0].fantasyPoint?.toFixed(2)}</Label>
                    <Label
                        labelSize={14}
                        style={{ color: OrangeColor, fontFamily: medium, width: 70, textAlign: 'center' }}
                    >FansPts</Label>
                    <Label
                        labelSize={16}
                        style={{ color: 'grey', fontFamily: medium }}
                    >{data?.[1].fantasyPoint?.toFixed(2)}</Label>
                </Container>
                {/* <Container containerStyle={{
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: 'center'
                }}
                    mpContainer={{ mt: 5 }}
                >
                    <Label
                        labelSize={16}
                        style={{ color: greenColor, fontFamily: medium }}
                    >3</Label>
                    <Label
                        labelSize={14}
                        style={{ color: OrangeColor, fontFamily: medium, width: 70, textAlign: 'center' }}
                    >Rank</Label>
                    <Label
                        labelSize={16}
                        style={{ color: greenColor, fontFamily: medium }}
                    >3</Label>
                </Container> */}
            </Container>
        )
    }

    const renderChance = () => {
        let sniperpoints1: any = data?.[1].sniper_points
        let chance1 = sniperpoints1 / 100

        let sniperpoints2: any = data?.[0].sniper_points
        let chance2 = sniperpoints2 / 100

        return <Container>
            <Label
                labelSize={15}
                style={{
                    textAlign: 'center',
                    color: 'lightgrey',
                    fontWeight: 'bold'
                }}
                mpLabel={{ mt: 10 }}
            >Chance of winning</Label>
            <Container
                containerStyle={{
                    flexDirection: 'row',
                    alignItems: "center",
                    alignSelf: 'center'
                }}
                mpContainer={{ mt: 10 }}
            >
                <Container
                    containerStyle={{
                        flexDirection: "row",
                        alignItems: 'center'
                    }}
                >
                    <Label
                        labelSize={16}
                        style={{ color: 'green' }}
                        mpLabel={{ mr: 10 }}
                    >{sniperpoints1}%</Label>
                    <Progress.Bar
                        progress={chance1}
                        width={screenWidth * 0.32}
                        borderColor={OrangeColor}
                        color={greenColor}
                        borderWidth={0}
                        unfilledColor="lightgrey"
                        height={8}
                    />
                </Container>
                <Container
                    containerStyle={{
                        flexDirection: "row",
                        alignItems: 'center'
                    }}
                    mpContainer={{ ml: 10 }}
                >
                    <Progress.Bar
                        progress={chance2} width={screenWidth * 0.32}
                        borderColor={OrangeColor}
                        color={greenColor}
                        borderWidth={0}
                        unfilledColor="lightgrey"
                        height={8}
                        useNativeDriver={true}
                    />
                    <Label
                        labelSize={16}
                        style={{ color: 'green' }}
                        mpLabel={{ ml: 10 }}
                    >{sniperpoints2}%</Label>
                </Container>
            </Container>
        </Container>
    }

    return <MainContainer
        style={{ backgroundColor: 'white' }}
        loading={isLoading}
    >
        <ScrollView>
            {renderTeamFight()}
            <Container
                containerStyle={{
                    borderBottomWidth: 1,
                    borderTopWidth: 1,
                    borderColor: 'lightgrey',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                mpContainer={{ pv: 10, ph: 15, mt: 10 }}
            >
                <Label labelSize={16}  >Lineup</Label>
            </Container>
            <View>
                <ScrollView>
                    <Container
                        containerStyle={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <View style={{
                            width: "40%",
                        }} >
                            {data?.[0]?.players.map((item, index) => {
                                return <>
                                    <Container
                                        containerStyle={{
                                            flexDirection: "row",
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            height: 80
                                        }}
                                        mpContainer={{ mr: 5 }}
                                    >
                                        <Container>
                                            <Label labelSize={12} style={{ color: "black", fontFamily: medium }} >{item.Name}</Label>
                                            <Container containerStyle={{ flexDirection: 'row', alignItems: "center" }}  >
                                                <Container containerStyle={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center'
                                                }}
                                                >
                                                    <Label labelSize={15} style={{ color: 'green', fontFamily: medium }} >{item.PredictionPoints}</Label>
                                                    <Label labelSize={12} style={{ color: 'grey', fontFamily: regular }} > ({item.ActualPoints})</Label>
                                                </Container>
                                                <Container
                                                    containerStyle={{ flexDirection: 'row' }}
                                                >
                                                    <Label labelSize={12} style={{ color: 'black' }} mpLabel={{ ml: 5 }} >{item.Position}</Label>
                                                    {/* <Label labelSize={12} style={{ color: 'grey' }} mpLabel={{ ml: 5 }} >({item.Team})</Label> */}
                                                </Container>
                                            </Container>
                                            <Container
                                                containerStyle={{ flexDirection: 'row' }}
                                            >
                                                <Label labelSize={12} style={{ color: 'black' }} >{item.Team}</Label>
                                                <Label labelSize={12} style={{ color: 'grey' }} > ({item.HomeOrAway})</Label>
                                            </Container>
                                            <Label labelSize={12} style={{ color: "grey" }} >{moment(item.GameDate).format('ddd')} {useTime(item.GameDate)} v {item.Opponent}</Label>
                                        </Container>
                                        <Label labelSize={12} style={{ color: 'black', fontFamily: bold, position: 'absolute', right: 10 }}  >{item.SniperPoints}</Label>
                                    </Container>
                                    <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} />
                                </>
                            })}
                        </View>
                        <View style={{
                            width: "12%",
                            // marginHorizontal: 8
                        }}
                        >
                            {
                                ['QB', 'WR', 'WR', 'WR', 'RB', 'RB', 'TE', 'W/R/T', 'K', 'DEF'].map((item, index) => {
                                    return <>
                                        <Container
                                            containerStyle={{
                                                justifyContent: 'center',
                                                backgroundColor: '#f2f2f2',
                                                alignItems: 'center'
                                            }}
                                            height={80}
                                        >
                                            <Label
                                                labelSize={item == 'W/R/T' ? 12 : 15}
                                                style={{
                                                    color: 'red'
                                                }}
                                            >{item}</Label>
                                        </Container>
                                        <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} />
                                    </>
                                })
                            }
                        </View>
                        <View
                            style={{
                                width: "40%",
                            }}
                        >
                            {data?.[1].players.map((item, index) => {
                                return <>
                                    <Container
                                        containerStyle={{
                                            flexDirection: "row",
                                            justifyContent: 'space-between',
                                            height: 80,
                                            alignItems: 'center',
                                        }}
                                        mpContainer={{ ml: 10 }}
                                    >
                                        <Container>
                                            <Label labelSize={12} style={{ color: "black", fontFamily: medium }} >{item.Name}</Label>
                                            <Container containerStyle={{ flexDirection: 'row', alignItems: "center" }} >
                                                <Container
                                                    containerStyle={{
                                                        flexDirection: 'row',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <Label labelSize={12} style={{ color: 'black', fontFamily: bold }}  >{item.SniperPoints}</Label>
                                                    <Label labelSize={12} style={{ color: 'black' }} mpLabel={{ ml: 10 }} >{item.Position}</Label>
                                                    <Label labelSize={15} style={{ color: 'green' }} mpLabel={{ ml: 10 }} >{item.PredictionPoints}</Label>
                                                    <Label labelSize={12} style={{ color: 'grey', fontFamily: regular }} > ({item.ActualPoints})</Label>
                                                </Container>
                                            </Container>
                                            <Container
                                                containerStyle={{ flexDirection: 'row' }}
                                            >
                                                <Label labelSize={12} style={{ color: 'black' }} >{item.Team}</Label>
                                                <Label labelSize={12} style={{ color: 'grey' }} > ({item.HomeOrAway})</Label>
                                            </Container>
                                            <Label labelSize={12} style={{ color: "grey" }} >{moment(item.GameDate).format('ddd')} {useTime(item.GameDate)} v {item.Opponent}</Label>
                                        </Container>
                                    </Container>
                                    <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} />
                                </>
                            })}
                        </View>
                    </Container>
                </ScrollView>
            </View>
        </ScrollView>
    </MainContainer>
}
export default LiveMatchDetailScreen;