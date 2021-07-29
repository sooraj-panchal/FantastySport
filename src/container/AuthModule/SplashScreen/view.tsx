import React from 'react';
import { View, Text, Button, StatusBar } from 'react-native'
import { navigationProps } from '../../../types/nav';
import MainContainer from '../../../components/MainContainer'
import Btn from '../../../components/Btn';
import { DarkBlueColor } from '../../../assets/colors';
import Img from '../../../components/Img';
import { AuthImages } from '../../../assets/images/map';
import Label from '../../../components/Label';

interface props extends navigationProps {
    loading: boolean
}

const SplashScreen: React.FC<props> = ({
    route,
    navigation,
    loading
}) => {
    return (
        <MainContainer style={{
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center"
        }} >
            <StatusBar backgroundColor="transparent" translucent />
            {/* <Img
                imgSrc={AuthImages.splashLogo_image}
                imgStyle={{
                    width: "90%",
                    height: "30%",
                    resizeMode: "contain"
                }}
            /> */}
            <Label
                labelSize={50}
                style={{
                    maxWidth:"70%",
                    textAlign:'center'
                }}
            >Fantasty Sniper</Label>
        </MainContainer>
    )
}

export default SplashScreen;