// import React, { useEffect, useState } from "react";
// import { ActionSheetIOS, FlatList, ScrollView, Text, View } from "react-native";
// import { DarkBlueColor, PrimaryColor } from "../../../assets/colors";
// import { medium, regular } from "../../../assets/fonts/fonts";
// import Btn from "../../../components/Btn";
// import CardView from "../../../components/CardView";
// import Label from "../../../components/Label";
// import MainContainer from "../../../components/MainContainer";
// import Slider from '@react-native-community/slider';
// import MultiSlider from '@ptomasroos/react-native-multi-slider'

// import {
//     byChoosing as byChoosingData,
//     blockType as blockTypeData,
//     badrooms as badroomsData,
//     postedBy as postedByData,
//     facing as facingData,
//     front as frontData,
//     shape as shapeData,
//     maxPriceData,
//     minPriceData,
//     footData,
//     minFootData,
//     maxFootData,
//     SearchFor,
//     preferredAreas
// } from "../../../../dummyArray";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import Img from "../../../components/Img";
// import { AppImages } from "../../../assets/images/map";
// import TextInputComp from "../../../components/TextInputComp";
// import Container from "../../../components/Container";
// import { screenWidth } from "../../../utils/styleUtils";
// function FilterScreen({
//     navigation,
//     route
// }) {
//     const [byChoosing, setByChoosing] = useState(byChoosingData)
//     const [blockType, setBlockType] = useState(blockTypeData)
//     const [badrooms, setBadrooms] = useState(badroomsData)
//     const [postedBy, setPostedBy] = useState(postedByData)
//     const [facing, setFacing] = useState(facingData)
//     const [front, setFront] = useState(frontData)
//     const [shape, setShape] = useState(shapeData)
//     const [minPrice, setMinPrice] = useState("Min")
//     const [maxPrice, setMaxPrice] = useState("Max")
//     const [selectFoot, setSelectFoot] = useState("Sqrt")
//     const [selectMinFoot, setSelectMinFoot] = useState("Min")
//     const [selectMaxFoot, setSelectMaxFoot] = useState("Max")
//     const [searchFor, setSearchFor] = useState(SearchFor)
//     const [byChoosingIndex, setByChoosingIndex] = useState(0)
//     const [preferredArea, setPeferredArea] = useState(preferredAreas)

