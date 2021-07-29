import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { DarkBlueColor, LightGrayColor, OrangeColor } from '../../../assets/colors'
import { medium, semiBold } from '../../../assets/fonts/fonts'
import Ionicans from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { Formik } from 'formik'
import * as yup from 'yup';
import { AuthImages } from '../../../assets/images/map'
import { navigationProps } from '../../../types/nav'
import MainContainer from '../../../components/MainContainer'
import HeaderBtn from '../../../components/HeaderBtn'
import Img from '../../../components/Img'
import Label from '../../../components/Label'
import InputBox from '../../../components/InputBox'
import Btn from '../../../components/Btn'
import Octicons from 'react-native-vector-icons/Octicons'
import Container from '../../../components/Container'
import CheckBox from '@react-native-community/checkbox'


interface props extends navigationProps {
    resetPasswordLoading: boolean
}


const RegisterScreen: React.FC<props> = ({
    navigation,
    route,

}) => {

    const [isChecked, setIschecked] = useState<boolean>()

    return (
        <MainContainer
            style={{ backgroundColor: "#246e87" }}
        >
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} >
                <Formik
                    initialValues={{ confirmpassword: '', password: '' }}
                    onSubmit={values => { }}
                    validationSchema={yup.object().shape({
                        password: yup
                            .string()
                            .min(6)
                            .required("Password is must be required"),
                        confirmpassword: yup
                            .string()
                            .oneOf([yup.ref('password'), null], "Password must match")
                            .required('confirm password is must be required'),
                    })}
                >
                    {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                        <>
                            <Label
                                labelSize={30}
                                mpLabel={{ pl: 20 }}
                                style={{
                                    fontFamily: semiBold,
                                    color: "white"
                                }}
                            >Register</Label>
                            <InputBox
                                value={values.password}
                                onChangeText={handleChange("password")}
                                onBlur={() => setFieldTouched('password')}
                                // touched={touched.password}
                                // errors={errors.password}
                                mpContainer={{ mt: 20, mh: 20 }}
                                inputHeight={50}
                                placeholder="First name"
                                containerStyle={{
                                    backgroundColor: "white",
                                    borderRadius: 4,
                                    borderWidth: 0
                                }}
                                inputStyle={{
                                    width: "70%",
                                }}
                                leftIcon={() => <Ionicans name="md-person" size={20}
                                    style={{ width: 25, marginLeft: 10 }} />}
                            />

                            <InputBox
                                value={values.password}
                                onChangeText={handleChange("password")}
                                onBlur={() => setFieldTouched('password')}
                                // touched={touched.password}
                                // errors={errors.password}
                                mpContainer={{ mt: 10, mh: 20 }}
                                inputHeight={50}
                                placeholder="Last name"
                                containerStyle={{
                                    backgroundColor: "white",
                                    borderRadius: 4,
                                    borderWidth: 0
                                }}
                                inputStyle={{
                                    width: "70%",
                                }}
                                leftIcon={() => <Ionicans name="md-person" size={20}
                                    style={{ width: 25, marginLeft: 10 }} />}
                            />
                            <InputBox
                                value={values.password}
                                onChangeText={handleChange("password")}
                                onBlur={() => setFieldTouched('password')}
                                // touched={touched.password}
                                // errors={errors.password}
                                mpContainer={{ mt: 10, mh: 20 }}
                                inputHeight={50}
                                placeholder="Email"
                                containerStyle={{
                                    backgroundColor: "white",
                                    borderRadius: 4,
                                    borderWidth: 0
                                }}
                                inputStyle={{
                                    width: "70%",
                                }}
                                leftIcon={() => <Octicons name="mail" size={20}
                                    style={{ width: 25, marginLeft: 10 }} />}
                            />
                            <InputBox
                                value={values.password}
                                onChangeText={handleChange("password")}
                                onBlur={() => setFieldTouched('password')}
                                // touched={touched.password}
                                // errors={errors.password}
                                mpContainer={{ mt: 10, mh: 20 }}
                                inputHeight={50}
                                placeholder="Password"
                                containerStyle={{
                                    backgroundColor: "white",
                                    borderRadius: 4,
                                    borderWidth: 0
                                }}
                                inputStyle={{
                                    width: "70%",
                                }}
                                leftIcon={() => <SimpleLineIcons name="lock" size={20}
                                    style={{ width: 25, marginLeft: 10 }} />}
                                rightIcon={() => <Ionicans name="md-eye" size={20}
                                    style={{ position: "absolute", right: 15 }} />}
                            />
                            <InputBox
                                value={values.confirmpassword}
                                onChangeText={handleChange("confirmpassword")}
                                onBlur={() => setFieldTouched('confirmpassword')}
                                // touched={touched.confirmpassword}
                                // errors={errors.confirmpassword}
                                mpContainer={{ mt: 10, mh: 20 }}
                                inputHeight={50}
                                placeholder="Confirm password"
                                containerStyle={{
                                    backgroundColor: "white",
                                    borderRadius: 4,
                                    borderWidth: 0
                                }}
                                inputStyle={{
                                    width: "70%",
                                }}
                                leftIcon={() => <SimpleLineIcons name="lock" size={20}
                                    style={{ width: 25, marginLeft: 10 }} />}
                                rightIcon={() => <Ionicans name="md-eye" size={20}
                                    style={{ position: "absolute", right: 15 }} />}
                            />
                            <Container containerStyle={{
                                flexDirection: "row",
                                // alignItems:"center"
                            }}
                                mpContainer={{ ml:10, mt: 10 }}
                            >
                                <CheckBox
                                    value={isChecked}
                                    style={{

                                    }}
                                    tintColors={{
                                        true: "white",
                                        false: "white"
                                    }}
                                    onChange={(e) => {
                                        setIschecked(e.nativeEvent.value)
                                    }}
                                />
                                <Label
                                    labelSize={13}
                                    mpLabel={{ mr: 25,pt:2 }}
                                    style={{ color: "white" }}
                                >Lorem ipsum dolor sit amet consectetur adipisicing elit.</Label>
                            </Container>
                            <Btn
                                title="Create new account"
                                mpBtn={{ mh: 20, mt: 30 }}
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
        </MainContainer>
    )
}
export default RegisterScreen