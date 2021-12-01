import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SvgUri } from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';
import { OrangeColor } from '../assets/colors';
import { bold, medium } from '../assets/fonts/fonts';
import { AppImages } from '../assets/images/map';
import useGetMatchStatus from '../hooks/matchStatus';
import { RootState } from '../store';
import { leagueDetailsWatcher } from '../store/slices/selectedLeague';
import { homeNavProps } from '../types/nav';
import { MyLeagueResponse, UserResponse } from '../types/responseTypes';
import { screenWidth } from '../types/sizes';
import Btn from './Btn';
import Container from './Container';
import Img from './Img';
import Label from './Label';

interface props {
    createMatchHandler: () => void
}

const MyLeagueItem: React.FC<MyLeagueResponse> = ({
    league_id,
    week,
    name,
    participant_user,
    max_participant,
    team_logo,
    user_name,
    deadline
}) => {

    const navigation = useNavigation<homeNavProps>()
    const { dateText, matchDate, weekText } = useGetMatchStatus(week,deadline)

    return (
        <Container
            containerStyle={{
                width: screenWidth * 0.90,
                backgroundColor: "white",
                elevation: 2,
                alignSelf: 'center',
                borderRadius: 10
            }}
            mpContainer={{ ph: 10, pt: 5, pb: 15 }}
            onPress={() => {
                // console.log(item)
                // let parsedWeek = JSON.parse(item.week)
                // dispatch(leagueDetailsWatcher({ ...item }))
                // navigation.navigate('MyTeamTab', {
                //     screen: 'MyTeam'
                // })
                navigation.navigate('LeagueDetail', {
                    league_id: league_id,
                    week_id: week?.[0]?.week_id,
                })
            }}
        >
            <Container containerStyle={{
                flexDirection: "row",
            }}
                mpContainer={{ mt: 10 }}
            >
                <Img
                    imgSrc={AppImages.green_logo}
                    imgStyle={{
                        height: 40, width: 40,
                        resizeMode: 'contain'
                    }}
                />
                <Container
                    containerStyle={{
                        flex: 1,
                    }}
                    mpContainer={{ ml: 10 }}
                >
                    <Label
                        labelSize={12}
                        style={{
                            color: "black"
                        }}
                    // mpLabel={{ mt: 10 }}
                    >Created by {user_name}</Label>
                    <Label
                        labelSize={20}
                        style={{
                            color: "black",
                            width: '78%'
                        }}
                        numberOfLines={1}
                    >{name}</Label>
                </Container>
            </Container>
            <Label
                labelSize={14}
                style={{ color: 'black' }}
                mpLabel={{ pl: 10, mt: 10 }}
            >{`${dateText}: ${matchDate}`}</Label>
            <Label
                style={{
                    color: "green",
                }}
                labelSize={14}
                mpLabel={{ mt: 5, pl: 10 }}
            >{weekText}</Label>
            <Label
                labelSize={15}
                style={{
                    color: 'black',
                    fontFamily: bold,
                    position: 'absolute',
                    top: 60,
                    right: 12
                }}
            >{participant_user}/{max_participant}</Label>
            <Img
                imgSrc={AppImages.team}
                imgStyle={{
                    width: 35, height: 35,
                    position: 'absolute',
                    right: 10,
                    top: 10,
                    resizeMode: 'contain'
                }}
            />
        </Container>
    )
}
export default MyLeagueItem;