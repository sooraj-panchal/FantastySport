import React from 'react';
import Container from '../../../components/Container';
import InputBox from '../../../components/InputBox';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Btn from '../../../components/Btn';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { OrangeColor, PrimaryColor } from '../../../assets/colors';
import { ListRenderItem } from 'react-native';
import TeamList from './TeamList';
interface props extends navigationProps {

}
const CreateLeagueScreen: React.FC<props> = ({
    navigation, route
}) => {
    const leagueScope = () => {
        return <>
            <Label
                labelSize={18} style={{}} mpLabel={{ pl: 15, pt: 15 }}
            >League scope</Label>
            <Container
                containerStyle={{
                    flexDirection: "row",
                    alignItems: "center"
                }}
                mpContainer={{ mt: 15 }}
            >
                <Container
                    containerStyle={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                >
                    <Container
                        containerStyle={{
                            borderRadius: 30,
                            borderWidth: 1,
                            borderColor: "black",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        width={20} height={20}
                        mpContainer={{
                            ml: 20
                        }}
                    >
                        <Container
                            containerStyle={{
                                borderRadius: 30,
                                borderWidth: 1,
                                backgroundColor: "black",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                            width={12} height={12}
                        />
                    </Container>
                    <Label
                        labelSize={15}
                        mpLabel={{ ml: 10 }}
                    >Single game</Label>
                </Container>
                <Container
                    containerStyle={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                >
                    <Container
                        containerStyle={{
                            borderRadius: 30,
                            borderWidth: 1,
                            borderColor: "black",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        width={20} height={20}
                        mpContainer={{
                            ml: 20
                        }}
                    >
                        <Container
                            containerStyle={{
                                borderRadius: 30,
                                borderWidth: 1,
                                backgroundColor: "black",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                            width={12} height={12}
                        />
                    </Container>
                    <Label
                        labelSize={15}
                        mpLabel={{ ml: 10 }}
                    >Multiple games</Label>
                </Container>
            </Container>
        </>
    }

    const leagueOption = () => {
        return <>
            <Label
                labelSize={18} style={{}} mpLabel={{ pl: 15, mt: 15 }}
            >League option</Label>
            <Container
                containerStyle={{
                    flexDirection: "row",
                    alignItems: "center"
                }}
                mpContainer={{ mt: 15 }}
            >
                <Container
                    containerStyle={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                >
                    <Container
                        containerStyle={{
                            borderRadius: 30,
                            borderWidth: 1,
                            borderColor: "black",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        width={20} height={20}
                        mpContainer={{
                            ml: 20
                        }}
                    >
                        <Container
                            containerStyle={{
                                borderRadius: 30,
                                borderWidth: 1,
                                backgroundColor: "black",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                            width={12} height={12}
                        />
                    </Container>
                    <Label
                        labelSize={15}
                        mpLabel={{ ml: 10 }}
                    >Private</Label>
                </Container>
                <Container
                    containerStyle={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                >
                    <Container
                        containerStyle={{
                            borderRadius: 30,
                            borderWidth: 1,
                            borderColor: "black",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        width={20} height={20}
                        mpContainer={{
                            ml: 20
                        }}
                    >
                        <Container
                            containerStyle={{
                                borderRadius: 30,
                                borderWidth: 1,
                                backgroundColor: "black",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                            width={12} height={12}
                        />
                    </Container>
                    <Label
                        labelSize={15}
                        mpLabel={{ ml: 10 }}
                    >Public</Label>
                </Container>
            </Container>
        </>
    }

    const leagueName = () => {
        return <>
            <Label
                labelSize={18} style={{}} mpLabel={{ pl: 15, mt: 15 }}
            >League name</Label>
            <InputBox
                placeholder="Type here.."
                mpContainer={{ mh: 15, mt: 10, pl: 10 }}
                textSize={14}
                containerStyle={{ borderColor: "lightgrey" }}
            />
        </>
    }

    const leagueType = () => {
        return <>
            <Label
                labelSize={18} style={{}} mpLabel={{ pl: 15, mt: 15 }}
            >League type</Label>
            <Container
                containerStyle={{
                    flexDirection: "row",
                    alignItems: "center"
                }}
                mpContainer={{ mt: 15 }}
            >
                <Container
                    containerStyle={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                >
                    <Container
                        containerStyle={{
                            borderRadius: 30,
                            borderWidth: 1,
                            borderColor: "black",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        width={20} height={20}
                        mpContainer={{
                            ml: 20
                        }}
                    >
                        <Container
                            containerStyle={{
                                borderRadius: 30,
                                borderWidth: 1,
                                backgroundColor: "black",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                            width={12} height={12}
                        />
                    </Container>
                    <Label
                        labelSize={15}
                        mpLabel={{ ml: 10 }}
                    >Battle league</Label>
                </Container>
                <Container
                    containerStyle={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                >
                    <Container
                        containerStyle={{
                            borderRadius: 30,
                            borderWidth: 1,
                            borderColor: "black",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        width={20} height={20}
                        mpContainer={{
                            ml: 20
                        }}
                    >
                        <Container
                            containerStyle={{
                                borderRadius: 30,
                                borderWidth: 1,
                                backgroundColor: "black",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                            width={12} height={12}
                        />
                    </Container>
                    <Label
                        labelSize={15}
                        mpLabel={{ ml: 10 }}
                    >Head to Head</Label>
                </Container>
            </Container>
        </>
    }
    const participent = () => {
        return <>
            <Label
                labelSize={18} style={{}} mpLabel={{ pl: 15, mt: 15 }}
            >Number of participants</Label>
            <InputBox
                placeholder="Type here.."
                mpContainer={{ mh: 15, mt: 10, pl: 10 }}
                textSize={14}
                containerStyle={{ borderColor: "lightgrey" }}
            />
        </>
    }

    const pointScoring = () => {
        return <>
            <Label
                labelSize={18} style={{}} mpLabel={{ pl: 15, mt: 15 }}
            >Fantasy point scoring system</Label>
            <InputBox
                placeholder="Select.."
                mpContainer={{ mh: 15, mt: 10, pl: 10 }}
                textSize={14}
                containerStyle={{ borderColor: "lightgrey" }}
                editable={false}
                rightIcon={() => <Ionicons name="ios-chevron-down" size={25} style={{ position: "absolute", right: 10 }} />}
            />
        </>
    }

    const ChooseTeam = () => {
        return <>
            <Label
                labelSize={18} style={{ color: "black" }} mpLabel={{ pl: 15, pt: 15 }}
            >Choose your team</Label>
            {addedTeam()}
            <Btn
                title="ADD"
                onPress={() => {
                    navigation.navigate('AddLiveMatches')
                }}
                mpBtn={{ mh: 20, mt: 20 }}
                btnHeight={45}
                radius={5}
                btnStyle={{ backgroundColor: "green" }}
                labelSize={16}
                labelStyle={{ color: "white" }}
            />
            <Btn
                title="CREATE"
                mpBtn={{ mh: 20, mt: 15 }}
                btnHeight={45}
                radius={5}
                btnStyle={{ backgroundColor: OrangeColor }}
                labelSize={16}
                labelStyle={{ color: "white" }}
                onPress={() => {
                    navigation.navigate("MyTeamTab", {
                        screen: "MyTeam"
                    })
                }}
            />
        </>
    }

    const renderAddedTeamItem: ListRenderItem<{}> = ({ item, index }) => {
        return <TeamList />
    }


    const addedTeam = () => {
        return <FlatList
            data={[1, 2]}
            renderItem={renderAddedTeamItem}
            keyExtractor={(item, index) => `renderList ${index.toString()}`}
            // contentContainerStyle={{paddingBottom:10}}
            ListHeaderComponent={() => <Container mpContainer={{ mt: 10 }} />}
            ListFooterComponent={() => <Container mpContainer={{ mb: 10 }} />}
            ItemSeparatorComponent={() => <Container mpContainer={{ mv: 5 }} />}
        />
    }

    return (
        <MainContainer>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }} >
                <Container containerStyle={{
                    width: "90%",
                    backgroundColor: "white",
                    alignSelf: "center",
                    elevation: 2,
                    borderRadius: 5
                }}
                    mpContainer={{ mt: 20, mh: 10, pv: 20 }}
                >
                    {leagueScope()}
                    {leagueOption()}
                    {leagueName()}
                    {leagueType()}
                    {participent()}
                    {pointScoring()}
                    {ChooseTeam()}
                </Container>
            </ScrollView>
        </MainContainer>
    )
}
export default CreateLeagueScreen;