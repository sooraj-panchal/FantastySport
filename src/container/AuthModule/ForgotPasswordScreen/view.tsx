import React from 'react';
import { View, Text, Button } from 'react-native'
import { navigationProps } from '../../../types/nav';
import MainContainer from '../../../components/MainContainer'
import { ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as yup from 'yup'
import HeaderBtn from '../../../components/HeaderBtn';
import Img from '../../../components/Img';
import { AuthImages } from '../../../assets/images/map';
import Label from '../../../components/Label';
import { medium, regular, semiBold } from '../../../assets/fonts/fonts';
import InputBox from '../../../components/InputBox';
import { DarkBlueColor, LightGrayColor } from '../../../assets/colors';
import Btn from '../../../components/Btn';
import Octicons from 'react-native-vector-icons/Octicons'

interface props extends navigationProps {
    forgotPasswordLoading: boolean
}

const ForgotPasswordScreen: React.FC<props> = ({
    route,
    navigation,
    forgotPasswordLoading
}) => {
    return (
        <MainContainer

            absoluteModalLoading={forgotPasswordLoading} >
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} >
                <Formik
                    initialValues={{ email: '' }}
                    onSubmit={values => { }}
                    validationSchema={yup.object().shape({
                        email: yup
                            .string()
                            .email()
                            .required("Email is must be required")
                    })}
                >
                    {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                        <>
                            <HeaderBtn />
                            <Img
                                imgSrc={AuthImages.background_logo}
                                width={90}
                                height={90}
                                imgStyle={{
                                    alignSelf: "flex-end",
                                    top: 20,
                                    right: 10,
                                    position: "absolute"
                                }}
                            />
                            <Label
                                labelSize={30}
                                mpLabel={{ ml: 20, mt: 10 }}
                                style={{
                                    fontFamily: semiBold,
                                }}
                            >Forgot password</Label>
                            <Label
                                labelSize={17}
                                mpLabel={{ mt: 10, mh: 20 }}
                                style={{
                                    fontFamily: regular,
                                }}
                            >Enter your email address below and we will send you a reset link</Label>
                            <InputBox
                                value={values.email}
                                onChangeText={handleChange("email")}
                                onBlur={() => setFieldTouched('email')}
                                keyboardType="email-address"
                                autoCompleteType="email"
                                // errors={errors.email}
                                // touched={touched.email}
                                mpContainer={{ mt: 30, mh: 20 }}
                                inputHeight={50}
                                placeholder="E-mail"
                                containerStyle={{
                                    backgroundColor: "white",
                                    borderColor: LightGrayColor,
                                    borderRadius: 10,
                                }}
                                leftIcon={() => {
                                    return (
                                        <Octicons
                                            name="mail"
                                            size={20}
                                            style={{
                                                width: 25,
                                                marginLeft: 10,
                                            }}
                                        />
                                    )
                                }}
                                textSize={15}
                                inputStyle={{ width: "80%" }}
                            // placeholderTextColor={LightGrayColor}
                            />
                            <Btn
                                title="Send"
                                mpBtn={{ mh: 20, mt: 60, pt: 4 }}
                                btnStyle={{
                                    borderRadius: 30,
                                    backgroundColor: DarkBlueColor,
                                    justifyContent: "center"
                                }}
                                btnHeight={50}
                                labelSize={15}
                                labelStyle={{ fontFamily: medium, color: "white" }}
                                onPress={handleSubmit}
                            />
                        </>
                    )}
                </Formik>
            </ScrollView>
        </MainContainer>
    )
}

export default ForgotPasswordScreen;