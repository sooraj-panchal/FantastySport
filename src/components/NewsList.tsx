import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { AppImages } from '../assets/images/map';
import { homeNavProps } from '../types/nav';
import Container from './Container';
import Img from './Img';
import Label from './Label';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Alert } from 'react-native';
interface props {

}

const NewsList: React.FC<props> = ({

}) => {
    const navigation = useNavigation<homeNavProps>()

    const renderPlayButton = () => {
        return <Container
            containerStyle={{
                backgroundColor: "rgba(0,0,0,0.7)",
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                flexDirection: 'row',
                position: 'absolute',
                bottom: 5,
                right: 5,
            }}
            width={60} height={28}
            mpContainer={{ pr: 5 }}
            onPress={() => {
                navigation.navigate('NewsDetail')
            }}
        >
            <Container
                containerStyle={{
                    borderWidth: 2,
                    borderRadius: 30,
                    borderColor: "white",
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                width={20} height={20}
            >
                <Ionicons
                    name="ios-play"
                    size={10}
                    color="white"
                />
            </Container>
            <Label
                labelSize={10}
                style={{
                    color: 'white',
                    letterSpacing: 0.5
                }}
                mpLabel={{ ml: 5 }}
            >2:39</Label>
        </Container>
    }
    return (
        <Container
            containerStyle={{
                backgroundColor: 'white',
                borderRadius: 10,
                elevation: 2,
                overflow: 'hidden'
            }}
            mpContainer={{ mt: 10, mh: 20 }}
            height={240}
            onPress={() => {
                navigation.navigate('NewsDetail')
            }}
        >
            <Container>
                <Img
                    imgSrc={AppImages.newsImg}
                    imgStyle={{
                        width: "100%",
                    }}
                    height={150}
                />
                {renderPlayButton()}
            </Container>
            <Container
                mpContainer={{ mh: 10, mt: 10 }}
            >
                <Label
                    labelSize={15}
                    style={{ fontWeight: '900' }}
                >Main news title</Label>
                <Label
                    labelSize={12}
                >Lorem ipsum dolor sit amet consectetur adipisicing elit, dicta error aspernatur.</Label>
                <Label
                    labelSize={10}
                    style={{ color: 'grey', letterSpacing: 0.5 }}
                    mpLabel={{ mt: 2 }}
                >Saturday, May 15</Label>
            </Container>
        </Container>
    )
}
export default NewsList