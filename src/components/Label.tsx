import React, { ReactNode } from 'react';
import { } from 'react';
import { Text, StyleProp, TextStyle, TextProps } from 'react-native';
import { bold, regular } from '../assets/fonts/fonts';
import { mpStyle, normalize } from '../types/sizes';

interface Props {
    onPress?: () => void,
    style?: StyleProp<TextStyle>,
    labelSize?: number,
    mpLabel?: mpStyle,
    textColor?: string
}

const Label: React.FC<Props & TextProps> = ({
    style,
    children,
    labelSize,
    mpLabel,
    onPress,
    textColor,
    ...restProps
}) => {
    return (
        <Text
            style={[{
                fontSize: normalize(labelSize || 12),
                ...mpStyle({ ...mpLabel }),
                color: textColor,
                fontFamily:regular,
            }, style]}
            {...restProps}
            onPress={onPress}
        >{children}</Text>
    )

}

export default Label