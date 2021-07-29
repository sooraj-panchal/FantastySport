import React from 'react'
import { ScrollView, View } from 'react-native'
import { DarkBlueColor, LightGrayColor } from '../../../assets/colors'
import { medium, regular, semiBold } from '../../../assets/fonts/fonts'
import { AuthImages } from '../../../assets/images/map'
import Btn from '../../../components/Btn'
import Img from '../../../components/Img'
import Label from '../../../components/Label'
import MainContainer from '../../../components/MainContainer'
import CardView from '../../../components/CardView'
import HeaderBtn from '../../../components/HeaderBtn'

function SelectLocationScreen({
    navigation,
    route
}) {
    return (
        <MainContainer statusBarBg="#f2f2f2"  >  
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} >
            <HeaderBtn />
                <Img
                    imgSrc={AuthImages.background_logo}
                    width={90}
                    height={90}
                    imgStyle={{
                        alignSelf: "flex-end",
                        top: 20,
                        right: 10,
                        position: "absolute"
                    }}
                />
                <Label
                    labelSize={35}
                    mpLabelStyle={{ ml: 20, mt: 10 }}
                    labelStyle={{
                        fontFamily: semiBold,
                    }}
                >Select location</Label>
                <Label
                    labelSize={17}
                    mpLabelStyle={{ mt: 10, mh: 20 }}
                    labelStyle={{
                        fontFamily: regular
                    }}
                >we'll sent an email with 4-digit code to soorajpanchal786@gmail.com</Label>
                <Img
                    imgSrc={AuthImages.location_image}
                    width={120}
                    height={120}
                    mpImage={{ mt: 50 }}
                    imgStyle={{
                        alignSelf: "center",
                    }}
                    resizeMode="contain"
                />
                <CardView
                    height={145}
                    mpCard={{ mh: 20, mt: 40 }}
                    cardStyle={{
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: LightGrayColor
                    }}
                >
                    <Label
                        mpLabelStyle={{ mt: 30, mh: 20 }}
                        labelSize={15}
                        labelStyle={{
                            textAlign: "center",
                            width: "80%",
                            alignSelf: "center"
                        }}
                    >Tap to pick Your Location to get your Address</Label>
                    {/* <Label
                        mpLabelStyle={{ mt: 10, mh: 20 }}
                        labelSize={14}
                    >A-203,Shreemad Afford,Nikol Ahmedabad, Shreemad Afford,Nikol Ahmedabad, 382350</Label> */}
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        alignSelf: "center",
                        height: 45,
                        width: "100%",
                        justifyContent: "center",
                        position: "absolute",
                        bottom: 0,
                        borderTopWidth: 1,
                        borderTopColor: "lightgrey"
                    }} >
                        <Img
                            imgSrc={AuthImages.gps_image}
                            width={20} height={20}
                        />
                        <Label mpLabelStyle={{ ml: 10 }} labelSize={16}  >Pick location</Label>
                    </View>
                </CardView>
                <Btn
                    label="Next"
                    // label="Let's Go"
                    mpBtnContainer={{ mh: 20, mt: 60 }}
                    btnContainerStyle={{
                        borderRadius: 30,
                        backgroundColor: DarkBlueColor,
                        position: "absolute",
                        bottom: 0,
                        width: "80%",
                        alignSelf: "center"
                    }}
                    btnHeight={55}
                    labelSize={20}
                    labelStyle={{ fontFamily: medium }}
                    onPressBtn={() => {
                        navigation.navigate("ResetPassword")
                    }}
                />
            </ScrollView>
        </MainContainer>
    )
}

export default SelectLocationScreen