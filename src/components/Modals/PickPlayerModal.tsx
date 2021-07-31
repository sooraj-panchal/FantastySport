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


const PickPlayerModal: React.FC<props> = ({
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
                marginHorizontal: 20,
                backgroundColor: 'white',
                marginVertical: screenHeight * 0.30,
                borderRadius: 10,
                justifyContent: 'flex-start',
                paddingTop: 20,
                overflow: 'hidden'
            }}
        >
            <Container
                mpContainer={{ ph: 20 }}
            >
                <Container
                    containerStyle={{
                        flexDirection: 'row',
                        // alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                    height={130}
                >
                    <Container>
                        <Label
                            labelSize={22}
                            style={{ fontWeight: '900', letterSpacing: 0.5 }}
                        >P. Mahomes</Label>
                        <Label
                            labelSize={16}
                            style={{ color: 'black', fontWeight: '900', letterSpacing: 0.5 }}
                            mpLabel={{ mt: 5 }}
                        >QB</Label>
                        <Label
                            labelSize={15}
                            style={{ letterSpacing: 0.5 }}
                            mpLabel={{ mt: 5 }}
                        >Sun 4:25 PM</Label>
                        <Label
                            labelSize={15}
                            style={{ letterSpacing: 0.5 }}
                        >vs SEA</Label>
                    </Container>
                    <Img
                        width={90}
                        height={90}
                        imgStyle={{ alignSelf: 'flex-end' }}
                        imgSrc={{ uri: AuthImages.profile_image }}
                    // containerStyle={{backgroundColor:"red"}}
                    />
                </Container>
                <Container containerStyle={{ backgroundColor: 'lightgrey' }} height={1} mpContainer={{}} />
                <Container
                    containerStyle={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row'
                    }}
                    mpContainer={{ mh: 15, mt: 15 }}
                >
                    <Container
                        containerStyle={{ alignItems: 'center' }}
                    >
                        <Label
                            labelSize={25}
                        >36.3</Label>
                        <Label
                            labelSize={16}
                            style={{ letterSpacing: 0.5 }}
                        >Projected pts.</Label>
                    </Container>
                    <Container
                        containerStyle={{ alignItems: 'center' }}
                    >
                        <Label
                            labelSize={25}
                        >98%</Label>
                        <Label
                            labelSize={16}
                            style={{ letterSpacing: 0.5 }}
                        >Accuracy</Label>
                    </Container>
                </Container>
            </Container>
            <Btn
                title="CONFIRM PICK"
                onPress={() => { 
                    closeModal()
                }}
                btnStyle={{
                    position: 'absolute',
                    bottom: 0,
                    width: "100%",
                    backgroundColor: 'red'
                }}
                labelStyle={{ color: 'white', fontWeight: '900', letterSpacing: 0.5 }}
                labelSize={16}
                btnHeight={50}
            />
            <Ionicons
                name="md-close"
                size={25}
                color={BlackColor}
                onPress={closeModal}
                style={{ position: 'absolute', right: 15, top: 15 }}
            />
        </Modal>
    )
}

export default PickPlayerModal