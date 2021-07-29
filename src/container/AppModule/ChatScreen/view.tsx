import React, { useState, useEffect } from 'react'
import { FlatList, ImageSourcePropType, ListRenderItem, Text } from 'react-native'
import { GrayColor } from '../../../assets/colors'
import ChatList from '../../../components/ChatList'
import Container from '../../../components/Container'
import Img from '../../../components/Img'
import Label from '../../../components/Label'
import MainContainer from '../../../components/MainContainer'
import { ChatListTypes } from '../../../types/flatListTypes'
import { navigationProps } from '../../../types/nav'

interface props extends navigationProps {

}

const ChatScreen: React.FC<props> = ({
    navigation,
    route
}) => {
    const Devider = () => {
        return (
            <Container containerStyle={{ borderBottomWidth: 1, borderBottomColor: "lightgrey" }} />
        )
    }

    const renderItemChatList: ListRenderItem<ChatListTypes | any> = ({
        item, index
    }) => {
        return <ChatList
            name={"John Wich"}
            time={"2 days ago"}
            currentMsg={"Hello john wick"}
            image={item.image}
            navigation={navigation}
            route={route}
        />
    }

    return (
        <MainContainer>
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderItemChatList}
                ItemSeparatorComponent={() => { return Devider() }}
            />
        </MainContainer>
    )
}

export default ChatScreen