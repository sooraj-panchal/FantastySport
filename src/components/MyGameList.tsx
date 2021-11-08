import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SvgUri } from 'react-native-svg';
import { useDispatch } from 'react-redux';
import { AppImages } from '../assets/images/map';
import { leagueDetailsWatcher } from '../store/slices/selectedLeague';
import { homeNavProps } from '../types/nav';
import { LeagueItemResponse, MyLeagueResponse } from '../types/responseTypes';
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

    return (
        <Container
            containerStyle={{
                backgroundColor: 'white',
                elevation: 4,
                borderRadius: 10
            }}
            mpContainer={{ mh: 15, pv: 10, pl: 10 }}
            onPress={() => {
                // navigation.navigate('TeamDetail', {
                //     team_id: team_id
                // })
                navigation.navigate('GameDetail', {
                    league_id: league_id,
                    week_id: week[0].week_id,
                    league_name: name,
                    my_team_id:team_id
                })
                // dispatch(leagueDetailsWatcher({ ...props }))
                // navigation.navigate('MyTeamTab', {
                //     screen: 'MyTeam'
                // })
            }}
        >
            <Label
                labelSize={14}
            >{name}</Label>
            <Container
                containerStyle={{
                    flexDirection: 'row',
                    alignItems: "center"
                }}
                mpContainer={{ mt: 5 }}
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
                            imgStyle={{borderRadius:25}}
                            width={28} height={28} />
                }
                <Label
                    mpLabel={{ ml: 10 }}
                    labelSize={18}
                >{team_name}</Label>
            </Container>
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
            <Label
                style={{ color: 'green' }}
                mpLabel={{ mt: 5 }}
                labelSize={15}
            >Joined {participant_user} players</Label>
            <Img
                imgSrc={type == 'private' ? AppImages.private : AppImages.team}
                width={30} height={30}
                imgStyle={{
                    position: 'absolute',
                    right: 10,
                    bottom: 10,
                    resizeMode: 'contain'
                }}
            />
            {
                is_game_created ?
                    <Label
                        style={{
                            position: 'absolute',
                            right: 10,
                            color: "grey"
                        }}
                        labelSize={14}
                        mpLabel={{ mt: 5 }}
                    // onPress={createMatchHandler}
                    >View</Label>
                    :
                    <Label
                        style={{
                            position: 'absolute',
                            right: 10,
                            color: "green"
                        }}
                        labelSize={14}
                        mpLabel={{ mt: 5 }}
                        onPress={createMatchHandler}
                    >Create team</Label>
            }
        </Container>
    )
}
export default MyGameList;