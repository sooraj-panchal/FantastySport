import React from 'react';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { OrangeColor, PrimaryColor } from '../../../assets/colors';
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
                        maxWidth: "40%"
                    }}
                    numberOfLines={1}
                >John's Official team asdas</Label>
                <Container
                    containerStyle={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                    mpContainer={{ ml: 20 }}
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
            containerStyle={{ backgroundColor: 'white', borderRadius: 10, elevation: 2 }}
            mpContainer={{ mh: 20, mt: 10, pv: 10 }}
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
                        width: "38%"
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
                        mpLabel={{ mh: 15 }}
                    >Accuracy</Label>
                    <Label
                        labelSize={15}
                        style={{
                        }}
                    >All pts</Label>
                </Container>
            </Container>
            <Container height={1} containerStyle={{ backgroundColor: 'lightgrey' }} mpContainer={{ mt: 10, mh: 10 }} />
            <FlatList
                data={[1, 2, 3, 4, 5, 6]}
                renderItem={renderItem}
                keyExtractor={(item, index) => `league ${index.toString()}`}
            />
        </Container>
    </MainContainer>
}
export default LeagueScreen;