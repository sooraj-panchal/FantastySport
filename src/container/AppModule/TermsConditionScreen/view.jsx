import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { OrangeColor } from "../../../assets/colors";
import { medium, semiBold } from "../../../assets/fonts/fonts";
import { AuthImages } from "../../../assets/images/map";
import Btn from "../../../components/Btn";
import Container from "../../../components/Container";
import Img from "../../../components/Img";
import InputBox from "../../../components/InputBox";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";
import { screenWidth } from "../../../types/sizes";
const dummyContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maxime praesentium temporibus dolorum numquam hic labore, quos fuga neque veniam aliquam nulla sequi tempore porro quaerat voluptatem ipsam eum nesciunt?"
const ContactUs = ({

}) => {
    return (
        <ScrollView
        // containerStyle={{ flex: 1 }}
        >
            <Img
                imgSrc={AuthImages.Splash_logo}
                imgStyle={{
                    width: screenWidth * 90,
                    height: screenWidth * 0.40,
                    alignSelf: 'center',
                    resizeMode: 'contain'
                }}
                mpImage={{ mt: 20 }}
            />
            <Label
                labelSize={16}
                style={{
                    fontFamily: medium
                }}
                mpLabel={{ mt: 20, ml: 20 }}
            >Email address*</Label>
            <InputBox
                containerStyle={{
                    borderWidth: 1,
                    borderColor: 'lightgrey'
                }}
                mpContainer={{ mt: 10, mh: 20, pl: 10 }}
                placeholder="Type here"
            />
            <Label
                labelSize={16}
                style={{
                    fontFamily: medium
                }}
                mpLabel={{ mt: 20, ml: 20 }}
            >Detailed description of issue*</Label>
            <InputBox
                containerStyle={{
                    borderWidth: 0,
                    borderColor: 'lightgrey',
                }}
                mpContainer={{ mt: 10, mh: 20 }}
                placeholder="Type here.."
                inputHeight={140}
                inputStyle={{
                    borderWidth: 1,
                    height: 140,
                    width: "100%",
                    borderRadius: 5,
                    textAlignVertical: 'top',
                    borderColor: 'lightgrey',
                }}
                mpInput={{ pl: 15, pt: 10 }}
                numberOfLines={10}
                multiline={true}
            />
            <Label
                labelSize={16}
                style={{
                    fontFamily: medium
                }}
                mpLabel={{ mt: 20, ml: 20 }}
            >Attach screenshot</Label>
            <Container
                containerStyle={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
                mpContainer={{ mt: 10, }}
            >
                <InputBox
                    containerStyle={{
                        borderWidth: 1,
                        borderColor: 'lightgrey',
                        width: screenWidth * 0.60
                    }}
                    mpContainer={{ ml: 20, pl: 10 }}
                    placeholder="File name"
                />
                <Btn
                    title="Upload"
                    btnStyle={{
                        width: 100,
                        height: 50,
                        borderRadius: 5
                    }}
                    labelStyle={{
                        color: "white"
                    }}
                    labelSize={15}
                    mpBtn={{ ml: 10 }}
                />
            </Container>
            <Btn
                title="Send"
                btnStyle={{
                    height: 50,
                    borderRadius: 5,
                    backgroundColor: OrangeColor
                }}
                labelStyle={{
                    color: "white"
                }}
                labelSize={18}
                mpBtn={{ mh: 20, mt: 15 }}
            />
        </ScrollView>
    )
}

function TermsAndConditionScreen({
    navigation,
    route
}) {

    return (
        <MainContainer style={{ backgroundColor: 'white' }} >
            {/* <ListContainer navigation={navigation} /> */}
            {route.params.title == "Contact us" && <ContactUs />}
        </MainContainer>
    )
}

export default TermsAndConditionScreen