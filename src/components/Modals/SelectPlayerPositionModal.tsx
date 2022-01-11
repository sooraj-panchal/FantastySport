import React from 'react';
import { View } from 'react-native';
import Container from '../Container';
import Label from '../Label';
import Img from '../Img';
import { Formik } from 'formik';
import TextInputComp from '../TextInputComp';
import { BlackColor, DarkBlueColor, LightGrayColor, OrangeColor } from '../../assets/colors';
import Btn from '../Btn';
import { medium, regular } from '../../assets/fonts/fonts';
import { AppImages, AuthImages } from '../../assets/images/map';
import * as yup from 'yup';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import Modal from 'react-native-modal'
import { screenHeight } from '../../utils/styleUtils';
import { navigationProps } from '../../types/nav';
import InputBox from '../InputBox';
import { Modalize } from 'react-native-modalize';
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItem } from 'react-native';
import { Host, Portal } from 'react-native-portalize';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface props {
    closeModal: () => void,
    selectedPosition: (position: string) => void,
    modalizeRef: React.Ref<Modalize>,
    Position: string
}


const SelectPlayerPositionModal: React.FC<props> = ({
    closeModal,
    modalizeRef,
    selectedPosition,
    Position
}) => {
    const [position, setPosition] = React.useState<string>(Position || 'all')
    const { leagueDetails } = useSelector((state: RootState) => state.selectedLeague)
    let playerPosition: any = []
    if (leagueDetails?.scoring_system != 'SNIPER+') {
        playerPosition = ["All", "QB", "WR", "RB", "TE"]
    } else {
        playerPosition = ["All", "QB", "WR", "RB", "TE", "W/R/T", "K"]
    }

    const renderItem: ListRenderItem<any> = ({ item, index }) => {
        return (
            <Container
                containerStyle={{
                    justifyContent: 'center',
                    backgroundColor: item == position ? '#f7dfd2' : 'white'
                }}
                height={50}
                mpContainer={{ pl: 20 }}
                onPress={() => {
                    selectedPosition(item)
                    setPosition(item)
                }}
            >
                <Label
                    labelSize={16}
                    style={{
                        letterSpacing: 0.5,
                    }}
                >{item}</Label>
                {
                    item == position ?
                        <Container
                            containerStyle={{
                                borderRadius: 30,
                                position: 'absolute',
                                right: 20,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: 'black'
                            }}
                            width={25} height={25}
                        // onPress={onPress}
                        >
                            <Ionicons
                                name="md-checkmark"
                                size={20}
                                style={{

                                }}
                                color={'white'}
                            />
                        </Container> : null
                }
            </Container>
        )
    }
    return (
        <Portal>
            <Modalize ref={modalizeRef}
                modalStyle={{
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }}
                adjustToContentHeight={true}
                // modalHeight={screenHeight * 0.40}
                withHandle={false}
                HeaderComponent={() => {
                    return <Container
                        containerStyle={{
                            borderBottomWidth: 1,
                            borderBottomColor: 'lightgrey',
                            justifyContent: 'center',
                        }}
                        height={60}
                        mpContainer={{ pl: 20 }}
                    >
                        <Label
                            labelSize={18}
                            style={{

                            }}
                        >Select Position</Label>
                        <Ionicons
                            name="md-close"
                            size={25}
                            color={BlackColor}
                            onPress={closeModal}
                            style={{ position: 'absolute', right: 15 }}
                        />
                    </Container>
                }}
                flatListProps={{
                    data: playerPosition,
                    renderItem: renderItem,
                    keyExtractor: (item, index) => `renderPosition${index.toString()}`,
                    showsVerticalScrollIndicator: false,
                }}
            />
        </Portal>
    )
}

export default SelectPlayerPositionModal