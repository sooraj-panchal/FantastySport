import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { GrayColor } from '../assets/colors';
import { ChatListTypes } from '../types/flatListTypes';
import { navigationProps } from '../types/nav';
import Container from './Container';
import Img from './Img';
import Label from './Label';



const ChatList: React.FC<ChatListTypes> = ({
    navigation,
    route,
    name,
    currentMsg,
    time,
    image
}) => {
    return (
        <Container
            containerStyle={{
                backgroundColor: "white",
                justifyContent: "center",
            }}
            height={120}
            onPress={() => {
                // navigation.navigate("ChatDetail", {
                //     name: "John Williams"
                // })
                navigation.navigate('ChatDetail', {
                    name: name
                })
            }}
        >
            <Container containerStyle={{
                flexDirection: "row",
                alignItems: "center"
            }} mpContainer={{ pl: 10 }} >
                <Img
                    imgStyle={{
                        borderRadius: 100
                    }}
                    width={80}
                    height={80}
                    imgSrc={{ uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
                />
                <Container
                    mpContainer={{ pl: 10 }}
                >
                    <Label
                        labelSize={18}
                    >{name}</Label>
                    <Label style={{
                        maxWidth: "80%",
                    }}
                        // maxLength={1}
                        mpLabel={{ pt: 2 }}
                        labelSize={15}
                    // numberOfLines={2}
                    >{currentMsg}</Label>
                </Container>
            </Container>
            <Label style={{
                color: GrayColor,
                position: "absolute",
                right: 10,
                top: 25
            }}
                labelSize={14}
            >{time}</Label>
        </Container>
    )
}

export default ChatList;