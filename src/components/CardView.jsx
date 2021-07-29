import React from 'react';
import { StyleSheet, View, TouchableOpacity } from "react-native"
import { vs, mpStyle, hs } from '../utils/styleUtils';

const CardView = ({
    onPressCard,
    cardStyle,
    children,
    height,
    mpCard,
    width
}) => {
    const styles = StyleSheet.create({
        cardStyle: {
            // justifyContent: "center",
            // alignItems: 'center',
            backgroundColor: "white",
            height: vs(height || 50),// 160,
            // justifyContent: "center",
            // alignItems: 'center',
            width: width ? hs(width) : null,
            elevation: 1,
            // margin:25,
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.1,
            ...mpStyle(mpCard)
        }
    })

    if (onPressCard) {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={onPressCard}
                style={[styles.cardStyle, cardStyle]}
            >
                {children}
            </TouchableOpacity>
        )
    }
    return (
        <View style={[styles.cardStyle, cardStyle]} >
            {children}
        </View>
    )
}



export default CardView