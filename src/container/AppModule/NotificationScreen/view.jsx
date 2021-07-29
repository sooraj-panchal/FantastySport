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

function NotificationScreen({
    navigation
}) {
    const PropertyList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    const _renderProperyListData = () => {
        return (
            <CardView
                height={130}
                cardStyle={{
                    justifyContent: "center",
                    borderRadius: 4
                }} mpCard={{ ph: 5, mh: 10 }}
            // onPressCard={() => {
            //     navigation.navigate("PropertyDetail")
            // }}
            >
                <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                }} >
                    <Img
                        imgSrc={AppImages.boxImage}
                        height={120}
                        width={100}
                    // imgStyle={{ borderRadius: 2 }}
                    />
                    <View style={{
                        paddingLeft: 15
                    }} >
                        <Label labelSize={16}
                            labelStyle={{ maxWidth: "90%" }}
                        >Loream Ipsulm Dummy Content?</Label>
                        <Label labelSize={12}
                            labelStyle={{ maxWidth: "80%", color: "grey" }}
                            // mpLabelStyle={{ mt: 5 }}
                            numberOfLines={3} >Loream Ipsulm is a dummy content</Label>
                        <Label labelSize={12}
                            labelStyle={{ maxWidth: "90%", color: "grey" }}
                            mpLabelStyle={{ mt: 5 }}
                            numberOfLines={3} >2 hour ago</Label>
                    </View>
                </View>
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
export default NotificationScreen