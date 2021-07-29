import React from "react";
import { FlatList, View } from "react-native";
import { DarkBlueColor } from "../../../assets/colors";
import { AppImages } from "../../../assets/images/map";
import Btn from "../../../components/Btn";
import CardView from "../../../components/CardView";
import Container from "../../../components/Container";
import Img from "../../../components/Img";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";

function SavedSearchScreen({
    navigation
}) {
    const PropertyList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    const _renderProperyListData = () => {
        return (
            <Container
                containerStyle={{
                    justifyContent: "center",
                    borderRadius: 4,
                    height: null,
                    borderWidth: 0.5,
                    borderColor: "grey"
                }} mpContainer={{ pl: 20, mh: 10, pv: 15 }}
                onPressCard={() => {
                    navigation.navigate("PropertyDetail")
                }}
            >
                <Label labelSize={20}>Search title 1</Label>
                <Label labelSize={14}
                    labelStyle={{ maxWidth: "90%", color: "grey" }}
                    mpLabelStyle={{ mt: 2 }}
                    numberOfLines={3} >17, Feb 2020</Label>
                <Btn
                    btnContainerStyle={{
                        backgroundColor:'red',
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 10,
                        borderWidth: 0,
                        position: "absolute",
                        right: 15
                    }}
                    btnHeight={35}
                    label="Delete"
                    labelSize={14}
                    btnWidth={100}
                />
            </Container>
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
export default SavedSearchScreen