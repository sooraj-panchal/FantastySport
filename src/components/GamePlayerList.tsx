import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { homeNavProps, navigationProps } from '../types/nav';
import { GameDetailResponse } from '../types/responseTypes';
import Container from './Container';
import Label from './Label';

interface props {
    index: number,
    onPress: () => void
}

const GamePlayerList: React.FC<GameDetailResponse & props> = ({
    id,
    team_name,
    rank,
    pts,
    index,
    onPress
}) => {
    const navigation = useNavigation<homeNavProps>()
    const route = useRoute<any>()

    return (
        <Container
            containerStyle={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: index % 2 ? '#f2f2f2' : 'white'
            }}
            mpContainer={{ ph: 10 }}
            height={70}
            onPress={onPress}
        >
            <Label
                labelSize={16}
                mpLabel={{ ml: 20 }}
                numberOfLines={1}
            >{rank}</Label>
            <Container
                mpContainer={{ ml: 50 }}
            >
                <Label
                    labelSize={16}
                    numberOfLines={1}
                >{team_name}</Label>
                {/* <Label
                    labelSize={14}
                    mpLabel={{ mt: 4 }}
                    numberOfLines={1}
                    style={{ color: 'red' }}
                >2 players remaining</Label> */}
            </Container>
            <Container
                containerStyle={{
                    position: 'absolute',
                    right: 35,
                }}
            >
                <Label
                    labelSize={14}
                >{pts}</Label>
                {/* <Label
                    labelSize={14}
                    mpLabel={{ mt: 2 }}
                >(16.5)</Label> */}
            </Container>
        </Container>
    )
}
export default GamePlayerList;