import React from 'react'
import { DarkBlueColor, OrangeColor } from '../../../assets/colors'
import { medium, regular } from '../../../assets/fonts/fonts'
import { AuthImages } from '../../../assets/images/map'
import Btn from '../../../components/Btn'
import Label from '../../../components/Label'
import MainContainer from '../../../components/MainContainer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { navigationProps } from '../../../types/nav'
import Container from '../../../components/Container'
import AuthWrapper from '../../../components/AuthWrapper'
import { View } from 'react-native'
interface props extends navigationProps {
    forgotPasswordLoading: boolean
}

const EmailSentScreen: React.FC<props> = ({
    navigation
}) => {
    return (
        <MainContainer style={{
            justifyContent: 'center',
            backgroundColor: "#246e87"
        }}
        >
            <AuthWrapper>
                <Container containerStyle={{
                    backgroundColor: '#39cc58',
                    borderRadius: 150,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: 'center',
                    elevation: 2
                }} width={120} height={120} >
                    <Ionicons
                        name="md-checkmark"
                        size={100}
                        color="white"
                    />
                </Container>
                <Label
                    labelSize={30}
                    mpLabel={{ mt: 10 }}
                    style={{
                        fontFamily: medium,
                        textAlign: "center",
                        color: "white"
                    }}
                >Email sent</Label>
                <Label
                    labelSize={18}
                    mpLabel={{ mt: 10 }}
                    style={{
                        fontFamily: regular,
                        textAlign: "center",
                        width: "80%",
                        color: "white",
                        alignSelf: 'center'
                    }}
                >Check your inbox to reset the password.</Label>
                <Btn
                    title="CONTINUE"
                    mpBtn={{ mh: 20, mt: 25 }}
                    btnStyle={{
                        backgroundColor: OrangeColor,
                        width: "80%",
                        justifyContent: "center",
                        alignSelf: 'center'
                    }}
                    radius={4}
                    btnHeight={45}
                    labelSize={16}
                    labelStyle={{ fontFamily: medium, color: "white" }}
                    onPress={() => {
                        navigation.navigate("ResetPassword",{
                            
                        })
                        // navigation.navigate("Verification", {
                        //     email: route.params.email,
                        // })
                    }}
                />
            </AuthWrapper>
        </MainContainer>
    )
}
export default EmailSentScreen