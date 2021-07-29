import React from 'react';
import { OrangeColor } from '../../../assets/colors';
import Btn from '../../../components/Btn';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';

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
        <Label
            labelSize={50}
            style={{
                maxWidth: "70%",
                textAlign: 'center',
                alignSelf: "center"
            }}
        >Fantasty Sniper</Label>
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
    </MainContainer>
}
export default AuthScreen;