//     const _renderByChoosingData = ({ item, index }) => {
//         return (
//             <TouchableOpacity style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 paddingLeft: 20
//             }}
//                 onPress={() => {
//                     setByChoosingIndex(index)
//                 }}
//                 disabled={byChoosingIndex === index ? true : false}
//             >
//                 <View style={{
//                     borderWidth: 2,
//                     borderColor: "lightgrey",
//                     width: 25,
//                     height: 25,
//                     borderRadius: 15,
//                     justifyContent: "center",
//                     alignItems: "center",
//                 }} >
//                     {byChoosingIndex === index &&
//                         <View style={{
//                             backgroundColor: "green",
//                             width: 18,
//                             height: 18,
//                             borderRadius: 15
//                         }} />
//                     }
//                 </View>
//                 <Label
//                     labelSize={20}
//                     labelStyle={{
//                         fontFamily: medium,
//                         color: byChoosingIndex === index ? "green" : "grey",
//                         letterSpacing: 0.5
//                     }}
//                     mpLabelStyle={{ pl: 10 }}
//                 >{item.name}</Label>
//             </TouchableOpacity>
//         )
//     }
//     const _renderBlockTypeData = ({ item, index }) => {
//         return (
//             <CardView
//                 width={100}
//                 height={100}
//                 cardStyle={{
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderWidth: 1,
//                     borderRadius: 4,
//                     borderColor: 'lightgrey',
//                     backgroundColor: item.isSelected ? '#FFE2BF' : "white",
//                     elevation: 0,
//                     shadowOffset: null,
//                     shadowOpacity: null
//                 }}
//                 onPressCard={() => {
//                     const array = [...blockType]
//                     array.map((value, placeindex) =>
//                         placeindex === index
//                         && (array[placeindex]['isSelected'] = !array[placeindex]['isSelected'])
//                         // : (array[placeindex]['isExpanded'] = false)
//                     )
//                     setBlockType(array)
//                 }}
//                 mpCard={{ mv: 10 }}
//             >
//                 <Img
//                     imgSrc={AppImages.FarmImage}
//                     width={45}
//                     height={45}
//                 />
//                 <Label labelSize={13}
//                     // labelStyle={{ letterSpacing: 0.5 }}
//                     mpLabelStyle={{ mt: 15 }}
//                 >{item.name}</Label>
//             </CardView>
//         )
//     }
//     const _renderBadroomsData = ({ item, index }) => {
//         return (
//             <CardView
//                 width={80}
//                 height={60}
//                 cardStyle={{
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderWidth: 1,
//                     borderRadius: 4,
//                     borderColor: 'lightgrey',
//                     backgroundColor: item.isSelected ? '#FFE2BF' : "#f2f2f2",
//                     // backgroundColor:"#f2f2f2",
//                     elevation: 0,
//                     shadowOffset: null,
//                     shadowOpacity: null
//                 }}
//                 mpCard={{ mv: 10 }}
//                 onPressCard={() => {
//                     const array = [...badrooms]
//                     array.map((value, placeindex) =>
//                         placeindex === index
//                         && (array[placeindex]['isSelected'] = !array[placeindex]['isSelected'])
//                         // : (array[placeindex]['isExpanded'] = false)
//                     )
//                     setBadrooms(array)
//                 }}
//             >
//                 <Label labelSize={14}
//                     labelStyle={{ letterSpacing: 2 }}
//                 >{item.name}</Label>
//             </CardView>
//         )
//     }
//     const _renderPostedByData = ({ item, index }) => {
//         return (
//             <CardView
//                 width={100}
//                 height={60}
//                 cardStyle={{
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderWidth: 1,
//                     borderRadius: 4,
//                     borderColor: 'lightgrey',
//                     backgroundColor: item.isSelected ? '#FFE2BF' : "#f2f2f2",
//                     elevation: 0,
//                     shadowOffset: null,
//                     shadowOpacity: null
//                 }}
//                 mpCard={{ mv: 10 }}
//                 onPressCard={() => {
//                     const array = [...postedBy]
//                     array.map((value, placeindex) =>
//                         placeindex === index
//                         && (array[placeindex]['isSelected'] = !array[placeindex]['isSelected'])
//                         // : (array[placeindex]['isExpanded'] = false)
//                     )
//                     setPostedBy(array)
//                 }}
//             >
//                 <Label labelSize={14}
//                     labelStyle={{ letterSpacing: 0.5 }}
//                 >{item.name}</Label>
//             </CardView>
//         )
//     }

//     const _renderFacingData = ({ item, index }) => {
//         return (
//             <CardView
//                 // width={100}
//                 height={45}
//                 cardStyle={{
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderWidth: 1,
//                     borderRadius: 4,
//                     borderColor: 'lightgrey',
//                     backgroundColor: item.isSelected ? '#FFE2BF' : "white",
//                     elevation: 0,
//                     shadowOffset: null,
//                     shadowOpacity: null
//                 }}
//                 mpCard={{ mv: 10, ph: 15 }}
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
//     const _renderFrontData = ({ item, index }) => {
//         return (
//             <CardView
//                 // width={100}
//                 height={45}
//                 cardStyle={{
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderWidth: 1,
//                     borderRadius: 4,
//                     borderColor: 'lightgrey',
//                     backgroundColor: item.isSelected ? '#FFE2BF' : "white",
//                     elevation: 0,
//                     shadowOffset: null,
//                     shadowOpacity: null
//                 }}
//                 mpCard={{ mv: 10, ph: 15 }}
//                 onPressCard={() => {
//                     const array = [...front]
//                     array.map((value, placeindex) =>
//                         placeindex === index
//                         && (array[placeindex]['isSelected'] = !array[placeindex]['isSelected'])
//                         // : (array[placeindex]['isExpanded'] = false)
//                     )
//                     setFront(array)
//                 }}
//             >
//                 <Label labelSize={14}
//                     labelStyle={{ letterSpacing: 0.5 }}
//                 >{item.name}</Label>
//             </CardView>
//         )
//     }
//     const _renderShapeData = ({ item, index }) => {
//         return (
//             <CardView
//                 // width={100}
//                 height={45}
//                 cardStyle={{
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderWidth: 1,
//                     borderRadius: 4,
//                     borderColor: 'lightgrey',
//                     backgroundColor: item.isSelected ? '#FFE2BF' : "white",
//                     elevation: 0,
//                     shadowOffset: null,
//                     shadowOpacity: null
//                 }}
//                 mpCard={{ mv: 10, ph: 15 }}
//                 onPressCard={() => {
//                     const array = [...shape]
//                     array.map((value, placeindex) =>
//                         placeindex === index
//                         && (array[placeindex]['isSelected'] = !array[placeindex]['isSelected'])
//                         // : (array[placeindex]['isExpanded'] = false)
//                     )
//                     setShape(array)
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

