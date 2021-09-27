import React, { useState } from "react";
import { Alert, Modal, Text, View } from "react-native";
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
import EditProfileModal from "../../../components/Modals/EditProfileModal";
import { navigationProps } from "../../../types/nav";
import { ImageBackground } from "react-native";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../store/slices/auth";



const ImageContainer = ({

}) => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <ImageBackground
            style={{
                width: "100%",
                height: 260,
                justifyContent: "center",
                alignItems: "center",
            }}
            source={AppImages.profile_bg}
        >
            <EditProfileModal
                openModal={openModal}
                closeModal={() => setOpenModal(false)}
            />
            <Img
                width={90}
                height={90}
                imgStyle={{ borderRadius: 100, borderWidth: 4, borderColor: 'white' }}
                imgSrc={{ uri: AuthImages.profile_image }}
            />
            <Label
                style={{ color: "white", fontFamily: medium, letterSpacing: 0.5 }}
                labelSize={20}
                mpLabel={{ pt: 15 }}
            >Adams depp</Label>
            <Label
                style={{ color: "white", letterSpacing: 0.5 }}
                labelSize={16}
                mpLabel={{ mt: 5 }}
            >Johnwick@gmail.com</Label>
            <Btn
                title="Edit Profile"
                onPress={() => {
                    setOpenModal(true)
                }}
                btnStyle={{
                    borderWidth: 1,
                    borderRadius: 4,
                    // paddingVertical:20,
                    paddingHorizontal: 30,
                    borderColor: 'white',
                    backgroundColor: 'transparent'
                }}
                labelSize={14}
                labelStyle={{ color: 'white' }}
                mpBtn={{ mt: 15 }}
                btnHeight={35}
            />
        </ImageBackground>
    )
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

    return (
        <MainContainer style={{ backgroundColor: '#f2f2f2' }} >
            <ImageContainer />
            <Container containerStyle={{
                backgroundColor: "white",
                elevation: 1,
            }}
                mpContainer={{ mt: 10 }}
            >
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
        </MainContainer>
    )
}

export default ProfileScreen