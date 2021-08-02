import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { homeNavProps } from '../types/nav';
import Container from './Container';
import Label from './Label';

const PublicGameList: React.FC = ({

}) => {

    const navigation = useNavigation<homeNavProps>()

    return (
        <Container
            containerStyle={{
                backgroundColor: 'white',
                elevation: 4,
                borderRadius: 10
            }}
            mpContainer={{ mh: 15, pv: 10, pl: 10 }}
            onPress={()=>{
                navigation.navigate('GameDetail')
            }}
        >
            <Label
                labelSize={14}
            >Adam's Team</Label>
            <Container
                containerStyle={{
                    flexDirection: 'row',
                    alignItems: "center"
                }}
                mpContainer={{ mt: 5 }}
            >
                <Container containerStyle={{ backgroundColor: 'red', borderRadius: 30 }} width={30} height={30} />
                <Label
                    mpLabel={{ ml: 10 }}
                    labelSize={18}
                >Adam's Team</Label>
            </Container>
            <Container
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
            </Container>
            <Label
                style={{ color: 'green' }}
                mpLabel={{ mt: 5 }}
                labelSize={15}
            >Completed</Label>
            <Container containerStyle={{
                backgroundColor: 'red',
                borderRadius: 30,
                position: 'absolute',
                right: 10,
                top: 10
            }}
                width={30} height={30} />
        </Container>
    )
}
export default PublicGameList;