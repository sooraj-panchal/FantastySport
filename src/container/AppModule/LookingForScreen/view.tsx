import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DarkBlueColor, OrangeColor } from '../../../assets/colors';
import { medium } from '../../../assets/fonts/fonts';
import { AuthImages } from '../../../assets/images/map';
import Btn from '../../../components/Btn';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'react-native';
import { navigationProps } from '../../../types/nav';


interface props extends navigationProps {
}

const LookingForScreen: React.FC<props> = ({
    navigation
}) => {
    const [index, setIndex] = useState(1)

    const LookigForData = [
        "Residential",
        "Commercial",
        "Farm block",
        "Recreational",
        "Ranches",
        "Mineral"
    ]

    return (
        <MainContainer style={{ paddingTop: 80 }} >
            <Img
                imgSrc={AuthImages.background_logo}
                imgStyle={{
                    width: "25%",
                    height: "20%",
                    resizeMode: "contain",
                    position: "absolute",
                    right: 15,
                    top: -50
                }}
                mpImage={{ mt: 80 }}
            />
            <Label
                style={{
                    fontFamily: medium,
                    letterSpacing: 0.5
                }}
                labelSize={30}
                mpLabel={{ ml: 15, mt: 35, mb: 10 }}
            >Looking For</Label>
            {
                LookigForData.map((item, key) => {
                    return (
                        <Btn
                            key={key}
                            labelSize={15}
                            labelStyle={{
                                color: key == index ? "white" : "black"
                            }}
                            mpBtn={{ mh: 20, mt: 10, pl: 20, pt: 4 }}
                            btnStyle={{
                                backgroundColor: key == index ? DarkBlueColor : 'white',
                                borderRadius: 40,
                                borderWidth: 1,
                                borderColor: "lightgrey"
                            }}
                            btnHeight={55}
                            title={item}
                            rightIcon={() => {
                                return (
                                    <Ionicons
                                        name="md-chevron-forward"
                                        color={key == index ? "white" : "black"}
                                        style={{
                                            position: "absolute",
                                            right: 20
                                        }}
                                        size={30}
                                    />
                                )
                            }}
                            onPress={() => {
                                setIndex(key)
                            }}
                        />
                    )
                })
            }
            <Btn
                btnStyle={{
                    backgroundColor: OrangeColor,
                    width: "40%",
                    alignSelf: "center",
                    justifyContent: "center",
                    elevation: 1
                }}
                mpBtn={{ pt: 2, ml: 10, mt: 20 }}
                btnHeight={40}
                labelSize={14}
                radius={20}
                labelStyle={{
                    color: "white",
                    fontFamily: medium
                }}
                title="Next"
                rightIcon={() => {
                    return (
                        <FontAwesome
                            name="angle-double-right"
                            size={20}
                            color="white"
                            style={{
                                marginLeft: 10,
                                marginTop: -2
                            }}
                        />
                    )
                }}
                onPress={() => {
                    navigation.navigate("FilterStack", {
                        screen: "Filter"
                    })
                }}
            />
        </MainContainer>
    )
}

export default LookingForScreen