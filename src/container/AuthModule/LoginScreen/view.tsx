import React, { Fragment } from 'react';
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
import { OrangeColor } from '../../../assets/colors';
import InputBox from '../../../components/InputBox';
import Ionicans from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import { AppStack } from '../../../navigator/navActions';
import AuthWrapper from '../../../components/AuthWrapper';
import { useLoginMutation } from '../../../features/auth';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../../store/slices/auth';
import { fcmToken } from '../../../utils/globals';

interface props extends navigationProps {
    loginLoading: boolean,
}

interface formValues {
    email: string,
    password: string,
    fcm_token?: string
}

const LoginScreen: React.FC<props> = ({
    route,
    navigation
}) => {
    const dispatch = useDispatch()
    // const getStore = useStore()
    // console.log("getState",getStore.getState())
    
    const [login, { isLoading, error }] = useLoginMutation()
    const initialState: formValues = { email: '', password: '' }

    console.log('globals.fcmToken', fcmToken)

    const onLoginHandle = async (values: formValues) => {
        const data = new FormData();
        data.append('email', values.email)
        data.append('password', values.password)
        data.append('fcm_token', fcmToken)
        try {
            const user = await login(data).unwrap()
            console.log("login response ==>", user)
            if (user.otp_verify == "Y") {
                dispatch(setCredentials({ user: user }))
                navigation.dispatch(AppStack)
            } else {
                navigation.navigate('Verification', {
                    email: user.email
                })
            }
        } catch (err) {
            console.log('err', err)
        }
    }

    return (
        <MainContainer
            style={{ backgroundColor: "#246e87" }}
            absoluteModalLoading={isLoading}
            errorMessage={error}
        >
            <AuthWrapper>
                <ScrollView>
                    <Formik
                        initialValues={initialState}
                        onSubmit={values => { onLoginHandle(values) }}
                        validationSchema={yup.object().shape({
                            email: yup
                                .string()
                                .email()
                                .required("Email is must be required"),
                            password: yup
                                .string()
                                .min(4)
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
                                    touched={touched.email}
                                    errors={errors.email}
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
                                    touched={touched.password}
                                    errors={errors.password}
                                />
                                <Label
                                    labelSize={14}
                                    mpLabel={{ mr: 20, mt: 10 }}
                                    style={{ textAlign: "right", color: 'white', fontFamily: medium }}
                                    onPress={() => {
                                        navigation.navigate("ForgotPassword")
                                    }}
                                >Forgot Password?</Label>
                                <Btn
                                    title="LOGIN"
                                    mpBtn={{ mh: 20, mt: 20, pt: 4 }}
                                    btnStyle={{
                                        backgroundColor: OrangeColor,
                                        justifyContent: "center"
                                    }}
                                    radius={10}
                                    btnHeight={50}
                                    labelSize={15}
                                    labelStyle={{ color: "white", fontFamily: medium }}
                                    onPress={handleSubmit}
                                />
                                <Container containerStyle={{
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