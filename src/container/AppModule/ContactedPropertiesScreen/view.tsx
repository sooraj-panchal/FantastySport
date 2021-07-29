import React from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import { medium } from "../../../assets/fonts/fonts";
import { AppImages } from "../../../assets/images/map";
import Img from "../../../components/Img";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Container from "../../../components/Container";
import { navigationProps } from "../../../types/nav";

interface props extends navigationProps {

}

const ContactedProperiesScreen: React.FC<props> = ({
    navigation
}) => {
    const PropertyList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    const _renderProperyListData: ListRenderItem<string> = ({ item, index }) => {
        return (
            <Container
                height={110}
                containerStyle={{
                    justifyContent: "center",
                    borderRadius: 4,
                    elevation: 2,
                    backgroundColor: "white"
                }}
                mpContainer={{ ph: 5, mh: 5 }}
                onPress={() => {
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
                        <Label labelSize={20} style={{ fontFamily: medium }} >$ 28,800</Label>
                        <Label labelSize={12} style={{ maxWidth: "90%" }}
                        // numberOfLines={3}
                        >4.1 acres Lake lure, North Carollina (Ruther ford Country)</Label>
                    </View>
                </View>
                <Ionicons
                    name="ios-heart"
                    size={25}
                    style={{
                        position: "absolute",
                        right: 5,
                        top: 5
                    }}
                    color="red"
                />
            </Container>
        )
    }

    return (
        <MainContainer>
            {/* <Container mpContainer={{ pt: getStatusBarHeight() }} containerStyle={{ backgroundColor: DarkBlueColor }} /> */}
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
export default ContactedProperiesScreen