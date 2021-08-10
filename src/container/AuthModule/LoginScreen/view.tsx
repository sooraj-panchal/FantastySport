import React, { Fragment } from 'react';
import { View, Text, Button, StatusBar, ImageBackground } from 'react-native'
import { navigationProps } from '../../../types/nav';
import MainContainer from '../../../components/MainContainer'
import Btn from '../../../components/Btn';
import { ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as yup from 'yup'
import Img from '../../../components/Img';
import { AuthImages } from '../../../assets/images/map';
import Label from '../../../components/Label';
import { medium, semiBold } from '../../../assets/fonts/fonts';
import Container from '../../../components/Container';
import { DarkBlueColor, LightGrayColor, OrangeColor } from '../../../assets/colors';
import InputBox from '../../../components/InputBox';
import Ionicans from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import { AppStack } from '../../../navigator/navActions';
import AuthWrapper from '../../../components/AuthWrapper';

interface props extends navigationProps {
    loginLoading: boolean,
}

const LoginScreen: React.FC<props> = ({
    route,
    navigation,
    loginLoading
}) => {

    return (
        <MainContainer
            absoluteModalLoading={loginLoading}
            // statusBarHeight
            style={{ backgroundColor: "#246e87" }}
        >
            <AuthWrapper>
                <ScrollView>
                    <Formik
                        initialValues={{ email: '', password: "" }}
                        onSubmit={values => { }}
                        validationSchema={yup.object().shape({
                            email: yup
                                .string()
                                .email()
                                .required("Email is must be required"),
                            password: yup
                                .string()
                                .min(6)
                                .required("Password is must be required"),
                        })}
                    >
                        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                            <Fragment>
                                <Label
                                    labelSize={28}
                                    mpLabel={{ ml: 20, }}
                                    style={{
                                        fontFamily: semiBold,
                                        color: "white"
                                    }}
                                >Login</Label>
                                <InputBox
                                    mpContainer={{ mt: 20, mh: 20 }}
                                    inputHeight={50}
                                    placeholder="Email address"
                                    containerStyle={{
                                        backgroundColor: "white",
                                        borderRadius: 10,
                                        borderWidth: 0
                                    }}
                                    textSize={15}
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
                                    value={values.email}
                                    onChangeText={handleChange("email")}
                                    onBlur={() => setFieldTouched('email')}
                                    keyboardType="email-address"
                                // errors={errors.email}
                                // touched={touched.email}
                                />
                                <InputBox
                                    value={values.password}
                                    onChangeText={handleChange("password")}
                                    onBlur={() => setFieldTouched('password')}
                                    mpContainer={{ mt: 10, mh: 20 }}
                                    inputHeight={50}
                                    placeholder="Password"
                                    containerStyle={{
                                        backgroundColor: "white",
                                        borderRadius: 10,
                                        borderWidth: 0
                                    }}
                                    inputStyle={{ width: "70%", fontSize: 15 }}
                                    leftIcon={() => {
                                        return (
                                            <SimpleLineIcons
                                                name="lock"
                                                size={20}
                                                style={{
                                                    width: 25,
                                                    marginLeft: 10,
                                                }}
                                            />
                                        )
                                    }}
                                    rightIcon={() => {
                                        return (
                                            <Ionicans
                                                name="md-eye"
                                                size={20}
                                                style={{
                                                    right: 15,
                                                    position: "absolute"
                                                }}
                                            />
                                        )
                                    }}
                                // placeholderTextColor={LightGrayColor}
                                // errors={errors.password}
                                // touched={touched.password}
                                />
                                <Label
                                    labelSize={14}
                                    mpLabel={{ mr:20, mt: 10 }}
                                    style={{ textAlign: "right", color: 'white', fontFamily: medium }}
                                    onPress={() => {
                                        navigation.navigate("ForgotPassword")
                                    }}
                                >Forgot Password?</Label>
                                <Btn
                                    title="LOGIN"
                                    mpBtn={{ mh:20, mt: 20, pt: 4 }}
                                    btnStyle={{
                                        backgroundColor: OrangeColor,
                                        justifyContent: "center"
                                    }}
                                    radius={10}
                                    btnHeight={50}
                                    labelSize={15}
                                    labelStyle={{ color: "white", fontFamily: medium }}
                                    onPress={() => {
                                        // handleSubmit()
                                        navigation.navigate("Verification", {
                                            email: "soorajpanchal786@gmail.com"
                                        })
                                        // navigation.dispatch(AppStack)
                                    }}
                                />
                                <Container containerStyle={{
                                    // flex: 1,
                                    flexDirection: "row",
                                    alignSelf: "center",
                                    marginTop: 30,
                                    alignItems: "center",
                                }} mpContainer={{ mt: 30 }} >
                                    <Container containerStyle={{
                                        flex: 0.45,
                                        height: 1,
                                        backgroundColor: "white"
                                    }} />
                                    <Label
                                        mpLabel={{ ph: 10 }}
                                        labelSize={15}
                                        style={{ color: "white" }}
                                    >Or</Label>
                                    <Container containerStyle={{
                                        flex: 0.45,
                                        height: 1,
                                        backgroundColor: "white"
                                    }} />
                                </Container>
                                <Btn
                                    title="Continue with Google"
                                    mpBtn={{ mh: 20, mt: 30 }}
                                    btnStyle={{
                                        backgroundColor: "white",
                                        justifyContent: "center",
                                        elevation: 1
                                    }}
                                    radius={4}
                                    btnHeight={45}
                                    labelSize={13}
                                    labelStyle={{ fontFamily: medium, color: "black", marginLeft: 15 }}
                                    onPress={handleSubmit}
                                    leftIcon={() => {
                                        return (
                                            <Img
                                                imgSrc={AuthImages.gle_icon}
                                                width={22}
                                                height={23}
                                            // onPress={loginWithGoogle}
                                            />
                                        )
                                    }}
                                />
                                <Btn
                                    title="Continue with Facebook "
                                    mpBtn={{ mh: 20, mt: 15, mb: 20 }}
                                    btnStyle={{
                                        backgroundColor: "#4267B2",
                                        justifyContent: "center",
                                        elevation: 1
                                    }}
                                    radius={4}
                                    btnHeight={45}
                                    labelSize={13}
                                    labelStyle={{ fontFamily: medium, color: "white", marginLeft: 15 }}
                                    onPress={handleSubmit}
                                    leftIcon={() => {
                                        return (
                                            <Ionicans
                                                name="md-logo-facebook"
                                                size={28}
                                                color="white"
                                            />
                                        )
                                    }}
                                />
                            </Fragment>
                        )}
                    </Formik>
                </ScrollView>
            </AuthWrapper>
        </MainContainer>
    )
}

export default LoginScreen;