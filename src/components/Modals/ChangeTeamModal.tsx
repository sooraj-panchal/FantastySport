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

interface props {
    closeModal: () => void,
    modalizeRef: React.Ref<Modalize>
}


const ChangeTeamModal: React.FC<props> = ({
    closeModal,
    modalizeRef
}) => {
    // console.log(openModal)
    const renderItem: ListRenderItem<{}> = ({ item, index }) => {
        return (
            <Container
                containerStyle={{
                    justifyContent: 'center',
                    backgroundColor: index == 1 ? '#f7dfd2' : 'white'
                }}
                height={50}
                mpContainer={{ pl: 20 }}
                onPress={closeModal}
            >
                <Label
                    labelSize={16}
                    style={{
                        letterSpacing: 0.5,
                    }}
                >{item}</Label>
                {
                    index == 1 ?
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
                // modalHeight={screenHeight * 0.60}
                withHandle={false}
                flatListProps={{
                    data: ["Frank the tank", "Adam's team", "Mini militia", "Josh's team"],
                    renderItem: renderItem,
                    keyExtractor: (item, index) => `renderPosition${index.toString()}`,
                    showsVerticalScrollIndicator: false,
                }}
            />
        </Portal>
    )
}

export default ChangeTeamModal