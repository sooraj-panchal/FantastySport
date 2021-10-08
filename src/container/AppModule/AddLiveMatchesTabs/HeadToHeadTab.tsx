import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Container from '../../../components/Container';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItem, View } from 'react-native';
import HeadToHeadTeam from './HeadToHeadTeam';
import { scheduleItemTypes, scheduleListTypes } from '../../../types/flatListTypes';
import { useDispatch, useSelector } from 'react-redux';
import { getScheduleListWatcher, selectedScheduleList, selecteSchedule, updateWeek } from '../../../store/slices/schedule';
import { RootState } from '../../../types/reduxTypes';
import Label from '../../../components/Label';
import { IWeek } from '../../../utils/jsonArray';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useCreateLeagueMutation } from '../../../features/league';
import { screenWidth } from '../../../types/sizes';
interface props extends navigationProps { }


const HeadToHeadTab: React.FC<props> = ({
    navigation, route
}) => {
    const dispatch = useDispatch()
    const scheduleLoading = useSelector((state: RootState) => state.schedule.loading)
    const scheduleListData: scheduleItemTypes[] = useSelector((state: RootState) => state.schedule.data)
    const currentWeek: number = useSelector((state: RootState) => state.schedule.currentWeek)
    const [scheduleList, setScheduleList] = useState<scheduleItemTypes[]>([])
    const selectedWeek: IWeek[] = useSelector((state: RootState) => state.selectedLeague.selectedWeek)

    useEffect(() => {
        dispatch(getScheduleListWatcher())
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                const isSelectedAnyItem = scheduleListData.some(item => item.isSelected == true)
                return <Label
                    labelSize={18}
                    style={{ color: "white", opacity: isSelectedAnyItem ? 1 : 0.3 }}
                    mpLabel={{ mr: 10 }}
                    onPress={() => {
                        const data = scheduleListData.filter((item, index) => {
                            return item.isSelected == true
                        })
                        dispatch(selectedScheduleList(data))
                        console.log("data", data)
                        navigation.goBack()
                    }}
                >Save</Label>
            }
        })
    }, [scheduleListData])

    // useEffect(() => {
    //     // const newData = setAllSelectedList((prev) => [...scheduleListData, ...prev])
    //     const data = allSelectedList.filter((item, index) => {
    //         return item.isSelected
    //     })
    //     data.sort((a, b) => Number(b.isSelected) - Number(a.isSelected))
    //     console.log("allSelectedList", data)
    // }, [allSelectedList])

    // useEffect(() => {
    //     console.log('scheduleListData', scheduleListData)
    //     // const data = scheduleListData.map((item, index) => {
    //     //     const isSelected = selectedLeagueData.find((i) => i.game_key == item.game_key)?.isSelected
    //     //     return {
    //     //         ...item,
    //     //         isSelected: isSelected || false
    //     //     }
    //     // })
    //     // data.sort((a, b) => Number(b.isSelected) - Number(a.isSelected))
    //     // setScheduleList(data)
    // }, [scheduleListData, selectedLeagueData])


    const renderItem: ListRenderItem<scheduleItemTypes> = ({ item, index }) => {
        return <HeadToHeadTeam
            {...item}
            isSelected={item.isSelected}
            onPress={() => {
                dispatch(selecteSchedule(index))
            }}
        />
    }

    const getItemLayout = React.useCallback((data, index) => ({
        length: 140,
        offset: 140 * index,
        index
    }), [])
    const renderSelectedWeekItem: ListRenderItem<IWeek> = ({ item, index }) => {
        let isCurrentWeek = item.week == currentWeek;
        return <Container
            containerStyle={{
                justifyContent: 'center',
                backgroundColor: isCurrentWeek ? '#f7dfd2' : 'white',
                borderWidth: 1,
                borderColor: "grey",
                borderRadius: 4,
                // width: screenWidth * 0.30,
                flex: 0.32,
                alignItems: "center",
                opacity: isCurrentWeek ? 1 : 0.3
            }}
            height={40}
            mpContainer={{ mt: 10, ml: 15 }}
            onPress={() => {
                // dispatch(updateWeek(item.week))
            }}
        >
            <Label
                labelSize={14}
                style={{
                    letterSpacing: 0.5,
                }}
            >Week {item.week}</Label>
            {
                isCurrentWeek ?
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
    }

    return (
        <MainContainer
            loading={scheduleLoading}
        >
            <View>
                <FlatList
                    data={selectedWeek}
                    renderItem={renderSelectedWeekItem}
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <FlatList
                data={scheduleListData}
                // extraData={selectedLeague}
                renderItem={renderItem}
                keyExtractor={(item, index) => `renderList ${item.game_key}`}
                // contentContainerStyle={{paddingBottom:10}}
                ListFooterComponent={() => <Container mpContainer={{ mb: 10 }} />}
                ItemSeparatorComponent={() => <Container mpContainer={{ mv: 5 }} />}
                showsVerticalScrollIndicator={false}
                getItemLayout={getItemLayout}
                removeClippedSubviews={true} // Unmount components when outside of window 
                initialNumToRender={2} // Reduce initial render amount
                maxToRenderPerBatch={1} // Reduce number in each render batch
                updateCellsBatchingPeriod={100} // Increase time between renders
                windowSize={7}
                style={{ marginTop: 10 }}
            />
        </MainContainer >
    )
}

export default HeadToHeadTab;