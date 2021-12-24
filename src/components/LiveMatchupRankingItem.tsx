import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { medium } from '../assets/fonts/fonts';
import { leagueDetailsWatcher } from '../store/slices/selectedLeague';
import { homeNavProps } from '../types/nav';
import { LiveMatchUpResponse } from '../types/responseTypes';
import Container from './Container';
import Label from './Label';

interface props {
    onPressTeam?:()=>void;
}

const LiveMatchupRankingItem: React.FC<LiveMatchUpResponse & props> = ({
    name,
    team_name,
    rank,
    pts,
    id,
    onPressTeam
}) => {
    const dispatch = useDispatch()
    const navigation = useNavigation<homeNavProps>()

    return (
        <Container
            containerStyle={{
                flexDirection: 'row',
                alignItems: 'center'
            }}
            mpContainer={{ mh: 10 }}
            height={45}
            onPress={() => {
               if(onPressTeam) onPressTeam()
            }}
        >
            <Container containerStyle={{ flex: 0.65 }} >
                <Label
                    labelSize={14}
                    style={{ color: 'grey', fontFamily: medium }}
                    numberOfLines={1}
                // mpLabel={{ mh: 20 }}
                >{name}</Label>
                {/* <Label
                    labelSize={14}
                    style={{ color: 'black', fontFamily: medium }}
                    numberOfLines={1}
                >{team_name}</Label> */}
            </Container>
            <Label
                labelSize={14}
                style={{ color: 'green', fontFamily: medium, flex: 0.2, textAlign: "center" }}
            >{pts}</Label>
            <Label
                labelSize={14}
                style={{ color: 'black', fontFamily: medium, flex: 0.3, textAlign: 'center' }}
            >#{rank}</Label>
        </Container>
    )
}
export default LiveMatchupRankingItem;