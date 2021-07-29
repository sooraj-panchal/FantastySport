import React from "react";
import { View, FlatList, Dimensions, ScrollView, Image, ListRenderItem } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import { PropertyDetailsArray } from "../../../../dummyArray";
import { DarkBlueColor, OrangeColor } from "../../../assets/colors";
import { medium } from "../../../assets/fonts/fonts";
import { AppImages, AuthImages } from "../../../assets/images/map";
import Btn from "../../../components/Btn";
import Container from "../../../components/Container";
import Img from "../../../components/Img";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";
import { getStatusBarHeight } from "../../../utils/globals";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { screenWidth } from "../../../utils/styleUtils";
import HeaderBtn from "../../../components/HeaderBtn";
import { navigationProps } from "../../../types/nav";

interface props extends navigationProps {

}

const PropertyDetailScreen: React.FC<props> = ({
    navigation,
}) => {
    const HEADER_HEIGHT = 60;
    const IMAGE_HEIGHT = 240;
    const propertyImages = [
        { id: "1" },
        { id: "2" },
        { id: "3" }
    ]

    const renderHeader = () => {
        return <View style={{
            zIndex: 100,
            position: "absolute",
            flexDirection: "row",
            width: "100%",
            height: HEADER_HEIGHT,
            alignItems: "center",
        }} >
            <HeaderBtn />
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                right: 15,
                position: "absolute",
                // paddingTop: 40
            }} >
                <Ionicons
                    name="ios-share-social"
                    size={25}
                    color="white"
                />
                <Ionicons
                    name="ios-heart-outline"
                    size={30}
                    color="white"
                    style={{ paddingLeft: 20 }}
                />
            </View>
        </View>
    }
    const renderPostedBy = () => {
        return <Container
            mpContainer={{
                ph: 20, pt: 10
            }}
        >
            <Label
                labelSize={15}
            >Posted by</Label>
            <Container mpContainer={{ mt: 10 }}
                containerStyle={{
                    flexDirection: "row",
                }}
            >
                <Img
                    imgSrc={{ uri: AuthImages.profile_image }}
                    imgStyle={{
                        borderRadius: 25
                    }}
                    width={45} height={45}
                />
                <Container mpContainer={{ ml: 10 }} >
                    <Label labelSize={15} style={{ fontFamily: medium }} >Agent name</Label>
                    <Label labelSize={15} >Johnvick@gmail.com</Label>
                    <Container
                        containerStyle={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                        mpContainer={{ mt: 5 }}
                    >
                        <Container containerStyle={{
                            backgroundColor: "rgb(128, 195, 224)",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 25
                        }} width={35} height={35}  >
                            <AntDesign
                                name="earth"
                                size={25}
                                color="white"
                            />
                        </Container>
                        <Container containerStyle={{
                            backgroundColor: "green",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 25
                        }} width={35} height={35} mpContainer={{ ml: 10 }}>
                            <Ionicons
                                name="md-logo-whatsapp"
                                size={25}
                                color="white"
                            />
                        </Container>
                        <Container containerStyle={{
                            backgroundColor: OrangeColor,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 25
                        }} width={35} height={35} mpContainer={{ ml: 10 }}>
                            <Ionicons
                                name="md-chatbubbles"
                                size={22}
                                color="white"
                            />
                        </Container>
                        <Container containerStyle={{
                            backgroundColor: DarkBlueColor,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 25
                        }} width={35} height={35} mpContainer={{ ml: 10 }} >
                            <Ionicons
                                name="ios-call"
                                size={22}
                                color="white"
                            />
                        </Container>
                    </Container>
                </Container>
            </Container>
            <Label
                labelSize={15}
                style={{
                    position: "absolute",
                    right: 15,
                    top: 10
                }}
            >Agent</Label>
        </Container>
    }
    const renderDescription = () => {
        return <Container
            mpContainer={{ mh: 20, mt: 20 }}
        >
            <Label labelSize={15} style={{ fontFamily: medium }} >Descriptions</Label>
            <Container
                containerStyle={{
                    backgroundColor: "#f2f2f2",
                    borderRadius: 4,
                    elevation: 1
                }}
                mpContainer={{ ph: 5, pv: 5, mt: 5 }}
            >
                <Label labelSize={14} >
                    loaream ipusm is simply dummy text of the prinitng and typesetting industy.
                    loaream ipusm is simply dummy text of the prinitng and typesetting industy.
                    loaream ipusm is simply dummy text of the prinitng and typesetting industy.
                    loaream ipusm is simply dummy text of the prinitng and typesetting industy.
                    loaream ipusm is simply dummy text of the prinitng and typesetting industy.
                    loaream ipusm is simply dummy text of the prinitng and typesetting industy.
                </Label>
            </Container>
        </Container>
    }


    const renderAminities = () => {
        const aminities = ["Electricity", "Gas Pipeline", "water", "NBN Ready", "Savage Treat", "CC Cameras", "Parking", "Rain water Harves", "Fencing"]
        return <Container>
            <Label labelSize={15} style={{ fontFamily: medium }} mpLabel={{ mt: 20 }} >Amenities</Label>
            <FlatList
                data={aminities}
                style={{ marginHorizontal: -20, marginTop: -5 }}
                contentContainerStyle={{ marginLeft: 10, paddingBottom: 1 }}
                numColumns={3}
                listKey={"aminities"}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return <Container
                        containerStyle={{
                            width: screenWidth / 3.5,
                            height: screenWidth / 3.5,
                            backgroundColor: "#f2f2f2",
                            borderRadius: 5,
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: 10,
                            marginTop: 10,
                            elevation: 1
                        }}
                    >
                        <Img
                            imgStyle={{
                                width: "40%",
                                height: "40%",
                                // resizeMode:"contain"
                            }}
                            imgSrc={AppImages.CommercialImage}
                        />
                        <Label
                            mpLabel={{ mt: 10, mh: 10 }}
                            labelSize={12}
                            // numberOfLines={2}
                            style={{ color: "black", textAlign: "center" }}
                        >{item}</Label>
                    </Container>
                }}
            />
        </Container>
    }

    const renderDetails = () => {
        return <Container>
            <Label labelSize={18} style={{ fontFamily: medium }} mpLabel={{ mb: 10 }}  >Block Details</Label>
            <FlatList
                data={PropertyDetailsArray}
                scrollEnabled={false}
                listKey={"PropertyDetailsArray"}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{
                            flexDirection: "row",
                            // justifyContent:"space-between",
                            height: 40,
                            // borderBottomWidth: 1,
                            alignItems: "center"
                        }} >
                            <Label labelSize={16} style={{ color: "black", fontFamily: medium, width: "40%" }} >{item.title}</Label>
                            <Label
                                labelSize={16}
                                style={{ color: "black", maxWidth: "90%" }}>{item.name}</Label>
                        </View>
                    )
                }}
            />
        </Container>
    }
    const renderServicesData: ListRenderItem<string> = ({ item, index }) => {
        return <Container
            containerStyle={{
                width: screenWidth * 0.44,
                height: 40,
                backgroundColor: "#f2f2f2",
                borderRadius: 5,
                alignItems: "center",
                marginLeft: 10,
                marginTop: 10,
                elevation: 1,
                flexDirection: "row",
            }}
            mpContainer={{ pl: 10 }}
        >
            <Img

                width={25} height={25}
                imgSrc={AppImages.FarmImage}
            />
            <Label
                mpLabel={{ mh: 10 }}
                labelSize={12}
                // numberOfLines={2}
                style={{ color: "black", textAlign: "center" }}
            >{item}</Label>
        </Container>
    }
    const renderNearestServices = () => {
        return <Container>
            <Label labelSize={18} style={{ fontFamily: medium }} mpLabel={{ mt: 20 }} >Nearest Location Services</Label>
            <Label labelSize={15} style={{ fontFamily: medium }} mpLabel={{ mt: 10 }} >Educational</Label>
            <FlatList
                data={["Primary School", "Secondary School", "Day care", "University", "Collage", "CAFE"]}
                style={{ marginHorizontal: -20, marginTop: -5 }}
                contentContainerStyle={{ marginLeft: 10, paddingBottom: 1 }}
                listKey={"5"}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                renderItem={renderServicesData}
            />
            <Label labelSize={15} style={{ fontFamily: medium }} mpLabel={{ mt: 10 }} >Transportation</Label>
            <FlatList
                data={["Bus", "Tram", "Train", "Airport"]}
                style={{ marginHorizontal: -20, marginTop: -5 }}
                contentContainerStyle={{ marginLeft: 10, paddingBottom: 1 }}
                listKey={"5"}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                renderItem={renderServicesData}
            />
            <Label labelSize={15} style={{ fontFamily: medium }} mpLabel={{ mt: 10 }} >Emergency</Label>
            <FlatList
                data={["Hospital", "Fire Station", "Police Station", "Pramedics"]}
                style={{ marginHorizontal: -20, marginTop: -5 }}
                contentContainerStyle={{ marginLeft: 10, paddingBottom: 1 }}
                listKey={"5"}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                renderItem={renderServicesData}
            />
            <Label labelSize={15} style={{ fontFamily: medium }} mpLabel={{ mt: 10 }} >Recreation</Label>
            <FlatList
                data={["Community Hall", "Library", "Church", "Park", "Children play area"]}
                style={{ marginHorizontal: -20, marginTop: -5 }}
                contentContainerStyle={{ marginLeft: 10, paddingBottom: 1 }}
                listKey={"6"}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                renderItem={renderServicesData}
            />
        </Container>
    }

    const renderCouncilrates = () => {
        return <Container>
            <Label labelSize={18} style={{ fontFamily: medium }} mpLabel={{ mt: 20 }} >Council Rates.</Label>
            <Label labelSize={15} mpLabel={{ mt: 5 }} >$1200 for waste collection</Label>
            <Label labelSize={15} >$399  per year maribyrnong</Label>
        </Container>
    }

    const renderDownloadFiles = () => {
        const DownloadFiles = ["Stage Plan", "Price Guide", "Master Plan", "Developer Broucher"]
        return <Container>
            <Label labelSize={15} style={{ fontFamily: medium }} mpLabel={{ mt: 20 }} >Download files</Label>
            <FlatList
                data={DownloadFiles}
                style={{ marginHorizontal: -20, marginTop: -5 }}
                contentContainerStyle={{ marginLeft: 10, paddingBottom: 1 }}
                numColumns={3}
                listKey={"4"}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return <Container>
                        <Container
                            containerStyle={{
                                width: screenWidth / 3.5,
                                height: screenWidth * 0.35,
                                backgroundColor: "#f2f2f2",
                                borderRadius: 5,
                                justifyContent: "center",
                                alignItems: "center",
                                marginLeft: 10,
                                marginTop: 10,
                                elevation: 1
                            }}
                        >
                            <AntDesign
                                name="pdffile1"
                                size={65}
                                color="red"
                            />
                            <Label
                                mpLabel={{ mt: 10, mh: 10 }}
                                labelSize={12}
                                // numberOfLines={2}
                                style={{ color: "black", textAlign: "center" }}
                            >{item}</Label>
                        </Container>
                        <Btn
                            title="Download"
                            labelSize={12}
                            labelStyle={{

                            }}
                            btnStyle={{
                                backgroundColor: "#69bf5e",
                                width: screenWidth / 3.5,
                                borderRadius: 5,
                                justifyContent: "center",
                                alignItems: "center",
                                marginLeft: 10,
                                marginTop: 10,
                                elevation: 1
                            }}
                            mpLabel={{ pt: 2 }}
                            btnHeight={30}
                            onPress={() => { }}
                        />
                    </Container>
                }}
            />
        </Container>
    }

    return (
        <MainContainer style={{ backgroundColor: "white" }} >
            <View style={{ height: getStatusBarHeight(), backgroundColor: DarkBlueColor }} />
            <ScrollView
                contentContainerStyle={{ paddingBottom: 100 }}
                scrollEventThrottle={16}
            >
                {renderHeader()}
                <View style={{
                    height: IMAGE_HEIGHT
                }} >
                    <FlatList
                        horizontal
                        listKey={"2"}
                        keyExtractor={(item, index) => index.toString()}
                        data={propertyImages}
                        renderItem={({ item, index }) => {
                            return (
                                <Image
                                    source={{ uri: AppImages.property_image }}
                                    style={{
                                        width: Dimensions.get("window").width,
                                        height: "100%",
                                    }}
                                />
                            )
                        }}
                    />
                </View>
                <Container containerStyle={{
                    flexDirection: "row",
                    alignItems: "center"
                }}
                    mpContainer={{ mt: 10 }}
                >
                    <Container
                        containerStyle={{
                            height: 30,
                            borderRightWidth: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            width: screenWidth * 0.30
                        }}
                    >
                        <Label labelSize={15}  >Resedential</Label>
                    </Container>
                    <Container
                        containerStyle={{
                            height: 30,
                            borderRightWidth: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            width: screenWidth * 0.40
                        }}
                    >
                        <Label labelSize={15} >1500 Sq. Meters</Label>
                    </Container>
                    <Container
                        containerStyle={{
                            height: 30,
                            justifyContent: "center",
                            alignItems: "center",
                            width: screenWidth * 0.30,
                        }}
                    >
                        <Label labelSize={15} style={{
                            color: "green"
                        }} >$28,000</Label>
                    </Container>
                </Container>

                <Container containerStyle={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#f2f2f2"
                }}
                    mpContainer={{ mt: 10, pv: 20, pl: 20 }}
                >
                    <Container
                        containerStyle={{
                            justifyContent: "center",
                            alignItems: "center",
                            width: screenWidth * 0.20
                        }}
                    >
                        <Label labelSize={15}  >Victoria 3050</Label>
                    </Container>
                    <Container
                        containerStyle={{
                            justifyContent: "center",
                            alignItems: "center",
                            width: screenWidth * 0.40
                        }}
                    >
                        <Label labelSize={15} >$200/month</Label>
                    </Container>
                    <Container
                        containerStyle={{
                            height: 30,
                            justifyContent: "center",
                            alignItems: "center",

                        }}
                    >
                        <Label labelSize={15} style={{
                            color: "black"
                        }} >24km away</Label>
                        <Btn
                            title="View on map"
                            labelSize={12}
                            labelStyle={{
                                fontFamily: medium
                            }}
                            mpBtn={{
                                pt: 2, ph: 15, mt: 5
                            }}
                            btnHeight={30}
                            btnStyle={{
                                backgroundColor: OrangeColor,
                                borderRadius: 20
                            }}
                            onPress={() => { }}
                        />
                    </Container>
                </Container>
                {renderPostedBy()}
                {renderDescription()}
                <Container
                    mpContainer={{ ph: 20, pv: 20 }}
                >
                    {renderDetails()}
                    {renderDownloadFiles()}
                    {/* <Container containerStyle={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around"
                    }}
                        mpContainer={{ mh: -10, mt: 10 }}
                    >
                        <Btn
                            btnContainerStyle={{
                                width: "45%",
                                backgroundColor: "#f2f2f2",
                                borderRadius: 2,
                                justifyContent: "center",
                                elevation: 1,
                                borderRadius: 4
                            }}

                            leftIcon={() => {
                                return <Ionicons
                                    name="md-location"
                                    size={25}
                                    color="red"
                                    style={{
                                        marginRight: 10
                                    }}
                                />
                            }}
                            labelSize={14}
                            label="View map"
                            labelStyle={{ color: 'black', fontFamily: medium, marginTop: 5 }}
                        />
                        <Btn
                            btnContainerStyle={{
                                width: "45%",
                                backgroundColor: "#f2f2f2",
                                borderRadius: 2,
                                justifyContent: "center",
                                elevation: 1,
                                borderRadius: 4
                            }}
                            leftIcon={() => {
                                return <FontAwesome
                                    name="location-arrow"
                                    size={25}
                                    color={DarkBlueColor}
                                    style={{
                                        marginRight: 10
                                    }}
                                />
                            }}
                            labelSize={14}
                            label="Direction"
                            labelStyle={{ color: 'black', fontFamily: medium, marginTop: 5 }}
                        />
                    </Container> */}
                    {renderAminities()}
                    {renderNearestServices()}
                    {renderCouncilrates()}
                </Container>
            </ScrollView>
            {/* <View style={{
                backgroundColor: "white",
                justifyContent: "center",
                position: "absolute",
                right: 0, bottom: 0, left: 0
            }} >
                <Container containerStyle={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around"
                }}
                    mpContainer={{ mh: 10, mt: 10 }}
                >
                    <Btn
                        btnContainerStyle={{
                            width: "45%",
                            backgroundColor: DarkBlueColor,
                            borderRadius: 2,
                            justifyContent: "center",
                            elevation: 1,
                            borderRadius: 4
                        }}

                        leftIcon={() => {
                            return <Ionicons
                                name="md-call"
                                size={25}
                                color="white"
                                style={{
                                    marginRight: 10
                                }}
                            />
                        }}
                        labelSize={14}
                        label="Call"
                        labelStyle={{ color: 'white', fontFamily: medium, marginTop: 5 }}
                    />
                    <Btn
                        btnContainerStyle={{
                            width: "45%",
                            backgroundColor: DarkBlueColor,
                            borderRadius: 2,
                            justifyContent: "center",
                            elevation: 1,
                            borderRadius: 4
                        }}

                        leftIcon={() => {
                            return <Ionicons
                                name="md-mail"
                                size={25}
                                color="white"
                                style={{
                                    marginRight: 10
                                }}
                            />
                        }}
                        labelSize={14}
                        label="Email"
                        labelStyle={{ color: 'white', fontFamily: medium, marginTop: 5 }}
                    />
                </Container>
            </View> */}
        </MainContainer>
    )
}
export default PropertyDetailScreen