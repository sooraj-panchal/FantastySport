import React, { useState } from 'react';
import { View } from 'react-native';
import Container from '../Container';
import Label from '../Label';
import Img from '../Img';
import { Formik } from 'formik';
import TextInputComp from '../TextInputComp';
import { BlackColor, DarkBlueColor, LightGrayColor, OrangeColor } from '../../assets/colors';
import Btn from '../Btn';
import { medium } from '../../assets/fonts/fonts';
import { AuthImages } from '../../assets/images/map';
import * as yup from 'yup';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import Modal from 'react-native-modal'
import { screenHeight } from '../../utils/styleUtils';
import { navigationProps } from '../../types/nav';
import InputBox from '../InputBox';
import { UserResponse } from '../../types/responseTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useUpdateProfileMutation } from '../../features/profile';
import MainContainer from '../MainContainer';

interface props {
    openModal: boolean,
    closeModal: () => void
}

interface props {

}
interface formValues {
    first_name?: string,
    last_name?: string,
    email?: string
}

const EditProfileModal: React.FC<props> = ({
    openModal,
    closeModal
}) => {
    const user: UserResponse = useSelector((store: RootState) => store.auth.user)
    // const [first_name] = useState(user.first_name)
    // const [last_name, setLastName] = useState(user.last_name)
    // const [email, setEmail] = useState(user.email)
    const initialState: formValues = { first_name: user.first_name, last_name: user.last_name, email: user.email }
    const [updateProfile, { data, isLoading, error }] = useUpdateProfileMutation<any>()

    const updateProfileHandler = (values: formValues) => {
        const data = new FormData()
        data.append('first_name', values.first_name)
        data.append('last_name', values.last_name)
        data.append('image', '')
        console.log('data', data)
        updateProfile(data).unwrap().then(() => closeModal())
    }

    console.log('response', data)
    console.log('error', error)

    return (
        <MainContainer
            absoluteModalLoading={isLoading}
            successMessage={data?.message}
        >
            <Modal
                isVisible={openModal}
                statusBarTranslucent={true}
                useNativeDriver={true}
                onBackButtonPress={closeModal}
                style={{
                    margin: 0,
                    marginHorizontal: 20
                }}
            // deviceHeight={999999999}
            >
                <Container containerStyle={{
                    backgroundColor: "white",
                    borderRadius: 15,
                }}
                    mpContainer={{ pb: 20, pt: 15 }}
                >
                    <Container
                        containerStyle={{
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexDirection: "row"
                        }} mpContainer={{ ph: 10 }} >
                        <Label
                            labelSize={25}
                            style={{ fontFamily: medium }}
                            mpLabel={{ ph: 10 }}
                        >Edit profile</Label>
                        <Ionicons
                            name="md-close"
                            size={30}
                            color={BlackColor}
                            onPress={closeModal}
                        />
                    </Container>
                    <Container containerStyle={{
                        // backgroundColor: "white",
                        borderRadius: 5,
                        alignItems: "center",
                        justifyContent: "center",
                        // backgroundColor:"red"
                    }}
                        mpContainer={{ mt: 20 }}
                    >
                        <Img
                            width={120}
                            height={120}
                            imgStyle={{ borderRadius: 100 }}
                            imgSrc={{ uri: AuthImages.profile_image }}
                        // containerStyle={{backgroundColor:"red"}}
                        />
                        <Container
                            containerStyle={{
                                backgroundColor: 'rgba(0,0,0,0.35)',
                                position: "absolute",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 100
                            }}
                            width={120}
                            height={120}
                        >
                            <Ionicons
                                name="ios-camera"
                                color="white"
                                size={40}
                            />
                        </Container>
                    </Container>
                    <Container>
                        <Formik
                            initialValues={initialState}
                            onSubmit={values => {
                                updateProfileHandler(values)
                            }}
                            validationSchema={yup.object().shape({
                                first_name: yup
                                    .string()
                                    .min(2)
                                    .required('Name is required field'),
                                last_name: yup
                                    .string()
                                    .min(2)
                                    .required('Name is required field'),
                                email: yup
                                    .string()
                                    .email()
                                    .required("Email is must be required"),
                            })}
                        >
                            {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                                <>
                                    <InputBox
                                        value={values.first_name}
                                        onChangeText={handleChange("first_name")}
                                        onBlur={() => setFieldTouched('first_name')}
                                        autoCompleteType="name"
                                        keyboardType="name-phone-pad"
                                        touched={touched.first_name}
                                        errors={errors.first_name}
                                        mpContainer={{ mt: 20, mh: 20 }}
                                        inputHeight={50}
                                        placeholder="Enter your first name"
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
                                                <Ionicons
                                                    name="person-outline"
                                                    size={20}
                                                    style={{
                                                        width: 30,
                                                        marginLeft: 15,
                                                    }}
                                                />
                                            )
                                        }}
                                    // placeholderTextColor={LightGrayColor}
                                    />
                                    <InputBox
                                        value={values.last_name}
                                        onChangeText={handleChange("last_name")}
                                        onBlur={() => setFieldTouched('last_name')}
                                        autoCompleteType="name"
                                        keyboardType="name-phone-pad"
                                        touched={touched.last_name}
                                        errors={errors.last_name}
                                        mpContainer={{ mt: 10, mh: 20 }}
                                        inputHeight={50}
                                        placeholder="Enter your last name"
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
                                                <Ionicons
                                                    name="person-outline"
                                                    size={20}
                                                    style={{
                                                        width: 30,
                                                        marginLeft: 15,
                                                    }}
                                                />
                                            )
                                        }}
                                    // placeholderTextColor={LightGrayColor}
                                    />
                                    <InputBox
                                        value={values.email}
                                        onChangeText={handleChange("email")}
                                        onBlur={() => setFieldTouched('email')}
                                        autoCompleteType="email"
                                        keyboardType="email-address"
                                        // touched={touched.email}
                                        // errors={errors.email}
                                        mpContainer={{ mt: 10, mh: 20 }}
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
                                                        width: 30,
                                                        marginLeft: 15,
                                                    }}
                                                />
                                            )
                                        }}
                                        editable={false}
                                    // placeholderTextColor={LightGrayColor}
                                    />
                                    <Btn
                                        title="SAVE"
                                        mpBtn={{ mh: 20, mt: 20 }}
                                        btnStyle={{
                                            borderRadius: 10,
                                            backgroundColor: OrangeColor,
                                            justifyContent: "center"
                                        }}
                                        btnHeight={50}
                                        labelSize={18}
                                        labelStyle={{ fontFamily: medium, color: 'white' }}
                                        onPress={handleSubmit}
                                    />
                                </>
                            )}
                        </Formik>
                    </Container>
                </Container>
            </Modal>
        </MainContainer>

    )
}

export default EditProfileModal