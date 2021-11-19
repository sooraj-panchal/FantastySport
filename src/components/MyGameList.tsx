import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import { SvgUri } from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';
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

const MyGameList: React.FC<MyLeagueResponse & props> = (props) => {
    const {
        type,
        league_id,
        week,
        name,
        team_logo,
        team_name,
        is_game_created,
        participant_user,
        team_id,
        createMatchHandler
    } = props
    const dispatch = useDispatch()
    const navigation = useNavigation<homeNavProps>()
    let imageType = team_logo?.split('.').pop() == 'svg';

    console.log(props)

    const { NFLCurrentWeek } = useSelector((store: RootState) => store.leaguePlayer)

    let WeekText = (NFLCurrentWeek == week[0].week_no) ? 'Game In progress' : `Week ${week[0].week_no} Will start soon`
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
                borderRadius: 10,
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.1
            }}
            mpContainer={{ mh: 15, pv: 10 }}
            onPress={() => {
                // navigation.navigate('TeamDetail', {
                //     team_id: team_id
                // })
                navigation.navigate('GameDetail', {
                    league_id: league_id,
                    week_id: week[0].week_id,
                    league_name: name,
                    my_team_id: team_id
                })
                // dispatch(leagueDetailsWatcher({ ...props }))
                // navigation.navigate('MyTeamTab', {
                //     screen: 'MyTeam'
                // })
            }}
        >
            <Label
                labelSize={20}
                mpLabel={{ pl: 10 }}
            >{name}</Label>

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
            {/* <Label
                style={{ color: 'red' }}
                mpLabel={{ mt: 5 }}
                labelSize={15}
            >Game In progress</Label> */}
            {/* <Label
                style={{ color: 'green' }}
                mpLabel={{ mt: 5 }}
                labelSize={15}
            >Joined {participant_user} players</Label> */}

            <Label
                labelSize={14}
                mpLabel={{ mt: 5, pl: 10 }}
                style={{ color: 'black' }}
            >{`Start time: ${week_start_date}`}</Label>
            <Label
                style={{
                    color: "green"
                }}
                labelSize={14}
                mpLabel={{ mt: 5, pl: 10 }}
            // onPress={createMatchHandler}
            >{WeekText}</Label>

            <Img
                imgSrc={type == 'private' ? AppImages.private : AppImages.team}
                width={30} height={30}
                imgStyle={{
                    position: 'absolute',
                    right: 10,
                    top: 10,
                    resizeMode: 'contain'
                }}
            />
            {/* <Container containerStyle={{ backgroundColor: "grey" }} height={1} mpContainer={{ mt: 10 }} /> */}
            <Container containerStyle={{
                borderWidth: 0.5,
                // borderTopWidth: 1,
                justifyContent: "center",
                borderRadius: 4,
                borderColor: 'grey'
            }}
                height={45}
                mpContainer={{ ph: 10, mt: 15, mh: 10 }}
                onPress={() => {
                    navigation.navigate('TeamDetail', {
                        team_id: team_id
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
                                uri={team_logo || ''}
                            />
                            :
                            <Img
                                imgSrc={{ uri: team_logo || '' }}
                                imgStyle={{ borderRadius: 25 }}
                                width={28} height={28} />
                    }
                    <Label
                        mpLabel={{ ml: 10 }}
                        labelSize={18}
                    >{team_name}</Label>
                </Container>
                {
                    is_game_created ?
                        <Label
                            style={{
                                position: 'absolute',
                                right: 10,
                                color: "green"
                            }}
                            labelSize={14}
                        // onPress={createMatchHandler}
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
                            onPress={createMatchHandler}
                        >Create team</Label>
                }
            </Container>
        </Container>
    )
}
export default MyGameList;