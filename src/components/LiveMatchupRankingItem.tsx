import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { medium } from '../assets/fonts/fonts';
import { homeNavProps } from '../types/nav';
import { LiveMatchUpResponse } from '../types/responseTypes';
import Container from './Container';
import Label from './Label';

const LiveMatchupRankingItem: React.FC<LiveMatchUpResponse> = ({
    name,
    team_name,
    rank,
    pts,
    id
}) => {

    const navigation = useNavigation<homeNavProps>()

    return (
        <Container
            containerStyle={{
                flexDirection: 'row',
                alignItems: 'center'
            }}
            mpContainer={{ mh: 10 }}
            height={35}
            onPress={() => {
                navigation.navigate('TeamDetail', {
                    team_id: id
                })
            }}
        >
            <Label
                labelSize={14}
                style={{ color: 'black', fontFamily: medium, flex: 0.35 }}
                numberOfLines={1}
            >{team_name}</Label>
            <Label
                labelSize={14}
                style={{ color: 'black', fontFamily: medium, flex: 0.35 }}
                numberOfLines={1}
                mpLabel={{ mh: 20 }}
            >{name}</Label>
            <Label
                labelSize={14}
                style={{ color: 'black', fontFamily: medium, flex: 0.2, textAlign: "center" }}
            >{pts}</Label>
            <Label
                labelSize={14}
                style={{ color: 'black', fontFamily: medium, flex: 0.3, textAlign: 'center' }}
            >{rank}</Label>
        </Container>
    )
}
export default LiveMatchupRankingItem;