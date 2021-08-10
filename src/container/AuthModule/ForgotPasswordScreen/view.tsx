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
import { DarkBlueColor, LightGrayColor, OrangeColor } from '../../../assets/colors';
import Btn from '../../../components/Btn';
import Octicons from 'react-native-vector-icons/Octicons'
import AuthWrapper from '../../../components/AuthWrapper';

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
            absoluteModalLoading={forgotPasswordLoading}
            style={{ backgroundColor: "#246e87" }}
        >
            <AuthWrapper>
                <ScrollView contentContainerStyle={{ paddingBottom: 100 }} >
                    <Formik
                        initialValues={{ email: '' }}
                        onSubmit={values => {
                            navigation.navigate("EmailSent")
                        }}
                        validationSchema={yup.object().shape({
                            email: yup
                                .string()
                                .email()
                                .required("Email is must be required")
                        })}
                    >
                        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                            <>
                                <Label
                                    labelSize={30}
                                    mpLabel={{ ml: 20 }}
                                    style={{
                                        fontFamily: semiBold,
                                        color: "white"
                                    }}
                                >Forgot password</Label>
                                <Label
                                    labelSize={17}
                                    mpLabel={{ mt: 10, mh: 20 }}
                                    style={{
                                        fontFamily: regular,
                                        color: "white"
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
                                        borderRadius: 10,
                                        borderWidth: 0
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
                                    title="SEND"
                                    mpBtn={{ mh: 20, mt: 20 }}
                                    btnStyle={{
                                        backgroundColor: OrangeColor,
                                        justifyContent: "center"
                                    }}
                                    radius={4}
                                    btnHeight={50}
                                    labelSize={18}
                                    labelStyle={{ fontFamily: medium, color: "white" }}
                                    onPress={handleSubmit}
                                />
                            </>
                        )}
                    </Formik>
                </ScrollView>
            </AuthWrapper>
        </MainContainer>
    )
}

export default ForgotPasswordScreen;