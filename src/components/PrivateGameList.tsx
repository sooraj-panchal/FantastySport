import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
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

const PrivateGameList: React.FC<MyLeagueResponse & props> = ({
    league_id,
    week,
    name,
    team_logo,
    team_name,
    is_game_created,
    max_participant,
    participant_user,
    createMatchHandler
}) => {
    const { NFLCurrentWeek } = useSelector((store: RootState) => store.leaguePlayer)
    const navigation = useNavigation<homeNavProps>()

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
    // console.log('nextMatch Date', moment(nextMatchDate).format('MMM D, LT'))

    return (
        <Container
            containerStyle={{
                backgroundColor: 'white',
                elevation: 4,
                borderRadius: 10
            }}
            mpContainer={{ mh: 15, pv: 10, pl: 10 }}
            onPress={() => {
                navigation.navigate('GameDetail', {
                    league_id: league_id,
                    week_id: week[0].week_id,
                    league_name: name,
                    my_team_id: '',
                    fromMyLeague: true
                })
            }}
        >
            <Label
                labelSize={20}
            >{name}</Label>
            {/* <Container
                containerStyle={{
                    flexDirection: 'row',
                    alignItems: "center"
                }}
            >
                <Label
                    labelSize={14}
                >Pick's deadline : </Label>
                <Label
                    labelSize={14}
                >18/06, 2:00 PM</Label>
            </Container> */}
            <Label
                labelSize={14}
                mpLabel={{ mt: 5 }}
                style={{ color: 'black' }}
            >{`Start time: ${week_start_date}`}</Label>
            <Label
                style={{
                    color: "green"
                }}
                labelSize={14}
                mpLabel={{ mt: 5 }}
            // onPress={createMatchHandler}
            >{WeekText}</Label>
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
                imgSrc={AppImages.private}
                width={25} height={28}
                imgStyle={{
                    position: 'absolute',
                    right: 10,
                    top: 5
                }}
            />
        </Container>
    )
}
export default PrivateGameList;