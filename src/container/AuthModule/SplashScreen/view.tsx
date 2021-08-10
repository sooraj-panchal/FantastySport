import React from 'react';
import { View, Text, Button, StatusBar } from 'react-native'
import { navigationProps } from '../../../types/nav';
import MainContainer from '../../../components/MainContainer'
import Btn from '../../../components/Btn';
import { DarkBlueColor } from '../../../assets/colors';
import Img from '../../../components/Img';
import { AuthImages } from '../../../assets/images/map';
import Label from '../../../components/Label';
import { screenHeight, screenWidth } from '../../../types/sizes';

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
            <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
            <Img
                imgSrc={AuthImages.Splash_Bg}
                imgStyle={{
                    width: screenWidth,
                    height: screenHeight,
                    // resizeMode: "contain"
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            />
            <Img
                imgSrc={AuthImages.Splash_logo}
                imgStyle={{
                    width: screenWidth * 0.80,
                    height: "25%",
                    resizeMode: "contain",
                    position: "absolute",
                }}
            />
            {/* <Label
                labelSize={50}
                style={{
                    maxWidth:"70%",
                    textAlign:'center'
                }}
            >Fantasty Sniper</Label> */}
        </MainContainer>
    )
}

export default SplashScreen;