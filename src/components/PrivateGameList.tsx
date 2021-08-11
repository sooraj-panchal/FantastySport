import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { AppImages } from '../assets/images/map';
import { homeNavProps } from '../types/nav';
import Container from './Container';
import Img from './Img';
import Label from './Label';

const PrivateGameList: React.FC = ({

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
            onPress={() => {
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
                <Img
                    imgSrc={AppImages.green_logo}
                    width={25} height={28}
                />
                <Label
                    mpLabel={{ ml: 10 }}
                    labelSize={18}
                >Metal Militia</Label>
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
                style={{ color: 'red' }}
                mpLabel={{ mt: 5 }}
                labelSize={15}
            >One match still running</Label>
            <Img
                imgSrc={AppImages.private}
                width={25} height={28}
                imgStyle={{
                    position: 'absolute',
                    right: 10,
                    top: 10
                }}
            />
        </Container>
    )
}
export default PrivateGameList;