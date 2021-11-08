import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { homeNavProps } from '../types/nav';
import { LiveMatchUpResponse } from '../types/responseTypes';
import Container from './Container';
import Label from './Label';

interface props {
    index: number,
}

const WinnerList: React.FC<LiveMatchUpResponse & props> = ({
    id,
    team_name,
    rank,
    pts,
    index
}) => {

    const navigation = useNavigation<homeNavProps>()

    return (
        <Container
            containerStyle={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: index % 2 ? '#f7dfd2' : 'white'
            }}
            mpContainer={{ ph: 10 }}
            height={50}
            onPress={() => {
                navigation.navigate('TeamDetail', {
                    team_id: id
                })
            }}
        >
            <Label
                labelSize={16}
                mpLabel={{ ml: 20 }}
                numberOfLines={1}
            >{rank}</Label>
            <Label
                labelSize={16}
                mpLabel={{ ml: 35 }}
                numberOfLines={1}
            >{team_name}</Label>
            <Label
                labelSize={15}
                style={{
                    position: 'absolute',
                    right: 15,
                    letterSpacing: 0.5
                }}
            >{pts}</Label>
        </Container>
    )
}
export default WinnerList;