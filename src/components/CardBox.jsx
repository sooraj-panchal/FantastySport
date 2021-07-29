import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import * as globals from './../utils/globals'
import * as font from './../assets/fonts/fonts'
import { primaryColor } from '../assets/images/colors';

const CardBox = ({
    onPressCard,
    imgSrc,
    label,
    touchableStyle,
    cardStyle,
    imgStyle,
    btnStyle,
    btnLabelStyle
}) => {
    return (
        <View style={[styles.mainView, cardStyle]} >
            <TouchableOpacity
                activeOpacity={1}
                onPress={onPressCard}
                style={[styles.mainView, touchableStyle]}
            >
                <Image
                    style={[styles.imgStyle, imgStyle]}
                    source={imgSrc}
                />
            </TouchableOpacity>
            <View style={[styles.btnStyle, btnStyle]} >
                <Text style={[styles.btnLabelStyle, btnLabelStyle]} numberOfLines={1} >{label}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        justifyContent: "center",
        flex: 1,
        alignItems: 'center',
        marginRight: globals.horizontalScale(4), //4,
        marginLeft: globals.horizontalScale(4), //4,
        marginTop: globals.verticleScale(8), //8,
        backgroundColor: "white",
        height: globals.verticleScale(180),// 160,
    },
    touchableStyle: {
        justifyContent: "center",
        alignItems: 'center',
    },
    imgStyle: {
        width: globals.horizontalScale(130),// 150,
        height: globals.verticleScale(130),// 150,
        // height:,
        resizeMode: "contain"
    },
    btnStyle: {
        backgroundColor: primaryColor,
        height: globals.verticleScale(40),// 40,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    btnLabelStyle: {
        color: "white",
        fontFamily: font.Regular,
        fontSize: globals.font_14,// 14,
        maxWidth: "80%"
    }
})

export default CardBox