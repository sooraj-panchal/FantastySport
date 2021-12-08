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
import { useLeagueListQuery } from '../../features/league';
import { MyLeagueResponse } from '../../types/responseTypes';

interface props {
    closeModal: (league_id: any, week_id: any) => void,
    modalizeRef: React.Ref<Modalize> | any
}


const LeagueListModal: React.FC<props> = ({
    closeModal,
    modalizeRef,
}) => {
    const { data: leagueList, isLoading: loadingForLeague } = useLeagueListQuery(null)

    // console.log('leagueList', leagueList)

    // console.log(openModal)
    const renderItem: ListRenderItem<MyLeagueResponse> = ({ item, index }) => {
        return (
            <Container
                containerStyle={{
                    justifyContent: 'center',
                    backgroundColor: 'white'
                }}
                height={40}
                mpContainer={{ pl: 20 }}
                onPress={() => {
                    closeModal(item.league_id, item.week[0]?.week_id)
                }}
            >
                <Label
                    labelSize={16}
                    style={{
                        letterSpacing: 0.5,
                    }}
                >{item.name}</Label>
                {/* {
                    index == 1 ? */}
                {/* <Container
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
                </Container> */}
                {/* : null */}
                {/* } */}
            </Container>
        )
    }
    return (
        <Portal>
            <Modalize ref={modalizeRef}
                modalStyle={{
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                }}
                childrenStyle={{
                    paddingBottom: 40
                }}
                adjustToContentHeight={true}
                // modalHeight={screenHeight * 0.60}
                withHandle={false}
                flatListProps={{
                    data: leagueList,
                    renderItem: renderItem,
                    keyExtractor: (item, index) => `renderPosition${index.toString()}`,
                    showsVerticalScrollIndicator: false,
                    ListHeaderComponent: () => {
                        return <Container>
                            <Label
                                labelSize={20}
                                mpLabel={{ mh: 20, mv: 10 }}
                            >League List</Label>
                            <Ionicons
                                name='md-close'
                                size={30}
                                style={{
                                    position: 'absolute',
                                    right: 15, top: 10
                                }}
                                onPress={() => {
                                    modalizeRef?.current?.close()
                                }}
                            />
                        </Container>
                    }
                }}
            />
        </Portal>
    )
}

export default LeagueListModal