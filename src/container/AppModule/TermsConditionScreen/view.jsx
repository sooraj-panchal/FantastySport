import React, { useEffect, useState } from "react";
import { OrangeColor } from "../../../assets/colors";
import { medium, semiBold } from "../../../assets/fonts/fonts";
import Container from "../../../components/Container";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";
const dummyContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maxime praesentium temporibus dolorum numquam hic labore, quos fuga neque veniam aliquam nulla sequi tempore porro quaerat voluptatem ipsam eum nesciunt?"
const ContactUs = ({

}) => {
    return (
        <Container mpContainer={{ pv: 20, ph: 20 }} >
            <Label
                labelSize={18}
                mpLabelStyle={{ pb: 20 }}
                labelStyle={{ opacity: 0.7 }} >{dummyContent}</Label>
            <Container containerStyle={{
                flexDirection: "row",
                alignItems: "center",

            }} height={40}>
                <Label labelSize={18}
                    labelStyle={{
                        color: OrangeColor,
                        fontFamily: medium
                    }} >Email :</Label>
                <Label labelSize={14} labelStyle={{}} >  contact@gmail.com</Label>
            </Container>
            <Container containerStyle={{
                flexDirection: "row",
                alignItems: "center",
            }} height={40} >
                <Label labelSize={20}
                    labelStyle={{
                        color: OrangeColor,
                        // fontWeight:"500",
                        fontFamily: medium
                    }} >Phone:</Label>
                <Label labelSize={18}
                    labelStyle={{

                    }} > +1234567890</Label>
            </Container>
        </Container>
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