//     return (
//         <MainContainer style={{ backgroundColor: "white" }} >
//             <ScrollView contentContainerStyle={{ paddingBottom: 100 }}
//             >
//                 <View style={{ paddingLeft: 20, marginTop: 10 }} >
//                     <Label
//                         labelSize={18}
//                     >Search For</Label>
//                     <FlatList
//                         data={searchFor}
//                         horizontal={true}
//                         renderItem={_renderShapeData}
//                         keyExtractor={(item, index) => index.toString()}
//                         ItemSeparatorComponent={() => (<View style={{ marginLeft: 10 }} />)}
//                         showsHorizontalScrollIndicator={false}
//                         ListFooterComponent={() => (<View style={{ marginRight: 100 }} />)}
//                     />
//                 </View>
//                 <View style={{ paddingLeft: 20, marginTop: 10 }} >
//                     <Label
//                         labelSize={18}
//                     >Block Size</Label>
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
//                             height: 2.5
//                         }}
//                         selectedStyle={{
//                             backgroundColor: DarkBlueColor
//                         }}
//                         containerStyle={{
//                             marginLeft: 5
//                         }}
//                     />
//                     <Label
//                         labelSize={14}
//                         labelStyle={{
//                             position: "absolute",
//                             right: 15,
//                             top: 5
//                         }}
//                     >10 - 20 Acres</Label>
//                 </View>

//                 <View style={{ paddingLeft: 20, marginTop: 10 }} >
//                     <Label
//                         labelSize={18}
//                     // labelStyle={{}}
//                     >Block facing</Label>
//                     <FlatList
//                         data={facing}
//                         horizontal={true}
//                         renderItem={_renderFacingData}
//                         keyExtractor={(item, index) => index.toString()}
//                         ItemSeparatorComponent={() => (<View style={{ marginLeft: 10 }} />)}
//                         showsHorizontalScrollIndicator={false}
//                         ListFooterComponent={() => (<View style={{ marginRight: 100 }} />)}

//                     />
//                 </View>
//                 <View style={{ paddingLeft: 20, marginTop: 10 }} >
//                     <Label
//                         labelSize={18}
//                     // labelStyle={{}}
//                     >Block front</Label>
//                     <FlatList
//                         data={front}
//                         horizontal={true}
//                         renderItem={_renderFrontData}
//                         keyExtractor={(item, index) => index.toString()}
//                         ItemSeparatorComponent={() => (<View style={{ marginLeft: 10 }} />)}
//                         showsHorizontalScrollIndicator={false}
//                         ListFooterComponent={() => (<View style={{ marginRight: 100 }} />)}

