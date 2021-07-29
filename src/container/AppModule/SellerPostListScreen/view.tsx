import React from 'react';
import { FlatList, ListRenderItem, ScrollView, View } from 'react-native';
import { SearchFor } from '../../../../dummyArray';
import { medium, semiBold } from '../../../assets/fonts/fonts';
import { AppImages } from '../../../assets/images/map';
import CardView from '../../../components/CardView';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import styles from './styles';
import MainContainer from '../../../components/MainContainer';
import { OrangeColor } from '../../../assets/colors';
import Btn from '../../../components/Btn';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { navigationProps } from '../../../types/nav';


interface props extends navigationProps {

}


const SellerPostListScreen: React.FC<props> = ({
    navigation
}) => {

    const _renderPropertyForYou: ListRenderItem<string | any> = ({ item, index }) => {
        return (
            <Container
                width={160}
                height={210}
                containerStyle={styles.propertyTypeContainer}
                onPress={() => { }}
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
                    <Label labelSize={16} mpLabel={{ pl: 10, pt: 5 }} style={{ fontFamily: semiBold }}  >$ 28,800</Label>
                    <Label labelSize={12} style={{ maxWidth: "95%" }} mpLabel={{ pl: 10 }}
                    // numberOfLines={3} 
                    >4.1 acres Lake lure, North Carollina (Ruther ford Country)</Label>
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
        <MainContainer>
            <ScrollView
                key={1}
                contentContainerStyle={{ paddingBottom: 40 }}
            >
                <Container containerStyle={{
                    backgroundColor: "white",
                    elevation: 1
                }}
                    mpContainer={{ pt: 10, pb: 20, mt: 10 }}
                >
                    <Label
                        labelSize={18}
                        style={{
                            fontFamily: medium
                        }}
                        mpLabel={{ ml: 20 }}
                    >Propery type</Label>
                    <FlatList
                        data={SearchFor}
                        listKey="SearchFor"
                        keyExtractor={(_, index) => index.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <Container mpContainer={{ pl: 20, pt: 10 }}
                                    containerStyle={{
                                        alignItems: "center"
                                    }}
                                >
                                    <Img
                                        imgSrc={{ uri: AppImages.property_image }}
                                        imgStyle={{
                                            borderRadius: 95,
                                        }}
                                        width={95} height={95}
                                    />
                                    <Label
                                        labelSize={14}
                                        mpLabel={{ mt: 15 }}
                                    >{item.name}</Label>
                                </Container>
                            )
                        }}
                    />
                </Container>
                <Container containerStyle={{
                    backgroundColor: "white",
                    elevation: 1
                }}
                    mpContainer={{ pt: 10, pb: 20, mt: 10 }}
                >
                    <Label
                        labelSize={18}
                        style={{
                            fontFamily: medium
                        }}
                        mpLabel={{ ml: 20 }}
                    >Popular Cities</Label>
                    <FlatList
                        data={SearchFor}
                        listKey={"SearchFor2"}
                        keyExtractor={(_, index) => index.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <Container mpContainer={{ pl: 20, pt: 10 }}
                                    containerStyle={{
                                        alignItems: "center"
                                    }}
                                >
                                    <Img
                                        imgSrc={{ uri: AppImages.property_image }}
                                        imgStyle={{
                                            borderRadius: 95,
                                        }}
                                        width={95} height={95}
                                    />
                                    <Label
                                        labelSize={14}
                                        mpLabel={{ mt: 15 }}
                                    >{item.name}</Label>
                                </Container>
                            )
                        }}
                    />
                </Container>
                <Container
                    mpContainer={{ mt: 10, pb: 15 }}
                    containerStyle={{
                        backgroundColor: "white"
                    }}
                >
                    <View style={styles.propertyTypeLabelContainer} >
                        <Label labelSize={20} style={{ fontFamily: medium }}>New Properties</Label>
                        <Label
                            labelSize={20}
                            style={{ fontFamily: medium, color: OrangeColor }}
                            onPress={() => {
                                navigation.navigate("PropertyList")
                            }}
                        >See all</Label>
                    </View>
                    <FlatList
                        listKey={"SearchFor3"}
                        data={SearchFor}
                        showsHorizontalScrollIndicator={false}
                        style={styles.propertyTypeListContainer}
                        renderItem={_renderPropertyForYou}
                        horizontal={true}
                        keyExtractor={(_, index) => index.toString()}
                        ItemSeparatorComponent={() => (<View style={{ marginLeft: 10 }} />)}
                        contentContainerStyle={{ paddingRight: 40 }}
                    />
                </Container>
                <Container
                    mpContainer={{ mt: 10, pb: 15 }}
                    containerStyle={{
                        backgroundColor: "white"
                    }}
                >
                    <View style={styles.propertyTypeLabelContainer} >
                        <Label labelSize={20} style={{ fontFamily: medium }}>Exclusive Properties</Label>
                        <Label
                            labelSize={20}
                            style={{ fontFamily: medium, color: OrangeColor }}
                            onPress={() => {
                                navigation.navigate("PropertyList")
                            }}
                        >See all</Label>
                    </View>
                    <FlatList
                        listKey={"SearchFor4"}
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
            <Container
                containerStyle={{
                    backgroundColor: OrangeColor,
                    borderRadius: 30,
                    position: "absolute",
                    right: 20,
                    bottom: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    elevation: 5,
                    borderWidth: 1.5,
                    borderColor: "white"
                }}
                width={55} height={55}
                onPress={() => {
                    navigation.navigate("ChatDetail",{
                        name:"Seller 1"
                    })
                }}
            >
                <Ionicons
                    name="chatbox-ellipses"
                    size={30}
                    color="white"
                />
            </Container>
        </MainContainer>
    )
}

export default SellerPostListScreen