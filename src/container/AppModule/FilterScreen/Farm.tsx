// import React, { useState } from "react";
// import { FlatList, ScrollView, Text, TextInput, View } from "react-native";
// import { DarkBlueColor, OrangeColor } from "../../../assets/colors";
// import { regular } from "../../../assets/fonts/fonts";
// import Btn from "../../../components/Btn";
// import CardView from "../../../components/CardView";
// import Label from "../../../components/Label";
// import MainContainer from "../../../components/MainContainer";
// import MultiSlider from '@ptomasroos/react-native-multi-slider'
// import {
//     facing as facingData,
//     preferredAreas
// } from "../../../../dummyArray";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import TextInputComp from "../../../components/TextInputComp";
// import Container from "../../../components/Container";
// import { screenWidth } from "../../../utils/styleUtils";

// function Farm({
//     navigation,
//     route
// }) {
//     const [facing, setFacing] = useState(facingData)
//     const [preferredArea, setPeferredArea] = useState(preferredAreas)


//     const _renderFacingData = ({ item, index }) => {
//         return (
//             <CardView
//                 // width={100}
//                 height={35}
//                 cardStyle={{
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderWidth: 1,
//                     borderRadius: 20,
//                     borderColor: 'lightgrey',
//                     backgroundColor: item.isSelected ? '#FFE2BF' : "white",
//                     elevation: 0,
//                     shadowOffset: null,
//                     shadowOpacity: null,
//                     width: screenWidth / 5
//                 }}
//                 mpCard={{ mv: 5, mh: 5 }}

//                 onPressCard={() => {
//                     const array = [...facing]
//                     array.map((value, placeindex) =>
//                         placeindex === index
//                         && (array[placeindex]['isSelected'] = !array[placeindex]['isSelected'])
//                         // : (array[placeindex]['isExpanded'] = false)
//                     )
//                     setFacing(array)
//                 }}
//             >
//                 <Label labelSize={14}
//                     labelStyle={{ letterSpacing: 0.5 }}
//                 >{item.name}</Label>
//             </CardView>
//         )
//     }

//     const _renderPreferredAreas = ({ item, index }) => {
//         return (
//             <Container containerStyle={{
//                 flexDirection: "row",
//                 alignItems: "center"
//             }} mpContainer={{ ml: index ? 5 : 0 }}
//                 onPressCard={() => {
//                     const array = [...preferredArea]
//                     array.map((value, placeindex) =>
//                         placeindex === index
//                         && (array[placeindex]['isSelected'] = !array[placeindex]['isSelected'])
//                         // : (array[placeindex]['isExpanded'] = false)
//                     )
//                     setPeferredArea(array)
//                 }}
//             >
//                 <Container
//                     containerStyle={{
//                         borderWidth: 1.5,
//                         borderColor: "lightgrey",
//                         borderRadius: 5,
//                         justifyContent: "center",
//                         alignItems: "center"
//                     }}
//                     width={20} height={20}
//                 >
//                     {
//                         item.isSelected ?
//                             <Ionicons
//                                 name="checkmark-sharp"
//                                 size={16}
//                             /> : null
//                     }
//                 </Container>
//                 <Label
//                     labelStyle={{

//                     }}
//                     mpLabelStyle={{ ml: 10, mt: 4 }}
//                     labelSize={14}
//                 >{item.name}</Label>
//             </Container>
//         )
//     }

//     const _renderBlockTitle = ({ item, index }) => {
//         return (
//             <Container containerStyle={{
//                 flexDirection: "row",
//                 alignItems: "center"
//             }}
//                 mpContainer={{ mt: 5 }}
//             >
//                 <Container
//                     containerStyle={{
//                         borderWidth: 1,
//                         borderColor: OrangeColor,
//                         borderRadius: 20,
//                         justifyContent: "center",
//                         alignItems: "center"
//                     }}
//                     width={20} height={20}
//                 >
//                     <Container
//                         containerStyle={{
//                             backgroundColor: OrangeColor,
//                             borderRadius: 20,
//                             borderColor: OrangeColor
//                         }}
//                         width={12} height={12}
//                     />
//                 </Container>
//                 <Label
//                     mpLabelStyle={{ ml: 10, mt: 4 }}
//                     labelSize={16}
//                 >{item}</Label>
//             </Container>
//         )
//     }

