import React, { useLayoutEffect } from 'react';
import { medium, regular, semiBold } from '../../../assets/fonts/fonts';
import { AppImages, AuthImages } from '../../../assets/images/map';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { OrangeColor } from '../../../assets/colors';
import Btn from '../../../components/Btn';
import { FlatList } from 'react-native';
import { navigationProps } from '../../../types/nav';

interface props extends navigationProps {

}

const LiveBlogScreen: React.FC<props> = ({
    navigation
}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Label
                        labelSize={18}
                        mpLabel={{ mr: 15 }}
                        style={{ letterSpacing: 0.5 }}
                    >Urban</Label>
                )
            }
        })
    }, [])

    function renderMyRequirements() {
        return (
            <>
                <Container
                    containerStyle={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                    mpContainer={{ ph: 20, mt: 20 }}
                >
                    <Img
                        width={70}
                        height={70}
                        imgStyle={{ borderRadius: 70 }}
                        imgSrc={{ uri: AppImages.property_image }}
                    />
                    <Container mpContainer={{ ml: 20 }} >
                        <Label
                            labelSize={18}
                            style={{
                                fontFamily: medium
                            }}
                        >John Wick</Label>
                        <Label
                            labelSize={14}
                            style={{
                                fontFamily: regular
                            }}
                            mpLabel={{ mt: -5 }}
                        >johnvick@gmail.com</Label>
                    </Container>
                </Container>
                <Label
                    labelSize={18}
                    style={{ fontFamily: semiBold }}
                    mpLabel={{ mt: 10, mh: 20 }}
                >Looking for,</Label>
                <Container
                    containerStyle={{

                    }}
                    mpContainer={{ mt: 5, mh: 20 }}
                >
                    <Container containerStyle={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }} >
                        <Img
                            imgSrc={AuthImages.background_logo}
                            imgStyle={{

                            }}
                            width={20} height={20}
                        />
                        <Label
                            labelSize={15}
                            style={{ fontFamily: regular }}
                            mpLabel={{ ml: 10 }}
                        >Residential block</Label>
                    </Container>
                    <Container containerStyle={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                        mpContainer={{ mt: 5 }}
                    >
                        <Img
                            imgSrc={AuthImages.background_logo}
                            imgStyle={{

                            }}
                            width={20} height={20}
                        />
                        <Label
                            labelSize={15}
                            style={{ fontFamily: regular }}
                            mpLabel={{ ml: 10 }}
                        >North-east facing</Label>
                    </Container>
                    <Container containerStyle={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                        mpContainer={{ mt: 5 }}
                    >
                        <Img
                            imgSrc={AuthImages.background_logo}
                            imgStyle={{

                            }}
                            width={20} height={20}
                        />
                        <Label
                            labelSize={15}
                            style={{ fontFamily: regular }}
                            mpLabel={{ ml: 10 }}
                        >Around 10-15 Acre</Label>
                    </Container>
                    <Container containerStyle={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                        mpContainer={{ mt: 5 }}
                    >
                        <Img
                            imgSrc={AuthImages.background_logo}
                            imgStyle={{

                            }}
                            width={20} height={20}
                        />
                        <Label
                            labelSize={15}
                            style={{ fontFamily: regular }}
                            mpLabel={{ ml: 10 }}
                        >Budget around $2300-%5000</Label>
                    </Container>
                    <Container containerStyle={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                        mpContainer={{ mt: 5 }}
                    >
                        <Img
                            imgSrc={AuthImages.background_logo}
                            imgStyle={{

                            }}
                            width={20} height={20}
                        />
                        <Label
                            labelSize={16}
                            style={{ fontFamily: regular }}
                            mpLabel={{ ml: 10 }}
                        >Park Front</Label>
                    </Container>
                    <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} mpContainer={{ mv: 20 }} />
                </Container>
            </>
        )
    }

    return (
        <MainContainer style={{ backgroundColor: "white" }} >
            {/* <StatusBar barStyle="light-content" /> */}
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <Container
                            containerStyle={{
                                flexDirection: "row",
                                alignItems: "center"
                            }}
                            mpContainer={{ pl: 10 }}
                            onPress={() => {
                                navigation.navigate("SellerPostList")
                            }}
                        >
                            <Img
                                width={65}
                                height={65}
                                imgStyle={{ borderRadius: 70 }}
                                imgSrc={{ uri: AppImages.property_image }}
                            // containerStyle={{backgroundColor:"red"}}
                            />
                            <Container mpContainer={{ ml: 15 }} >
                                <Label
                                    labelSize={18}
                                    style={{
                                        fontFamily: medium
                                    }}
                                >Seller 1</Label>
                                <Label
                                    labelSize={12}
                                    style={{
                                        // fontFamily: null,
                                        maxWidth: "90%"
                                    }}
                                    mpLabel={{ mt: -5 }}
                                >Hi John, I have a perfect block which meets your requirements, call me or chat me your number we can chat </Label>
                            </Container>
                        </Container>
                    )
                }}
                ListHeaderComponent={() => {
                    return renderMyRequirements()
                }}
                ItemSeparatorComponent={() => <Container mpContainer={{ mv: 5 }} />}
                ListFooterComponent={() => <Container mpContainer={{ mb: 10 }} />}
            />
            <Btn
                btnStyle={{
                    backgroundColor: OrangeColor,
                    width: "90%",
                    justifyContent: "center",
                    elevation: 1,
                    alignSelf: "center"
                }}
                mpBtn={{ pt: 2, ml: 10, mt: 10, mb: 10 }}
                btnHeight={45}
                labelSize={18}
                labelStyle={{
                    color: "white",
                    fontFamily: medium
                }}
                title="Skip"
                rightIcon={() => {
                    return (
                        <FontAwesome
                            name="angle-double-right"
                            size={30}
                            color="white"
                            style={{
                                marginLeft: 10,
                                marginTop: -2
                            }}
                        />
                    )
                }}
                radius={5}
                onPress={() => { }}
            />
        </MainContainer>
    )
}

export default LiveBlogScreen