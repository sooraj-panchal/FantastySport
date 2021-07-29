import React, { useRef } from 'react';
import { useState } from 'react';
import { TextInput, Pressable } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

const FloatingInputBox = ({

}) => {
    const [value, setValue] = useState("")
    const [isFocused, setIsFocused] = useState(false)
    const inputRef = useRef(null)
    // const animatedValue = useSharedValue(0);
    // const focusAnim = useRef(new Animated.Value(0)).current

    const animatedStyles = useAnimatedStyle(() => {
        // const translateY = withSpring(animatedValue.value, {}, (finished) => {
        //     if (finished) {
        //         animatedValue.value = 0
        //     }
        // })
        let value = isFocused ? -20 : 0
        const translateY = withTiming(value, {
            duration: 100,
            // easing: Easing.out(Easing.exp),
        }, (finished) => {
            // if (finished) {
            //     animatedValue.value = 0
            // }
        });
        return {
            transform: [
                {
                    translateY: translateY
                },
            ],
        };
    }, [isFocused]);

    return (
        <>
            <Pressable
                style={[{
                    width: "80%",
                    height: 40,
                    borderWidth: 1,
                    borderColor: "grey",
                    justifyContent: "center",
                    marginLeft: 20,
                    marginTop: 100
                }]}
            // onPress={onPress}
            >
                <TextInput
                    ref={inputRef}
                    // value={value}
                    onChangeText={(text) => {
                        setValue(text)
                    }}
                    style={[{
                        padding: 0,
                        paddingLeft: 10
                    }]}
                    onBlur={(event) => {
                        setIsFocused(false)
                        // onBlur?.(event)
                        // animatedValue.value = 0
                    }}
                    onFocus={(event) => {
                        // animatedValue.value = -20
                        // console.log("event", event)
                        setIsFocused(true)
                        // animatedValue.value = -20
                        // onFocus?.(event)
                    }}
                />
                <Animated.Text
                    style={[{
                        position: "absolute",
                        backgroundColor: "#f2f2f2",
                        marginLeft: 10,
                        paddingHorizontal: 2
                    }, animatedStyles]}
                >Hello</Animated.Text>
            </Pressable>
            {/* <View style={{ marginTop: 100 }} >
                <Button
                    onPress={() => (animatedValue.value = -20)} title="Move"
                // style={{marginTop:100}}
                />
            </View> */}
        </>
    )
}

export default FloatingInputBox