//     const renderBlockSize = () => {
//         return (
//             <Container containerStyle={{
//                 flexDirection: "row",
//                 alignItems: "center"
//             }} mpContainer={{ mt: 20 }} >
//                 <Container >
//                     <TextInputComp
//                         placeholder="0.5 acre"
//                         inputStyle={{
//                             fontSize: 12
//                         }}
//                         inputContainerStyle={{
//                             width: screenWidth * 0.30
//                         }}
//                         inputHeight={40}
//                         mpInput={{ pl: 10 }}
//                     />
//                     <Label
//                         mpLabelStyle={{ mt: 2 }}
//                         labelSize={10}
//                         labelStyle={{
//                             color: "grey",
//                             position: "absolute",
//                             top: -20
//                         }}
//                     >Min</Label>
//                 </Container>
//                 <Label
//                     mpLabelStyle={{ mh: 10 }}
//                 >-</Label>
//                 <Container >
//                     <TextInputComp
//                         placeholder="200 acre"
//                         inputStyle={{
//                             fontSize: 12
//                         }}
//                         inputContainerStyle={{
//                             width: screenWidth * 0.30
//                         }}
//                         inputHeight={40}
//                         mpInput={{ pl: 10 }}
//                     />
//                     <Label
//                         mpLabelStyle={{ mt: 2 }}
//                         labelSize={10}
//                         labelStyle={{
//                             color: "grey",
//                             position: "absolute",
//                             top: -20
//                         }}
//                     >Max</Label>
//                     <Label
//                         mpLabelStyle={{ mt: 2 }}
//                         labelSize={10}
//                         labelStyle={{
//                             color: "grey",
//                             position: "absolute",
//                             bottom: -20, right: 0
//                         }}
//                     >Up to 500 acres</Label>
//                 </Container>
//                 <Btn
//                     label="Any"
//                     btnContainerStyle={{
//                         backgroundColor: "white",
//                         borderWidth: 1,
//                         borderColor: "grey"
//                     }}
//                     labelSize={14}
//                     mpBtnContainer={{ ml: 10, ph: 25 }}
//                     labelStyle={{ color: "grey" }}
//                     btnHeight={40}
//                 />
//             </Container>
//         )
//     }


//     const renderState = () => {
//         return (
//             <Container
//                 containerStyle={{
//                     flexDirection: "row",
//                     alignItems: "center"
//                 }}
//             >
//                 <TextInputComp
//                     editable={false}
//                     value={""}
//                     placeholder="VIC"
//                     inputHeight={40}
//                     inputContainerStyle={{
//                         borderWidth: 1,
//                         borderColor: "lightgrey",
//                         backgroundColor: "white",
//                         width: "30%",
//                     }}
//                     inputStyle={{ fontSize: 14, fontFamily: regular, padding: 0 }}
//                     mpInputContainer={{ mt: 5, pl: 10, pt: 5, ml: 20 }}
//                     rightIcon={() =>
//                         <Ionicons
//                             name="md-caret-down"
//                             size={20}
//                             color="grey"
//                             style={{
//                                 position: "absolute",
//                                 right: 10
//                             }}
//                         />
//                     }
//                 />
//                 <TextInputComp
//                     value={""}
//                     placeholder="Preferred State"
//                     inputHeight={40}
//                     inputContainerStyle={{
//                         borderWidth: 1,
//                         borderColor: "lightgrey",
//                         backgroundColor: "white",
//                         width: "55%",
//                     }}
//                     inputStyle={{ fontSize: 14, fontFamily: regular, padding: 0 }}
//                     mpInputContainer={{ mt: 5, pl: 10, pt: 5, ml: 10 }}
//                     rightIcon={() =>
//                         <Ionicons
//                             name="ios-search"
//                             size={15}
//                             color="grey"
//                             style={{
//                                 position: "absolute",
//                                 right: 10
//                             }}
//                         />
//                     }
//                 />
//             </Container>
//         )
//     }


//     const renderOtherPreferredLocation = () => {
//         return (
//             <Container
//                 containerStyle={{
//                     flexDirection: "row",
//                     alignItems: "center"
//                 }}
//             >
//                 <TextInputComp
//                     editable={false}
//                     value={""}
//                     placeholder="VIC"
//                     inputHeight={40}
//                     inputContainerStyle={{
//                         borderWidth: 1,
//                         borderColor: "lightgrey",
//                         backgroundColor: "white",
//                         width: "60%",
//                     }}
//                     inputStyle={{ fontSize: 14, fontFamily: regular, padding: 0 }}
//                     mpInputContainer={{ mt: 5, pl: 10, pt: 5, ml: 20 }}
//                     rightIcon={() =>
//                         <Ionicons
//                             name="md-caret-down"
//                             size={20}
//                             color="grey"
//                             style={{
//                                 position: "absolute",
//                                 right: 10
//                             }}
//                         />
//                     }
//                 />
//                 <TextInputComp
//                     value={""}
//                     editable={false}
//                     placeholder="None"
//                     inputHeight={40}
//                     inputContainerStyle={{
//                         borderWidth: 1,
//                         borderColor: "lightgrey",
//                         backgroundColor: "white",
//                         width: "25%",
//                     }}
//                     inputStyle={{ fontSize: 14, fontFamily: regular, padding: 0 }}
//                     mpInputContainer={{ mt: 5, pl: 20, pt: 5, ml: 10 }}
//                 />
//             </Container>
//         )
//     }

