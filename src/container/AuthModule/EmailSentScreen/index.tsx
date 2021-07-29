import React from 'react'
import { DarkBlueColor } from '../../../assets/colors'
import { medium, regular } from '../../../assets/fonts/fonts'
import { AuthImages } from '../../../assets/images/map'
import Btn from '../../../components/Btn'
import Label from '../../../components/Label'
import MainContainer from '../../../components/MainContainer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { navigationProps } from '../../../types/nav'
interface props extends navigationProps {
    forgotPasswordLoading: boolean
}

const EmailSentScreen: React.FC<props> = ({
    navigation,
    route
}) => {

    return (
        <MainContainer style={{
            justifyContent: 'center',
            alignItems: "center"
        }}
        >
            <Ionicons
                name="md-checkmark-circle"
                size={150}
                color="green"
            />
            <Label
                labelSize={35}
                mpLabel={{ mt: 10 }}
                style={{
                    fontFamily: medium,
                    textAlign: "center"
                }}
            >Email sent</Label>
            <Label
                labelSize={20}
                mpLabel={{ mt: 10 }}
                style={{
                    fontFamily: regular,
                    textAlign: "center",
                    width: "80%"
                }}
            >Check your inbox to reset the password.</Label>
            <Btn
                title="Continue"
                mpBtn={{ mh: 20, mt: 25, pt: 4 }}
                btnStyle={{
                    borderRadius: 30,
                    backgroundColor: DarkBlueColor,
                    width: "80%",
                    justifyContent: "center"
                }}
                btnHeight={50}
                labelSize={15}
                labelStyle={{ fontFamily: medium, color: "white" }}
                onPress={() => {
                    navigation.navigate("Verification", {
                        email: route.params.email,
                    })
                }}
            />
        </MainContainer>
    )
}
export default EmailSentScreen