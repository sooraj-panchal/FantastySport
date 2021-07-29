import React, { useEffect } from 'react'
import { ScrollView } from 'react-native'
import { DarkBlueColor, LightGrayColor } from '../../../assets/colors'
import { medium } from '../../../assets/fonts/fonts'
import Btn from '../../../components/Btn'
import MainContainer from '../../../components/MainContainer'
import TextInputComp from '../../../components/TextInputComp'
import Ionicans from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { Formik } from 'formik'
import * as yup from 'yup';
import { AuthStack } from '../../../navigator/navActions'
import * as globals from '../../../utils/globals'
import { navigationProps } from '../../../types/nav'
import InputBox from '../../../components/InputBox'


interface props extends navigationProps {
    resetPasswordWatcher: any,
    resetPasswordSuccess: any,
    resetPasswordResponse: any,
    resetPasswordLoading: boolean
}

const ChangePasswordScreen: React.FC<props> = ({
    navigation,
    route,
    resetPasswordWatcher,
    resetPasswordSuccess,
    resetPasswordResponse,
    resetPasswordLoading
}) => {

    const resetPasswordHandler = (values: { password: string }) => {
        var data = new FormData()
        data.append("auth_token", globals.authToken)
        data.append("password", values.password)
        data.append("email", route.params.email)
        resetPasswordWatcher(data)
    }

    useEffect(() => {
        if (resetPasswordResponse?.status == "success") {
            navigation.dispatch(AuthStack)
        }
        return () => resetPasswordSuccess(null)
    }, [resetPasswordResponse])


    return (
        <MainContainer
            absoluteModalLoading={resetPasswordLoading}
        >
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} >
                <Formik
                    initialValues={{ oldpassword: "", confirmpassword: '', password: '' }}
                    onSubmit={values => resetPasswordHandler(values)}
                    validationSchema={yup.object().shape({
                        oldpassword: yup
                            .string()
                            .min(6)
                            .required("oldpassword is must be required"),
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
                            <InputBox
                                value={values.oldpassword}
                                onChangeText={handleChange("oldpassword")}
                                onBlur={() => setFieldTouched('oldpassword')}
                                // touched={touched.oldpassword}
                                // errors={errors.oldpassword}
                                mpContainer={{ mt: 30, mh: 20 }}
                                inputHeight={50}
                                placeholder="Old password"
                                containerStyle={{
                                    backgroundColor: "white",
                                    borderColor: LightGrayColor,
                                    borderRadius: 10
                                }}
                                inputStyle={{
                                    width: "70%",
                                    fontSize: 14
                                }}
                                leftIcon={() => {
                                    return (
                                        <SimpleLineIcons
                                            name="lock"
                                            size={20}
                                            style={{
                                                width: 30,
                                                marginLeft: 15,
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
                            // placeholderTextColor={LightGrayColor}
                            />
                            <InputBox
                                value={values.password}
                                onChangeText={handleChange("password")}
                                onBlur={() => setFieldTouched('password')}
                                // touched={touched.password}
                                // errors={errors.password}
                                mpContainer={{ mt: 20, mh: 20 }}
                                inputHeight={50}
                                placeholder="Password"
                                containerStyle={{
                                    backgroundColor: "white",
                                    borderColor: LightGrayColor,
                                    borderRadius: 10
                                }}
                                inputStyle={{
                                    width: "70%",
                                    fontSize: 14
                                }}
                                leftIcon={() => {
                                    return (
                                        <SimpleLineIcons
                                            name="lock"
                                            size={20}
                                            style={{
                                                width: 30,
                                                marginLeft: 15,
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
                            // placeholderTextColor={LightGrayColor}
                            />
                            <InputBox
                                value={values.confirmpassword}
                                onChangeText={handleChange("confirmpassword")}
                                onBlur={() => setFieldTouched('confirmpassword')}
                                // touched={touched.confirmpassword}
                                // errors={errors.confirmpassword}
                                mpContainer={{ mt: 20, mh: 20 }}
                                inputHeight={50}
                                placeholder="Confitm password"
                                containerStyle={{
                                    backgroundColor: "white",
                                    borderColor: LightGrayColor,
                                    borderRadius: 10
                                }}
                                inputStyle={{
                                    width: "70%",
                                    fontSize: 14
                                }}
                                leftIcon={() => {
                                    return (
                                        <SimpleLineIcons
                                            name="lock"
                                            size={20}
                                            style={{
                                                width: 30,
                                                marginLeft: 15,
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
                            // placeholderTextColor={LightGrayColor}
                            />
                            <Btn
                                title="Reset"
                                mpBtn={{ mh: 20, mt: 40, pt: 4 }}
                                btnStyle={{
                                    borderRadius: 30,
                                    backgroundColor: DarkBlueColor,
                                    justifyContent: "center"
                                }}
                                btnHeight={45}
                                labelSize={15}
                                radius={5}
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
export default ChangePasswordScreen