//     const renderBudget = () => {
//         return (
//             <Container containerStyle={{
//                 flexDirection: "row",
//                 alignItems: "center"
//             }} mpContainer={{ mt: 10 }} >
//                 <Container >
//                     <TextInputComp
//                         placeholder="$20,000"
//                         inputStyle={{
//                             fontSize: 12
//                         }}
//                         inputContainerStyle={{
//                             width: screenWidth * 0.30
//                         }}
//                         inputHeight={40}
//                         mpInput={{ pl: 10 }}
//                     />
//                     <Label
//                         mpLabelStyle={{ mt: 2 }}
//                         labelSize={10}
//                         labelStyle={{
//                             color: "grey",
//                             position: "absolute",
//                             top: -20
//                         }}
//                     >Min</Label>
//                 </Container>
//                 <Label
//                     mpLabelStyle={{ mh: 10 }}
//                 >-</Label>
//                 <Container >
//                     <TextInputComp
//                         placeholder="$100 million"
//                         inputStyle={{
//                             fontSize: 12
//                         }}
//                         inputContainerStyle={{
//                             width: screenWidth * 0.30
//                         }}
//                         inputHeight={40}
//                         mpInput={{ pl: 10 }}
//                     />
//                     <Label
//                         mpLabelStyle={{ mt: 2 }}
//                         labelSize={10}
//                         labelStyle={{
//                             color: "grey",
//                             position: "absolute",
//                             top: -20
//                         }}
//                     >Max</Label>
//                 </Container>
//                 <Btn
//                     label="Any"
//                     btnContainerStyle={{
//                         backgroundColor: "white",
//                         borderWidth: 1,
//                         borderColor: "grey"
//                     }}
//                     labelSize={14}
//                     mpBtnContainer={{ ml: 10, ph: 25 }}
//                     labelStyle={{ color: "grey" }}
//                     btnHeight={40}
//                 />
//             </Container>
//         )
//     }

