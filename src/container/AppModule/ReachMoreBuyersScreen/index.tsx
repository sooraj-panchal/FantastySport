import React from 'react';
import { medium, regular } from '../../../assets/fonts/fonts';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { DarkBlueColor, OrangeColor } from '../../../assets/colors';
import Btn from '../../../components/Btn';
import { StatusBar } from 'react-native';
import { getStatusBarHeight } from '../../../utils/globals';
import { navigationProps } from '../../../types/nav';

interface props extends navigationProps {
}


const ReachMoreBuyersScreen: React.FC<props> = ({
    navigation
}) => {

    return (
        <MainContainer >
            <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
            <Container containerStyle={{
                backgroundColor: DarkBlueColor,
                justifyContent: "center",
                alignItems: "center",
                paddingTop: getStatusBarHeight()
            }}
                height={200}
            >
                <Label
                    labelSize={20}
                    mpLabel={{ ml: 20 }}
                    style={{
                        fontFamily: medium,
                        color: "white"
                    }}
                >Hii there,</Label>
                <Label
                    labelSize={20}
                    mpLabel={{ mt: -4, ml: 20 }}
                    style={{
                        fontFamily: medium,
                        color: "white"
                    }}
                >What's on your mind?</Label>
            </Container>
            <Container
                containerStyle={{

                }}
                mpContainer={{ mt: 30, mh: 20 }}
            >
                <Label
                    labelSize={18}
                    style={{ fontFamily: regular }}
                >Looking to Buy a block?</Label>
                <Label
                    labelSize={18}
                    style={{ fontFamily: regular }}
                    mpLabel={{ mt: 15 }}
                >Looking to lease a block?</Label>
                <Label
                    labelSize={18}
                    style={{ fontFamily: regular }}
                    mpLabel={{ mt: 15 }}
                >Block Services?</Label>
                <Label
                    labelSize={16}
                    style={{ fontFamily: regular }}
                    mpLabel={{ mt: 15 }}
                >Post your requirements using the below filter:</Label>
            </Container>
            <Container
                containerStyle={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}
                mpContainer={{ mh: 15, mt: 20 }}
            >
                <Btn
                    btnStyle={{
                        backgroundColor: DarkBlueColor,
                        width: "40%",
                        justifyContent: "center",
                        elevation: 1,
                    }}
                    radius={4}
                    mpBtn={{ pt: 2 }}
                    btnHeight={40}
                    title="Filter"
                    labelSize={14}
                    labelStyle={{
                        color: "white",
                        fontFamily: medium
                    }}
                    leftIcon={() => {
                        return (
                            <FontAwesome
                                name="filter"
                                size={20}
                                color="white"
                                style={{
                                    marginRight: 10,
                                    marginTop: -4
                                }}
                            />
                        )
                    }}
                    onPress={() => {
                        navigation.navigate("FilterStack", {
                            screen: "SearchingFor"
                        })
                    }}
                />
                <Btn
                    btnStyle={{
                        backgroundColor: OrangeColor,
                        width: "50%",
                        justifyContent: "center",
                        elevation: 1
                    }}
                    radius={4}
                    mpBtn={{ pt: 2, ml: 10 }}
                    btnHeight={40}
                    labelSize={14}
                    labelStyle={{
                        color: "white",
                        fontFamily: medium
                    }}
                    title="Skip Live Blog"
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
                        navigation.navigate("SkipLiveBlog")
                    }}
                />
            </Container>
        </MainContainer>
    )
}

export default ReachMoreBuyersScreen;