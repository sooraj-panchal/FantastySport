import React, { useMemo } from 'react';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import MainContainer from '../../../components/MainContainer';
import { TeamDetailNav } from '../../../types/nav';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Label from '../../../components/Label';
import { greenColor, OrangeColor, PrimaryColor } from '../../../assets/colors';
import { ScrollView } from 'react-native-gesture-handler';
import Img from '../../../components/Img';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTeamDetailByLeagueQuery } from '../../../features/league';
import { RootState } from '../../../store';
import { SvgUri } from 'react-native-svg';
import { addToMyPlayerWatcher } from '../../../store/slices/myPlayerList';
import { medium } from '../../../assets/fonts/fonts';
const TeamDetailScreen: React.FC<TeamDetailNav> = ({
    navigation,
    route
}) => {
    const dispatch = useDispatch()
    const { data: getMyTeam, isLoading, isFetching } = useGetTeamDetailByLeagueQuery(route.params?.team_id, {
        // refetchOnMountOrArgChange: true
    })
    const { leagueDetails } = useSelector((state: RootState) => state.selectedLeague)

    const imageType = useMemo(() => {
        return getMyTeam?.team_logo?.split('.').pop() == 'svg';
    }, [getMyTeam])

    React.useLayoutEffect(() => {
        return (
            navigation.setOptions({
                headerTitle: getMyTeam?.team_name || '',
            })
        )
    }, [getMyTeam])

    return <MainContainer
        style={{ backgroundColor: 'white' }}
        loading={isLoading}
        absoluteLoading={isFetching}
    >
        <ScrollView>
            {
                route.params?.fromOtherUser ? null :
                    <>
                        <Label
                            labelSize={12}
                            textColor={OrangeColor}
                            mpLabel={{ mt: 4, ml: 15 }}
                            style={{ fontFamily: medium, justifyContent: 'center', }}
                        >You can able to edit the match before the match start. </Label>
                        <Container containerStyle={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}
                            mpContainer={{ ml: 15, mt: 10 }}
                        >
                            <Container containerStyle={{ flexDirection: "row", alignItems: "center" }} >
                                <Label labelSize={15}  >Week {leagueDetails.week[0]?.week_no}</Label>
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
                                        console.log(leagueDetails)
                                        navigation.navigate('EditTeamInfo', {
                                            team_id: leagueDetails?.team_id,
                                            team_name: leagueDetails?.team_name,
                                            team_logo: leagueDetails?.team_logo,
                                        })
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
                                                isSelected: true,
                                                FantasyPointsDraftKings: item.ProjectionPoints
                                            }
                                        })
                                        dispatch(addToMyPlayerWatcher(data))
                                        navigation.navigate('updateTeam', {
                                            team_id: route.params?.team_id
                                        })
                                    }}
                                />
                            </Container>
                        </Container>
                    </>
            }
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
