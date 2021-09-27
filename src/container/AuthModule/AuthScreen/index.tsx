import React from 'react';
import { ImageBackground, StatusBar } from 'react-native';
import { OrangeColor } from '../../../assets/colors';
import { AuthImages } from '../../../assets/images/map';
import Btn from '../../../components/Btn';
import Img from '../../../components/Img';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import { screenWidth } from '../../../types/sizes';

interface props extends navigationProps {

}

const AuthScreen: React.FC<props> = ({
    navigation, route
}) => {
    return <MainContainer
        style={{
            justifyContent: "center",
            backgroundColor: "white"
        }}
    >
        <ImageBackground
            source={AuthImages.auth_bg}
            style={{
                justifyContent: 'center',
                flex: 1,
                paddingTop: 80
            }}
        >
            <Img
                imgSrc={AuthImages.Splash_logo}
                imgStyle={{
                    width: screenWidth * 0.80,
                    height: "25%",
                    alignSelf: 'center',
                    resizeMode: 'contain'
                }}
            />
            <Btn
                title="LOGIN"
                btnStyle={{
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor: "grey"
                }}
                radius={5}
                btnHeight={50}
                labelSize={16}
                labelStyle={{

                }}
                mpBtn={{ mh: 20, mt: 80 }}
                onPress={() => {
                    navigation.navigate("Login")
                }}
            />
            <Btn
                title="CREATE NEW ACCOUNT"
                btnStyle={{
                    backgroundColor: OrangeColor
                }}
                radius={5}
                btnHeight={50}
                labelSize={16}
                labelStyle={{
                    color: "white"
                }}
                mpBtn={{ mh: 20, mt: 15 }}
                onPress={() => {
                    navigation.navigate("Register")
                }}
            />
        </ImageBackground>
    </MainContainer>
}
export default AuthScreen;