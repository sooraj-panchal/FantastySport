import { firebase } from '@react-native-firebase/dynamic-links';
import React from 'react';
import { FlatList, ListRenderItem, ScrollView } from 'react-native';
import { SvgUri } from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { greenColor, OrangeColor } from '../../../assets/colors';
import { medium, semiBold } from '../../../assets/fonts/fonts';
import { AppImages } from '../../../assets/images/map';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { useGameDetailsQuery, useLeagueDetailsQuery } from '../../../features/league';
import useGetMatchStatus from '../../../hooks/matchStatus';
import { leagueDetailsWatcher } from '../../../store/slices/selectedLeague';
import { LeagueDetailNav } from '../../../types/nav';
import ParticipantUserList from './ParticiapantList';
import TeamList from './TeamList';
import Share from 'react-native-share'


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


    const { data: LeagueDetails, isLoading: loadingForLeagueDetail, error: leagueDetailError } = useLeagueDetailsQuery(route.params?.league_id)

    const { data: GameDetails, isLoading, error } = useGameDetailsQuery<any>(newData, {
        refetchOnMountOrArgChange: true
    })

    const { dateText, matchDate, weekText } = useGetMatchStatus(LeagueDetails?.week)

    const dispatch = useDispatch()

    // console.log('leagueDetailError', leagueDetailError)
    console.log('LeagueDetails', JSON.stringify(LeagueDetails))


    React.useLayoutEffect(() => {
        return (
            navigation.setOptions({
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
            })
        )
    }, [])


    const createLink = async () => {
        // let code = leagueDetails.unique_code
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

    return (
        <MainContainer loading={loadingForLeagueDetail || isLoading} >
            <ScrollView
                contentContainerStyle={{ paddingBottom: 100 }}
            >
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
                    >Scope: {LeagueDetails?.week_type == 'singleWeek' ? 'Single Game' : 'Multiple games'}</Label>
                    <Label
                        mpLabel={{ mt: 5 }}
                        labelSize={15}
                    >No. of Participant: {!LeagueDetails?.participant_user ? 0 : LeagueDetails?.participant_user}/{LeagueDetails?.max_participant}</Label>
                    {/* <Label>No. of. week: 4 Week</Label> */}
                    {/* <Label
                        labelSize={15}
                        mpLabel={{ mt: 5 }}
                    >Week no: {LeagueDetails?.week[0]?.week_no} Week</Label> */}

                    <Label
                        labelSize={14}
                        style={{ color: 'black' }}
                        mpLabel={{ mt: 5 }}
                    >{`${dateText}: ${matchDate}`}</Label>
                    <Label
                        style={{
                            color: "green",
                        }}
                        labelSize={14}
                        mpLabel={{ mt: 5 }}
                    >{weekText}</Label>
                    {
                        LeagueDetails?.is_game_created ?
                            <Btn
                                title='Match detail'
                                onPress={() => {
                                    navigation.navigate('GameDetail', {
                                        league_id: LeagueDetails?.league_id,
                                        week_id: LeagueDetails?.week[0].week_id,
                                        league_name: LeagueDetails?.name,
                                        my_team_id: LeagueDetails?.team_id
                                    })
                                }}
                                btnStyle={{
                                    backgroundColor: OrangeColor,
                                    width: 85, height: 30,
                                    borderRadius: 5,
                                    elevation: 1,
                                    position: 'absolute',
                                    right: 10,
                                    bottom: 10
                                }}
                                textColor="white"
                                mpBtn={{ ml: 10 }}
                            />
                            : null
                    }
                    <Img
                        imgSrc={AppImages.team}
                        width={40} height={40}
                        imgStyle={{
                            top: 10,
                            resizeMode: 'contain',
                            position: 'absolute',
                            right: 10
                        }}
                    />

                </Container>
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
                            onPress={() => {
                                navigation.navigate('TeamDetail', {
                                    team_id: LeagueDetails?.team_id
                                })
                            }}
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
                                        <Img
                                            imgSrc={{ uri: LeagueDetails?.team_logo || '' }}
                                            imgStyle={{ borderRadius: 25 }}
                                            width={28} height={28} />
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
                                            navigation.navigate('CreateMatch')
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
                                    // onPress={createMatchHandler}
                                    >Create team</Label>
                            }
                        </Container>
                        :
                        weekText == 'Completed' ? null :
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
                                        navigation.navigate('CreateTeam', {
                                            week_id: route.params?.week_id,
                                            type: 'public',
                                            league_id: route.params?.league_id
                                        })
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
                >Teams: </Label>
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