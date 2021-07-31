import React from 'react';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Label from '../../../components/Label';
import { OrangeColor, PrimaryColor } from '../../../assets/colors';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ListRenderItem, View } from 'react-native';
import PlayerList from '../../../components/PlayerList';
const MyTeamScreen: React.FC<navigationProps> = ({
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
                                backgroundColor: "red"
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
            <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} mpContainer={{ mv: 10, mh: 15 }} />
            <Container
                containerStyle={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}
                mpContainer={{ mh: 15 }}
            >
                <Container
                    containerStyle={{
                        backgroundColor: "red",
                        borderRadius: 30
                    }}
                    width={30} height={30}
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
                    <Label labelSize={14} style={{ letterSpacing: 0.5, color: "green" }} >Proj. 0.0</Label>
                </Container>
            </Container>
            <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} mpContainer={{ mv: 10, mh: 15 }} />
            <Btn
                title="Edit Team"
                labelSize={14}
                labelStyle={{
                    color: 'white'
                }}
                radius={8}
                mpBtn={{ mr: 10 }}
                btnStyle={{
                    backgroundColor: PrimaryColor,
                    width: 85,
                    alignSelf: "flex-end"
                }}
                onPress={() => {
                    navigation.navigate('EditTeam')
                    // navigation.navigate('AddPlayer')
                }}
            />
            {/* <Container
            containerStyle={{
                borderBottomWidth: 1,
                borderTopWidth: 1,
                borderColor: 'lightgrey'
            }}
            mpContainer={{ pv: 10, mh: 15, mt: 10 }}
        >
            <Label labelSize={16} >Offense</Label>
        </Container> */}
            {/* <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={renderItem}
        // ItemSeparatorComponent={() => <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} mpContainer={{ mh: 15 }} />}
        /> */}
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
                                    <Label labelSize={16} style={{ width: 225 }} >Offense</Label>
                                    <Label labelSize={15} style={{ letterSpacing: 0.5, width: 45, textAlign: 'center' }}  >Proj</Label>
                                    <Label labelSize={15} style={{ letterSpacing: 0.5, width: 75, textAlign: 'center' }} >Pred</Label>
                                    <Label labelSize={15} style={{ letterSpacing: 0.5, width: 50, textAlign: 'center' }} >Actual</Label>
                                    <Label labelSize={15} style={{ letterSpacing: 0.5, width: 85, textAlign: 'center' }} >Accuracy</Label>
                                    <Label labelSize={15} style={{ letterSpacing: 0.5, width: 80, textAlign: 'center' }} >S.p.pred</Label>
                                </Container>
                            } else if (index == 1) {
                                return <PlayerList />
                            } else
                                return <>
                                    <Container
                                        containerStyle={{ flexDirection: "row", alignItems: "center" }}
                                        mpContainer={{ mh: 15 }}
                                        height={60}
                                    >
                                        <Label labelSize={16} style={{ letterSpacing: 0.5, color: 'red' }} >QB</Label>
                                        <Ionicons
                                            name="md-person"
                                            size={35}
                                            color={'grey'}
                                            style={{
                                                marginHorizontal: 15,
                                            }}
                                        />
                                        <Container>
                                            <Label labelSize={15} style={{ letterSpacing: 0.5, color: "black" }} >P. Mahomes</Label>
                                            <Label labelSize={13} style={{ letterSpacing: 0.5, color: "grey" }} >Sun 4:25PM v SEA</Label>
                                        </Container>
                                        <Container containerStyle={{ justifyContent: 'center', alignItems: 'flex-end' }} width={60} >
                                            <Label labelSize={14} style={{ letterSpacing: 0.5, color: "green" }}>36.3</Label>
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
                                        {
                                            index == 1 ?
                                                <Container containerStyle={{ justifyContent: 'center', alignItems: 'flex-end' }} width={85} >
                                                    <Label labelSize={14} style={{ letterSpacing: 0.5, color: "red" }}>36.3</Label>
                                                </Container>
                                                :
                                                <Btn
                                                    title="ADD"
                                                    btnStyle={{ backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}
                                                    labelStyle={{ color: 'white' }}
                                                    mpBtn={{ ml: 35, ph: 25 }}
                                                    radius={5}
                                                    onPress={() => {
                                                        navigation.navigate('AddSniperPoint')
                                                    }}
                                                />
                                        }
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
export default MyTeamScreen;