import React from "react";
import { FlatList, View } from "react-native";
import { DarkBlueColor } from "../../../assets/colors";
import { medium } from "../../../assets/fonts/fonts";
import { AppImages } from "../../../assets/images/map";
import Btn from "../../../components/Btn";
import CardView from "../../../components/CardView";
import Img from "../../../components/Img";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";
import Ionicons from 'react-native-vector-icons/Ionicons';

function PropertyListScreen({
    navigation
}) {
    const PropertyList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    const _renderProperyListData = ({ item, index }) => {
        return (
            <CardView
                height={110}
                cardStyle={{
                    justifyContent: "center",
                    borderRadius: 4,
                }} mpCard={{ ph: 5, mh: 5 }}
                onPressCard={() => {
                    navigation.navigate("PropertyDetail")
                }}
            >
                <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                }} >
                    <Img
                        imgSrc={{ uri: AppImages.property_image }}
                        height={90}
                        width={90}
                        imgStyle={{ borderRadius: 5 }}
                        mpImage={{ ml: 2 }}
                    />
                    <View style={{
                        paddingLeft: 15,
                        flex: 1
                    }} >
                        <Label labelSize={20} labelStyle={{ fontFamily: medium }} >$ 28,800</Label>
                        <Label labelSize={12} labelStyle={{ maxWidth: "90%" }} numberOfLines={3} >4.1 acres Lake lure, North Carollina (Ruther ford Country)</Label>
                    </View>
                </View>
                <Ionicons
                    name={index == 1 ? "ios-heart":"ios-heart-outline"}
                    size={25}
                    style={{
                        position: "absolute",
                        right: 5,
                        top: 5
                    }}
                    color="red"
                />
            </CardView>
        )
    }

    return (
        <MainContainer>
            <FlatList
                data={PropertyList}
                renderItem={_renderProperyListData}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={{ marginVertical: 5 }} />}
                ListHeaderComponent={() => <View style={{ marginTop: 10 }} />}
                ListFooterComponent={() => <View style={{ marginBottom: 10 }} />}
                showsVerticalScrollIndicator={false}
            />
        </MainContainer>
    )
}
export default PropertyListScreen