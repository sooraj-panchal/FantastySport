import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DarkBlueColor, OrangeColor, PrimaryColor } from '../../../assets/colors';
import { medium, regular } from '../../../assets/fonts/fonts';
import { AuthImages } from '../../../assets/images/map';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'react-native';
import { navigationProps } from '../../../types/nav';


interface props extends navigationProps {
}

const SearchingForScreen: React.FC<props> = ({
    navigation
}) => {

    const [index, setIndex] = useState(0)

    return (
        <MainContainer>
            <StatusBar barStyle="dark-content" translucent />
            <Container containerStyle={{
                justifyContent: "center",
                alignItems: "center"
            }} height={250} mpContainer={{ mt: 40 }}>
                <Img
                    imgSrc={AuthImages.background_logo}
                    imgStyle={{
                        width: "50%",
                        height: "50%",
                        resizeMode: "contain",
                    }}
                />
                <Label labelSize={20} style={{ color: "black", letterSpacing: 2, fontFamily: medium }} mpLabel={{ mt: 20 }} >BUY A BLOCK COM.AU</Label>
                <Label labelSize={15} style={{ color: "black", letterSpacing: 2.6 }} mpLabel={{ mt: -4 }} >Discover your ideal land</Label>
            </Container>
            <Container containerStyle={{
                flexDirection: "row",
                alignItems: "center"
            }}
                mpContainer={{ mh: 15 }}
            >
                <Container containerStyle={{ backgroundColor: "lightgrey", width: "35%" }} height={1} />
                <Container containerStyle={{
                    flexDirection: 'row',
                    alignItems: "center",
                    width: "30%",
                    justifyContent: "center"
                }}
                >
                    <Container
                        containerStyle={{
                            backgroundColor: "lightgrey",
                            transform: [{
                                rotate: "45deg"
                            }]
                        }}
                        width={10} height={10}
                    />
                    <Container
                        containerStyle={{
                            backgroundColor: "lightgrey",
                            transform: [{
                                rotate: "45deg"
                            }]
                        }}
                        width={15} height={15}
                        mpContainer={{ mh: 15 }}
                    />
                    <Container
                        containerStyle={{
                            backgroundColor: "lightgrey",
                            transform: [{
                                rotate: "45deg"
                            }]
                        }}
                        width={10} height={10}
                    />
                </Container>
                <Container containerStyle={{ backgroundColor: "lightgrey", width: "35%" }} height={1} />
            </Container>
            <Label
                style={{
                    fontFamily: medium,
                    letterSpacing: 0.5
                }}
                labelSize={25}
                mpLabel={{ ml: 15, mt: 30 }}
            >Searching For?</Label>
            {
                ["Urban Blocks", "Rural Blocks"].map((item, key) => {
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
                                borderWidth: 1,
                                borderColor: "lightgrey"
                            }}
                            radius={40}
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
                radius={20}
                mpBtn={{ pt: 2, ml: 10, mt: 20 }}
                btnHeight={40}
                labelSize={14}
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
                        screen: "LookingFor"
                    })
                }}
            />
        </MainContainer>
    )
}
export default SearchingForScreen;