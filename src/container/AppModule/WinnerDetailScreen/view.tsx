import React from 'react';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Label from '../../../components/Label';
import { greenColor, OrangeColor, PrimaryColor } from '../../../assets/colors';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ListRenderItem, View } from 'react-native';
import PlayerList from '../../../components/PlayerList';
import { AppImages } from '../../../assets/images/map';
import Img from '../../../components/Img';
const WinnerDetailScreen: React.FC<navigationProps> = ({
    navigation
}) => {

    React.useLayoutEffect(() => {
        return (
            navigation.setOptions({
                headerRight: () => {
                    return <Container
                        containerStyle={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                        mpContainer={{ mt: 5 }}
                    >
                        <Label
                            labelSize={14}
                            textColor='white'
                            mpLabel={{ mr: 10 }}
                        >Accuracy</Label>
                        <Container
                            containerStyle={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: OrangeColor,
                                borderRadius: 35,
                            }}
                            width={35} height={35}
                        >
                            <Label
                                labelSize={12}
                                style={{
                                    color: "white"
                                }}
                            >97%</Label>
                        </Container>
                    </Container>
                },
                headerTitle: "John's...."
            })
        )
    }, [])

    return <MainContainer
        style={{ backgroundColor: 'white' }}
    >
        <ScrollView>
            <Container
                containerStyle={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}
                mpContainer={{ mh: 15, mt: 20, mb: 10 }}
            >
                <Img
                    imgSrc={AppImages.green_logo}
                    width={32} height={35}
                />
                <Container
                >
                    <Label labelSize={16} style={{ fontWeight: "bold", letterSpacing: 0.5 }}  >Adam's Team</Label>
                    <Label labelSize={14} style={{ letterSpacing: 0.5 }} >4-3-3 | - of 1</Label>
                </Container>
                <Container
                    containerStyle={{
                        alignItems: "flex-end"
                    }}
                >
                    <Label labelSize={16} style={{ fontWeight: "bold" }}  >Act 0.00</Label>
                    <Label labelSize={14} style={{ letterSpacing: 0.5, color: OrangeColor }} >Fantasy sniper</Label>
                    <Label labelSize={14} style={{ letterSpacing: 0.5, color: OrangeColor }} >Points Prediction. 0.0</Label>
                    <Label labelSize={14} style={{ letterSpacing: 0.5, color: greenColor }} >Proj. 0.0</Label>
                </Container>
            </Container>
            <View>
                <ScrollView horizontal={true} >
                    <ScrollView>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                            if (index == 0) {
                                return <Container
                                    containerStyle={{
                                        borderBottomWidth: 1,
                                        borderTopWidth: 1,
                                        borderColor: 'lightgrey',
                                        flexDirection: "row",
                                        alignItems: 'center'
                                    }}
                                    mpContainer={{ pv: 10, ph: 15, mt: 10 }}
                                >
                                    <Label labelSize={16} style={{ width: 225 }} >{ }</Label>
                                    <Label labelSize={15} style={{ letterSpacing: 0.5, width: 45, textAlign: 'center' }}  >Proj</Label>
                                    <Label labelSize={15} style={{ letterSpacing: 0.5, width: 75, textAlign: 'center' }} >Pred</Label>
                                    <Label labelSize={15} style={{ letterSpacing: 0.5, width: 50, textAlign: 'center' }} >Actual</Label>
                                    <Label labelSize={15} style={{ letterSpacing: 0.5, width: 85, textAlign: 'center' }} >Accuracy</Label>
                                </Container>
                            } else
                                return <>
                                    <Container
                                        containerStyle={{ flexDirection: "row", alignItems: "center" }}
                                        mpContainer={{ mh: 15 }}
                                        height={60}
                                    >
                                        {/* <Ionicons
                                            name="md-person"
                                            size={40}
                                            color={'grey'}
                                            style={{
                                                marginHorizontal: 10,
                                            }}
                                        /> */}
                                        <Img
                                            imgSrc={AppImages.player_1}
                                            width={50} height={50}
                                            mpImage={{ml:10}}
                                        />
                                        <Container containerStyle={{width:120}} mpContainer={{ml:20}} > 
                                            <Label labelSize={15} style={{ letterSpacing: 0.5, color: "black" }} >P. Mahomes</Label>
                                            <Label labelSize={13} style={{ letterSpacing: 0.5, color: "grey" }} >QB</Label>
                                        </Container>
                                        <Container containerStyle={{ justifyContent: 'center', alignItems: 'flex-end' }} width={60} >
                                            <Label labelSize={14} style={{ letterSpacing: 0.5, color: greenColor }}>36.3</Label>
                                        </Container>
                                        <Container containerStyle={{ justifyContent: 'center', alignItems: 'flex-end' }} width={60} >
                                            <Label labelSize={14} style={{ letterSpacing: 0.5, color: "black" }}>36.3</Label>
                                        </Container>
                                        <Container containerStyle={{ justifyContent: 'center', alignItems: 'flex-end' }} width={60} >
                                            <Label labelSize={14} style={{ letterSpacing: 0.5, color: "black" }}>36.3</Label>
                                        </Container>
                                        <Container containerStyle={{ justifyContent: 'center', alignItems: 'flex-end' }} width={70} >
                                            <Label labelSize={14} style={{ letterSpacing: 0.5, color: "black" }}>80%</Label>
                                        </Container>
                                    </Container>
                                    <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} />
                                </>
                        })}
                    </ScrollView>
                </ScrollView>
            </View>
        </ScrollView>
    </MainContainer>
}
export default WinnerDetailScreen;