//                     />
//                 </View>
//                 <Label
//                     labelSize={18}
//                     mpLabelStyle={{ pl: 20, mt: 20 }}
//                 >Block State</Label>
//                 <TextInputComp
//                     editable={false}
//                     value={""}
//                     placeholder="Select State"
//                     inputHeight={50}
//                     inputContainerStyle={{
//                         borderWidth: 1,
//                         borderColor: "lightgrey",
//                         backgroundColor: "white",
//                         marginHorizontal: 20,
//                     }}
//                     inputStyle={{ fontSize: 15, fontFamily: regular }}
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
//                 // labst={{ color: "black", marginLeft: 20 }}
//                 />
//                 <Label
//                     labelSize={18}
//                     mpLabelStyle={{ pl: 20, mt: 20 }}
//                 >Block City</Label>
//                 <TextInputComp
//                     editable={false}
//                     value={""}
//                     placeholder="Select City"
//                     inputHeight={50}
//                     inputContainerStyle={{
//                         borderWidth: 1,
//                         borderColor: "lightgrey",
//                         backgroundColor: "white",
//                         marginHorizontal: 20,
//                     }}
//                     inputStyle={{ fontSize: 15, fontFamily: regular }}
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
//                 >Block Area</Label>
//                 <TextInputComp
//                     editable={false}
//                     value={""}
//                     placeholder="Select Area"
//                     inputHeight={50}
//                     inputContainerStyle={{
//                         borderWidth: 1,
//                         borderColor: "lightgrey",
//                         backgroundColor: "white",
//                         marginHorizontal: 20,
//                     }}
//                     inputStyle={{ fontSize: 15, fontFamily: regular }}
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
//                 // labst={{ color: "black", marginLeft: 20 }}
//                 />
//                 <View style={{ paddingLeft: 20, marginTop: 20 }} >
//                     <Label
//                         labelSize={18}
//                     // labelStyle={{}}
//                     >Preferred Areas</Label>
//                     <FlatList
//                         data={preferredArea}
//                         horizontal={true}
//                         renderItem={_renderPreferredAreas}
//                         keyExtractor={(item, index) => index.toString()}
//                         ItemSeparatorComponent={() => (<View style={{ marginLeft: 10 }} />)}
//                         showsHorizontalScrollIndicator={false}
//                         ListFooterComponent={() => (<View style={{ marginRight: 100 }} />)}
//                         contentContainerStyle={{ marginTop: 5 }}
//                     />
//                 </View>
//                 <View style={{ paddingLeft: 20, marginTop: 20 }} >
//                     <Label
//                         labelSize={18}
//                     // labelStyle={{}}
//                     >Block type</Label>
//                     <FlatList
//                         data={blockType}
//                         horizontal={true}
//                         renderItem={_renderBlockTypeData}
//                         keyExtractor={(item, index) => index.toString()}
//                         ItemSeparatorComponent={() => (<View style={{ marginLeft: 10 }} />)}
//                         showsHorizontalScrollIndicator={false}
//                         ListFooterComponent={() => (<View style={{ marginRight: 100 }} />)}
//                     />
//                 </View>
//                 <View style={{ paddingLeft: 20, marginTop: 10 }} >
//                     <Label
//                         labelSize={18}
//                     >Block Price</Label>
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
//                             height: 2.5
//                         }}
//                         selectedStyle={{
//                             backgroundColor: DarkBlueColor
//                         }}
//                         containerStyle={{
//                             marginLeft: 5
//                         }}
//                     />
//                     <Label
//                         labelSize={14}
//                         labelStyle={{
//                             position: "absolute",
//                             right: 15,
//                             top: 5
//                         }}
//                     >$2300 - $6500</Label>
//                 </View>
//             </ScrollView>
//             <Btn
//                 label="Next"
//                 btnContainerStyle={{
//                     backgroundColor: DarkBlueColor,
//                     justifyContent: "center",
//                     borderRadius:20
//                 }}
//                 mpBtnContainer={{ mh: 20, mv: 10 }}
//                 onPressBtn={()=>{
//                     navigation.navigate("LiveBlog")
//                 }}
//             />
//         </MainContainer>
//     )
// }

// export default FilterScreen

import React from "react";
import MainContainer from "../../../components/MainContainer";
import { navigationProps } from "../../../types/nav";
import Commercial from "./Commercial";
import Farm from "./Farm";
import LeaseFarm from "./LeaseFarm";
import Resedential from "./Resedential";


interface props extends navigationProps {
    
}

const FilterScreen: React.FC<props> = (props) => {
    return (
        <MainContainer style={{ backgroundColor: "white" }} >
            {/* <Resedential {...props} /> */}
            {/* <Commercial {...props} /> */}
            {/* <Farm {...props}/> */}
            <LeaseFarm {...props} />
        </MainContainer>
    )
}

export default FilterScreen
