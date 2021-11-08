import React from 'react';
import { TextInputProps, TextStyle, View } from 'react-native';
import { TextInput, Pressable, StyleProp, ViewStyle } from 'react-native';
import { medium, regular, semiBold } from '../assets/fonts/fonts';
import { mpStyle, normalize, vs } from '../types/sizes';
import Container from './Container';
import Label from './Label';

interface Props {
    placeholder: string,
    onPress?: () => void,
    inputHeight?: number,
    radius?: number,
    leftIcon?: () => void,
    rightIcon?: () => void,
    mpInput?: mpStyle,
    mpContainer?: mpStyle,
    textSize?: number,
    containerStyle?: StyleProp<ViewStyle>,
    inputStyle?: StyleProp<ViewStyle | TextStyle>,
    onBlur?: () => void,
    editable?: boolean,
    touched?: boolean,
    errors?: string
}

const InputBox: React.FC<Props & TextInputProps> = ({
    onPress,
    inputHeight,
    radius = 5,
    textSize,
    leftIcon,
    rightIcon,
    mpInput,
    mpContainer,
    containerStyle,
    inputStyle,
    touched,
    errors,
    ...restProps
}) => {
    return (
        <>
            <Pressable
                style={[{
                    height: inputHeight && vs(inputHeight),
                    borderWidth: 1,
                    borderColor: "grey",
                    ...mpStyle({ ...mpContainer }),
                    borderRadius: radius,
                    flexDirection: "row",
                    alignItems: "center",
                }, containerStyle]}
                onPress={onPress}
            >
                {leftIcon && leftIcon()}
                <TextInput
                    style={[{
                        width: "85%",
                        height:vs(40),
                        // padding: 0,
                        ...mpStyle({ ...mpInput }),
                        fontSize: normalize(textSize || 14),
                        fontFamily: regular
                    }, inputStyle]}
                    // onPress ? false : true
                    {...restProps}
                />
                {rightIcon && rightIcon()}
            </Pressable>
            {touched && errors &&
                <Container
                    mpContainer={{ mh: 25, mt: 5 }}
                >
                    <Label
                        labelSize={12}
                        mpLabel={{}}
                        style={{
                            color: 'white',
                            fontFamily: semiBold
                        }}
                    >{errors}</Label>
                </Container>
            }
        </>
    )
}

export default InputBox