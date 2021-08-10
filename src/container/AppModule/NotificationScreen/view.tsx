import React from "react";
import { FlatList, View } from "react-native";
import { DarkBlueColor } from "../../../assets/colors";
import { medium } from "../../../assets/fonts/fonts";
import { AppImages } from "../../../assets/images/map";
import Btn from "../../../components/Btn";
import CardView from "../../../components/CardView";
import Container from "../../../components/Container";
import Img from "../../../components/Img";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";
import { navigationProps } from "../../../types/nav";

interface props extends navigationProps {

}

const NotificationScreen: React.FC<props> = ({
    navigation,
    route
}) => {
    const PropertyList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    const _renderProperyListData = () => {
        return (
            <Container
                height={100}
                containerStyle={{
                    justifyContent: "center",
                    borderRadius: 4,
                    elevation: 2,
                    backgroundColor:"white"
                }} mpContainer={{ ph: 5, mh: 10 }}
            // onPressCard={() => {
            //     navigation.navigate("PropertyDetail")
            // }}
            >
                <Container containerStyle={{
                    flexDirection: "row",
                    alignItems: "center"
                }} >
                    <Img
                        imgSrc={AppImages.notification}
                        height={50}
                        width={50}
                        mpImage={{ml:10}}
                    // imgStyle={{ borderRadius: 2 }}
                    />
                    <Container
                        mpContainer={{ pl: 15 }}
                    >
                        <Label labelSize={16}
                            style={{ maxWidth: "95%" }}
                        >Loream Ipsulm Dummy Content?</Label>
                        <Label labelSize={12}
                            style={{ maxWidth: "90%", color: "grey" }}
                            mpLabel={{ mt: 5 }}
                            numberOfLines={3} >2 hour ago</Label>
                    </Container>
                </Container>
            </Container>
        )
    }
    return (
        <MainContainer>
            <FlatList
                data={[1,2,3]}
                renderItem={_renderProperyListData}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <Container mpContainer={{ mv: 5 }} />}
                ListHeaderComponent={() => <Container mpContainer={{ mt: 10 }} />}
                ListFooterComponent={() => <Container mpContainer={{ mb: 10 }} />}
                showsVerticalScrollIndicator={false}
            />
        </MainContainer>
    )
}
export default NotificationScreen