import React from 'react';
import { medium, regular, semiBold } from '../../../assets/fonts/fonts';
import { AuthImages } from '../../../assets/images/map';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { OrangeColor } from '../../../assets/colors';
import { navigationProps } from '../../../types/nav';
import SocialInviteList from '../../../components/SocialInviteList';


interface props extends navigationProps {

}

const InviteFriendScreen: React.FC<props> = ({
    navigation
}) => {

    return (
        <MainContainer statusBarHeight >
            <Img
                imgSrc={AuthImages.background_logo}
                width={90}
                height={90}
                imgStyle={{
                    alignSelf: "flex-end",
                    top: 30,
                    right: 10,
                    // position: "absolute"
                }}
            />
            <Label
                labelSize={30}
                mpLabel={{ ml: 20 }}
                style={{
                    fontFamily: semiBold,
                }}
            >Invite Friends</Label>
            <Label
                labelSize={15}
                mpLabel={{ mt: 5 }}
                style={{
                    fontFamily: medium,
                    maxWidth: "90%",
                    alignSelf: "center"
                }}
            >Invite your friends to join BUYABLOCK community</Label>
            <Container containerStyle={{ backgroundColor: "lightgrey" }} mpContainer={{ mv: 10, mh: 20 }} height={1} />
            <SocialInviteList
                title="Facebook"
                sub_title="Invite friens from Facebook"
                socialIconColor="#4267B2"
                icon_name="facebook"
                onPress={() => {

                }}
            />
            <SocialInviteList
                title="Twitter"
                sub_title="Invite friens from Twitter"
                socialIconColor="#1DA1F2"
                icon_name="twitter"
                onPress={() => {
                }}
            />
            <SocialInviteList
                title="Email"
                sub_title="Invite friens via a email"
                socialIconColor={OrangeColor}
                icon_name="mail"
                onPress={() => {
                }}
            />
            <SocialInviteList
                title="Contacts"
                sub_title="Invite friens via a text"
                socialIconColor="#25D366"
                icon_name="phone"
                onPress={() => {
                }}
            />
            <Container
                containerStyle={{
                    alignItems: "center",
                }}
                mpContainer={{ mt: 30 }}
            >
                <Label
                    labelSize={16}
                    style={{ fontFamily: medium }}
                >I will invite later</Label>
                <Label
                    style={{ fontFamily: medium, color: OrangeColor }}
                    labelSize={15}
                    onPress={() => {
                        navigation.navigate("ReachMoreBuyers")
                    }}
                >Skip</Label>
            </Container>
        </MainContainer>
    )
}
export default InviteFriendScreen