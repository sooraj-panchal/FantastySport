import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { homeNavProps } from '../types/nav';
import Container from './Container';
import Label from './Label';

interface props {
    index: number,
}

const WinnerList: React.FC<props> = ({
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
                navigation.navigate('WinnerDetail')
            }}
        >
            <Label
                labelSize={16}
                mpLabel={{ ml: 20 }}
                numberOfLines={1}
            >{index + 1}</Label>
            <Label
                labelSize={16}
                mpLabel={{ ml: 35 }}
                numberOfLines={1}
            >John's Official team</Label>
            <Label
                labelSize={15}
                style={{
                    position: 'absolute',
                    right: 15,
                    letterSpacing: 0.5
                }}
            >106.1</Label>
        </Container>
    )
}
export default WinnerList;