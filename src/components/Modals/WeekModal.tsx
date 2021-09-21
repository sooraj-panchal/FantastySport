import React, { useEffect, useState } from 'react';
import Container from '../Container';
import Label from '../Label';
import { BlackColor, PrimaryColor } from '../../assets/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { screenHeight } from '../../utils/styleUtils';
import { Modalize } from 'react-native-modalize';
import { ListRenderItem } from 'react-native';
import { Portal } from 'react-native-portalize';
import { IWeek, WeekArray } from '../../utils/jsonArray';
import Btn from '../Btn';
import { useNavigation } from '@react-navigation/core';
import { homeNavProps, navigationProps } from '../../types/nav';
import { useDispatch } from 'react-redux';
import { selectedWeekWatcher } from '../../store/slices/selectedLeagueSlice';

interface props {
    closeModal: () => void,
    // selectedPosition: (position: string) => void,
    modalizeRef: React.Ref<Modalize>,
    isSingleWeek?: boolean
}

const WeekModal: React.FC<props> = ({
    closeModal,
    modalizeRef,
    isSingleWeek
}) => {
    const navigation = useNavigation<homeNavProps>()
    const [weekList, setWeekList] = useState<Array<IWeek>>([])
    useEffect(() => {
        setWeekList(WeekArray.map((item, index) => {
            item.isSelected = false
            return item
        }))
    }, [isSingleWeek])

    const dispatch = useDispatch()
    const renderItem: ListRenderItem<IWeek> = ({ item, index }) => {
        return (
            <Container
                containerStyle={{
                    justifyContent: 'center',
                    backgroundColor: item.isSelected ? '#f7dfd2' : 'white',
                    borderWidth: 1,
                    borderColor: "grey",
                    borderRadius: 4,
                    // width:screenWidth*0.15,
                    flex: 0.32,
                    alignItems: "center",
                }}
                height={40}
                mpContainer={{ mt: 10, ml: 15 }}
                onPress={() => {
                    const data = [...weekList]
                    console.log(isSingleWeek)
                    if (isSingleWeek) {
                        data.map((value, placeindex) =>
                            placeindex === index
                                ? (data[placeindex]['isSelected'] =
                                    !data[placeindex]['isSelected'])
                                : (data[placeindex]['isSelected'] = false),
                        );
                        setWeekList(data)
                    } else {
                        data[index]['isSelected'] = !data[index]['isSelected']
                        setWeekList(data)
                    }
                }}
            >
                <Label
                    labelSize={14}
                    style={{
                        letterSpacing: 0.5,
                    }}
                >Week {item.week}</Label>
                {
                    item.isSelected ?
                        <Container
                            containerStyle={{
                                // borderRadius: 30,
                                position: 'absolute',
                                right: 0,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: 'black',
                                top: 0,
                                borderBottomLeftRadius: 10
                            }}
                            width={20} height={20}
                        // onPress={onPress}
                        >
                            <Ionicons
                                name="md-checkmark"
                                size={15}
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
                modalHeight={screenHeight * 0.60}
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
                        >Select multi week</Label>
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
                    data: weekList,
                    renderItem: renderItem,
                    keyExtractor: (item, index) => `renderPosition${index.toString()}`,
                    showsVerticalScrollIndicator: false,
                    numColumns: 3,
                    ListFooterComponent: () => {
                        return <Btn
                            title="Submit"
                            btnStyle={{
                                backgroundColor: PrimaryColor,
                                borderRadius: 4
                            }}
                            btnHeight={40}
                            mpBtn={{ mh: 15, mt: 20 }}
                            onPress={() => {
                                let selectedWeek = weekList.filter((item, index) => item.isSelected)
                                dispatch(selectedWeekWatcher(selectedWeek))
                                closeModal()
                                navigation.navigate('AddLiveMatches')
                            }}
                            textColor="white"
                            labelSize={16}
                        />
                    }
                }}
            />

        </Portal>
    )
}

export default WeekModal