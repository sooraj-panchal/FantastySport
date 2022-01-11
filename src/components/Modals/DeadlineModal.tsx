import React, { useEffect, useRef, useState } from 'react';
import Container from '../Container';
import Label from '../Label';
import Img from '../Img';
import { medium } from '../../assets/fonts/fonts';
import { AppImages } from '../../assets/images/map';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { homeNavProps } from '../../types/nav';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { useLeagueDetailsQuery } from '../../features/league';
import { useNavigation } from '@react-navigation/native';
import useGetMatchStatus from '../../hooks/matchStatus';
import { useDispatch } from 'react-redux';
import { leagueDetailsWatcher } from '../../store/slices/selectedLeague';
import { SvgUri } from 'react-native-svg';
import PushNotification from 'react-native-push-notification'
import moment from 'moment';
import { addToMyPlayerWatcher, setMyTeamWatcher } from '../../store/slices/myPlayerList';
import MainContainer from '../MainContainer';
import { screenWidth } from '../../types/sizes';
import { OrangeColor } from '../../assets/colors';
import Btn from '../Btn';

interface props {
    // closeModal?: (league_id: any, week_id: any) => void,
    modalizeRef: React.Ref<Modalize> | any
}


const DeadlineModal: React.FC<props> = ({
    // modalizeRef,
}) => {
    const modalizeRef = useRef<Modalize>(null);

    const navigation = useNavigation<homeNavProps>()
    const [leagueId, setLeagueId] = useState<string | any>('')
    const { data: LeagueDetails, isLoading: loadingForLeagueDetail, error: leagueDetailError, refetch } = useLeagueDetailsQuery(leagueId, {
        skip: leagueId ? false : true
    })
    const dispatch = useDispatch()
    let imageType = LeagueDetails?.team_logo?.split('.').pop() == 'svg';


    console.log('LeagueDetails', LeagueDetails)

    const closeModal = () => {
        modalizeRef.current?.close()
    }

    useEffect(() => {
        PushNotification.popInitialNotification((notification) => {
            console.log('Initial Notification', notification);
            if (notification != undefined) {
                modalizeRef.current?.open()
                setLeagueId(7)
                refetch()
            }
        });
    }, [])

    // useEffect(() => {
    //     modalizeRef.current?.open()
    // }, [])

    PushNotification.configure({
        onNotification: function (notification) {
            console.log("NOTIFICATION DATA:", notification);
            if (notification.data?.data != undefined) {
                const { flag, league_id } = JSON.parse(notification.data?.data)
                setLeagueId(league_id || 7)
                refetch()
            }
            // const { userInteraction, foreground } = notification;
            modalizeRef.current?.open()
        }
    });


    const renderChildren = () => {
        return (
            <MainContainer
                loading={loadingForLeagueDetail}
                style={{ backgroundColor: 'white' }}
            >
                <Container
                    containerStyle={{
                        backgroundColor: 'white',
                        marginTop: 5,
                        marginHorizontal: 15,
                        // elevation: 1,
                        borderRadius: 5
                    }}
                    mpContainer={{ pv: 10 }}
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
                        style={{
                            color: "red",
                        }}
                        labelSize={18}
                        mpLabel={{ mt: 10 }}
                    >{LeagueDetails?.league_flag?.weekText}</Label>
                    <Container containerStyle={{
                        flexDirection: 'row',
                        alignItems: "center"
                    }}
                        mpContainer={{ mt: 10 }}
                    >
                        <Ionicons
                            name='md-time'
                            size={25}
                            color='red'
                            style={{ top: 2 }}
                        />
                        <Label
                            labelSize={18}
                            style={{ color: 'black' }}
                            mpLabel={{ ml: 5 }}
                        >{`${'Deadline date'}: ${moment(LeagueDetails?.league_flag?.matchDate).format('MMM D, LT')}`}</Label>
                    </Container>
                    <Ionicons
                        name='md-close'
                        size={30}
                        color='red'
                        style={{
                            top: 5,
                            position: 'absolute',
                            right: 5
                        }}
                        onPress={closeModal}
                    />
                </Container>
                {
                    LeagueDetails?.you_join_league ?
                        <Container containerStyle={{
                            // borderTopWidth: 1,
                            justifyContent: "center",
                            borderRadius: 4,
                            borderColor: 'lightgrey',
                            backgroundColor: 'white',
                            // elevation: 2,
                            borderWidth: 1,
                        }}
                            height={45}
                            mpContainer={{ ph: 10, mt: 10, mh: 15 }}
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
                                            const canEditLineUp: any = !LeagueDetails?.league_flag?.isStarted && !LeagueDetails?.league_flag?.isEnded
                                            console.log(canEditLineUp)
                                            dispatch(leagueDetailsWatcher({ ...LeagueDetails, canEditLineUp }))
                                            navigation.navigate('TeamDetail', {
                                                team_id: LeagueDetails?.team_id
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
                                            closeModal()
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
                {
                    LeagueDetails?.scoring_system == 'SNIPER+' &&
                        LeagueDetails?.isPlayerCreated == false ?
                        <Container
                            containerStyle={{
                                backgroundColor: 'white',
                                elevation: 1,
                                borderRadius: 4
                            }}
                            mpContainer={{ mt: 10, mh: 15, pv: 5, mb: 20 }}
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
                                        closeModal()
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
            </MainContainer>
        )
    }

    return (
        <Portal>
            <Modalize ref={modalizeRef}
                modalStyle={{
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                }}
                childrenStyle={{
                    marginBottom: 15,
                    paddingBottom: 20
                }}
                adjustToContentHeight={true}
                withHandle={false}
            >
                {renderChildren()}
            </Modalize>
        </Portal>
    )
}

export default DeadlineModal