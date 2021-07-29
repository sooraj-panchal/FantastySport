import React, { useState } from "react";
import { FlatList, ListRenderItem, ScrollView, TextInput, View } from "react-native";
import { DarkBlueColor, OrangeColor } from "../../../assets/colors";
import { medium, regular } from "../../../assets/fonts/fonts";
import Btn from "../../../components/Btn";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import {
    facing as facingData,
} from "../../../../dummyArray";
import Ionicons from "react-native-vector-icons/Ionicons";
import Container from "../../../components/Container";
import { screenWidth } from "../../../utils/styleUtils";
import { navigationProps } from "../../../types/nav";
import InputBox from "../../../components/InputBox";

interface props extends navigationProps {

}
interface renderFacingDataType {
    isSelected: boolean;
    name: string
}

const Resedential: React.FC<props> = ({
    navigation,
    route
}) => {

    const [facing, setFacing] = useState<any>(facingData)

    const _renderFacingData: ListRenderItem<renderFacingDataType> = ({ item: { isSelected, name }, index }) => {
        return (
            <Container
                // width={100}
                height={35}
                containerStyle={{
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 1,
                    borderRadius: 20,
                    borderColor: isSelected ? OrangeColor : 'lightgrey',
                    backgroundColor: "white",
                    width: screenWidth / 5
                }}
                mpContainer={{ mv: 5, mh: 5, pt: 4 }}
                onPress={() => {
                    const array = [...facing]
                    array.map((value, placeindex) =>
                        placeindex === index
                        && (array[placeindex]['isSelected'] = !array[placeindex]['isSelected'])
                        // : (array[placeindex]['isExpanded'] = false)
                    )
                    setFacing(array)
                }}
            >
                <Label labelSize={14}
                    style={{ letterSpacing: 0.5, color: isSelected ? OrangeColor : 'black' }}
                >{name}</Label>
            </Container>
        )
    }

    const _renderBlockTitle: ListRenderItem<string> = ({ item, index }) => {
        return (
            <Container containerStyle={{
                flexDirection: "row",
                alignItems: "center"
            }}
                mpContainer={{ mt: 5 }}
            >
                <Container
                    containerStyle={{
                        borderWidth: 1,
                        borderColor: OrangeColor,
                        borderRadius: 20,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    width={20} height={20}
                >
                    <Container
                        containerStyle={{
                            backgroundColor: OrangeColor,
                            borderRadius: 20,
                            borderColor: OrangeColor
                        }}
                        width={12} height={12}
                    />
                </Container>
                <Label
                    mpLabel={{ ml: 10, mt: 4 }}
                    labelSize={16}
                >{item}</Label>
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
                    </Container>
                    <Btn
                        title="Acres"
                        btnStyle={{
                            backgroundColor: "white",
                            borderWidth: 1,
                            borderColor: "grey",
                            width: screenWidth * 0.30,
                        }}
                        labelSize={14}
                        mpBtn={{ ml: 10 }}
                        labelStyle={{ color: "grey" }}
                        btnHeight={35}
                        rightIcon={() => {
                            return <Ionicons name="md-caret-down" size={20} style={{ position: "absolute", right: 5 }} color="grey" />
                        }}
                        radius={5}
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
                    radius={5}
                    onPress={() => { }}
                />
            </>
        )
    }

    const renderFrontage = () => {
        return (
            <Container containerStyle={{
                flexDirection: "row",
            }} mpContainer={{ mt: 5 }} >
                <InputBox
                    placeholder="Example 25.5"
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
                    radius={5}
                    labelSize={14}
                    mpBtn={{ ml: 10, ph: 25 }}
                    labelStyle={{ color: "grey" }}
                    btnHeight={40}
                    onPress={() => { }}
                />
            </Container>
        )
    }

    const renderPreferredBlock = () => {
        return (
            <Container containerStyle={{
                flexDirection: "row",
                alignItems: "center"
            }} mpContainer={{ mt: 20 }} >
                <Container >
                    <InputBox
                        placeholder="100"
                        inputStyle={{
                            fontSize: 12
                        }}
                        containerStyle={{
                            width: screenWidth * 0.25
                        }}
                        inputHeight={40}
                        mpInput={{ pl: 10 }}
                    />
                    <Label
                        mpLabel={{ mt: 2 }}
                        labelSize={10}
                        style={{
                            color: "grey",
                            position: "absolute",
                            top: -20
                        }}
                    >Length</Label>
                    <Label
                        mpLabel={{ mt: 2 }}
                        labelSize={10}
                        style={{
                            color: "grey",
                            position: "absolute",
                            bottom: -20, right: 0
                        }}
                    >Min</Label>
                </Container>
                <Label
                    mpLabel={{ mh: 10 }}
                >-</Label>
                <Container >
                    <InputBox
                        placeholder="1000"
                        inputStyle={{
                            fontSize: 12
                        }}
                        containerStyle={{
                            width: screenWidth * 0.25
                        }}
                        inputHeight={40}
                        mpInput={{ pl: 10 }}
                    />
                    <Label
                        mpLabel={{ mt: 2 }}
                        labelSize={10}
                        style={{
                            color: "grey",
                            position: "absolute",
                            top: -20
                        }}
                    >Width</Label>
                    <Label
                        mpLabel={{ mt: 2 }}
                        labelSize={10}
                        style={{
                            color: "grey",
                            position: "absolute",
                            bottom: -20, right: 0
                        }}
                    >Max</Label>
                </Container>
                <Btn
                    title="Any"
                    btnStyle={{
                        backgroundColor: "rgba(128, 195, 224,0.5)"
                    }}
                    labelSize={14}
                    mpBtn={{ ml: 10, ph: 30 }}
                    labelStyle={{ color: "grey" }}
                    btnHeight={40}
                    radius={5}
                    onPress={() => { }}
                />
            </Container>
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

    const renderFacing = () => {
        return <View style={{ paddingLeft: 20, marginTop: 10 }} >
            <Label
                labelSize={18}
            >Facing</Label>
            <FlatList
                data={facing}
                numColumns={4}
                renderItem={_renderFacingData}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ marginLeft: -5 }}
            />
        </View>
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

    return (
        <MainContainer style={{ backgroundColor: "white" }} >
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}
            >
                <View style={{ paddingLeft: 20, marginTop: 10 }} >
                    <Label
                        labelSize={18}
                    >Block Title</Label>
                    <FlatList
                        data={["Titled", "Untitled", "Any"]}
                        horizontal={true}
                        renderItem={_renderBlockTitle}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={() => (<View style={{ marginLeft: 20 }} />)}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={{ paddingLeft: 20, marginTop: 15 }} >
                    <Label
                        labelSize={18}
                    >Block preferred size</Label>
                    {renderBlockSize()}
                </View>
                <View style={{ paddingLeft: 20, marginTop: 5 }} >
                    <Label
                        labelSize={18}
                    >Frontage</Label>
                    {renderFrontage()}
                </View>
                <View style={{ paddingLeft: 20, marginTop: 15 }} >
                    <Label
                        labelSize={18}
                    >Dimension</Label>
                    {renderPreferredBlock()}
                </View>
                {renderFacing()}
                <View style={{ paddingLeft: 20, marginTop: 20 }} >
                    <Label
                        labelSize={18}
                    >Price</Label>
                    {renderPrice()}
                </View>
                <View style={{ marginTop: 20 }} >
                    <Label
                        labelSize={18}
                        // labelStyle={{}}
                        mpLabel={{ pl: 20 }}
                    >Comment</Label>
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
                }}
                mpBtn={{ mh: 20, mv: 10, pt: 4 }}
                onPress={() => {
                    navigation.navigate("LiveBlog")
                }}
                labelSize={15}
                labelStyle={{ color: "white", fontFamily: medium }}
                radius={20}
                btnHeight={40}
            />
        </MainContainer >
    )
}

export default Resedential
