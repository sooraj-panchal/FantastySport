import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { DarkBlueColor, LightGrayColor, OrangeColor } from '../../../assets/colors'
import { medium, semiBold } from '../../../assets/fonts/fonts'
import Btn from '../../../components/Btn'
import MainContainer from '../../../components/MainContainer'
import TextInputComp from '../../../components/TextInputComp'
import Ionicans from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { Formik, FormikValues } from 'formik'
import * as yup from 'yup';
import { AuthStack } from '../../../navigator/navActions'
import * as globals from '../../../utils/globals'
import { navigationProps } from '../../../types/nav'
import InputBox from '../../../components/InputBox'
import AuthWrapper from '../../../components/AuthWrapper'
import Label from '../../../components/Label'
import { useChangePasswordMutation } from '../../../features/auth'

// interface props extends navigationProps {

// }
interface formValues {
    oldpassword: string,
    password: string,
    confirmpassword: string
}
const ChangePasswordScreen: React.FC<navigationProps> = ({
    navigation,
    route
}) => {
    const [changePassword, { data, isLoading, error }] = useChangePasswordMutation<any>()
    const [isOldPasswordVisible, setIsOldPasswordVisible] = useState<boolean>(false)
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState<boolean>(false)

    const initialValues: formValues = { oldpassword: '', password: '', confirmpassword: '' }

    const changePasswordHandler = (values: formValues) => {
        var data = new FormData()
        data.append("old_password", values.oldpassword)
        data.append("password", values.password)
        changePassword(data).unwrap().then((res) => {
            // console.log("changepassword Response", res)
            navigation.goBack()
        })
    }

    return (
        <MainContainer
            absoluteModalLoading={isLoading}
            errorMessage={error}
            successMessage={data?.message}
        >
            <AuthWrapper>
                <ScrollView contentContainerStyle={{ paddingBottom: 100 }} >
                    <Label
                        labelSize={30}
                        mpLabel={{ ml: 20 }}
                        style={{
                            fontFamily: semiBold,
                            color: "white"
                        }}
                    >Change password</Label>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={values => changePasswordHandler(values)}
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
                                    touched={touched.oldpassword}
                                    errors={errors.oldpassword}
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
                                                name={isOldPasswordVisible ? "md-eye" : "md-eye-off"}
                                                size={20}
                                                style={{
                                                    position: "absolute",
                                                    right: 15,
                                                }}
                                                onPress={() => {
                                                    setIsOldPasswordVisible(!isOldPasswordVisible)
                                                }}
                                            />
                                        )
                                    }}
                                    secureTextEntry={isOldPasswordVisible ? false : true}
                                // placeholderTextColor={LightGrayColor}
                                />
                                <InputBox
                                    value={values.password}
                                    onChangeText={handleChange("password")}
                                    onBlur={() => setFieldTouched('password')}
                                    touched={touched.password}
                                    errors={errors.password}
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
                                                name={isPasswordVisible ? "md-eye" : "md-eye-off"}
                                                size={20}
                                                style={{
                                                    position: "absolute",
                                                    right: 15,
                                                }}
                                                onPress={() => {
                                                    setIsPasswordVisible(!isPasswordVisible)
                                                }}
                                            />
                                        )
                                    }}
                                    secureTextEntry={isPasswordVisible ? false : true}

                                // placeholderTextColor={LightGrayColor}
                                />
                                <InputBox
                                    value={values.confirmpassword}
                                    onChangeText={handleChange("confirmpassword")}
                                    onBlur={() => setFieldTouched('confirmpassword')}
                                    touched={touched.confirmpassword}
                                    errors={errors.confirmpassword}
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
                                                name={isNewPasswordVisible ? "md-eye" : "md-eye-off"}
                                                size={20}
                                                style={{
                                                    position: "absolute",
                                                    right: 15,
                                                }}
                                                onPress={() => {
                                                    setIsNewPasswordVisible(!isNewPasswordVisible)
                                                }}
                                            />
                                        )
                                    }}
                                    secureTextEntry={isNewPasswordVisible ? false : true}
                                />
                                <Btn
                                    title="CHANGE"
                                    mpBtn={{ mh: 20, mt: 40 }}
                                    btnStyle={{
                                        borderRadius: 10,
                                        backgroundColor: OrangeColor,
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
            </AuthWrapper>
        </MainContainer>
    )
}
export default ChangePasswordScreen