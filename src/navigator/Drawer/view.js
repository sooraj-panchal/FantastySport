import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DarkBlueColor } from '../../assets/colors';
import { medium, regular } from '../../assets/fonts/fonts';
import { AppImages, AuthImages, DrawerItemImages } from '../../assets/images/map';
import Btn from '../../components/Btn';
import CardView from '../../components/CardView';
import Img from '../../components/Img';
import Label from '../../components/Label';
import MainContainer from '../../components/MainContainer';
import { connect } from 'react-redux'
import { asyncBuyerDataSelector } from '../../store/selectors/whiteListSelector';
import { asyncBuyerDataWatcher } from '../../store/actions';
import { AuthStack } from '../navActions';

export const DrawerData = ({
    label,
    imgSrc,
    onPressBtn,
    asyncBuyerDataWatcher
}) => {
    return (
        <Btn
            leftIcon={() => {
                return (
                    <View style={{
                        // width: 20,
                        width: 65,
                        justifyContent: "center",
                        alignItems: "center"
                    }} >
                        <Img
                            imgSrc={imgSrc}
                            width={25}
                            height={25}
                            imgStyle={{ resizeMode: "contain" }}
                        />
                    </View>
                )
            }}
            label={label}
            labelSize={18}
            labelStyle={{ color: "black" }}
            btnContainerStyle={{
                backgroundColor: null,
                borderWidth: 0,
                borderRadius: 0
            }}
            btnHeight={55}
            onPressBtn={onPressBtn}
        />
    )
}


const CustomDrawer = ({
    navigation,
    asyncBuyerDataWatcher,
    asyncBuyerDataResponse
}) => {

    return (
        <MainContainer
            style={{ backgroundColor: DarkBlueColor }}
        >
            <CardView
                cardStyle={{
                    backgroundColor: DarkBlueColor,
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    paddingHorizontal: 10
                }}
                height={70}
            >
                <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                }} >
                    <Img
                        imgSrc={AuthImages.splashBg_image}
                        width={40}
                        height={40}
                        imgStyle={{ borderRadius: 20 }}
                    />
                    <Label
                        labelSize={18}
                        labelStyle={{ color: "white", width: "70%" }}
                        numberOfLines={1}
                        mpLabelStyle={{ pl: 15 }}
                    >Hello, {asyncBuyerDataResponse?.name}</Label>
                </View>
                <Ionicons
                    name="md-chevron-forward"
                    size={30}
                    color="white"
                />
            </CardView>
            <View style={{ backgroundColor: "white", flex: 1 }} >
                <DrawerData
                    label="Home"
                    imgSrc={DrawerItemImages.homeImage}
                    onPressBtn={() => {
                        navigation.navigate('AppStack')
                    }}
                />
                <DrawerData
                    label="Properties for buy"
                    onPressBtn={() => {
                    }}
                    imgSrc={DrawerItemImages.buyPropertyImage}

                />
                <DrawerData
                    label="Properties for Rent"
                    onPressBtn={() => {
                    }}
                    imgSrc={DrawerItemImages.rent_propertyImage}

                />
                <DrawerData
                    label="Rate us"
                    onPressBtn={() => {
                        navigation.navigate("FeedbackStack", {
                            screen: "Feedback",
                            params: {
                                screen: "Rate us"
                            }
                        })
                    }}
                    imgSrc={DrawerItemImages.rateImage}
                />
                <DrawerData
                    label="Share"
                    onPressBtn={() => {
                        navigation.navigate("FeedbackStack", {
                            screen: "Feedback",
                            params: {
                                screen: "Share"
                            }
                        })
                    }}
                    imgSrc={DrawerItemImages.shareImage}

                />
                <DrawerData
                    label="Feedback"
                    onPressBtn={() => {
                        navigation.navigate("FeedbackStack", {
                            screen: "Feedback",
                            params: {
                                screen: "Feedback"
                            }
                        })
                    }}
                    imgSrc={DrawerItemImages.feedbackImage}
                />
                <DrawerData
                    label="Setting"
                    onPressBtn={() => {
                        navigation.navigate('SettingStack', { screen: 'Setting' });
                    }}
                    imgSrc={DrawerItemImages.settingImage}
                />
                <DrawerData
                    label="Messages"
                    onPressBtn={() => {
                        navigation.navigate('ChatStack', { screen: 'Chat' });
                    }}
                />
                <DrawerData
                    label="Logout"
                    onPressBtn={() => {
                        asyncBuyerDataWatcher(null)
                        navigation.dispatch(AuthStack)
                    }}
                    imgSrc={DrawerItemImages.logoutImage}
                />
            </View>
        </MainContainer>
    )
}

const mapStateToProps = store => {
    return {
        asyncBuyerDataResponse: asyncBuyerDataSelector(store),
    }
}
const mapDispatchToProps = {
    asyncBuyerDataWatcher
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);