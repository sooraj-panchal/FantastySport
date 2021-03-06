import React from 'react'
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
import AuthWrapper from '../../../components/AuthWrapper'
import { useResetPasswordMutation } from '../../../features/auth'

interface props extends navigationProps {
    resetPasswordLoading: boolean
}

interface formValues {
    password: string,
    confirmpassword: string
}

const ResetPasswordScreen: React.FC<props> = ({
    navigation,
    route
}) => {
    const [resetPassword, { data, isLoading, error }] = useResetPasswordMutation<any>()
    const initialValues: formValues = { password: '', confirmpassword: '' }

    const resetPasswordHandler = (values: formValues) => {
        let data = new FormData()
        data.append('email', route.params.email)
        data.append('password', values.password)
        resetPassword(data).unwrap().then((res: any) => {
            console.log('res',res)
            if (res.status == 'Success') {
                navigation.navigate('Login')
            }
        })
    }

    return (
        <MainContainer
            style={{ backgroundColor: "#246e87" }}
            absoluteModalLoading={isLoading}
            successMessage={data?.message}
        >
            <AuthWrapper>
                <ScrollView contentContainerStyle={{ paddingBottom: 100 }} >
                    <Formik
                        initialValues={initialValues}
                        onSubmit={values => { resetPasswordHandler(values) }}
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
                                    mpLabel={{ pl: 20,mt:20 }}
                                    style={{
                                        fontFamily: semiBold,
                                        color: "white"
                                    }}
                                >Reset password</Label>
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
                                        borderRadius: 4,
                                        borderWidth: 0
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

                                // placeholderTextColor={LightGrayColor}
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
                                        borderRadius: 4,
                                        borderWidth: 0
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

                                // placeholderTextColor={LightGrayColor}
                                />
                                <Btn
                                    title="RESET"
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
export default ResetPasswordScreen