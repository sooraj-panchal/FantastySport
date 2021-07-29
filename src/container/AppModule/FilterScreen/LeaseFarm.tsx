import React, { useState } from "react";
import { FlatList, ScrollView, Text, TextInput, View } from "react-native";
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
import InputBox from "../../../components/InputBox";
import { navigationProps } from "../../../types/nav";
import { useNavigation } from "@react-navigation/native";


interface props extends navigationProps {

}


const LeaseFarm: React.FC<props> = ({
    navigation,
}) => {
    const [facing, setFacing] = useState(facingData)
    const [preferredArea, setPeferredArea] = useState(preferredAreas)

    interface facingItemType {
        name: string
        isSelected: boolean | string
    }

    const _renderFacingData = ({ item, index }: { item: facingItemType, index: number }) => {
        return (
            <Container
                // width={100}
                height={35}
                containerStyle={{
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 1,
                    borderRadius: 20,
                    borderColor: item.isSelected ? OrangeColor : 'lightgrey',
                    backgroundColor: "white",
                    width: screenWidth / 5
                }}
                mpContainer={{ mv: 5, mh: 5, pt: 4 }}

                onPress={() => {
                    const array = [...facing]
                    array.map((value, placeindex) =>
                        placeindex === index
                        // && (array[placeindex]['isSelected'] = !array[placeindex]['isSelected'])
                        // : (array[placeindex]['isExpanded'] = false)
                    )
                    setFacing(array)
                }}
            >
                <Label labelSize={14}
                    style={{ letterSpacing: 0.5, color: item.isSelected ? OrangeColor : 'black' }}
                >{item.name}</Label>
            </Container>
        )
    }

    const renderBlockSize = () => {
        return (
            <>
                <Container containerStyle={{
                    flexDirection: "row",
                }} mpContainer={{ mt: 5 }} >
                    <InputBox
                        placeholder="100"
                        inputStyle={{
                            fontSize: 12,
                            padding: 0
                        }}
                        containerStyle={{
                            width: screenWidth * 0.22
                        }}
                        mpInput={{ pl: 10 }}
                        inputHeight={35}
                    />
                    <Label
                        mpLabel={{ mh: 10, mt: 10 }}
                    >-</Label>
                    <Container containerStyle={{
                        alignItems: "flex-end"
                    }} >
                        <InputBox
                            placeholder="1000"
                            inputStyle={{
                                fontSize: 12,
                                padding: 0
                            }}
                            containerStyle={{
                                width: screenWidth * 0.22
                            }}
                            inputHeight={35}
                            mpInput={{ pl: 10 }}
                        />
                        {/* <Label
                        mpLabelStyle={{ mt: 2 }}
                        labelSize={10}
                        labelStyle={{ color: "grey" }}
                    >Up to 5000 acres</Label> */}
                    </Container>
                    <Btn
                        title="Sq.meters"
                        btnStyle={{
                            backgroundColor: "white",
                            borderWidth: 1,
                            borderColor: "grey",
                            width: screenWidth * 0.35
                        }}
                        labelSize={14}
                        mpBtn={{ ml: 10}}
                        labelStyle={{ color: "grey" }}
                        btnHeight={35}
                        rightIcon={() => {
                            return <Ionicons name="md-caret-down" size={20} style={{ position: "absolute", right: 5 }} color="grey" />
                        }}
                        onPress={() => { }}
                        radius={5}
                    />
                </Container>
                <Btn
                    title="Any"
                    btnStyle={{
                        backgroundColor: "rgba(128, 195, 224,0.5)",
                        justifyContent: "center"
                    }}
                    radius={5}
                    labelSize={14}
                    mpBtn={{ ph: 25, mt: 10, mr: 20, pt: 4 }}
                    labelStyle={{ color: "grey", fontFamily: medium }}
                    btnHeight={35}
                    onPress={() => { }}
                />
            </>
        )
    }


    const renderState = () => {
        return (
            <InputBox
                editable={false}
                value={""}
                placeholder="VIC"
                inputHeight={40}
                containerStyle={{
                    borderWidth: 1,
                    borderColor: "lightgrey",
                    backgroundColor: "white"
                }}
                inputStyle={{ fontSize: 14, fontFamily: regular, padding: 0 }}
                mpContainer={{ mt: 5, pl: 10, pt: 5, mh: 20 }}
                rightIcon={() =>
                    <Ionicons
                        name="md-caret-down"
                        size={20}
                        color="grey"
                        style={{
                            position: "absolute",
                            right: 10
                        }}
                    />
                }
            />
        )
    }


    const renderPrice = () => {
        return (
            <Container>
                <MultiSlider
                    values={[0, 100]}
                    // min={20}
                    // max={80}
                    minMarkerOverlapDistance={30}
                    sliderLength={screenWidth * 0.85}
                    markerStyle={{
                        backgroundColor: DarkBlueColor,
                        height: 15,
                        width: 15,
                        borderRadius: 15,
                    }}
                    trackStyle={{
                        height: 2.5
                    }}
                    selectedStyle={{
                        backgroundColor: DarkBlueColor
                    }}
                    containerStyle={{
                        marginLeft: 5,
                        marginTop: -10
                    }}
                />
                <Container containerStyle={{
                    flexDirection: "row",
                    alignItems: "center",
                    // justifyContent: "space-between"
                }}
                    mpContainer={{ ml: 0, mr: 20, mt: 0 }}
                >
                    <InputBox
                        placeholder="$25"
                        inputStyle={{
                            fontSize: 12,
                            padding: 0
                        }}
                        containerStyle={{
                            width: screenWidth * 0.25
                        }}
                        mpInput={{ pl: 10 }}
                        inputHeight={35}
                    />
                    <Label
                        style={{
                            color: "grey"
                        }}
                        labelSize={16}
                        mpLabel={{ mh: 10 }}
                    >To</Label>
                    <InputBox
                        placeholder="$50"
                        inputStyle={{
                            fontSize: 12,
                            padding: 0
                        }}
                        containerStyle={{
                            width: screenWidth * 0.25
                        }}
                        mpInput={{ pl: 10 }}
                        inputHeight={35}
                    />
                    <InputBox
                        placeholder="PW"
                        inputStyle={{
                            fontSize: 12,
                            padding: 0
                        }}
                        containerStyle={{
                            width: screenWidth * 0.20
                        }}
                        mpContainer={{ ml: 15 }}
                        mpInput={{ pl: 10 }}
                        inputHeight={35}
                        rightIcon={() =>
                            <Ionicons
                                name="md-caret-down"
                                size={20}
                                color="grey"
                                style={{
                                    position: "absolute",
                                    right: 5
                                }}
                            />
                        }
                    />
                </Container>
            </Container>
        )
    }

    const searchRangeUpto = () => {
        return <>
            <View style={{
                paddingLeft: 20, marginTop: 20, flexDirection: "row",
                alignItems: 'center'
            }} >
                <Label
                    labelSize={18}
                >Search range up to</Label>
                <InputBox
                    editable={false}
                    value={""}
                    placeholder="VIC"
                    inputHeight={35}
                    containerStyle={{
                        borderWidth: 1,
                        borderColor: "lightgrey",
                        backgroundColor: "white",
                        width: 80,
                    }}
                    inputStyle={{ fontSize: 14, fontFamily: regular, padding: 0 }}
                    mpContainer={{ pl: 10, pt: 5, ml: 15 }}
                    rightIcon={() =>
                        <Ionicons
                            name="md-caret-down"
                            size={20}
                            color="grey"
                            style={{
                                position: "absolute",
                                right: 10
                            }}
                        />
                    }
                />
                <Label
                    labelSize={18}
                    mpLabel={{ ml: 15 }}
                >Km</Label>
            </View>
            <Label
                labelSize={18}
                mpLabel={{ ml: 20 }}
            >radius</Label>
        </>
    }

    const SuitableFor = () => {
        return <Container mpContainer={{ mt: 20 }} >
            <Label
                labelSize={18}
                mpLabel={{ ml: 20 }}
            >Suitable For</Label>
            <InputBox
                placeholder="Harticulture"
                inputStyle={{
                    fontSize: 13,
                }}
                mpInput={{ pl: 10 }}
                mpContainer={{ mh: 20, mt: 5 }}
                inputHeight={40}
                rightIcon={() => {
                    return <Ionicons name="md-caret-down" size={20} style={{ position: "absolute", right: 5 }} color="grey" />
                }}
            />
        </Container>
    }

    const renderLeaseLength = () => {
        return <Container
            mpContainer={{ mt: 20, ml: 20 }}
        >
            <Label
                labelSize={18}
            >Preferred Lease Length</Label>
            <Container containerStyle={{
                flexDirection: "row",
            }} mpContainer={{ mt: 5 }} >
                <InputBox
                    placeholder="3 years"
                    inputStyle={{
                        fontSize: 13,
                    }}
                    containerStyle={{
                        width: screenWidth * 0.65
                    }}
                    mpInput={{ pl: 10 }}
                    inputHeight={40}
                    rightIcon={() => {
                        return <Ionicons name="md-caret-down" size={20} style={{ position: "absolute", right: 5 }} color="grey" />
                    }}
                />
                <Btn
                    title="Any"
                    btnStyle={{
                        backgroundColor: "rgba(128, 195, 224,0.5)",
                    }}
                    labelSize={14}
                    mpBtn={{ ml: 10, ph: 25 }}
                    labelStyle={{ color: "grey" }}
                    btnHeight={40}
                    onPress={() => { }}
                    radius={5}
                />
            </Container>
        </Container>
    }

    return (
        <MainContainer style={{ backgroundColor: "white" }} >
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}
            >
                <View style={{ paddingLeft: 20, marginTop: 15 }} >
                    <Label
                        labelSize={18}
                    >Block preferred size</Label>
                    {renderBlockSize()}
                </View>
                {SuitableFor()}
                <View style={{ paddingLeft: 20, marginTop: 20 }} >
                    <Label
                        labelSize={18}
                    >Lease Budget</Label>
                    {renderPrice()}
                </View>
                {renderLeaseLength()}
                {searchRangeUpto()}
                <Label
                    labelSize={18}
                    mpLabel={{ pl: 20, mt: 20 }}
                >State</Label>
                {renderState()}
                <Label
                    labelSize={18}
                    mpLabel={{ pl: 20, mt: 20 }}
                >City</Label>
                <InputBox
                    editable={false}
                    value={""}
                    placeholder="Select City"
                    inputHeight={40}
                    containerStyle={{
                        borderWidth: 1,
                        borderColor: "lightgrey",
                        backgroundColor: "white",
                        marginHorizontal: 20,
                    }}
                    inputStyle={{ fontSize: 15, fontFamily: regular, padding: 0 }}
                    mpContainer={{ mt: 5, mh: 20, pl: 15, pt: 5 }}
                    rightIcon={() =>
                        <Ionicons
                            name="md-caret-down"
                            size={20}
                            color="grey"
                            style={{
                                position: "absolute",
                                right: 10
                            }}
                        />
                    }
                />
                <Label
                    labelSize={18}
                    mpLabel={{ pl: 20, mt: 20 }}
                >Suburb</Label>
                <InputBox
                    editable={false}
                    value={""}
                    placeholder="Ex: Doncaster"
                    inputHeight={40}
                    containerStyle={{
                        borderWidth: 1,
                        borderColor: "lightgrey",
                        backgroundColor: "white",
                        marginHorizontal: 20,
                    }}
                    inputStyle={{ fontSize: 15, fontFamily: regular, padding: 0 }}
                    mpContainer={{ mt: 5, mh: 20, pl: 15, pt: 5 }}
                    rightIcon={() =>
                        <Ionicons
                            name="ios-mic"
                            size={20}
                            color="grey"
                            style={{
                                position: "absolute",
                                right: 10
                            }}
                        />
                    }
                />
                <Label
                    labelSize={18}
                    mpLabel={{ pl: 20, mt: 20 }}
                >Postcode</Label>
                <InputBox
                    editable={false}
                    value={""}
                    placeholder="Select Postcode"
                    inputHeight={40}
                    containerStyle={{
                        borderWidth: 1,
                        borderColor: "lightgrey",
                        backgroundColor: "white",
                        marginHorizontal: 20,
                    }}
                    inputStyle={{ fontSize: 15, fontFamily: regular, padding: 0 }}
                    mpContainer={{ mt: 5, mh: 20, pl: 15, pt: 5 }}
                    rightIcon={() =>
                        <Ionicons
                            name="md-caret-down"
                            size={20}
                            color="grey"
                            style={{
                                position: "absolute",
                                right: 10
                            }}
                        />
                    }
                />
            </ScrollView>
            <Btn
                title="Post"
                btnStyle={{
                    backgroundColor: DarkBlueColor,
                    justifyContent: "center",
                }}
                labelStyle={{ color: "white", fontFamily: medium }}
                btnHeight={40}
                radius={20}
                labelSize={16}
                mpBtn={{ mh: 20, mv: 10, pt: 4 }}
                onPress={() => {
                    navigation.navigate("LiveBlog")
                }}
            />
        </MainContainer >
    )
}

export default LeaseFarm
