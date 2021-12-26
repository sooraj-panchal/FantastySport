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
import { useGetTeamDetailByLeagueQuery, useTeamDetailForSniperPlusQuery } from '../../../features/league';
import { RootState } from '../../../store';
import { SvgUri } from 'react-native-svg';
import { addToMyPlayerWatcher, setMyTeamWatcher } from '../../../store/slices/myPlayerList';
import { medium } from '../../../assets/fonts/fonts';
import { View } from 'react-native';
import { leagueDetailsWatcher } from '../../../store/slices/selectedLeague';
import { imageBaseUrl } from '../../../utils/globals';
const TeamDetailScreen: React.FC<TeamDetailNav> = ({
    navigation,
    route
}) => {

    const dispatch = useDispatch()
    const { leagueDetails } = useSelector((state: RootState) => state.selectedLeague)

    const { data: getTeamData, isLoading, isFetching } = useGetTeamDetailByLeagueQuery(route.params?.team_id, {
        // refetchOnMountOrArgChange: true
        skip: leagueDetails?.scoring_system == 'SNIPER+'
    })

    const { data: getMyTeamDataForSniperPlus, isLoading: isLoadingForTeamDetail, isFetching: isFetchingForTeamDetail, error } = useTeamDetailForSniperPlusQuery({
        team_id: route.params?.team_id,
        user_id: route.params?.user_id
    }, {
        // refetchOnMountOrArgChange: true
        skip: leagueDetails?.scoring_system == 'SNIPER'
    })
    console.log('route.params', {
        team_id: route.params?.team_id,
        user_id: route.params?.user_id
    })

    const getMyTeam = useMemo(() => {
        if (leagueDetails?.scoring_system == 'SNIPER+') {
            return getMyTeamDataForSniperPlus;
        } else {
            return getTeamData
        }
    }, [leagueDetails, getMyTeamDataForSniperPlus, getTeamData])

    console.log('leagueDetails?.scoring_system', leagueDetails)

    const imageType = useMemo(() => {
        return getMyTeam?.team_logo?.split('.').pop() == 'svg';
    }, [getMyTeam])

    // console.log('error', error)

    React.useLayoutEffect(() => {
        return (
            navigation.setOptions({
                headerTitle: leagueDetails?.name || '',
                headerRight: () => {
                    if (!route.params?.fromOtherUser) {
                        if (leagueDetails?.scoring_system == 'SNIPER+') {
                            return (
                                <Btn
                                    title="Edit Points"
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
                                        let data = getMyTeam?.players?.map((item, index) => {
                                            if (item.Position == 'DEF') {

                                            }
                                            return {
                                                ...item,
                                                isSelected: true,
                                                FantasyPointsDraftKings: item.ProjectionPoints
                                            }
                                        })
                                        // dispatch(addToMyPlayerWatcher(data))
                                        // navigation.navigate('updateTeam', {
                                        //     team_id: route.params?.team_id
                                        // })
                                        dispatch(leagueDetailsWatcher({
                                            ...leagueDetails,
                                            team_name: getMyTeam?.team_name,
                                            team_logo: getMyTeam?.team_logo,
                                            isFromEdit:true
                                        }))
                                        dispatch(setMyTeamWatcher({ data: data, isFromEdit: true }))
                                        navigation.navigate('AddPlayerPoint')
                                    }}
                                />
                            )
                        } else
                            return (
                                <Btn
                                    title="Edit Lineup"
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
                            )
                    }
                }
            })
        )
    }, [getMyTeam])

    console.log('getMyTeam', getMyTeam)

    return <MainContainer
        style={{ backgroundColor: 'white' }}
        loading={isLoading || isLoadingForTeamDetail}
        absoluteLoading={isFetching || isFetchingForTeamDetail}
    >
        {
            getMyTeam?.players?.length ?
                <ScrollView>
                    {
                        route.params?.fromOtherUser ? null :
                            <>
                                <Label
                                    labelSize={14}
                                    textColor={OrangeColor}
                                    mpLabel={{ mv: 4, ml: 15, mr: 10 }}
                                    style={{ fontFamily: medium, textAlign: 'center', }}
                                >You have chance to edit your lineup before match start. </Label>
                                <Container containerStyle={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}
                                    mpContainer={{ ml: 15, mt: 10 }}
                                >

                                    <Container containerStyle={{ flexDirection: 'row', alignItems: 'center' }} mpContainer={{ mr: 10 }} >
                                        {/* <Btn
                                            title="Edit team"
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
                                        /> */}
                                        {/* <Btn
                                            title="Edit Lineup"
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
                                        /> */}
                                    </Container>
                                </Container>
                            </>
                    }
                    <Container
                        containerStyle={{
                            flexDirection: "row",
                        }}
                        mpContainer={{ mh: 15, mt: 5, mb: 10 }}
                        height={80}
                    >
                        {imageType ?
                            <SvgUri
                                width={40}
                                height={40}
                                uri={`https://chessmafia.com/php/fantasy/public/uploads/${getMyTeam?.team_logo}` || 'dummy'}
                            />
                            :
                            getMyTeam?.team_logo ?

                                <Container
                                    containerStyle={{
                                        borderWidth: 1,
                                        borderColor: '#f2f2f2',
                                        justifyContent: 'center',
                                        alignItems: "center",
                                        borderRadius: 45,
                                        overflow: "hidden"
                                    }}
                                    width={45} height={45}
                                >
                                    <Img
                                        imgStyle={{ borderRadius: 40 }}
                                        width={45} height={45}
                                        imgSrc={{ uri: `${imageBaseUrl}${getMyTeam?.team_logo}` }} />
                                </Container>
                                :
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
                        <Container
                            mpContainer={{ ml: 10 }}
                            containerStyle={{ flex: 1 }}
                        >
                            <Label labelSize={14} style={{ maxWidth: '55%' }}  >{getMyTeam?.team_name}</Label>
                            {/* <Label labelSize={14} style={{ letterSpacing: 0.5 }} >4-3-3 | - of 1</Label> */}
                            <Container containerStyle={{ flexDirection: "row", alignItems: "center" }} >
                                <Label labelSize={12}  >Week {leagueDetails.week[0]?.week_no}</Label>
                                <Ionicons
                                    name="ios-chevron-forward"
                                    size={20}
                                    color="black"
                                />
                            </Container>
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
                    {/* <ScrollView horizontal={true} > */}
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
                            let { photoUrl, Name, Position, SniperPoints, PredictionPoints, Accuracy, ProjectionPoints, ActualPoints, Team, HomeOrAway } = item
                            let imageType = photoUrl?.split('.').pop() == 'svg';
                            return <View key={index.toString()} >
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
                                        {/* <Container containerStyle={{ flexDirection: 'row', alignItems: "center", top: 2 }} >
                                        <Label labelSize={11} style={{ color: "grey" }} >{Team}</Label>
                                        <Label labelSize={11} style={{ color: "grey" }} mpLabel={{ ml: 4 }}  >{`(${HomeOrAway})`}</Label>
                                    </Container> */}
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
                            </View>
                        })}
                    </ScrollView>
                    {/* </ScrollView> */}
                </ScrollView>
                :
                <Label
                    labelSize={15}
                    style={{
                        textAlign: 'center',
                        marginTop: 10
                    }}
                >This user have not created game yet.</Label>
        }
    </MainContainer>
}
export default TeamDetailScreen;
