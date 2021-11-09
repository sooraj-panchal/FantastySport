import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import { SvgUri } from 'react-native-svg';
import { useSelector } from 'react-redux';
import { bold } from '../assets/fonts/fonts';
import { AppImages } from '../assets/images/map';
import { RootState } from '../store';
import { homeNavProps } from '../types/nav';
import { MyLeagueResponse } from '../types/responseTypes';
import Container from './Container';
import Img from './Img';
import Label from './Label';

interface props {
    createMatchHandler: () => void
}

const PublicGameList: React.FC<MyLeagueResponse & props> = ({
    league_id,
    week,
    name,
    team_logo,
    team_name,
    is_game_created,
    participant_user,
    max_participant,
    createMatchHandler
}) => {
    const { NFLCurrentWeek } = useSelector((store: RootState) => store.leaguePlayer)
    const navigation = useNavigation<homeNavProps>()
    // let imageType = team_logo?.split('.').pop() == 'svg';

    console.log('week', week[0].schedule)
    let WeekText = (NFLCurrentWeek == week[0].week_no) ? 'Started' : `Week ${week[0].week_no} Will start soon`
    let week_start_date = moment(week[0].schedule[0].start_time).format('MMM D, LT')
    let currentDate = new Date().getTime()

    let nextMatchDate = week[0].schedule.map((item) => {
        let matchTime = new Date(item.start_time).getTime()
        console.log(currentDate)
        if (matchTime > currentDate) {
            return item.start_time
        } else {
            return null
        }
    }).filter((item) => item != null)


    console.log('match date', nextMatchDate)


    return (
        <Container
            containerStyle={{
                backgroundColor: 'white',
                elevation: 4,
                borderRadius: 10
            }}
            mpContainer={{ mh: 15, pv: 10, pl: 10 }}
            onPress={() => {
                // navigation.navigate('GameDetail')
                navigation.navigate('GameDetail', {
                    league_id: league_id,
                    week_id: week?.[0]?.week_id,
                    league_name: name,
                    my_team_id: '',
                    fromMyLeague: true
                })
            }}
        >
            <Label
                labelSize={20}
            >{name}</Label>
            <Label
                labelSize={14}
                mpLabel={{ mt: 5 }}
                style={{ color: 'black' }}
            >{`Start time: ${week_start_date}`}</Label>
            {/* <Container
                containerStyle={{
                    flexDirection: 'row',
                    alignItems: "center"
                }}
                mpContainer={{ mt: 5 }}
            >
                <Label
                    labelSize={14}
                >Pick's deadline : </Label>
                <Label
                    labelSize={14}
                >18/06, 2:00 PM</Label>
            </Container> */}
            <Label
                style={{
                    color: "green",
                }}
                labelSize={14}
                mpLabel={{ mt: 5 }}
            >{WeekText}</Label>
            {/* <Label
                style={{ color: 'green' }}
                mpLabel={{ mt: 5 }}
                labelSize={15}
            >{`Joined ${participant_user} players`}</Label> */}
            <Label
                labelSize={15}
                // mpLabel={{ mt: 10 }}
                style={{
                    color: 'black',
                    fontFamily: bold,
                    position: 'absolute',
                    bottom: 10,
                    right: 10
                }}
            >{participant_user}/{max_participant}</Label>
            <Img
                imgSrc={AppImages.team}
                width={30} height={28}
                imgStyle={{
                    position: 'absolute',
                    right: 15,
                    top: 10,
                    resizeMode:'contain'
                }}
            />
        </Container>

    )
}
export default PublicGameList;