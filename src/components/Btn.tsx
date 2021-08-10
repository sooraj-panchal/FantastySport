import React from 'react';
import { Text, Pressable, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { PrimaryColor } from '../assets/colors';
import { regular } from '../assets/fonts/fonts';
import { mpStyle, normalize, screenWidth, vs } from '../types/sizes';

interface Props {
    title: string,
    onPress: () => void,
    btnStyle?: StyleProp<ViewStyle>,
    mpBtn?: mpStyle,
    btnHeight?: number,
    radius?: number,
    labelSize?: number,
    labelStyle?: StyleProp<TextStyle>,
    mpLabel?: mpStyle,
    textColor?: string,
    leftIcon?: () => void,
    rightIcon?: () => void
}

const Btn: React.FC<Props> = ({
    title,
    onPress,
    btnStyle,
    mpBtn,
    btnHeight,
    radius = 0,
    labelSize,
    labelStyle,
    mpLabel,
    textColor,
    leftIcon,
    rightIcon,
    ...restProps
}) => {

    return (
        <Pressable
            onPress={onPress}
            style={[{
                height: vs(btnHeight || 30),
                ...mpStyle({ ...mpBtn }),
                justifyContent: "center",
                alignItems: "center",
                borderRadius: radius,
                backgroundColor:PrimaryColor,
                flexDirection: "row"
            }, btnStyle]}

            {...restProps}
        >
            {leftIcon ? leftIcon() : null}
            <Text
                style={[{
                    color: textColor,
                    fontSize: normalize(labelSize || 12),
                    ...mpStyle({ ...mpLabel }),
                    fontFamily:regular
                }, labelStyle]}
            >{title}</Text>
            {rightIcon ? rightIcon() : null}
        </Pressable>
    )

}

export default Btn