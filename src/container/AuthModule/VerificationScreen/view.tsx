import { RouteProp, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import {
    CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell,
} from 'react-native-confirmation-code-field'
import { useDispatch } from 'react-redux'
import { DarkBlueColor, OrangeColor, PrimaryColor } from '../../../assets/colors'
import { medium, semiBold } from '../../../assets/fonts/fonts'
import { AuthImages } from '../../../assets/images/map'
import AuthWrapper from '../../../components/AuthWrapper'
import Btn from '../../../components/Btn'
import HeaderBtn from '../../../components/HeaderBtn'
import Img from '../../../components/Img'
import Label from '../../../components/Label'
import MainContainer from '../../../components/MainContainer'
import { useOtpVerifyMutation } from '../../../features/auth'
import { AppStack } from '../../../navigator/navActions'
import { setCredentials } from '../../../store/slices/auth'
import { navigationProps } from '../../../types/nav'

interface props extends navigationProps {
    verifyOtpLoading: boolean
}

const VerificationScreen: React.FC<props> = ({
    navigation,
    route
}) => {
    const dispatch = useDispatch()
    const [verifyOtp, { isLoading, data = {}, error }] = useOtpVerifyMutation()

    const CELL_COUNT = 4;

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const verifyOtpHandler = async () => {
        let data = new FormData()
        data.append('email', route.params.email)
        data.append('otp', value)
        try {
            const user = await verifyOtp(data).unwrap()
            console.log(user)
            if (route.params?.fromReset) {
                navigation.navigate('ResetPassword', {
                    email: route.params.email
                })
            } else {
                dispatch(setCredentials({ user: user }))
                navigation.dispatch(AppStack)
            }
        } catch (err) {
            console.log('err', err)
        }
    }

    return (
        <MainContainer
            absoluteModalLoading={isLoading}
            errorMessage={error}
        >
            <AuthWrapper>
                <ScrollView contentContainerStyle={{ paddingBottom: 100 }} >
                    <Label
                        labelSize={30}
                        mpLabel={{ ml: 20, mt: 10 }}
                        style={{
                            fontFamily: semiBold,
                            color: 'white'
                        }}
                    >Verify Email</Label>
                    <Label
                        labelSize={17}
                        mpLabel={{ mt: 20 }}
                        style={{
                            fontFamily: medium,
                            maxWidth: "80%",
                            alignSelf: "center",
                            textAlign: "center",
                            color: 'white'
                        }}
                    >We will sent you a code to verify your email address to</Label>
                    <Label
                        labelSize={16}
                        mpLabel={{ mt: 20 }}
                        style={{
                            fontFamily: medium,
                            textAlign: "center",
                            color: 'white'
                        }}
                    >{route.params.email}</Label>
                    <CodeField
                        ref={ref}
                        {...props}
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />
                    <Btn
                        title="Confirm"
                        mpBtn={{ mh: 20, mt: 60 }}
                        btnStyle={{
                            borderRadius: 10,
                            backgroundColor: OrangeColor,
                            justifyContent: "center"
                        }}
                        btnHeight={50}
                        labelSize={15}
                        labelStyle={{ fontFamily: medium, color: "white" }}
                        onPress={() => {
                            verifyOtpHandler()
                            // navigation.navigate("InviteFriend")
                            // navigation.navigate('ResetPassword', {
                            //     email: route.params?.email
                            //     // ...route.params
                            // })
                        }}
                    />
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        alignSelf: "center",
                        marginTop: 20
                    }} >
                        <Label labelSize={18}
                            style={{ alignSelf: "center", fontFamily: medium, color: 'white' }}
                        >I Didn't recieve a code!</Label>
                        <Label
                            style={{ color: DarkBlueColor, fontFamily: medium }} mpLabel={{ ml: 10 }}
                            labelSize={20}
                            onPress={() => {
                                // navigation.navigate("ResetPassword")
                            }}>Resend</Label>
                    </View>
                </ScrollView>
            </AuthWrapper>
        </MainContainer>
    )
}

const styles = StyleSheet.create({
    codeFieldRoot: {
        marginTop: 30,
        width: "70%",
        alignSelf: "center",
    },
    cell: {
        width: 50,
        height: 50,
        lineHeight: 45,
        fontSize: 24,
        // borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 1,
        shadowOffset: { width: 1, height: 1 },
        // shadowRadius:0.1,
        shadowOpacity: 0.5,
        // borderColor: '#00000030',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: "center"
    },
    focusCell: {
        borderColor: '#000',
    },
});

export default VerificationScreen