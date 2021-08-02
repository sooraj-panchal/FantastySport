import React from "react";
import { View, ScrollView, FlatList, StatusBar, ListRenderItem } from "react-native";
import Btn from "../../../components/Btn";
import Img from "../../../components/Img";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { OrangeColor } from "../../../assets/colors";
import styles from "./styles";
import { semiBold } from "../../../assets/fonts/fonts";
import Container from "../../../components/Container";
import { navigationProps } from "../../../types/nav";
import { screenWidth } from "../../../types/sizes";
import News from "./News";
import MyLeague from "./MyLeague";
import LiveMatch from "./LiveMatch";


interface props extends navigationProps {

}

const HomeScreen: React.FC<props> = ({
    navigation
}) => {

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
                    keyExtractor={(item, index) => `MyLeague ${index.toString()}`}
                />
                <MyLeague />
                <LiveMatch />
            </ScrollView>
        </MainContainer>
    )
}
export default HomeScreen;