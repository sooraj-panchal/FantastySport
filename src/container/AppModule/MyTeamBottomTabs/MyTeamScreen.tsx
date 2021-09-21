import React, { useRef, useState } from 'react';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Label from '../../../components/Label';
import { greenColor, OrangeColor, PrimaryColor } from '../../../assets/colors';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ListRenderItem, View } from 'react-native';
import MyPlayersList from '../../../components/MyPlayersList';
import Img from '../../../components/Img';
import { AppImages } from '../../../assets/images/map';
import { LeaguePlayerTypes, PlayerPositionTypes } from '../../../types/flatListTypes';
import { myPlayers, positions, positionsLength } from '../../../utils/jsonArray'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../types/reduxTypes';
import moment from 'moment';
import { useTime } from '../../../utils/timeZone';
import { screenWidth } from '../../../types/sizes';
import DEFPositionModal from '../../../components/Modals/DEFPostionModal';
import { Modalize } from 'react-native-modalize';
const MyTeamScreen: React.FC<navigationProps> = ({
    navigation
}) => {
    const myPlayerListArray: PlayerPositionTypes[] = useSelector((state: RootState) => state.myPlayer.data)
    const [myPlayerListData, setMyPlayerListData] = React.useState<PlayerPositionTypes[] | any>(myPlayers)
    const [totalPredictionPoints, setTotalPredictionPoints] = React.useState<number | any>(0.00)
    const [totalProjectedPoints, setTotalProjectedPoints] = React.useState<number | any>(0.00)
    const [totalSniperPoints, setTotalSniperPoints] = React.useState<number | any>(0.00)
    const [totalActualPoints, setTotalActualPoints] = React.useState<number | string>(0.00)
    const defModalRef = useRef<Modalize>(null)
    React.useEffect(() => {
        let groupedPlayers: any = {}
        positions.forEach((position) => {
            groupedPlayers[position] = myPlayerListArray.filter((i) => {
                return i.Position == position
            })
            for (let i = groupedPlayers[position].length; i < positionsLength[position]; i++) {
                groupedPlayers[position].push(null)
            }
        })
        totalPointsHandler()
        setMyPlayerListData(groupedPlayers)
    }, [myPlayerListArray])

    const totalPointsHandler = () => {
        // let { PredictionPoints } =
        //     myPlayerListArray.reduce((a, b) => {
        //         return ({
        //             PredictionPoints: Number(a.PredictionPoints) + Number(b.PredictionPoints),
        //             FantasyPointsDraftKings: Number(a.FantasyPointsDraftKings) + Number(b.FantasyPointsDraftKings)
        //         })
        //     });
        // const PredictionPoints = myPlayerListArray.reduce(function (a, b) {
        //     return a + Number(b.PredictionPoints);
        // }, 0);
        // const FantasyPointsDraftKings = myPlayerListArray.reduce(function (a, b) {
        //     return a + Number(b.FantasyPointsDraftKings);
        // }, 0);
        // const sniperPoints = myPlayerListArray.reduce(function (a, b) {
        //     return a + Number(b.SniperPoints);
        // }, 0);
        // setTotalPredictionPoints(Math.abs(PredictionPoints / 10).toFixed(2))
        // setTotalProjectedPoints(Math.abs(FantasyPointsDraftKings / 10).toFixed(2))
        // setTotalSniperPoints(Math.abs(sniperPoints / 10).toFixed(2))
        // setTotalActualPoints(Math.abs(FantasyPointsDraftKings / 10).toFixed(2))
    }

    React.useLayoutEffect(() => {
        return (
            navigation.setOptions({
                headerRight: () => {
                    return <Container
                        containerStyle={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                        mpContainer={{ mr: 15, mt: 5 }}
                    >
                        <Btn
                            title="Invite friends"
                            labelSize={12}
                            labelStyle={{
                                color: 'white'
                            }}
                            radius={8}
                            mpBtn={{ ph: 10, mr: 10 }}
                            btnStyle={{
                                backgroundColor: OrangeColor
                            }}
                            onPress={() => {
                                navigation.navigate('InviteFriend')
                            }}
                        />
                        <Ionicons
                            name="ios-settings"
                            size={22}
                            color='white'
                        />
                    </Container>
                }
            })
        )
    }, [])

    const renderItem = (item: PlayerPositionTypes, position: string) => {
        return <MyPlayersList
            Position={position}
            {...item}

        />
    }

    const renderListHeader = () => {
        return <>
            <Container containerStyle={{ flexDirection: "row", alignItems: "center" }}
                mpContainer={{ ml: 15, mt: 15 }}
            >
                <Label labelSize={15}  >Week 1</Label>
                <Ionicons
                    name="ios-chevron-forward"
                    size={20}
                    color="black"
                />
            </Container>
            <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} mpContainer={{ mv: 10, mh: 15 }} />
            <Container
                containerStyle={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}
                mpContainer={{ mh: 15 }}
            >
                <Img
                    imgSrc={AppImages.green_logo}
                    width={28} height={32} />
                <Container
                >
                    <Label labelSize={16} style={{ fontWeight: "bold", letterSpacing: 0.5 }}  >Adam's Team</Label>
                    <Label labelSize={14} style={{ letterSpacing: 0.5 }} >4-3-3 | - of 1</Label>
                </Container>
                <Container
                    containerStyle={{
                        alignItems: "flex-end"
                    }}
                >
                    <Label labelSize={16} style={{ fontWeight: "bold" }}  >Act {totalActualPoints}</Label>
                    <Label labelSize={14} style={{ letterSpacing: 0.5, color: OrangeColor }} >Fantasy sniper {totalSniperPoints}</Label>
                    <Label labelSize={14} style={{ letterSpacing: 0.5, color: OrangeColor }} >Points Prediction. {totalPredictionPoints}</Label>
                    <Label labelSize={14} style={{ letterSpacing: 0.5, color: greenColor }} >Proj. {totalProjectedPoints}</Label>
                </Container>
            </Container>
            <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} mpContainer={{ mv: 10, mh: 15 }} />
            <Btn
                title="Edit Team"
                labelSize={14}
                labelStyle={{
                    color: 'white'
                }}
                radius={8}
                mpBtn={{ mr: 10 }}
                btnStyle={{
                    backgroundColor: PrimaryColor,
                    width: 85,
                    alignSelf: "flex-end"
                }}
                onPress={() => {
                    navigation.navigate('EditTeamInfo')
                    // navigation.navigate('AddPlayer')
                }}
            />
            {/* <Container
                containerStyle={{
                    borderBottomWidth: 1,
                    borderTopWidth: 1,
                    borderColor: 'lightgrey',
                    flexDirection: "row",
                    alignItems: 'center'
                }}
                mpContainer={{ pv: 10, ph: 15, mt: 10 }}
            >
                <Label labelSize={16} style={{ width: 225 }} >Offense</Label>
                <Label labelSize={15} style={{ letterSpacing: 0.5, width: 45, textAlign: 'center' }}  >Proj</Label>
                <Label labelSize={15} style={{ letterSpacing: 0.5, width: 75, textAlign: 'center' }} >Pred</Label>
            </Container> */}
        </>
    }
    return <MainContainer
        style={{ backgroundColor: 'white' }}
    >
        {renderListHeader()}
        {/* <ScrollView>
            {
                Object.keys(myPlayerListData).map((position) => {
                    return <View>
                        {
                            myPlayerListData[position].map((item: LeaguePlayerTypes) => {
                                return renderItem(item, position)
                            })
                        }
                    </View>
                })
            }
        </ScrollView> */}
        <ScrollView horizontal={true} >
            <View>
                <Container
                    containerStyle={{
                        borderBottomWidth: 1,
                        borderTopWidth: 1,
                        borderColor: 'lightgrey',
                        flexDirection: "row",
                        alignItems: 'center'
                    }}
                    mpContainer={{ pv: 10, ph: 15, mt: 10 }}
                >
                    <Label labelSize={16} style={{ width: screenWidth * 0.60 }} >Offense</Label>
                    <Label labelSize={15} style={{ letterSpacing: 0.5, width: screenWidth * 0.20, textAlign: 'center' }}  >Proj</Label>
                    <Label labelSize={15} style={{ letterSpacing: 0.5, width: screenWidth * 0.15, textAlign: 'center' }} >Pred</Label>
                    <Label labelSize={15} style={{ letterSpacing: 0.5, width: 75, textAlign: 'center' }} >Sniper</Label>
                </Container>
                <ScrollView>
                    {
                        Object.keys(myPlayerListData).map((position, index) => {
                            return (
                                myPlayerListData[position].map((item: LeaguePlayerTypes) => {
                                    return renderItem(item, position)
                                })
                            )
                        })
                    }
                </ScrollView>
            </View>
        </ScrollView>
        {/* <DEFPositionModal
            modalizeRef={defModalRef}
            closeModal={()=>{
                defModalRef.current?.close()
            }}
        /> */}
    </MainContainer>
}
export default MyTeamScreen;