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
import Img from '../../../components/Img';
import { AppImages } from '../../../assets/images/map';
import { medium } from '../../../assets/fonts/fonts';
import InputBox from '../../../components/InputBox';
import { screenWidth } from '../../../types/sizes';
const AddPlayerPointScreen: React.FC<navigationProps> = ({
    navigation
}) => {

    React.useLayoutEffect(() => {
        return (
            navigation.setOptions({
                headerRight: () => {
                    return <Btn
                        title="Save"
                        labelSize={18}
                        labelStyle={{
                            color: 'white',
                            fontFamily: medium
                        }}
                        radius={8}
                        mpBtn={{ ph: 10 }}
                        btnStyle={{
                            backgroundColor: PrimaryColor
                        }}
                        onPress={() => {
                            navigation.navigate('MyTeamTab', {
                                screen: 'MyTeam'
                            })
                        }}
                    />
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
        <Container
            containerStyle={{
                borderBottomWidth: 1,
                borderColor: 'lightgrey',
                flexDirection: "row",
                alignItems: 'center'
            }}
            mpContainer={{ pv: 10, ph: 15 }}
        >
            <Label labelSize={16} style={{ width: 225 }} >Offense</Label>
            <Label labelSize={15} style={{ letterSpacing: 0.5, width: 45, textAlign: 'center' }}  >Proj</Label>
            <Label labelSize={15} style={{ letterSpacing: 0.5, width: 75, textAlign: 'center' }} >Pred</Label>
        </Container>
        <ScrollView>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13].map((item, index) => {
                return <>
                    <Container
                        containerStyle={{ flexDirection: "row", alignItems: "center" }}
                        mpContainer={{ mh: 15 }}
                        height={60}
                        key={`teamheader${index.toString()}`}
                    >
                        <Label labelSize={12} style={{ color: OrangeColor }} >QB</Label>
                        <Img
                            imgSrc={AppImages.player_1}
                            width={50} height={50}
                            mpImage={{ mh: 10 }}
                        />
                        <Container>
                            <Label labelSize={14} style={{ letterSpacing: 0.5, color: "black" }} >P. Mahomes</Label>
                            <Label labelSize={12} style={{ letterSpacing: 0.5, color: "grey" }} >Sun 4:25PM v SEA</Label>
                        </Container>
                        <Container containerStyle={{ justifyContent: 'center', alignItems: 'flex-end' }} width={60} >
                            <Label labelSize={12} style={{ letterSpacing: 0.5, color: "green" }}>36.3</Label>
                        </Container>
                        <InputBox
                            placeholder="0.00"
                            containerStyle={{
                                borderWidth: 1,
                                borderColor: "lightgrey",
                                width: screenWidth * 0.15
                            }}
                            inputStyle={{ padding: 0 }}
                            mpContainer={{ pl: 10, ml: 20 }}
                            inputHeight={30}
                        />
                        {/* <Container containerStyle={{ justifyContent: 'center', alignItems: 'flex-end' }} width={60} >
                            <Label labelSize={12} style={{ letterSpacing: 0.5, color: "black" }}>36.3</Label>
                        </Container> */}
                    </Container>
                    <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} />
                </>
            })}
        </ScrollView>
    </MainContainer >
}
export default AddPlayerPointScreen;