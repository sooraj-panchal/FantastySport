
import React from 'react';
import { ListRenderItem, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Container from '../../../components/Container';
import InputBox from '../../../components/InputBox';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import { screenWidth } from '../../../types/sizes';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Btn from '../../../components/Btn';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
interface props extends navigationProps {

}

const EditTeamScreen: React.FC<props> = ({
    navigation
}) => {

    React.useLayoutEffect(() => {
        return (
            navigation.setOptions({
                headerRight: () => <Label
                    style={{ color: "white", letterSpacing: 0.5 }}
                    labelSize={18}
                >Save</Label>
            })
        )
    }, [])

    const renderItem: ListRenderItem<{}> = ({ item, index }) => {
        return <Container
            containerStyle={{
                flexDirection: 'row', alignItems: 'center',
                width: screenWidth * 0.21,
                justifyContent: 'center'
            }}
            mpContainer={{ mt: 10, ml: 10 }}
        >
            <Container containerStyle={{
                borderWidth: 1.5, borderColor: 'black',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center'
            }} height={20} width={20} >
                <Container
                    containerStyle={{ backgroundColor: 'black', borderRadius: 30 }}
                    width={10} height={10}
                />
            </Container>
            <Container
                containerStyle={{ backgroundColor: 'green', borderRadius: 30 }}
                width={30} height={30}
                mpContainer={{ ml: 10 }}
            />
        </Container>
    }

    return (
        <MainContainer style={{ backgroundColor: 'white' }} >
            <ScrollView horizontal={true} >
                <ScrollView>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                        if (index == 0) {
                            return <Container
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
                                <Label labelSize={15} style={{ letterSpacing: 0.5, width: 50, textAlign: 'center' }} >Actual</Label>
                                <Label labelSize={15} style={{ letterSpacing: 0.5, width: 95, textAlign: 'center' }} >Accuracy</Label>
                                <Label labelSize={15} style={{ letterSpacing: 0.5, width: 40, textAlign: 'center' }} >{ }</Label>
                            </Container>
                        } else
                            return <>
                                <Container
                                    containerStyle={{ flexDirection: "row", alignItems: "center" }}
                                    mpContainer={{ mh: 15 }}
                                    height={60}
                                >
                                    <Ionicons
                                        name="md-person"
                                        size={45}
                                        color={'grey'}
                                        style={{
                                            width: 70
                                        }}
                                    />
                                    <Container width={130} >
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
                                    <FontAwesome
                                        name="sort"
                                        style={{ marginLeft: 50 }}
                                        size={30}
                                    />
                                </Container>
                                <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} />
                            </>
                    })}
                </ScrollView>
            </ScrollView>
        </MainContainer>
    )
}
export default EditTeamScreen