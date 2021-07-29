import React from 'react';
import { ScrollView, View } from 'react-native';
import { medium, regular, semiBold } from '../../../assets/fonts/fonts';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { screenWidth } from '../../../utils/styleUtils';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DarkBlueColor, OrangeColor } from '../../../assets/colors';
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';
import { SearchFor } from '../../../../dummyArray';
import Btn from '../../../components/Btn';
import { AuthImages } from '../../../assets/images/map';

export default function BrokersProfileScreen({

}) {

    const _renderPropertyForYou = ({ item, index }) => {
        return (
            <Container
                width={160}
                height={210}
                containerStyle={styles.propertyTypeContainer}
                onPressCard={() => { }}
            >
                <Img
                    imgSrc={{ uri: "https://cdn.globalpropertyguide.com/assets/Mexico-2/Mexico-2021.jpg" }}
                    width={160}
                    height={110}
                // imgStyle={styles.propertyTypeImage}
                // resizeMode="contain"
                />
                <View style={{
                    height: 90,
                    justifyContent: "center"
                }} >
                    <Label labelSize={16} mpLabelStyle={{ pl: 10, pt: 5 }} labelStyle={{ fontFamily: semiBold }}  >$ 28,800</Label>
                    <Label labelSize={12} labelStyle={{ maxWidth: "95%" }} mpLabelStyle={{ pl: 10 }} numberOfLines={3} >4.1 acres Lake lure, North Carollina (Ruther ford Country)</Label>
                </View>
                <Ionicons
                    name={index == 0 ? "ios-heart" : "ios-heart-outline"}
                    size={25}
                    style={{
                        position: "absolute",
                        right: 5,
                        top: 5
                    }}
                    color={index == 0 ? "red" : 'white'}
                />
            </Container>
        )
    }

    return (
        <MainContainer style={{ backgroundColor: "white" }} >
            <ScrollView contentContainerStyle={{ paddingBottom: 50 }} >
                <Img
                    imgSrc={{
                        uri:AuthImages.profile_image
                    }}
                    imgStyle={{
                        width: screenWidth,
                        height: 260,
                        alignSelf: "center",
                        // borderRadius:2
                    }}
                // mpImage={{mt:10}}
                />
                <Container mpContainer={{ mt: 10, ml: 10 }} >
                    <Label
                        labelSize={20}
                        labelStyle={{
                            fontFamily: medium
                        }}
                        mpLabelStyle={{

                        }}
                    >Broker name</Label>
                    <Label
                        labelSize={12}
                        labelStyle={{
                            fontFamily: regular
                        }}
                        mpLabelStyle={{
                            mt: -4
                        }}
                    >Company name</Label>
                    <Container containerStyle={{
                        flexDirection: "row",
                        alignItems: "center"
                    }} mpContainer={{ mt: 10 }} >
                        <MaterialIcons
                            name="email"
                            size={22}
                        />
                        <Label
                            labelSize={14}
                            labelStyle={{
                                fontFamily: regular
                            }}
                            mpLabelStyle={{
                                ml: 5
                            }}
                        >:  brokername@gmai.com</Label>
                    </Container>
                    <Container containerStyle={{
                        flexDirection: "row",
                        alignItems: "center"
                    }} mpContainer={{ mt: 10 }} >
                        <MaterialIcons
                            name="phone"
                            size={22}
                        />
                        <Label
                            labelSize={14}
                            labelStyle={{
                                fontFamily: regular
                            }}
                            mpLabelStyle={{
                                ml: 5
                            }}
                        >:  1234567890</Label>
                    </Container>
                    <Container containerStyle={{
                        flexDirection: "row",
                        alignItems: "center"
                    }} mpContainer={{ mt: 10 }} >
                        <MaterialCommunityIcons
                            name="web"
                            size={22}
                        />
                        <Label
                            labelSize={14}
                            labelStyle={{
                                fontFamily: regular
                            }}
                            mpLabelStyle={{
                                ml: 5
                            }}
                        >:  brokerwebsite.com</Label>
                    </Container>
                    <Container containerStyle={{
                        flexDirection: "row",
                    }} mpContainer={{ mt: 10 }} >
                        <Ionicons
                            name="md-location"
                            size={22}
                        />
                        <Label
                            labelSize={14}
                            labelStyle={{
                                fontFamily: regular,
                                maxWidth: "80%"
                            }}
                            mpLabelStyle={{ ml: 5 }}
                        >:  41 north east, North Carolina (Ruther land Country)</Label>
                    </Container>
                    <Btn
                        label="Book an appoinment"
                        labelStyle={{
                            color: OrangeColor,
                            fontFamily:medium
                        }}
                        labelSize={12}
                        mpBtnContainer={{
                            ph: 10, pt: 2
                        }}
                        btnHeight={30}
                        btnContainerStyle={{
                            position: "absolute",
                            right: 10,
                            top:-25,
                            backgroundColor: "white",
                            borderWidth: 1,
                            borderRadius:20,
                            borderColor: OrangeColor,
                            elevation:3
                        }}
                    />
                </Container>
                <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} mpContainer={{ mv: 20, mh: 20 }} />
                <Container>
                    <Label
                        labelSize={25}
                        labelStyle={{
                            fontFamily: medium,
                            textAlign: "center",

                        }}
                    >Talk to us right now</Label>
                    <Label
                        labelSize={30}
                        labelStyle={{
                            fontFamily: semiBold,
                            textAlign: "center",
                            color: OrangeColor
                        }}
                    >1234 567 890</Label>
                    <Label
                        labelSize={15}
                        labelStyle={{
                            fontFamily: regular,
                            textAlign: "center",
                        }}
                    >8am to 6pm, Monday to Friday</Label>
                    <Label
                        labelSize={15}
                        labelStyle={{
                            fontFamily: regular,
                            textAlign: "center",
                        }}
                    >8am to 4pm, Saturday</Label>
                </Container>
                <Container containerStyle={{
                    flexDirection: "row",
                    alignItems: "center",
                }} mpContainer={{ mt: 15, pl: 40 }} >
                    <MaterialIcons
                        name="email"
                        size={20}
                        color="white"
                        style={{
                            padding: 8,
                            backgroundColor: OrangeColor,
                            borderRadius: 20,
                        }}
                    />
                    <Label
                        labelSize={16}
                        labelStyle={{
                            fontFamily: regular
                        }}
                        mpLabelStyle={{
                            ml: 15
                        }}
                    >brokername@gmai.com</Label>
                </Container>
                <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} mpContainer={{ mv: 15, mh: 20 }} />
                <Container containerStyle={{
                    flexDirection: "row",
                    alignItems: "center",
                }} mpContainer={{ pl: 40 }} >
                    <Ionicons
                        name="chatbox-ellipses"
                        size={20}
                        color="white"
                        style={{
                            padding: 8,
                            backgroundColor: OrangeColor,
                            borderRadius: 20,
                        }}
                    />
                    <Label
                        labelSize={16}
                        labelStyle={{
                            fontFamily: regular
                        }}
                        mpLabelStyle={{
                            ml: 15
                        }}
                    >Chat online right now</Label>
                </Container>
                <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} mpContainer={{ mv: 15, mh: 20 }} />
                <Container containerStyle={{
                    flexDirection: "row",
                    alignItems: "center",
                }} mpContainer={{ pl: 40 }} >
                    <Ionicons
                        name="md-star"
                        size={20}
                        color="white"
                        style={{
                            padding: 8,
                            backgroundColor: OrangeColor,
                            borderRadius: 20,
                        }}
                    />
                    <Label
                        labelSize={16}
                        labelStyle={{
                            fontFamily: regular
                        }}
                        mpLabelStyle={{
                            ml: 15
                        }}
                    >Give us feedback</Label>
                </Container>
                <Container
                    mpContainer={{ mt: 10, pb: 15 }}
                    containerStyle={{
                        backgroundColor: "white"
                    }}
                >
                    <View style={styles.propertyTypeLabelContainer} >
                        <Label labelSize={20} labelStyle={{ fontFamily: medium }}>Posted properties</Label>
                        <Label
                            labelSize={20}
                            labelStyle={{ fontFamily: medium, color: OrangeColor }}
                            onPressLabel={() => {
                                navigation.navigate("PropertyList")
                            }}
                        >See all</Label>
                    </View>
                    <FlatList
                        listKey={4}
                        showsHorizontalScrollIndicator={false}
                        style={styles.propertyTypeListContainer}
                        data={SearchFor}
                        renderItem={_renderPropertyForYou}
                        horizontal={true}
                        keyExtractor={(_, index) => index.toString()}
                        ItemSeparatorComponent={() => (<View style={{ marginLeft: 10 }} />)}
                        contentContainerStyle={{ paddingRight: 40 }}
                    />
                </Container>
            </ScrollView>

        </MainContainer>
    )
}