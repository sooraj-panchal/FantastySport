import React from 'react';
import { Alert, View } from 'react-native';
import Container from '../Container';
import Label from '../Label';
import Img from '../Img';
import { Formik } from 'formik';
import TextInputComp from '../TextInputComp';
import { BlackColor, DarkBlueColor, greenColor, LightGrayColor, OrangeColor } from '../../assets/colors';
import Btn from '../Btn';
import { medium, regular, semiBold } from '../../assets/fonts/fonts';
import { AppImages, AuthImages } from '../../assets/images/map';
import * as yup from 'yup';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import Modal from 'react-native-modal'
import { screenHeight } from '../../utils/styleUtils';
import { homeNavProps, navigationProps } from '../../types/nav';
import InputBox from '../InputBox';
import { Modalize } from 'react-native-modalize';
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItem } from 'react-native';
import { Host, Portal } from 'react-native-portalize';
import { useLeagueDetailsQuery, useLeagueListQuery } from '../../features/league';
import { MyLeagueResponse } from '../../types/responseTypes';
import { useNavigation } from '@react-navigation/native';
import useGetMatchStatus from '../../hooks/matchStatus';
import { useDispatch } from 'react-redux';
import { leagueDetailsWatcher } from '../../store/slices/selectedLeague';
import { SvgUri } from 'react-native-svg';

interface props {
    // closeModal?: (league_id: any, week_id: any) => void,
    modalizeRef: React.Ref<Modalize> | any
}


const DeadlineModal: React.FC<props> = ({
    modalizeRef,
}) => {
    const navigation = useNavigation<homeNavProps>()
    const { data: LeagueDetails, isLoading: loadingForLeagueDetail, error: leagueDetailError } = useLeagueDetailsQuery(1)
    const { dateText, matchDate, weekText, isStarted } = useGetMatchStatus(LeagueDetails?.week, LeagueDetails?.deadline)
    const dispatch = useDispatch()
    let imageType = LeagueDetails?.team_logo?.split('.').pop() == 'svg';

    console.log('LeagueDetails', LeagueDetails)
    
    const closeModal = ()=>{
        modalizeRef.current?.close()
    }

    const renderChildren = () => {
        return (
            < >
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
                    >{'League will be starting soon.'}</Label>
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
                        >{`${'Deadline date'}: ${matchDate}`}</Label>
                    </Container>

                    {/* <Btn
                        title='Match detail'
                        onPress={() => {
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
                    /> */}
                    {/* <Img
                        imgSrc={AppImages.team}
                        width={40} height={40}
                        imgStyle={{
                            top: 10,
                            resizeMode: 'contain',
                            position: 'absolute',
                            right: 10
                        }}
                    /> */}
                    {/* <Btn
                        title='Create match'
                        onPress={() => {
                            navigation.navigate('CreateTeam', {
                                week_id: LeagueDetails?.week[0]?.week_id,
                                type: 'public',
                                league_id: LeagueDetails?.league_id
                            })
                        }}
                        btnStyle={{
                            backgroundColor: greenColor,
                            height: 30,
                            borderRadius: 20,
                            elevation: 1,
                            top: 10,
                            position: 'absolute',
                            right: 5
                        }}
                        textColor="white"
                        mpBtn={{ ml: 10, ph: 10 }}
                    /> */}
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
                <Container containerStyle={{
                    // borderTopWidth: 1,
                    justifyContent: "center",
                    borderRadius: 4,
                    borderColor: 'lightgrey',
                    borderWidth: 1,
                }}
                    height={45}
                    mpContainer={{ ph: 10, mt: 10, mb: 5, mh: 15 }}
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
                                    closeModal()
                                    dispatch(leagueDetailsWatcher({ ...LeagueDetails }))
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
                                    dispatch(leagueDetailsWatcher({ ...LeagueDetails }))
                                    navigation.navigate('CreateMatch')
                                }}
                            >Create team</Label>
                    }
                </Container>
                {/* <Btn
                        title='Create match'
                        onPress={() => {
                            navigation.navigate('CreateTeam', {
                                week_id: LeagueDetails?.week[0]?.week_id,
                                type: 'public',
                                league_id: LeagueDetails?.league_id
                            })
                        }}
                        btnStyle={{
                            backgroundColor: greenColor,
                            height: 30,
                            borderRadius: 20,
                            elevation: 1,
                            
                        }}
                        textColor="white"
                        mpBtn={{ ml: 10, ph: 10 }}
                    /> */}
            </>
        )
    }

    return (
        <Portal>
            <Modalize ref={modalizeRef}
                modalStyle={{
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    // backgroundColor: '#f2f2f2'
                }}
                childrenStyle={{
                    marginBottom: 15
                    // paddingBottom: 60
                }}
                adjustToContentHeight={true}
                // modalHeight={screenHeight * 0.60}
                withHandle={false}
            // children={() => {
            //     return 
            // }}
            >
                {renderChildren()}
            </Modalize>
        </Portal>
    )
}

export default DeadlineModal