import { firebase } from '@react-native-firebase/dynamic-links';
import React from 'react';
import { Alert, FlatList, ListRenderItem, RefreshControl, ScrollView } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';
import { greenColor, OrangeColor, PrimaryColor } from '../../../assets/colors';
import { medium, semiBold } from '../../../assets/fonts/fonts';
import { AppImages, AuthImages } from '../../../assets/images/map';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { useGameDetailsQuery, useJoinPrivateLeagueMutation, useLeagueDetailsQuery } from '../../../features/league';
import { leagueDetailsWatcher } from '../../../store/slices/selectedLeague';
import { LeagueDetailNav } from '../../../types/nav';
import ParticipantUserList from './ParticiapantList';
import TeamList from './TeamList';
import Share from 'react-native-share'
import moment from 'moment';
import { AppStack } from '../../../navigator/navActions';
import { screenWidth } from '../../../types/sizes';
import { addToMyPlayerWatcher, setMyTeamWatcher } from '../../../store/slices/myPlayerList';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { UserResponse } from '../../../types/responseTypes';
import { RootState } from '../../../store';


interface props extends LeagueDetailNav {

}

const LeagueDetailScreen: React.FC<props> = ({
    navigation,
    route
}) => {

    let newData = {
        league_id: route.params?.league_id,
        week_id: route.params?.week_id,
    }
    console.log('newData', newData)

    const { data: LeagueDetails, isLoading: loadingForLeagueDetail, refetch, error: leagueDetailsError } = useLeagueDetailsQuery(route.params?.league_id)

    const { data: GameDetails, isLoading, error, isFetching, refetch: refetchGameDetails } = useGameDetailsQuery<any>(newData, {
        refetchOnMountOrArgChange: true
    })
    const [joinLeagueWatcher, { data: joinLeagueRes, isLoading: joinLeagueLoading }] = useJoinPrivateLeagueMutation<any>()
    const user: UserResponse = useSelector((store: RootState) => store.auth.user)

    // const { dateText, matchDate, weekText, isStarted } = useGetMatchStatus(LeagueDetails?.week, LeagueDetails?.deadline)

    const dispatch = useDispatch()

    console.log('LeagueDetails', JSON.stringify(LeagueDetails))
    console.log('error', JSON.stringify(error))

    React.useLayoutEffect(() => {
        return (
            navigation.setOptions({
                ...LeagueDetails != undefined ? {
                    headerRight: () => {
                        return <Container
                            containerStyle={{
                                flexDirection: "row",
                                alignItems: "center"
                            }}
                            mpContainer={{ mt: 5 }}
                        >
                            <Btn
                                title="Share League"
                                labelSize={12}
                                labelStyle={{
                                    color: 'white'
                                }}
                                radius={8}
                                mpBtn={{ ph: 10 }}
                                btnStyle={{
                                    backgroundColor: OrangeColor
                                }}
                                onPress={() => {
                                    joinTeamCode()
                                    // navigation.navigate('InviteFriend',{
                                    //     week_id:LeagueDetails?.week[0]?.week_id,
                                    //     league_id:LeagueDetails?.league_id
                                    // })
                                }}
                            />
                        </Container>
                    }
                } : null
            })
        )
    }, [LeagueDetails])


    const createLink = async () => {
        const link = await firebase.dynamicLinks().buildShortLink({
            link: `https://fantasysniper?league_id=${LeagueDetails?.league_id}&week_id=${LeagueDetails?.week[0]?.week_id}`,
            android: {
                packageName: 'com.fantastysport',
            },
            domainUriPrefix: 'https://fantasysport.page.link',
            social: {
                title: 'Join NFL Vip League',
                descriptionText: 'Join League and create your team match to get your rank on the top of the NFL League',
                imageUrl: 'https://clutchpoints.com/wp-content/uploads/2021/05/NFL-Tom-Brady-Peyton-Manning-Joe-Montana.jpg'
            }
        });
        return link;
    }

    async function joinTeamCode() {
        const url = await createLink();
        console.log('url==>', url);
        Share.open({
            title: "Fantasy sniper app",
            message: `You are invited for League.`,
            url: url,
        })
            .then((res) => {
                console.log("share res", res);
            })
            .catch((err) => {
                err && console.log(err);
            });
    }


    const renderItem: ListRenderItem<any> = ({ item, index }) => {
        console.log(item)
        return (
            <ParticipantUserList
                {...item}
                onPressTeamHandler={() => {
                    if (item.is_game_created) {
                        console.log(LeagueDetails)
                        dispatch(leagueDetailsWatcher({ ...LeagueDetails }))
                        navigation.navigate('TeamDetail', {
                            team_id: item.team_id,
                            fromOtherUser: true,
                            user_id: item.user_id
                        })
                    } else {
                        Alert.alert("Fantasy sniper", 'This participant user have not created match for league yet.')
                    }
                }}
            />
        )
    }

    const renderTeamList = () => {
        return (
            <Container
                containerStyle={{
                    backgroundColor: 'white',
                    elevation: 1,
                    borderRadius: 2
                }}
                mpContainer={{ mt: 4, mh: 20 }}
            >
                <FlatList
                    data={GameDetails}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => `Winners${index.toString()}`}
                />
            </Container>
        )
    }

    let imageType = LeagueDetails?.team_logo?.split('.').pop() == 'svg';


    console.log('GameDetails', JSON.stringify(GameDetails))

    const JoinLeagueHandler = () => {
        let formData = new FormData()
        formData.append('unique_code', '')
        formData.append('week_id', route.params?.week_id)
        formData.append('type', 'public')
        formData.append('league_id', route.params?.league_id)
        console.log("data", JSON.stringify(formData))
        joinLeagueWatcher(formData).unwrap().then(() => {
            // navigation.dispatch(AppStack)
            navigation.navigate('tabs', {
                screen: 'MyLeague'
            })
        })
    }

    const matchDetailHandler = () => {
        if (LeagueDetails?.is_game_created) {
            if (LeagueDetails.participant_user <= 2) {
                Alert.alert('Fantasy sniper', 'Wait for join other players!')
            } else {
                navigation.navigate('GameDetail', {
                    league_id: LeagueDetails?.league_id,
                    week_id: LeagueDetails?.week[0].week_id,
                    league_name: LeagueDetails?.name,
                    my_team_id: LeagueDetails?.team_id
                })
            }
        } else {
            Alert.alert('Fantasy sniper', 'You should join the league to see Match detail!')
        }
    }
    // const { dateText, matchDate, weekText } = LeagueDetails?.league_flag
    return (
        <MainContainer
            loading={loadingForLeagueDetail || isLoading}
            successMessage={joinLeagueRes?.message}
            absoluteModalLoading={joinLeagueLoading}
        >
            <ScrollView
                contentContainerStyle={{ paddingBottom: 100 }}
                refreshControl={
                    <RefreshControl
                        refreshing={isFetching}
                        onRefresh={() => {
                            refetch()
                            refetchGameDetails()
                        }}
                    />
                }
            >
                {
                    LeagueDetails?.scoring_system == 'SNIPER+' &&
                        LeagueDetails?.isPlayerCreated == false ?
                        <Container
                            containerStyle={{
                                backgroundColor: 'white',
                                elevation: 1,
                                borderRadius: 4
                            }}
                            mpContainer={{ mt: 10, mh: 15, pv: 5 }}
                        >

                            <Container
                                containerStyle={{
                                    flexDirection: 'row',
                                    // alignItems: 'center',
                                    // justifyContent: "center",
                                    maxWidth: screenWidth * 0.70
                                }}
                                mpContainer={{ mt: 5, ml: 10 }}
                            >
                                <Label
                                    labelSize={14}
                                    textColor={OrangeColor}
                                >You must need to create Lineup for SNIPER+</Label>
                                <Btn
                                    title="Create"
                                    onPress={() => {
                                        dispatch(leagueDetailsWatcher({ ...LeagueDetails }))
                                        dispatch(addToMyPlayerWatcher([]))
                                        dispatch(setMyTeamWatcher([]))
                                        navigation.navigate('ShowPlayer')
                                    }}
                                    btnStyle={{
                                        backgroundColor: 'white',
                                        borderWidth: 1,
                                        borderColor: OrangeColor,
                                        borderRadius: 10,
                                        // width:100,
                                        // alignSelf:'center',
                                        // position:"absolute",
                                        // top:-10,
                                        height: 25
                                    }}
                                    mpBtn={{ mh: 10, ph: 10, mt: 2 }}
                                    labelSize={12}
                                    textColor={OrangeColor}
                                />
                            </Container>

                        </Container>
                        : null
                }
                <Container
                    containerStyle={{
                        backgroundColor: 'white',
                        marginTop: 10,
                        marginHorizontal: 15,
                        elevation: 1,
                        borderRadius: 5
                    }}
                    mpContainer={{ pv: 10, ph: 10 }}
                >
                    {
                        LeagueDetails?.is_your_league ?
                            <Container containerStyle={{
                                flexDirection: 'row'
                            }}>
                                <Img
                                    imgSrc={AppImages.league_icon}
                                    imgStyle={{
                                        width: 40,
                                        height: 40,
                                        resizeMode: 'contain',
                                    }}
                                />
                                <Container
                                    containerStyle={{
                                        flex: 0.8
                                    }}
                                    mpContainer={{ ml: 10 }}
                                >
                                    <Label
                                        labelSize={12}
                                        textColor='grey'
                                        // mpLabel={{ pl: 10 }}
                                        style={{ fontFamily: medium }}
                                    >Created by you</Label>
                                    <Label style={{
                                        fontFamily: medium
                                    }}
                                        labelSize={18}
                                        textColor='black'
                                        numberOfLines={2}
                                    >{LeagueDetails?.name}</Label>
                                </Container>
                            </Container>
                            : <Container containerStyle={{
                                flexDirection: 'row'
                            }}>
                                <Img
                                    imgSrc={AppImages.green_logo}
                                    imgStyle={{
                                        width: 40,
                                        height: 40,
                                        resizeMode: 'contain',
                                    }}
                                />
                                <Container
                                    containerStyle={{
                                        flex: 0.8
                                    }}
                                    mpContainer={{ ml: 10 }}
                                >
                                    <Label
                                        labelSize={12}
                                        textColor='grey'
                                        // mpLabel={{ pl: 10 }}
                                        style={{ fontFamily: medium }}
                                    >Created by {LeagueDetails?.user_name}</Label>
                                    <Label style={{
                                        fontFamily: medium
                                    }}
                                        labelSize={18}
                                        textColor='black'
                                        numberOfLines={2}
                                    >{LeagueDetails?.name}</Label>
                                </Container>
                            </Container>
                    }
                    <Label
                        mpLabel={{ mt: 5 }}
                        labelSize={15}
                    >Scope: {LeagueDetails?.week_type == 'singleWeek' ? `Week #${LeagueDetails.week[0]?.week_no}` : 'Multiple games'}</Label>
                    <Label
                        labelSize={15}
                        mpLabel={{ mt: 5 }}
                    >Scoring system: {LeagueDetails?.scoring_system}</Label>
                    <Label
                        labelSize={14}
                        style={{ color: 'black' }}
                        mpLabel={{ mt: 5 }}
                    >{`${LeagueDetails?.league_flag?.dateText}: ${moment(LeagueDetails?.league_flag?.matchDate).format('MMM D, LT')}`}</Label>
                    <Label
                        style={{
                            color: "green",
                        }}
                        labelSize={14}
                        mpLabel={{ mt: 5 }}
                    >{LeagueDetails?.league_flag?.weekText}</Label>
                    {/* {
                        LeagueDetails?.participant_user == LeagueDetails?.max_participant ? */}
                    {
                        LeagueDetails?.scoring_system == 'SNIPER' ?
                            <Btn
                                title='Match detail'
                                onPress={() => {
                                    matchDetailHandler()
                                }}
                                btnStyle={{
                                    backgroundColor: OrangeColor,
                                    width: 85, height: 30,
                                    borderRadius: 5,
                                    elevation: 1,
                                    position: 'absolute',
                                    right: 10,
                                    bottom: 10,
                                }}
                                textColor="white"
                                mpBtn={{ ml: 10 }}
                            /> : null
                    }
                    {/* : null
                    } */}
                    <Container containerStyle={{
                        top: 10,
                        position: 'absolute',
                        right: 10,
                        justifyContent: "center",
                        alignItems: "center"
                    }} >
                        <Img
                            imgSrc={AppImages.team}
                            width={40} height={40}
                            imgStyle={{
                                resizeMode: 'contain',
                            }}
                        />
                        <Label
                            labelSize={16}
                            style={{
                                fontFamily: medium
                            }}
                            mpLabel={{ mt: 4 }}
                        >{!LeagueDetails?.participant_user ? 0 : LeagueDetails?.participant_user}/{LeagueDetails?.max_participant}</Label>
                    </Container>
                    {
                        LeagueDetails?.scoring_system == 'SNIPER+' &&
                            LeagueDetails?.isPlayerCreated == true ?
                            <Container containerStyle={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }} >
                                <Btn
                                    title='View Lineup'
                                    onPress={() => {
                                        dispatch(leagueDetailsWatcher({ ...LeagueDetails }))
                                        navigation.navigate('ShowLeagueLineup')
                                    }}
                                    btnStyle={{
                                        borderWidth: 1,
                                        backgroundColor: 'white',
                                        borderRadius: 4,
                                        borderColor: PrimaryColor,
                                        width: screenWidth * 0.50
                                    }}
                                    mpBtn={{ mt: 10 }}
                                    labelSize={14}
                                />
                                <Btn
                                    title='Match detail'
                                    onPress={() => {
                                        matchDetailHandler()
                                    }}
                                    btnStyle={{
                                        // borderWidth: 1,
                                        backgroundColor: OrangeColor,
                                        // borderRadius: 4,
                                        // borderColor: PrimaryColor,
                                        width: screenWidth * 0.30,
                                        borderRadius: 4
                                    }}
                                    mpBtn={{ mt: 10 }}
                                    labelSize={14}
                                    textColor='white'
                                />
                            </Container>
                            : null
                    }
                </Container>
                {/* {
                    LeagueDetails?.you_join_league ?

                        LeagueDetails?.is_game_created ?
                            <Btn
                                title='View team'
                                onPress={() => {
                                    // goToTeamDetail()
                                }}
                                btnStyle={{
                                    backgroundColor: 'white',
                                    borderWidth: 1,
                                    borderColor: PrimaryColor,
                                    borderRadius: 10,
                                    position: "absolute",
                                    right: 10,
                                    bottom: 6
                                }}
                                btnHeight={25}
                                textColor={PrimaryColor}
                                labelSize={10}
                                mpBtn={{ ph: 10 }}
                            /> :
                            <Btn
                                title='Create team'
                                onPress={() => {
                                    // createMatchHandler()
                                }}
                                btnStyle={{
                                    backgroundColor: 'white',
                                    borderWidth: 1,
                                    borderColor: 'green',
                                    borderRadius: 10,
                                    position: "absolute",
                                    right: 10,
                                    bottom: 6
                                }}
                                btnHeight={25}
                                textColor='green'
                                labelSize={10}
                                mpBtn={{ ph: 10 }}
                            /> : null
                } */}
                {
                    LeagueDetails?.you_join_league ?
                        <Container containerStyle={{
                            // borderTopWidth: 1,
                            justifyContent: "center",
                            borderRadius: 4,
                            borderColor: 'grey',
                            backgroundColor: 'white',
                            elevation: 2
                        }}
                            height={45}
                            mpContainer={{ ph: 10, mt: 10, mh: 15 }}
                        // onPress={() => {
                        //     navigation.navigate('TeamDetail', {
                        //         team_id: LeagueDetails?.team_id
                        //     })
                        // }}
                        >
                            <Container
                                containerStyle={{
                                    flexDirection: 'row',
                                    alignItems: "center"
                                }}
                            >
                                {
                                    imageType ?
                                        <SvgUri
                                            width={25}
                                            height={28}
                                            uri={LeagueDetails?.team_logo || ''}
                                        />
                                        :
                                        LeagueDetails?.team_logo ?
                                            <Img
                                                imgSrc={{ uri: LeagueDetails?.team_logo }}
                                                imgStyle={{ borderRadius: 25 }}
                                                width={28} height={28} />
                                            :
                                            <Container
                                                containerStyle={{
                                                    borderRadius: 100,
                                                    justifyContent: 'center', alignItems: 'center',
                                                    overflow: 'hidden',
                                                    backgroundColor: 'white',
                                                    borderWidth: 3,
                                                    borderColor: 'white'
                                                }}
                                                width={40} height={40}
                                            >
                                                <Ionicons
                                                    name='person'
                                                    size={25}
                                                    color='grey'
                                                />
                                            </Container>
                                }
                                <Label
                                    mpLabel={{ ml: 10 }}
                                    labelSize={18}
                                >{LeagueDetails?.team_name}</Label>
                            </Container>
                            {
                                LeagueDetails?.is_game_created ?
                                    <Label
                                        style={{
                                            position: 'absolute',
                                            right: 10,
                                            color: "green"
                                        }}
                                        labelSize={14}
                                        onPress={() => {
                                            dispatch(leagueDetailsWatcher({ ...LeagueDetails }))
                                            navigation.navigate('TeamDetail', {
                                                team_id: LeagueDetails?.team_id,
                                                user_id: user.id
                                            })
                                        }}
                                    >View</Label>
                                    :
                                    <Label
                                        style={{
                                            position: 'absolute',
                                            right: 10,
                                            color: "green",
                                        }}
                                        labelSize={14}
                                        mpLabel={{ mt: 5 }}
                                        onPress={() => {
                                            dispatch(leagueDetailsWatcher({ ...LeagueDetails, isFromEdit: false }))
                                            dispatch(addToMyPlayerWatcher([]))
                                            dispatch(setMyTeamWatcher([]))
                                            if (LeagueDetails.scoring_system == 'SNIPER+') {
                                                navigation.navigate("JoinSniperPlusLeague")
                                            } else {
                                                navigation.navigate('CreateMatch')
                                            }
                                        }}
                                    >Create team</Label>
                            }
                        </Container>
                        : null
                }

                {/* // weekText == 'Completed' ? null : */}
                {LeagueDetails?.you_join_league ? null
                    :
                    LeagueDetails?.scoring_system == 'SNIPER+' && !LeagueDetails?.isPlayerCreated && !LeagueDetails?.you_join_league ? null :
                        <Container
                            mpContainer={{ mt: 10 }}
                            containerStyle={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: "center"
                            }}
                        >
                            <Label
                                labelSize={15}
                                style={{
                                    color: 'black',
                                    fontFamily: semiBold
                                }}
                            >Do you want to join League ? </Label>
                            <Btn
                                title='Join'
                                onPress={() => {
                                    if (LeagueDetails?.scoring_system == 'SNIPER+') {
                                        dispatch(leagueDetailsWatcher({ ...LeagueDetails }))
                                        navigation.navigate('ShowLeagueLineup')
                                    } else {
                                        JoinLeagueHandler()
                                    }
                                }}
                                btnStyle={{
                                    backgroundColor: greenColor,
                                    width: 60, height: 30,
                                    borderRadius: 20,
                                    elevation: 1
                                }}
                                textColor="white"
                                mpBtn={{ ml: 10 }}
                            />
                        </Container>
                }
                <Label
                    labelSize={20}
                    mpLabel={{ mt: 10, ml: 15, mb: 10 }}
                >Games: </Label>
                <FlatList
                    data={LeagueDetails?.week[0]?.schedule}
                    renderItem={({ item }) => {
                        return <TeamList
                            {...item}
                        // onPress={() => {
                        //     dispatch(selecteSchedule(index))
                        // }}
                        />
                    }}
                    keyExtractor={(item, index) => `${index.toString()}`}
                    ListFooterComponent={() => <Container mpContainer={{ mb: 10 }} />}
                    ItemSeparatorComponent={() => <Container mpContainer={{ mv: 5 }} />}
                    style={{ marginTop: 10 }}
                />
                <Label
                    labelSize={20}
                    mpLabel={{ mt: 10, ml: 15, mb: 10 }}
                >Participants: </Label>
                {renderTeamList()}
            </ScrollView>
        </MainContainer>
    )
}
export default LeagueDetailScreen;