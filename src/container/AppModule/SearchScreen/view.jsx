import React from "react";
import { View, StatusBar } from "react-native";
import Btn from "../../../components/Btn";
import CardView from "../../../components/CardView";
import Img from "../../../components/Img";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from "./styles";
import { AuthImages } from "../../../assets/images/map";
import { getStatusBarHeight } from "../../../utils/globals";


const SearchScreen = ({
    navigation
}) => {

    return (
        <MainContainer style={{ backgroundColor: "#e3e3e3" }} >
            <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
            <CardView
                cardStyle={styles.headerContainer}
                height={150}
                mpCard={{ ph: 10, pt: 15 + getStatusBarHeight() }}
            >
                <View style={styles.headerTopContainer} >
                    <View style={styles.headerLeftContainer} >
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }} >
                            <Img
                                imgSrc={AuthImages.background_logo}
                                width={30}
                                height={30}
                                imgStyle={{ resizeMode: "contain" }}
                            />
                            <Label labelSize={20} mpLabelStyle={{ pl: 10 }} labelStyle={styles.headerLabel}  >BUYABLOCK</Label>
                        </View>
                    </View>
                    <Btn
                        btnContainerStyle={styles.headerRightContainer}
                        label="Filter"
                        btnHeight={30}
                        labelSize={14}
                        btnWidth={80}
                        mpBtnContainer={{ pl: 10 }}
                        labelStyle={styles.headerRightlabelStyle}
                        rightIcon={() => {
                            return (
                                <Ionicons name="chevron-down" size={20} color="white"
                                    style={{
                                        position: "absolute",
                                        right: 5
                                    }}
                                />
                            )
                        }}
                        activeOpacity={1}
                    />
                </View>
                <Btn
                    btnContainerStyle={styles.searchBtn}
                    label="Brokers near me"
                    btnHeight={45}
                    labelSize={18}
                    mpBtnContainer={{ pl: 20, mt: 15, pt: 4 }}
                    labelStyle={styles.searchBtnLabel}
                    leftIcon={() => {
                        return (
                            <Ionicons name="md-search" size={20} color="grey" style={{ opacity: 0.4 }} />
                        )
                    }}
                    onPressBtn={() => navigation.navigate("Search")}
                    activeOpacity={1}
                />
            </CardView>
            <Btn
                onPressBtn={() => {
                    navigation.navigate("BrokersProfile")
                }}
            />
        </MainContainer>
    )
}

export default SearchScreen;