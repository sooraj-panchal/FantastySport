import React from "react"
import { useState } from "react"
import { ImageBackground } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useSelector } from "react-redux"
import { medium } from "../../../assets/fonts/fonts"
import { AppImages, AuthImages } from "../../../assets/images/map"
import Btn from "../../../components/Btn"
import Container from "../../../components/Container"
import Img from "../../../components/Img"
import Label from "../../../components/Label"
import EditProfileModal from "../../../components/Modals/EditProfileModal"
import { RootState } from "../../../store"
import { UserResponse } from "../../../types/responseTypes"

const ImageContainer = ({

}) => {
    const user: UserResponse = useSelector((store: RootState) => store.auth.user)
    console.log("user", user)

    const [openModal, setOpenModal] = useState(false)
    
    return (
        <ImageBackground
            style={{
                width: "100%",
                // height: 260,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 30
            }}
            source={AppImages.profile_bg}
        >
            <EditProfileModal
                openModal={openModal}
                closeModal={() => setOpenModal(false)}
            />
            <Container
                containerStyle={{
                    borderRadius: 100,
                    justifyContent: 'center', alignItems: 'center',
                    overflow: 'hidden',
                    backgroundColor: 'white',
                    borderWidth: 3,
                    borderColor: 'white'
                }}
                width={90} height={90}
                mpContainer={{
                    
                }}
            >
                <Ionicons
                    name='person'
                    size={85}
                    color='grey'
                    style={{ top: 5 }}
                />
            </Container>
            {/* <Img
                width={90}
                height={90}
                imgStyle={{ borderRadius: 100, borderWidth: 4, borderColor: 'white' }}
                imgSrc={{ uri: AuthImages.profile_image }}
            /> */}
            <Label
                style={{ color: "white", fontFamily: medium, letterSpacing: 0.5 }}
                labelSize={20}
                mpLabel={{ pt: 15 }}
            >{`${user.first_name} ${user.last_name}`}</Label>
            <Label
                style={{ color: "white", letterSpacing: 0.5 }}
                labelSize={16}
                mpLabel={{ mt: 5 }}
            >{user.email}</Label>
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

export default ImageContainer;