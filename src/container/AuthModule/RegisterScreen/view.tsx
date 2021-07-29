import React from 'react';
import { View, Text, Button } from 'react-native'
import { navigationProps } from '../../../types/nav';
import MainContainer from '../../../components/MainContainer'
import { ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as yup from 'yup'
import Img from '../../../components/Img';
import { AuthImages } from '../../../assets/images/map';
import Label from '../../../components/Label';
import { medium, semiBold } from '../../../assets/fonts/fonts';
import Container from '../../../components/Container';
import InputBox from '../../../components/InputBox';
import { DarkBlueColor, LightGrayColor, OrangeColor } from '../../../assets/colors';
import Btn from '../../../components/Btn';

import Ionicans from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import HeaderBtn from '../../../components/HeaderBtn';

interface props extends navigationProps {
    registerLoading: boolean
}

const RegisterScreen: React.FC<props> = ({
    route,
    navigation,
    registerLoading
}) => {
    return (
        <MainContainer
            absoluteModalLoading={registerLoading}
        // style={{ marginTop: 30 }}
        >
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} >
                <Formik
                    initialValues={{ email: '', password: '', name: "", phoneNumber: "" }}
                    onSubmit={values => {

                    }}
                    validationSchema={yup.object().shape({
                        name: yup
                            .string()
                            .min(5)
                            .required('Name is required field'),
                        email: yup
                            .string()
                            .email()
                            .required("Email is must be required"),
                        password: yup
                            .string()
                            .min(6)
                            .required("Password is must be required"),
                        // confirmpassword: yup
                        //     .string()
                        //     .oneOf([yup.ref('password'), null], "Password must match")
                        //     .required('confirm password is must be required'),
                        phoneNumber: yup
                            .string()
                            .min(10)
                            .max(20)
                            .required('Mobile No is required field')
                    })}
                >
                    {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                        <>
                            <HeaderBtn />
                            <Img
                                imgSrc={AuthImages.background_logo}
                                width={90}
                                height={90}
                                // mpImage={{ mr: 20 }}
                                imgStyle={{
                                    alignSelf: "flex-end",
                                    top: 20,
                                    right: 10,
                                    position: "absolute"
                                }}
                            />
                            <Label
                                labelSize={30}
                                mpLabel={{ ml: 20 }}
                                style={{
                                    fontFamily: semiBold,
                                }}
                            >Register</Label>
                            <Container containerStyle={{
                                alignSelf: "center",
                                alignItems: "center",
                                justifyContent: 'center',
                            }} mpContainer={{ mv: 10 }} >
                                <Img
                                    imgSrc={{ uri: "https://www.mdblakehurst.catholic.edu.au/wp-content/uploads/sites/39/2019/05/Person-icon.jpg" }}
                                    width={110}
                                    height={110}
                                    imgStyle={{
                                        borderRadius: 60
                                    }}
                                />
                                <Ionicans
                                    name="camera"
                                    size={50}
                                    color="white"
                                    style={{
                                        position: "absolute"
                                    }}
                                />
                            </Container>
                            <InputBox
                                value={values.name}
                                onChangeText={handleChange("name")}
                                onBlur={() => setFieldTouched('name')}
                                autoCompleteType="name"
                                keyboardType="name-phone-pad"
                                // touched={touched.name}
                                // errors={errors.name}
                                mpContainer={{ mt: 15, mh: 20 }}
                                inputHeight={50}
                                placeholder="User name"
                                containerStyle={{
                                    backgroundColor: "white",
                                    borderColor: LightGrayColor,
                                    borderRadius: 10
                                }}
                                inputStyle={{ width: "80%" }}
                                textSize={15}
                                leftIcon={() => {
                                    return (
                                        <Ionicans
                                            name="person-outline"
                                            size={20}
                                            style={{
                                                width: 25,
                                                marginLeft: 10,
                                            }}
                                        />
                                    )
                                }}
                            // placeholderTextColor={LightGrayColor}

                            />
                            <InputBox
                                value={values.email}
                                onChangeText={() => handleChange("email")}
                                onBlur={() => setFieldTouched('email')}
                                autoCompleteType="email"
                                keyboardType="email-address"
                                // touched={touched.email}
                                // errors={errors.email}
                                textSize={15}
                                mpContainer={{ mt: 15, mh: 20 }}
                                inputHeight={50}
                                placeholder="E-mail"
                                containerStyle={{
                                    backgroundColor: "white",
                                    borderColor: LightGrayColor,
                                    borderRadius: 10,
                                }}
                                inputStyle={{ width: "80%" }}
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
                            // placeholderTextColor={LightGrayColor}
                            />
                            <InputBox
                                value={values.phoneNumber}
                                onChangeText={() => handleChange('phoneNumber')}
                                onBlur={() => setFieldTouched('phoneNumber')}
                                autoCompleteType="tel"
                                maxLength={12}
                                keyboardType="number-pad"
                                // touched={touched.phoneNumber}
                                // errors={errors.phoneNumber}
                                mpContainer={{ mt: 15, mh: 20 }}
                                inputHeight={50}
                                placeholder="Phone"
                                containerStyle={{
                                    backgroundColor: "white",
                                    borderColor: LightGrayColor,
                                    borderRadius: 10
                                }}
                                inputStyle={{ width: "80%" }}
                                textSize={15}
                                leftIcon={() => {
                                    return (
                                        <Ionicans
                                            name="call"
                                            size={20}
                                            style={{
                                                width: 25,
                                                marginLeft: 10,
                                            }}
                                        />
                                    )
                                }}
                            // placeholderTextColor={LightGrayColor}
                            />
                            <InputBox
                                value={values.password}
                                onChangeText={() => handleChange("password")}
                                onBlur={() => setFieldTouched('password')}
                                // touched={touched.password}
                                // errors={errors.password}
                                mpContainer={{ mt: 15, mh: 20 }}
                                // mpInput={{ pl: 10 }}
                                inputHeight={50}
                                placeholder="Password"
                                containerStyle={{
                                    backgroundColor: "white",
                                    borderColor: LightGrayColor,
                                    borderRadius: 10
                                }}
                                inputStyle={{
                                    width: "70%",
                                }}
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
                                                position: "absolute",
                                                right: 15,
                                            }}
                                        />
                                    )
                                }}
                                textSize={15}
                            // placeholderTextColor={LightGrayColor}
                            />
                            <Btn
                                title="Register"
                                mpBtn={{ mh: 20, mt: 20, pt: 4 }}
                                btnStyle={{
                                    borderRadius: 30,
                                    backgroundColor: DarkBlueColor,
                                    justifyContent: "center"
                                }}
                                labelStyle={{ fontFamily: medium, color: "white" }}
                                btnHeight={50}
                                labelSize={15}
                                onPress={handleSubmit}
                            />
                            <Label
                                mpLabel={{ ph: 10, mt: 15 }}
                                labelSize={18}
                                style={{ textAlign: "center", fontFamily: medium }}
                            >Already have an account?</Label>
                            <Label
                                mpLabel={{ ph: 10 }}
                                labelSize={18}
                                style={{ textAlign: "center", color: OrangeColor, fontFamily: medium }}
                                onPress={() => {
                                    navigation.navigate("Login")
                                }}
                            >Login Now</Label>
                        </>
                    )}
                </Formik>
            </ScrollView>
        </MainContainer>
    )
}

export default RegisterScreen;