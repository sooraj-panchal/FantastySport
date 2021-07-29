import React from "react";
import { View, ScrollView, FlatList, StatusBar, ListRenderItem } from "react-native";
import Btn from "../../../components/Btn";
import Img from "../../../components/Img";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { OrangeColor } from "../../../assets/colors";
import styles from "./styles";
import { medium, semiBold } from "../../../assets/fonts/fonts";
import { AppImages, AuthImages } from "../../../assets/images/map";
import Container from "../../../components/Container";
import { SearchFor } from "../../../../dummyArray";
import { navigationProps } from "../../../types/nav";
import { getStatusBarHeight } from "../../../utils/globals";
import { screenWidth } from "../../../types/sizes";
import PagerView from "react-native-pager-view";
import News from "./News";
import MyLeague from "./MyLeague";
import LiveMatch from "./LiveMatch";


interface props extends navigationProps {

}

const HomeScreen: React.FC<props> = ({
    navigation
}) => {

    const goToPropertyDetais = () => {
        navigation.navigate("PropertyDetail")
    }

    const _renderPropertyForYou: ListRenderItem<string | any> = ({ item, index }) => {
        return (
            <Container
                width={160}
                height={210}
                containerStyle={styles.propertyTypeContainer}
                onPress={goToPropertyDetais}
            >
                <Img
                    imgSrc={{ uri: "https://cdn.globalpropertyguide.com/assets/Mexico-2/Mexico-2021.jpg" }}
                    width={160}
                    height={110}
                // imgStyle={styles.propertyTypeImage}
                // resizeMode="contain"
                />
                <View style={{
                    height: 90,
                    justifyContent: "center"
                }} >
                    <Label labelSize={16} mpLabel={{ pl: 10, pt: 5 }} style={{ fontFamily: semiBold }}  >$ 28,800</Label>
                    <Label labelSize={12} style={{ maxWidth: "95%" }} mpLabel={{ pl: 10 }}
                    // numberOfLines={3}
                    >4.1 acres Lake lure, North Carollina (Ruther ford Country)</Label>
                </View>
                <Ionicons
                    name={index == 0 ? "ios-heart" : "ios-heart-outline"}
                    size={25}
                    style={{
                        position: "absolute",
                        right: 5,
                        top: 5
                    }}
                    color={index == 0 ? "red" : 'white'}
                />
            </Container>
        )
    }

    const renderLeague: ListRenderItem<{}> = ({ item, index }) => {
        return <Container
            containerStyle={{
                width: screenWidth * 0.85,
                height: 170,
                marginBottom: 5,
                borderRadius: 10,
                backgroundColor: "white",
                elevation: 2
            }}
        >
            <Label
                labelSize={25}
                style={{
                    fontWeight: "bold"
                }}
                mpLabel={{ pl: 15, pt: 15 }}

            >Fantasy league</Label>
            <Label
                labelSize={16}
                style={{

                }}
                mpLabel={{ pl: 15, pt: 5 }}

            >Private game</Label>
            <Btn
                title="Play Now"
                onPress={() => { 
                    navigation.navigate("CreateOrJoin")
                }}
                btnHeight={45}
                btnStyle={{
                    backgroundColor: OrangeColor,
                    width: screenWidth * 0.35,
                    position: "absolute",
                    bottom: 20,
                    left: 15
                }}
                radius={10}
                labelSize={18}
                labelStyle={{ color: "white" }}

            />
        </Container>
    }


    return (
        <MainContainer style={{ backgroundColor: "#f2f2f2" }} >
            <StatusBar backgroundColor="transparent" barStyle="light-content" />
            <ScrollView
                key={1}
                contentContainerStyle={{ paddingBottom: 40 }}
            >
                <News />
                <FlatList
                    data={[1, 2, 3]}
                    renderItem={renderLeague}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={() => <Container mpContainer={{ pl: 20 }} />}
                    ItemSeparatorComponent={() => <Container mpContainer={{ pl: 10 }} />}
                    contentContainerStyle={{ marginTop: 20, paddingRight: 20 }}
                />
                <MyLeague />
                <LiveMatch />
            </ScrollView>
        </MainContainer>
    )
}
export default HomeScreen;