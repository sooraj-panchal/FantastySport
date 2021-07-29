import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'

const TextInputComp = (props) => {
    const { placeHolder, icon,containerStyle } = props
    console.log(props)
    const myIcon = () => {
        if (icon) {
            return icon()
        } else {
            return null
        }
    }
    return <View style={[{
        backgroundColor: "white",
        height: 45,
        width: "90%",
        alignSelf: "center",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
        // paddingLeft: 10
    },containerStyle]} >
        {myIcon()}
        <TextInput
            placeholder={placeHolder}
            style={{
                paddingLeft: 10,
            }}
            placeholderTextColor="grey"
        />
    </View>
}
export default TextInputComp;
