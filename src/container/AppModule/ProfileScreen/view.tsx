import React, { useState } from "react";
import { Alert, Modal, Text, View } from "react-native";
import { medium } from "../../../assets/fonts/fonts";
import { AuthImages } from "../../../assets/images/map";
import Btn from "../../../components/Btn";
import Container from "../../../components/Container";
import Img from "../../../components/Img";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { DarkBlueColor, } from "../../../assets/colors";
import { AuthStack } from "../../../navigator/navActions";
import EditProfileModal from "../../../components/Modals/EditProfileModal";
import { navigationProps } from "../../../types/nav";



const ImageContainer = ({

}) => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <Container
            containerStyle={{
                justifyContent: "center",
                alignItems: "center",
                // height: null,
                backgroundColor: "white",
                elevation: 1
            }}
            mpContainer={{ pv: 15 }}
        >
            <EditProfileModal
                openModal={openModal}
                closeModal={() => setOpenModal(false)}
            />
            <Img
                width={90}
                height={90}
                imgStyle={{ borderRadius: 100 }}
                imgSrc={{ uri: AuthImages.profile_image }}
            />
            <Label
                style={{ color: "black", fontFamily: medium }}
                labelSize={20}
                mpLabel={{ pt: 5 }}
            >John Wick</Label>
            <Label
                style={{ color: "black" }}
                labelSize={15}
            >Johnwick@gmail.com</Label>
            <Container containerStyle={{
                backgroundColor: DarkBlueColor,
                borderRadius: 35,
                position: "absolute",
                right: 15,
                top: 15,
                justifyContent: "center",
                alignItems: "center"
            }} width={35} height={35}
                onPress={() => {
                    setOpenModal(true)
                }}
            >
                <MaterialIcons
                    name="mode-edit"
                    size={20}
                    color="white"
                />
            </Container>
        </Container>
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
                    name="My Properties"
                    onPress={() => {
                        navigation.navigate('ProfileStack', { screen: 'MyProperties' });
                    }}
                />
                <ListContainer
                    name="My Appointments"
                    onPress={() => {
                        navigation.navigate('ProfileStack', { screen: 'ContactedProperies' });
                    }}
                />
                <ListContainer
                    name="Contacted Properties"
                    onPress={() => {
                        navigation.navigate('ProfileStack', { screen: 'ContactedProperies' });
                    }}
                />
                {/* <ListContainer
                    name="Saved Searches"
                    onPress={() => {
                        navigation.navigate('ProfileStack', { screen: 'SavedSearch' });
                    }}
                /> */}
                <ListContainer
                    name="Seller Chat"
                    onPress={() => {
                        navigation.navigate('ChatStack', {
                            screen: 'Chat'
                        })
                    }}
                />
                <ListContainer
                    name="Settings"
                    onPress={() => {
                        navigation.navigate('SettingStack', {
                            screen: "Setting"
                        });
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
                        color="red"
                        style={{ position: "absolute", right: 15 }}
                    />
                }}
                onPress={() => {
                    Alert.alert(
                        "Buy A Block",
                        "You really want to logout?",
                        [
                            {
                                text: "Cancel",
                                style: "cancel"
                            },
                            {
                                text: "OK", onPress: () => {
                                    // asyncBuyerDataWatcher(null)
                                    // navigation.dispatch(AuthStack)
                                }
                            }
                        ]
                    );

                }}
            />
        </MainContainer>
    )
}

export default ProfileScreen