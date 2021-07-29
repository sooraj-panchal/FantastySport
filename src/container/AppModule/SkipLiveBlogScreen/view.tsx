import React, { useState } from "react";
import { FlatList, ScrollView, StatusBar, Text, TextInput, View } from "react-native";
import { DarkBlueColor, OrangeColor } from "../../../assets/colors";
import { medium, regular } from "../../../assets/fonts/fonts";
import Btn from "../../../components/Btn";
import CardView from "../../../components/CardView";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import {
    facing as facingData,
    preferredAreas
} from "../../../../dummyArray";
import Ionicons from "react-native-vector-icons/Ionicons";
import TextInputComp from "../../../components/TextInputComp";
import Container from "../../../components/Container";
import { screenWidth } from "../../../utils/styleUtils";
import HeaderBtn from "../../../components/HeaderBtn";
import { navigationProps } from "../../../types/nav";
import InputBox from "../../../components/InputBox";

interface props extends navigationProps {
    verifyOtpLoading: boolean
}


const SkipLiveBlogScreen: React.FC<props> = ({
    navigation,
    route
}) => {

    return (
        <MainContainer style={{ backgroundColor: "white" }} statusBarHeight >
            <StatusBar barStyle="dark-content" translucent />
            <Container mpContainer={{ mt: 10 }}
                containerStyle={{
                    flexDirection: "row",
                    alignItems: "center"
                }}
            >
                <HeaderBtn />
                <Label
                    labelSize={18}
                    // labelStyle={{}}
                    mpLabel={{ pl: 20, mt: 4 }}
                >Skip blog</Label>

            </Container>

            <Container mpContainer={{ mt: 10 }} >
                <Label
                    labelSize={18}
                    // labelStyle={{}}
                    mpLabel={{ pl: 20 }}
                >Please enter the reasone why you want to skip live blog?</Label>
                <TextInput
                    placeholder="Type here..."
                    style={{
                        borderWidth: 1,
                        borderColor: "lightgrey",
                        marginHorizontal: 20,
                        paddingLeft: 10,
                        borderRadius: 5,
                        height: 80,
                        textAlignVertical: "top",
                        fontSize: 14,
                        marginTop: 10
                    }}
                    multiline={true}
                />
            </Container>
            <Label
                mpLabel={{ mt: 20, ml: 20 }}
                labelSize={18}
            >Email Address</Label>
            <InputBox
                value={""}
                placeholder="None"
                inputHeight={40}
                containerStyle={{
                    borderWidth: 1,
                    borderColor: "lightgrey",
                    backgroundColor: "white",
                }}
                inputStyle={{ fontSize: 14, fontFamily: regular, padding: 0 }}
                mpContainer={{ mt: 5, pl: 20, pt: 5, mh: 20 }}
            />
            <Label
                mpLabel={{ mt: 20, ml: 20 }}
                labelSize={18}
            >Mobile number</Label>
            <InputBox
                value={""}
                placeholder="Mobile"
                inputHeight={40}
                containerStyle={{
                    borderWidth: 1,
                    borderColor: "lightgrey",
                    backgroundColor: "white",
                }}
                inputStyle={{ fontSize: 14, fontFamily: regular, padding: 0 }}
                mpContainer={{ mt: 5, pl: 20, pt: 5, mh: 20 }}
            />
            <Btn
                title="Submit"
                btnStyle={{
                    backgroundColor: DarkBlueColor,
                    justifyContent: "center",
                }}
                mpBtn={{ mt: 40, mh: 20, mv: 10, pt: 4 }}
                labelStyle={{ color: "white", fontFamily: medium }}
                labelSize={15}
                btnHeight={40}
                radius={20}
                onPress={() => {
                    navigation.navigate("LiveBlog")
                }}
            />
        </MainContainer >
    )
}

export default SkipLiveBlogScreen
