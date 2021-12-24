import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { OrangeColor } from '../../../assets/colors'
import { medium, semiBold } from '../../../assets/fonts/fonts'
import Ionicans from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { Formik } from 'formik'
import * as yup from 'yup';
import { navigationProps } from '../../../types/nav'
import MainContainer from '../../../components/MainContainer'
import Label from '../../../components/Label'
import InputBox from '../../../components/InputBox'
import Btn from '../../../components/Btn'
import Octicons from 'react-native-vector-icons/Octicons'
import Container from '../../../components/Container'
import CheckBox from '@react-native-community/checkbox'
import AuthWrapper from '../../../components/AuthWrapper'
import { useRegisterMutation } from '../../../features/auth'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { fcmToken } from '../../../utils/globals'


interface props extends navigationProps {
    resetPasswordLoading: boolean
}

interface formValues {
    first_name: string,
    last_name: string,
    email: string,
    confirmpassword: string,
    password: string,
    fcm_token?: string
}

const RegisterScreen: React.FC<props> = ({
    navigation,
    route,
}) => {
    // const dispatch = useDispatch()
    const [register, { isLoading, error }] = useRegisterMutation()
    const initialValues: formValues = { first_name: '', last_name: "", email: "", confirmpassword: '', password: '' }
    const [isChecked, setIschecked] = useState<boolean>()

    const onRegisterHandler = async (values: formValues) => {
        let data = new FormData()
        data.append('first_name', values.first_name)
        data.append('last_name', values.last_name)
        data.append('email', values.email)
        data.append('password', values.password)
        data.append('google_id', '')
        data.append('facebook_id', '')
        data.append('fcm_token', fcmToken)
        try {
            const user = await register(data).unwrap()
            // console.log(user)
            navigation.navigate('Verification', {
                email: user.email,
            })
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
                <ScrollView contentContainerStyle={{ paddingBottom: 100 }} >
                    <Formik
                        initialValues={initialValues}
                        onSubmit={values => onRegisterHandler(values)}
                        validationSchema={yup.object().shape({
                            first_name: yup
                                .string()
                                .min(2, "First name must be atleast 2 characters")
                                .required('First name is required field'),
                            last_name: yup
                                .string()
                                .min(2, "Last name must be atleast 2 characters")
                                .required('Last name is required field'),
                            email: yup
                                .string()
                                .email("Email must be a valid email")
                                .required("Email is must be required"),
                            password: yup
                                .string()
                                .min(4)
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
                                    value={values.first_name}
                                    onChangeText={handleChange("first_name")}
                                    onBlur={() => setFieldTouched('first_name')}
                                    touched={touched.first_name}
                                    errors={errors.first_name}
                                    mpContainer={{ mt: 20, mh: 20 }}
                                    inputHeight={50}
                                    placeholder="First name"
                                    containerStyle={{
                                        backgroundColor: "white",
                                        borderRadius: 10,
                                        borderWidth: 0
                                    }}
                                    inputStyle={{
                                        width: "70%",
                                    }}
                                    leftIcon={() => <Ionicans name="md-person" size={20}
                                        style={{ width: 25, marginLeft: 10 }} />}
                                />
                                <InputBox
                                    value={values.last_name}
                                    onChangeText={handleChange("last_name")}
                                    onBlur={() => setFieldTouched('last_name')}
                                    touched={touched.last_name}
                                    errors={errors.last_name}
                                    mpContainer={{ mt: 10, mh: 20 }}
                                    inputHeight={50}
                                    placeholder="Last name"
                                    containerStyle={{
                                        backgroundColor: "white",
                                        borderRadius: 10,
                                        borderWidth: 0
                                    }}
                                    inputStyle={{
                                        width: "70%",
                                    }}
                                    leftIcon={() => <Ionicans name="md-person" size={20}
                                        style={{ width: 25, marginLeft: 10 }} />}
                                />
                                <InputBox
                                    value={values.email}
                                    onChangeText={handleChange("email")}
                                    onBlur={() => setFieldTouched('email')}
                                    touched={touched.email}
                                    errors={errors.email}
                                    mpContainer={{ mt: 10, mh: 20 }}
                                    inputHeight={50}
                                    placeholder="Email"
                                    containerStyle={{
                                        backgroundColor: "white",
                                        borderRadius: 10,
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
                                    touched={touched.password}
                                    errors={errors.password}
                                    mpContainer={{ mt: 10, mh: 20 }}
                                    inputHeight={50}
                                    placeholder="Password"
                                    containerStyle={{
                                        backgroundColor: "white",
                                        borderRadius: 10,
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
                                    touched={touched.confirmpassword}
                                    errors={errors.confirmpassword}
                                    mpContainer={{ mt: 10, mh: 20 }}
                                    inputHeight={50}
                                    placeholder="Confirm password"
                                    containerStyle={{
                                        backgroundColor: "white",
                                        borderRadius: 10,
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
                                    mpContainer={{ ml: 15, mt: 10 }}
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
                                        mpLabel={{ pt: 2 }}
                                        style={{ color: "white", maxWidth: '80%' }}
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
            </AuthWrapper>
        </MainContainer>
    )
}
export default RegisterScreen
