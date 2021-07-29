import React, { ReactNode } from 'react';
import { StyleSheet, View, TouchableOpacity, StyleProp, ViewStyle } from "react-native"
import { mpStyle, vs } from '../types/sizes';



interface Props {
    onPress?: () => void,
    height?: number,
    width?: number,
    mpContainer?: mpStyle,
    containerStyle?: StyleProp<ViewStyle>,
    children?: ReactNode,
}

const Container: React.FC<Props> = ({
    onPress,
    containerStyle,
    children,
    height,
    mpContainer,
    width
}) => {
    const styles = StyleSheet.create({
        containerStyle: {
            height: height && vs(height),
            width: width && vs(width),
            ...mpStyle({ ...mpContainer })
        }
    })

    if (onPress) {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={onPress}
                style={[styles.containerStyle, containerStyle]}
            >
                {children}
            </TouchableOpacity>
        )
    }
    return (
        <View style={[styles.containerStyle, containerStyle]} >
            {children}
        </View>
    )
}

export default Container