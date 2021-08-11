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
import * as Progress from 'react-native-progress';
import { screenWidth } from '../../../types/sizes';
import Img from '../../../components/Img';
import { AppImages } from '../../../assets/images/map';
import { medium } from '../../../assets/fonts/fonts';

const LiveMatchDetailScreen: React.FC<navigationProps> = ({
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
                        mpContainer={{ mr: 15, mt: 5 }}
                    >
                        <Btn
                            title="Invite friends"
                            labelSize={12}
                            labelStyle={{
                                color: 'white'
                            }}
                            radius={8}
                            mpBtn={{ ph: 10, mr: 10 }}
                            btnStyle={{
                                backgroundColor: OrangeColor
                            }}
                            onPress={() => {
                                navigation.navigate('InviteFriend')
                            }}
                        />
                        <Ionicons
                            name="ios-settings"
                            size={22}
                            color='white'
                        />
                    </Container>
                }
            })
        )
    }, [])

    const renderItem: ListRenderItem<{}> = ({ item, index }) => {
        return <>
            <Container
                containerStyle={{ flexDirection: "row", alignItems: "center" }}
                mpContainer={{ mh: 15 }}
                height={55}
            >
                <Label labelSize={16} style={{ letterSpacing: 0.5, color: 'grey' }} >QB</Label>
                <Ionicons
                    name="md-person"
                    size={52}
                    color={'grey'}
                    style={{
                        alignSelf: "flex-end",
                        marginHorizontal: 20,
                        marginTop: 10
                    }}
                />
                <Label labelSize={16} style={{ letterSpacing: 0.5, color: "grey" }} >Empty</Label>
                <Container
                    containerStyle={{
                        borderWidth: 2,
                        borderRadius: 30,
                        borderColor: 'red',
                        position: 'absolute',
                        right: 0,
                        borderStyle: "dashed",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    width={30} height={30}
                >
                    <Ionicons
                        name="add-sharp"
                        size={25}
                        style={{

                        }}
                        color={'red'}
                    />
                </Container>
            </Container>
            <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} mpContainer={{ mh: 15 }} />
        </>
    }

    const renderVS = () => {
        return <Container containerStyle={{ flexDirection: "row", alignItems: "center" }} >
            <Label
                labelSize={18}
                style={{ color: 'red', fontWeight: 'bold' }}
            >V</Label>
            <Container
                containerStyle={{
                    height: 25, width: 2,
                    backgroundColor: 'red',
                    transform: [{
                        rotate: "20deg"
                    }]
                }}
            />
            <Label
                labelSize={18}
                style={{ color: 'red', fontWeight: 'bold', top: 4 }}
            >S</Label>
        </Container>
    }

    const renderTeamFight = () => {
        return (
            <Container>
                <Container containerStyle={{ flexDirection: "row" }} mpContainer={{ mt: 10, ml: 20 }} >
                    <Container
                        containerStyle={{
                            width: "40%",
                            alignItems: "flex-end",
                        }}
                    >
                        <Container
                            containerStyle={{
                                flexDirection: "row",
                                alignItems: "center"
                            }}
                        >
                            <Img
                                imgStyle={{ width: 35, height: 40 }}
                                imgSrc={AppImages.green_logo}
                                mpImage={{ mt: 20 }}
                            />
                            <Container
                                containerStyle={{
                                    alignItems: 'flex-end'
                                }}
                            >
                                <Label
                                    labelSize={16}
                                    style={{ color: "black", left: 10 }}
                                >Joshu's Team</Label>
                                <Label
                                    labelSize={35}
                                    style={{ color: "black", fontWeight: "bold" }}
                                >0.00</Label>
                            </Container>
                        </Container>
                    </Container>
                    <Container
                        mpContainer={{ mt: 30, mh: 20 }}
                    >
                        {renderVS()}
                    </Container>
                    <Container
                        containerStyle={{
                            width: "40%",
                            alignItems: "flex-start"
                        }}
                    >
                        <Label
                            labelSize={16}
                            style={{ color: "black" }}
                        >Adam's Team</Label>
                        <Container
                            containerStyle={{
                                flexDirection: "row",
                                alignItems: "center"
                            }}
                        >
                            <Label
                                labelSize={35}
                                style={{ color: "black" }}
                            >0.00</Label>
                            <Img
                                imgStyle={{ width: 35, height: 40 }}
                                imgSrc={AppImages.green_logo}
                                mpImage={{ ml: 10 }}
                            />
                        </Container>
                    </Container>
                </Container>
                <Container containerStyle={{
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: 'center'
                }}
                    mpContainer={{ mt: 5 }}
                >
                    <Label
                        labelSize={16}
                        style={{ color: greenColor, fontFamily: medium }}
                    >94.3</Label>
                    <Label
                        labelSize={14}
                        style={{ color: OrangeColor, fontFamily: medium, width: 70, textAlign: 'center' }}
                    >S.Pts</Label>
                    <Label
                        labelSize={16}
                        style={{ color: 'grey', fontFamily: medium }}
                    >83.4</Label>
                </Container>
                <Container containerStyle={{
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: 'center'
                }}
                    mpContainer={{ mt: 5 }}
                >
                    <Label
                        labelSize={16}
                        style={{ color: greenColor, fontFamily: medium }}
                    >3</Label>
                    <Label
                        labelSize={14}
                        style={{ color: greenColor, fontFamily: medium, width: 70, textAlign: 'center' }}
                    >Pl.Rem</Label>
                    <Label
                        labelSize={16}
                        style={{ color: 'grey', fontFamily: medium }}
                    >3</Label>
                </Container>
                <Container containerStyle={{
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: 'center'
                }}
                    mpContainer={{ mt: 5 }}
                >
                    <Label
                        labelSize={16}
                        style={{ color: greenColor, fontFamily: medium }}
                    >3</Label>
                    <Label
                        labelSize={14}
                        style={{ color: OrangeColor, fontFamily: medium, width: 70, textAlign: 'center' }}
                    >Rank</Label>
                    <Label
                        labelSize={16}
                        style={{ color: greenColor, fontFamily: medium }}
                    >3</Label>
                </Container>
            </Container>
        )
    }

    const renderChance = () => {
        return <Container>
            <Label
                labelSize={15}
                style={{
                    textAlign: 'center',
                    color: 'lightgrey',
                    fontWeight: 'bold'
                }}
                mpLabel={{ mt: 10 }}
            >Chance of winning</Label>
            <Container
                containerStyle={{
                    flexDirection: 'row',
                    alignItems: "center",
                    alignSelf: 'center'
                }}
                mpContainer={{ mt: 10 }}
            >
                <Container
                    containerStyle={{
                        flexDirection: "row",
                        alignItems: 'center'
                    }}
                >
                    <Label
                        labelSize={16}
                        style={{ color: 'green' }}
                        mpLabel={{ mr: 10 }}
                    >50%</Label>
                    <Progress.Bar
                        progress={0.3} width={screenWidth * 0.32}
                        borderColor={OrangeColor}
                        color={greenColor}
                        borderWidth={0}
                        unfilledColor="lightgrey"
                        height={8}
                    />
                </Container>
                <Container
                    containerStyle={{
                        flexDirection: "row",
                        alignItems: 'center'
                    }}
                    mpContainer={{ ml: 10 }}
                >
                    <Progress.Bar
                        progress={0.3} width={screenWidth * 0.32}
                        borderColor={OrangeColor}
                        color={greenColor}
                        borderWidth={0}
                        unfilledColor="lightgrey"
                        height={8}
                        useNativeDriver={true}
                    />
                    <Label
                        labelSize={16}
                        style={{ color: 'green' }}
                        mpLabel={{ ml: 10 }}
                    >50%</Label>
                </Container>
            </Container>
        </Container>
    }

    return <MainContainer
        style={{ backgroundColor: 'white' }}
    >
        <ScrollView>
            <Container containerStyle={{ flexDirection: "row", alignItems: "center" }}
                mpContainer={{ ml: 15, mt: 15 }}
            >
                <Label labelSize={15}  >Week 1</Label>
                <Ionicons
                    name="ios-chevron-forward"
                    size={20}
                    color="black"
                />
            </Container>
            {renderTeamFight()}
            {renderChance()}
            <Container
                containerStyle={{
                    borderBottomWidth: 1,
                    borderTopWidth: 1,
                    borderColor: 'lightgrey',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                mpContainer={{ pv: 10, ph: 15, mt: 10 }}
            >
                <Label labelSize={16}  >Lineup</Label>
            </Container>
            <View>
                <ScrollView>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                        return <>
                            <Container
                                containerStyle={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                height={75}
                            >
                                <Container
                                    containerStyle={{
                                        flexDirection: "row",
                                        width: "40%",
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Container>
                                        <Label labelSize={12} style={{ letterSpacing: 0.5, color: "black" }} >P. Mahomes</Label>
                                        <Label labelSize={12} style={{ letterSpacing: 0.5, color: 'black' }} mpLabel={{ mv: 5 }} >QB</Label>
                                        <Label labelSize={12} style={{ letterSpacing: 0.5, color: "grey" }} >Sun 4:25 vs Sea</Label>
                                    </Container>
                                    <Container
                                        containerStyle={{ bottom: 4 }}
                                    >
                                        <Label labelSize={18} style={{ letterSpacing: 5, color: 'black' }} >---</Label>
                                        <Label labelSize={15} style={{ letterSpacing: 0.5, color: 'grey' }} >38.3</Label>
                                    </Container>
                                </Container>
                                <Container
                                    containerStyle={{
                                        width: "10%",
                                        justifyContent: 'center',
                                        backgroundColor: '#f2f2f2',
                                        alignItems: 'center'
                                    }}
                                    height={75}
                                    mpContainer={{ mh: 8 }}
                                >
                                    <Label
                                        labelSize={15}
                                        style={{
                                            color: 'red'
                                        }}
                                    >QB</Label>
                                </Container>
                                <Container
                                    containerStyle={{
                                        flexDirection: "row",
                                        justifyContent: 'space-between',
                                        width: "40%"
                                    }}
                                >
                                    <Container
                                        containerStyle={{ bottom: 4 }}
                                    >
                                        <Label labelSize={18} style={{ letterSpacing: 5, color: 'black' }} >---</Label>
                                        <Label labelSize={15} style={{ letterSpacing: 0.5, color: 'grey' }} >38.3</Label>
                                    </Container>
                                    <Container
                                        containerStyle={{
                                            alignItems: 'flex-end'
                                        }}
                                    >
                                        <Label labelSize={12} style={{ letterSpacing: 0.5, color: "black" }} >P. Mahomes</Label>
                                        <Label labelSize={12} style={{ letterSpacing: 0.5, color: 'black' }} mpLabel={{ mv: 5 }} >QB</Label>
                                        <Label labelSize={12} style={{ letterSpacing: 0.5, color: "grey" }} >Sun 4:25 vs Sea</Label>
                                    </Container>
                                </Container>
                            </Container>
                            <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} />
                        </>
                    })}
                </ScrollView>
            </View>
        </ScrollView>
    </MainContainer>
}
export default LiveMatchDetailScreen;