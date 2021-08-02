import React from 'react';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { PrimaryColor } from '../../../assets/colors';
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItem } from 'react-native';
import { navigationProps } from '../../../types/nav';
import Btn from '../../../components/Btn';
interface props extends navigationProps {

}
const LeagueScreen: React.FC<props> = ({
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
        return (
            <Container
                containerStyle={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // justifyContent: "space-between",
                    // width:"88%"
                }}
                mpContainer={{ mh: 10, mt: 10 }}
            >
                <Label
                    labelSize={14}
                    style={{
                        // fontWeight: 'bold',
                        width: "42%"
                    }}
                    numberOfLines={1}
                >John's Official team asdas</Label>
                <Container
                    containerStyle={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                    mpContainer={{ ml: 10 }}
                >
                    <Label
                        labelSize={14}
                        style={{
                        }}
                    >3-1-0</Label>
                    <Label
                        labelSize={14}
                        style={{
                        }}
                        mpLabel={{ mh: 35 }}
                    >98%</Label>
                    <Label
                        labelSize={14}
                        style={{
                        }}
                    >102.8</Label>
                </Container>
            </Container>
        )
    }

    return <MainContainer>
        <Container
            containerStyle={{ backgroundColor: 'white', borderRadius: 5, elevation: 2 }}
            mpContainer={{ mh: 20, mt: 10, pv: 10 }}
        // height={150}
        >
            <Container
                containerStyle={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: "space-between"
                }}
                mpContainer={{ mh: 10, mt: 5 }}
                onPress={() => {
                    navigation.navigate('Standing')
                }}
            >
                <Label
                    labelSize={16}
                    style={{
                        fontWeight: 'bold'
                    }}
                >Standings</Label>
                <Container
                    containerStyle={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <Label
                        labelSize={16}
                        style={{
                            fontWeight: 'bold',
                            color: PrimaryColor
                        }}
                        mpLabel={{ mr: 5 }}
                    >View Details</Label>
                    <Ionicons
                        name="ios-chevron-forward"
                        size={18}
                        color={PrimaryColor}
                    />
                </Container>
            </Container>

            <Container
                containerStyle={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // justifyContent: "space-between"
                }}
                mpContainer={{ mh: 10, mt: 15 }}
            >
                <Label
                    labelSize={16}
                    style={{
                        fontWeight: 'bold',
                        width: "45%"
                    }}
                >Team</Label>
                <Container
                    containerStyle={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <Label
                        labelSize={15}
                        style={{
                        }}
                    >W-L-T</Label>
                    <Label
                        labelSize={15}
                        style={{
                        }}
                        mpLabel={{ mh: 20 }}
                    >Accuracy</Label>
                    <Label
                        labelSize={15}
                        style={{
                        }}
                    >PF</Label>
                </Container>
            </Container>
            <Container height={1} containerStyle={{ backgroundColor: 'lightgrey' }} mpContainer={{ mt: 10, mh: 10 }} />
            <FlatList
                data={[1, 2, 3, 4, 5, 6]}
                renderItem={renderItem}

            />
        </Container>
        <Container
            containerStyle={{ backgroundColor: 'white', borderRadius: 10, elevation: 2 }}
            mpContainer={{ mh: 20, mt: 10, pv: 15 }}
            // height={150}
            onPress={() => {
                navigation.navigate('TeamLevel')
            }}
        >
            <Container
                containerStyle={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: "space-between"
                }}
                mpContainer={{ mh: 15 }}
            >
                <Container
                    containerStyle={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Container
                        containerStyle={{
                            backgroundColor: 'red',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 40
                        }}
                        width={40}
                        height={40}
                    >
                        <Ionicons
                            name="ios-trophy"
                            size={20}
                            color="white"
                        />
                    </Container>
                    <Label
                        labelSize={18}
                        style={{
                            fontWeight: 'bold'
                        }}
                        mpLabel={{ ml: 10 }}
                    >Standings</Label>
                </Container>
                <Container
                    containerStyle={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <Label
                        labelSize={16}
                        style={{
                            fontWeight: 'bold',
                            color: PrimaryColor
                        }}
                        mpLabel={{ mr: 5 }}
                    >Team Levels</Label>
                    <Ionicons
                        name="ios-chevron-forward"
                        size={18}
                        color={PrimaryColor}
                    />
                </Container>
            </Container>
        </Container>
    </MainContainer>
}
export default LeagueScreen;