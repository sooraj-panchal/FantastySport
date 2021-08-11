import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { homeNavProps } from '../types/nav';
import Container from './Container';
import Label from './Label';

interface props {
    index: number,
}

const GamePlayerList: React.FC<props> = ({
    index
}) => {
    const navigation = useNavigation<homeNavProps>()
    return (
        <Container
            containerStyle={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: index % 2 ? '#f2f2f2' : 'white'
            }}
            mpContainer={{ ph: 10 }}
            height={70}
            onPress={() => {
                navigation.navigate('WinnerDetail')
            }}
        >
            <Label
                labelSize={16}
                mpLabel={{ ml: 20 }}
                numberOfLines={1}
            >{index + 1}</Label>
            <Container
                mpContainer={{ ml: 50 }}
            >
                <Label
                    labelSize={16}
                    numberOfLines={1}
                >Michael</Label>
                <Label
                    labelSize={14}
                    mpLabel={{ mt: 4 }}
                    numberOfLines={1}
                    style={{ color: 'red' }}
                >2 players remaining</Label>
            </Container>
            <Container
                containerStyle={{
                    position: 'absolute',
                    right: 30,
                }}
            >
                <Label
                    labelSize={14}
                >106.1</Label>
                <Label
                    labelSize={14}
                    mpLabel={{mt:2}}
                >(16.5)</Label>
            </Container>
        </Container>
    )
}
export default GamePlayerList;