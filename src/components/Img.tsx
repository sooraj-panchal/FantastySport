import React from 'react';
import { ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';
import { Image, Pressable, StyleSheet } from "react-native"
import { hs, mpStyle, vs } from '../types/sizes';

interface Props {
    onPress?: () => void,
    imgStyle?: StyleProp<ImageStyle>,
    height?: number,
    width?: number,
    imgSrc: ImageSourcePropType,
    mpImage?: mpStyle
}


const Img: React.FC<Props> = ({
    onPress,
    imgStyle,
    height,
    width,
    imgSrc,
    mpImage,
    ...props
}) => {
    const styles = StyleSheet.create({
        imgStyle: {
            width: hs(width || 40),
            height: vs(height || 40),
            ...mpStyle({...mpImage})
        }
    })
    return (
        <>
            {!onPress ?
                <Image
                    {...props}
                    style={[styles.imgStyle, imgStyle]}
                    source={imgSrc}
                />
                :
                <Pressable
                    onPress={onPress}
                    style={[styles.imgStyle, imgStyle]}
                >
                    <Image
                        {...props}
                        style={[styles.imgStyle, imgStyle]}
                        source={imgSrc}
                    />
                </Pressable>
            }
        </>
    )
}

export default Img