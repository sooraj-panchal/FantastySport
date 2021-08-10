import React from 'react';
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

interface props {
    openModal: boolean,
    closeModal: () => void
}


const EditProfileModal: React.FC<props> = ({
    openModal,
    closeModal
}) => {
    // console.log(openModal)
    return (
        <Modal
            isVisible={openModal}
            statusBarTranslucent={true}
            useNativeDriver={true}
            // animationIn="fadeIn"
            // animationOut="fadeOut"
            onBackButtonPress={closeModal}
            style={{
                margin: 0,
                marginHorizontal: 20
            }}
        // deviceHeight={screenHeight}
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
                        initialValues={{ email: '', name: "", phoneNumber: "" }}
                        onSubmit={values => {
                            // registerHandler(values)
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
                            phoneNumber: yup
                                .string()
                                .min(10)
                                .max(20)
                                .required('Mobile No is required field')
                        })}
                    >
                        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                            <>
                                <InputBox
                                    value={values.name}
                                    onChangeText={handleChange("name")}
                                    onBlur={() => setFieldTouched('name')}
                                    autoCompleteType="name"
                                    keyboardType="name-phone-pad"
                                    // touched={touched.name}
                                    // errors={errors.name}
                                    mpContainer={{ mt: 20, mh: 20 }}
                                    inputHeight={50}
                                    placeholder="User name"
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
                                    mpContainer={{ mt: 20, mh: 20 }}
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
    )
}

export default EditProfileModal