import React, { useEffect, useMemo } from 'react';
import Container from '../../../components/Container';
import MainContainer from '../../../components/MainContainer';
import { LiveMatchDetailNav } from '../../../types/nav';
import Label from '../../../components/Label';
import { greenColor, OrangeColor } from '../../../assets/colors';
import { ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native';
import * as Progress from 'react-native-progress';
import { screenWidth } from '../../../types/sizes';
import Img from '../../../components/Img';
import { bold, medium, regular } from '../../../assets/fonts/fonts';
import { useTeamMatchDetailsQuery } from '../../../features/league';
import { SvgUri } from 'react-native-svg';
import moment from 'moment'
import { useTime } from '../../../utils/timeZone';
import { imageBaseUrl } from '../../../utils/globals';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { SniperPlusPlayerList } from '../../../utils/jsonArray';
import { TeamMatchDetailsResponse } from '../../../types/responseTypes';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LiveMatchDetailScreen: React.FC<LiveMatchDetailNav> = ({
    navigation,
    route,
}) => {
    const { leagueDetails: { name, league_id, week, team_id, team_name, scoring_system } } = useSelector((state: RootState) => state.selectedLeague)

    const teamDetailParams = {
        team_id: team_id,
        op_team_id: route.params?.op_team_id,
    }
    const { data, isLoading, isFetching, error } = useTeamMatchDetailsQuery(teamDetailParams, {
        pollingInterval: 3000
    })

    console.log('teamDetailParams', teamDetailParams)

    const { player_position } = useMemo(() => {
        let sniperPlayerPosition = ['QB', 'WR', 'WR', 'WR', 'RB', 'RB', 'TE', 'W/R/T', 'K', 'DEF']
        let SniperPlusPlayerPosition = ['QB', 'QB', 'WR', 'WR', 'WR', 'WR', 'RB', 'RB', 'TE', 'TE', 'DEF', 'DEF']
        return {
            player_position: scoring_system == 'SNIPER+' ? SniperPlusPlayerPosition : sniperPlayerPosition
        }
    }, [data])


    // useEffect(() => {
    //     if (data?.length) {
    //         let modifyArray = [...data]
    //         if (data?.[0]?.user_id == 19) {
    //             modifyArray;
    //         } else {
    //             modifyArray?.reverse()
    //         }
    //         console.log('modifyArray', modifyArray)
    //     }
    // }, [data])



    console.log('data from teammatch compare', JSON.stringify(data))

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
                            alignItems: 'flex-end',
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
                            mpContainer={{ mt: 5 }}
                        >
                            <Container height={40} width={40}>
                                {
                                    data?.[0]?.image_type ?
                                        <SvgUri
                                            width={40}
                                            height={40}
                                            uri={`${imageBaseUrl}${data?.[0].team_logo}` || ''}
                                        />
                                        :
                                        // <Container
                                        //     containerStyle={{
                                        //         borderWidth: 1,
                                        //         borderColor: '#f2f2f2',
                                        //         justifyContent: 'center',
                                        //         alignItems: "center",
                                        //         borderRadius: 45,
                                        //         overflow: "hidden"
                                        //     }}
                                        //     width={45} height={45}
                                        // >
                                        data?.[0].team_logo ?
                                            <Img
                                                imgSrc={{ uri: `${imageBaseUrl}${data?.[0].team_logo}` || 'dummy' }}
                                                width={45} height={45}
                                                imgStyle={{ borderRadius: 45 }}
                                            /> :
                                            <Container
                                                containerStyle={{
                                                    borderWidth: 1,
                                                    borderColor: '#f2f2f2',
                                                    borderRadius: 40,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    overflow: 'hidden'
                                                }}
                                                width={45} height={45}
                                            >
                                                <Ionicons
                                                    name='person'
                                                    size={45}
                                                    color='grey'
                                                />
                                            </Container>
                                }
                            </Container>
                            <Label
                                labelSize={30}
                                style={{ color: "black" }}
                                mpLabel={{ ml: 15 }}

                            >{data?.[0].sniper_points?.toFixed(2)}</Label>
                        </Container>
                    </Container>
                    <Container
                        containerStyle={{
                            justifyContent: 'flex-end'
                        }}
                        mpContainer={{ mb: 10, mh: 20 }}
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
                            mpContainer={{ mt: 2 }}
                        >
                            <Label
                                labelSize={30}
                                style={{ color: "black" }}
                            >{data?.[1].sniper_points?.toFixed(0)}</Label>
                            {/* <Img
                                imgStyle={{ width: 35, height: 40 }}
                                imgSrc={AppImages.green_logo}
                                mpImage={{ ml: 10 }}
                            /> */}
                            <Container
                                mpContainer={{ ml: 15 }}
                            >
                                {
                                    data?.[1]?.image_type ?
                                        <SvgUri
                                            width={40}
                                            height={40}
                                            uri={`${imageBaseUrl}${data?.[1].team_logo}` || ''}
                                        />
                                        :
                                        data?.[1]?.team_logo ?
                                            <Img
                                                imgSrc={{ uri: `${imageBaseUrl}${data?.[1].team_logo}` || 'dummy' }}
                                                width={45} height={45}
                                                imgStyle={{ borderRadius: 45 }}
                                            /> :
                                            <Container
                                                containerStyle={{
                                                    borderWidth: 1,
                                                    borderColor: '#f2f2f2',
                                                    borderRadius: 40,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    overflow: 'hidden'
                                                }}
                                                width={45} height={45}
                                            >
                                                <Ionicons
                                                    name='person'
                                                    size={45}
                                                    color='grey'
                                                />
                                            </Container>
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
                    mpContainer={{ mt: 5, ml: 15 }}
                >
                    <Label
                        labelSize={16}
                        style={{ color: greenColor, fontFamily: medium }}
                    >{data?.[0].prediction_points}</Label>
                    <Label
                        labelSize={14}
                        style={{ color: OrangeColor, fontFamily: medium, width: 80, textAlign: 'center' }}
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
                    mpContainer={{ mt: 5, ml: 15 }}
                >
                    <Label
                        labelSize={16}
                        style={{ color: greenColor, fontFamily: medium }}
                    >{data?.[0].fantasyPoint?.toFixed(2)}</Label>
                    <Label
                        labelSize={14}
                        style={{ color: OrangeColor, fontFamily: medium, width: 80, textAlign: 'center' }}
                    >FanPts</Label>
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
            </Container >
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

    // const position  = 

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
                mpContainer={{ pv: 10, mt: 10 }}
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
                                player_position.map((item, index) => {
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
                                            justifyContent: 'flex-end',
                                            height: 80,
                                            alignItems: 'center',
                                        }}
                                        mpContainer={{ ml: 10 }}
                                    >
                                        <Container containerStyle={{ alignItems: 'flex-end' }} >
                                            <Label labelSize={12} style={{ color: "black", fontFamily: medium }} >{item.Name}</Label>
                                            <Container containerStyle={{ flexDirection: 'row', alignItems: "center" }} >
                                                <Container
                                                    containerStyle={{
                                                        flexDirection: 'row',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    {/* <Label labelSize={12} style={{ color: 'black', fontFamily: bold }}  >{item.SniperPoints}</Label> */}
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
                                        <Label labelSize={12} style={{ color: 'black', fontFamily: bold, position: 'absolute', left: 5 }}  >{item.SniperPoints}</Label>
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