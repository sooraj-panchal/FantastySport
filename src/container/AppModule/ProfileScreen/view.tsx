import React, { useState } from "react";
import { Alert, Modal, ScrollView, Text, View } from "react-native";
import { medium } from "../../../assets/fonts/fonts";
import { AppImages, AuthImages } from "../../../assets/images/map";
import Btn from "../../../components/Btn";
import Container from "../../../components/Container";
import Img from "../../../components/Img";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { DarkBlueColor, OrangeColor, PrimaryColor, } from "../../../assets/colors";
import { AuthStack } from "../../../navigator/navActions";
import { navigationProps } from "../../../types/nav";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../store/slices/auth";
import ImageContainer from "./ImageContainer";

interface props extends navigationProps {

}

const ProfileScreen: React.FC<props> = ({
    navigation,
    route,
    // asyncBuyerDataWatcher
}) => {

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logoutUser())
        navigation.dispatch(AuthStack)
    }

    const ListContainer = ({
        onPress,
        name
    }: { onPress: () => void, name: string }) => {
        return (
            <Btn
                btnStyle={{
                    backgroundColor: 'white',
                    justifyContent: "flex-start"
                }}
                btnHeight={45}
                title={name}
                labelSize={14}
                labelStyle={{
                    color: "black"
                }}
                mpBtn={{ mh: 5, pl: 20 }}
                rightIcon={() => {
                    return <Ionicons
                        name="chevron-forward"
                        size={30}
                        color="grey"
                        style={{ position: "absolute", right: 10 }}
                    />
                }}
                onPress={onPress}
            />
        )
    }

    return (
        <MainContainer style={{ backgroundColor: '#f2f2f2' }} >
            <ScrollView>
                <ImageContainer />
                <Container containerStyle={{
                    backgroundColor: "white",
                    elevation: 1,
                }}
                    mpContainer={{ mt: 10 }}
                >
                    <ListContainer
                        name="Your Team"
                        onPress={() => {
                            navigation.navigate('CreateTeam')
                        }}
                    />
                    <ListContainer
                        name="About us"
                        onPress={() => {
                            navigation.navigate("TermsAndCondition", {
                                title: 'About us'
                            })
                        }}
                    />
                    <ListContainer
                        name="Change password"
                        onPress={() => {
                            navigation.navigate("ChangePassword")
                        }}
                    />
                    <ListContainer
                        name="Privacy policy"
                        onPress={() => {
                            navigation.navigate("TermsAndCondition", {
                                title: 'Privacy policy'
                            })
                        }}
                    />
                    <ListContainer
                        name="Terms & conditions"
                        onPress={() => {
                            navigation.navigate("TermsAndCondition", {
                                title: 'Terms & conditions'
                            })
                        }}
                    />
                    <ListContainer
                        name="Contact us"
                        onPress={() => {
                            navigation.navigate("TermsAndCondition", {
                                title: 'Contact us'
                            })
                        }}
                    />
                </Container>
                <Btn
                    btnStyle={{
                        backgroundColor: "white",
                        borderWidth: 0,
                        borderRadius: 5,
                        elevation: 1,
                        justifyContent: "flex-start"
                    }}
                    title="Logout"
                    labelSize={14}
                    labelStyle={{
                        color: "black",
                    }}
                    btnHeight={40}
                    mpBtn={{ mt: 10, pl: 25 }}
                    rightIcon={() => {
                        return <MaterialIcons
                            name="logout"
                            size={25}
                            color={OrangeColor}
                            style={{ position: "absolute", right: 15 }}
                        />
                    }}
                    onPress={() => {
                        Alert.alert(
                            "Fantasy sniper",
                            "You really want to logout?",
                            [
                                {
                                    text: "Cancel",
                                    style: "cancel"
                                },
                                {
                                    text: "OK", onPress: logoutHandler
                                }
                            ]
                        );
                    }}
                />
            </ScrollView>

        </MainContainer>
    )
}

export default ProfileScreen