//     return (
//         <MainContainer style={{ backgroundColor: "white" }} >
//             <ScrollView contentContainerStyle={{ paddingBottom: 100 }}
//             >
//                 <View style={{ paddingLeft: 20, marginTop: 10 }} >
//                     <Label
//                         labelSize={18}
//                     >Purpose</Label>
//                     <TextInput
//                         placeholder="Ex: Agriculture, Horticulture, Mixed Farming, Harvesting, Dairy Farm"
//                         style={{
//                             borderWidth: 1,
//                             borderColor: "lightgrey",
//                             marginRight: 20,
//                             paddingLeft: 10,
//                             borderRadius: 5,
//                             height: 80,
//                             textAlignVertical: "top",
//                             fontSize: 14,
//                             marginTop: 10
//                         }}
//                         multiline={true}
//                     />
//                 </View>
//                 <View style={{ paddingLeft: 20, marginTop: 15 }} >
//                     <Label
//                         labelSize={18}
//                     >Average Size</Label>
//                     {renderBlockSize()}
//                 </View>
//                 <View style={{ paddingLeft: 20, marginTop: 20 }} >
//                     <Label
//                         labelSize={18}
//                     >Budget</Label>
//                     <MultiSlider
//                         values={[0, 100]}
//                         // min={20}
//                         // max={80}
//                         minMarkerOverlapDistance={30}
//                         sliderLength={screenWidth * 0.85}
//                         markerStyle={{
//                             backgroundColor: DarkBlueColor,
//                             height: 15,
//                             width: 15,
//                             borderRadius: 15,
//                         }}
//                         trackStyle={{
//                             height: 2.5,
//                         }}
//                         selectedStyle={{
//                             backgroundColor: DarkBlueColor
//                         }}
//                         containerStyle={{
//                             marginLeft: 5,
//                             marginTop: -10
//                         }}
//                     />
//                     {renderBudget()}
//                 </View>
//                 <View style={{ marginTop: 20 }} >
//                     <Label
//                         labelSize={18}
//                         // labelStyle={{}}
//                         mpLabelStyle={{ pl: 20 }}
//                     >Additional Information</Label>
//                     <TextInput
//                         placeholder="Black Soil Preferred fenced land"
//                         style={{
//                             borderWidth: 1,
//                             borderColor: "lightgrey",
//                             marginHorizontal: 20,
//                             paddingLeft: 10,
//                             borderRadius: 5,
//                             height: 80,
//                             textAlignVertical: "top",
//                             fontSize: 14,
//                         }}
//                         multiline={true}
//                     />
//                 </View>
//                 <Label
//                     labelSize={18}
//                     mpLabelStyle={{ pl: 20, mt: 20 }}
//                 >State</Label>
//                 {renderState()}
//                 <Label
//                     labelSize={18}
//                     mpLabelStyle={{ pl: 20, mt: 20 }}
//                 >City</Label>
//                 <TextInputComp
//                     editable={false}
//                     value={""}
//                     placeholder="Select City"
//                     inputHeight={40}
//                     inputContainerStyle={{
//                         borderWidth: 1,
//                         borderColor: "lightgrey",
//                         backgroundColor: "white",
//                         marginHorizontal: 20,
//                     }}
//                     inputStyle={{ fontSize: 15, fontFamily: regular, padding: 0 }}
//                     mpInputContainer={{ mt: 5, mh: 20, pl: 15, pt: 5 }}
//                     rightIcon={() =>
//                         <Ionicons
//                             name="md-caret-down"
//                             size={20}
//                             color="grey"
//                             style={{
//                                 position: "absolute",
//                                 right: 10
//                             }}
//                         />
//                     }
//                 />
//                 <Label
//                     labelSize={18}
//                     mpLabelStyle={{ pl: 20, mt: 20 }}
//                 >Postcode</Label>
//                 <TextInputComp
//                     editable={false}
//                     value={""}
//                     placeholder="Select Postcode"
//                     inputHeight={40}
//                     inputContainerStyle={{
//                         borderWidth: 1,
//                         borderColor: "lightgrey",
//                         backgroundColor: "white",
//                         marginHorizontal: 20,
//                     }}
//                     inputStyle={{ fontSize: 15, fontFamily: regular, padding: 0 }}
//                     mpInputContainer={{ mt: 5, mh: 20, pl: 15, pt: 5 }}
//                     rightIcon={() =>
//                         <Ionicons
//                             name="md-caret-down"
//                             size={20}
//                             color="grey"
//                             style={{
//                                 position: "absolute",
//                                 right: 10
//                             }}
//                         />
//                     }
//                 />
//                 <Label
//                     labelSize={18}
//                     mpLabelStyle={{ pl: 20, mt: 20 }}
//                 >Suburb</Label>
//                 <TextInputComp
//                     editable={false}
//                     value={""}
//                     placeholder="Ex: Doncaster"
//                     inputHeight={40}
//                     inputContainerStyle={{
//                         borderWidth: 1,
//                         borderColor: "lightgrey",
//                         backgroundColor: "white",
//                         marginHorizontal: 20,
//                     }}
//                     inputStyle={{ fontSize: 15, fontFamily: regular, padding: 0 }}
//                     mpInputContainer={{ mt: 5, mh: 20, pl: 15, pt: 5 }}
//                     rightIcon={() =>
//                         <Ionicons
//                             name="ios-mic"
//                             size={20}
//                             color="grey"
//                             style={{
//                                 position: "absolute",
//                                 right: 10
//                             }}
//                         />
//                     }
//                 />
//             </ScrollView>
//             <Btn
//                 label="Post"
//                 btnContainerStyle={{
//                     backgroundColor: DarkBlueColor,
//                     justifyContent: "center",
//                     borderRadius: 20
//                 }}
//                 mpBtnContainer={{ mh: 20, mv: 10 }}
//                 onPressBtn={() => {
//                     navigation.navigate("LiveBlog")
//                 }}
//             />
//         </MainContainer >
//     )
// }

// export default Farm


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
import { navigationProps } from "../../../types/nav";
import InputBox from "../../../components/InputBox";

interface props extends navigationProps {

}

const Farm: React.FC<props> = ({
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
                    mpBtn={{ ph: 25, mt: 10, mr: 20}}
                    labelStyle={{ color: "grey" }}
                    btnHeight={35}
                    radius={5}
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
                placeholder="Agriculture"
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
                placeholder="Category"
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
                }}
                mpBtn={{ mh: 20, mv: 10, pt: 4 }}
                labelStyle={{ color: "white", fontFamily: medium }}
                btnHeight={40}
                radius={20}
                onPress={() => {
                    navigation.navigate("LiveBlog")
                }}
                labelSize={15}
            />
        </MainContainer >
    )
}

export default Farm
