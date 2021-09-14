import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { AppImages } from '../assets/images/map';
import { homeNavProps } from '../types/nav';
import Container from './Container';
import Img from './Img';
import Label from './Label';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Alert } from 'react-native';
import { newsListTypes } from '../types/flatListTypes';
import { medium, regular } from '../assets/fonts/fonts';
import moment from 'moment';
interface props {

}

const NewsList: React.FC<newsListTypes> = ({
    title,
    description,
    cat_name,
    uploadedDate,
    image
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
            mpContainer={{ mt: 10, mh: 20, pb: 10 }}
            // height={250}
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
                mpContainer={{ mh: 10 }}
            >
                <Label
                    labelSize={15}
                    style={{ fontFamily: medium }}
                    mpLabel={{ mt: 5 }}
                >{title}</Label>
                <Label
                    labelSize={12}
                    style={{ color: 'grey' }}
                >{cat_name}</Label>
                <Label
                    labelSize={13}
                    numberOfLines={2}
                    style={{ color: "black", maxWidth: '90%' }}
                    mpLabel={{ mt: 5 }}
                >{description}</Label>
                <Label
                    labelSize={12}
                    style={{
                        color: 'black',
                    }}
                    mpLabel={{ mt: 5, mr: 10 }}
                >{uploadedDate}</Label>
            </Container>
        </Container>
    )
}
export default NewsList