import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SvgUri } from 'react-native-svg';
import { AppImages } from '../assets/images/map';
import { homeNavProps } from '../types/nav';
import { LeagueItemResponse, MyLeagueResponse } from '../types/responseTypes';
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
    participant_user,
    createMatchHandler
}) => {
    const navigation = useNavigation<homeNavProps>()
    let imageType = team_logo?.split('.').pop() == 'svg';

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
                    my_team_id:'',
                    fromMyLeague:true
                })
            }}
        >
            <Label
                labelSize={18}
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
                style={{ color: 'green' }}
            >Joined {participant_user} players</Label>
            <Img
                imgSrc={AppImages.private}
                width={25} height={28}
                imgStyle={{
                    position: 'absolute',
                    right: 10,
                    bottom: 10
                }}
            />
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
        </Container>
    )
}
export default PrivateGameList;