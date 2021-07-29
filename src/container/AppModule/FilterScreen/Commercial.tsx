import React from "react";
import { ScrollView, TextInput, View } from "react-native";
import { DarkBlueColor } from "../../../assets/colors";
import { medium, regular } from "../../../assets/fonts/fonts";
import Btn from "../../../components/Btn";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import Ionicons from "react-native-vector-icons/Ionicons";
import Container from "../../../components/Container";
import { screenWidth } from "../../../utils/styleUtils";
import { navigationProps } from "../../../types/nav";
import InputBox from "../../../components/InputBox";

interface props extends navigationProps {

}


const Commercial: React.FC<props> = ({
    navigation,
    route
}) => {

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
                    </Container>
                    <Btn
                        title="Acres"
                        btnStyle={{
                            backgroundColor: "white",
                            borderWidth: 1,
                            borderColor: "grey",
                            width: screenWidth * 0.30
                        }}
                        labelSize={14}
                        mpBtn={{ ml: 10, pt: 2, pl: 10 }}
                        labelStyle={{ color: "grey" }}
                        btnHeight={35}
                        rightIcon={() => {
                            return <Ionicons name="md-caret-down" size={20} style={{ position: "absolute", right: 5 }} color="grey" />
                        }}
                        onPress={() => { }}
                    />
                </Container>
                <Btn
                    title="Any"
                    btnStyle={{
                        backgroundColor: "rgba(128, 195, 224,0.5)",
                        justifyContent: "center"
                    }}
                    labelSize={14}
                    mpBtn={{ ph: 25, mt: 10, mr: 20, pt: 4 }}
                    labelStyle={{ color: "grey" }}
                    btnHeight={35}
                    onPress={() => { }}
                    radius={5}
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
                    justifyContent: "space-between"
                }}
                    mpContainer={{ ml: 0, mr: 20, mt: 0 }}
                >
                    <InputBox
                        placeholder="$1,60,000"
                        inputStyle={{
                            fontSize: 12,
                            padding: 0
                        }}
                        containerStyle={{
                            width: screenWidth * 0.30
                        }}
                        mpInput={{ pl: 10 }}
                        inputHeight={35}
                    />
                    <Label
                        style={{
                            color: "grey"
                        }}
                        labelSize={16}
                    >To</Label>
                    <InputBox
                        placeholder="$2,00,000"
                        inputStyle={{
                            fontSize: 12,
                            padding: 0
                        }}
                        containerStyle={{
                            width: screenWidth * 0.30
                        }}
                        mpInput={{ pl: 10 }}
                        inputHeight={35}
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
        return <View style={{ marginTop: 20 }} >
            <Label
                labelSize={18}
                mpLabel={{ ml: 20 }}
            >Suitable For</Label>
            <InputBox
                placeholder="Bussiness type"
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
            <InputBox
                placeholder="Other"
                inputStyle={{
                    fontSize: 13,
                }}
                mpInput={{ pl: 10 }}
                mpContainer={{ mh: 20, mt: 10 }}
                inputHeight={40}
                rightIcon={() => {
                    return <Ionicons name="md-caret-down" size={20} style={{ position: "absolute", right: 5 }} color="grey" />
                }}
            />
            <InputBox
                placeholder="Drive through cafe (starbucks)"
                inputStyle={{
                    fontSize: 13,
                }}
                mpInput={{ pl: 10 }}
                mpContainer={{ mh: 20, mt: 10 }}
                inputHeight={40}
            />
        </View>
    }

    const renderPrefferedShape = () => {
        return <View style={{ marginTop: 20 }} >
            <Label
                labelSize={18}
                mpLabel={{ ml: 20 }}
            >Preferred Shape</Label>
            <InputBox
                placeholder="Narrow Ractangular"
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
        </View>
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
                    >Price</Label>
                    {renderPrice()}
                </View>
                {renderPrefferedShape()}

                <View style={{ marginTop: 20 }} >
                    <Label
                        labelSize={18}
                        // labelStyle={{}}
                        mpLabel={{ pl: 20 }}
                    >Any Comments</Label>
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
                        }}
                        multiline={true}
                    />
                </View>
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
                    borderRadius: 20
                }}
                mpBtn={{ mh: 20, mv: 10,pt:4 }}
                onPress={() => {
                    navigation.navigate("LiveBlog")
                }}
                radius={20}
                btnHeight={40}
                labelStyle={{color:"white",fontFamily:medium}}
                labelSize={15}
            />
        </MainContainer >
    )
}

export default Commercial
