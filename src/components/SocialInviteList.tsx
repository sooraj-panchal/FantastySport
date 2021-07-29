import React from 'react';
import Container from './Container';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Label from './Label';
import { medium, regular } from '../assets/fonts/fonts';

interface inviteSocialInviteListType {
    title: string;
    sub_title: string;
    socialIconColor: string,
    icon_name: string;
    onPress:()=>void
}

const SocialInviteList: React.FC<inviteSocialInviteListType> = ({
    title, sub_title, socialIconColor, icon_name,onPress
}) => {
    return (
        <Container
            containerStyle={{
                alignItems: "center",
                flexDirection: "row",
            }}
            mpContainer={{ pl: 15 }}
            height={80}
        >
            <Container
                containerStyle={{
                    backgroundColor: socialIconColor,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 50
                }}
                width={45} height={45}
            >
                {
                    icon_name == "mail" ?
                        <Ionicons
                            name={icon_name}
                            size={25}
                            color="white"
                        /> :
                        <FontAwesome
                            name={icon_name}
                            size={25}
                            color="white"
                        />
                }
            </Container>
            <Container mpContainer={{
                ml: 20,
                mt: 4
            }}  >
                <Label labelSize={15}
                    style={{
                        fontFamily: medium
                    }} >{title}</Label>
                <Label
                    labelSize={13}
                    style={{
                        fontFamily: regular,
                        color: "grey"
                    }}
                    mpLabel={{ mt: -4 }}
                >{sub_title}</Label>
            </Container>
            <Ionicons
                name="ios-chevron-forward"
                size={30}
                style={{
                    position: "absolute",
                    right: 20
                }}
            />
        </Container>
    )
}
export default SocialInviteList