import React from 'react';
import { Pressable, Text } from 'react-native';

const ButtonComp = ({
    textStyle,
    title,
    containerStyle,
    icon,
    onPress
}) => {
    // const { textStyle, title, containerStyle, icon, onPress } = props
    return <Pressable
        style={[{
            backgroundColor: "red",
            width: "90%",
            alignSelf: "center",
            height: 50,
            marginTop: 40,
            borderRadius: 4,
            justifyContent: "center",
            alignItems: "center",
            elevation: 10,
            flexDirection: "row"
        }, containerStyle]}
        onPress={() => {
            onPress(title)
        }}
    >
        {icon ? icon() : null}
        <Text style={[{
            color: "white",
            fontSize: 18,
            fontWeight: "900"
        }, textStyle]} >{title}</Text>
    </Pressable>
}

export default ButtonComp;