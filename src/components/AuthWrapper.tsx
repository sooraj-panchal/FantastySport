import React from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';
import { AuthImages } from '../assets/images/map';
import { screenHeight, screenWidth } from '../types/sizes';

interface props {
    children: React.ReactNode
}

const AuthWrapper: React.FC<props> = ({
    children
}) => {
    return (
        <ImageBackground
            source={AuthImages.login_bg}
            style={{
                justifyContent: 'center',
                flex: 1,
                paddingTop: 80
            }}
        >
            <StatusBar barStyle="light-content" />
            {children}
        </ImageBackground>
    )
}
export default AuthWrapper;
