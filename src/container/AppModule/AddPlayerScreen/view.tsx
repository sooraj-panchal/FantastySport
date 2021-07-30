import React from 'react';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Label from '../../../components/Label';
import { OrangeColor, PrimaryColor } from '../../../assets/colors';
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItem } from 'react-native';
import InputBox from '../../../components/InputBox';
import EditProfileModal from "../../../components/Modals/EditProfileModal";
import PlayerList from './PlayerList';
import PickPlayerModal from '../../../components/Modals/PickPlayerModal';

const AddPlayerScreen: React.FC<navigationProps> = ({
    navigation
}) => {
    const [openModal, setOpenModal] = React.useState(false)

    React.useLayoutEffect(() => {
        return (
            navigation.setOptions({
                headerRight: () => {
                    return <Label labelSize={16}
                        style={{
                            color: "white"
                        }}
                    >ADD</Label>
                }
            })
        )
    }, [])

    const renderItem: ListRenderItem<{}> = ({ item, index }) => {
        return <PlayerList
            onPress={() => {
                setOpenModal(true)
            }}
        />
    }
    return <MainContainer
        style={{ backgroundColor: 'white' }}
    >
        <Container containerStyle={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        }} mpContainer={{ mh: 20, mt: 10 }}>
            <InputBox
                placeholder="Search Player"
                mpContainer={{ pl: 10 }}
                containerStyle={{
                    width: "60%",
                    borderColor: 'lightgrey'
                }}
                radius={30}
                inputHeight={40}
                leftIcon={() => <Ionicons name="ios-search" size={15} color="grey" />}
            />
            <Btn
                title="Position"
                onPress={() => { }}
                rightIcon={() => <Ionicons name="ios-chevron-down" size={20} color="white" />}
                btnStyle={{
                    backgroundColor: PrimaryColor, width: "35%",
                }}
                radius={30}
                btnHeight={40}
                labelSize={14}
                labelStyle={{ color: 'white' }}
                mpLabel={{ pr: 10 }}
            />
        </Container>
        <Container
            mpContainer={{ pv: 10, mh: 15 }}
        >
            <Label labelSize={16} >Selected by</Label>
        </Container>
        <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} mpContainer={{ mh: 15 }} />
        <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={renderItem}
        />
        <PickPlayerModal
            openModal={openModal}
            closeModal={() => setOpenModal(false)}
        />
    </MainContainer>
}
export default AddPlayerScreen;