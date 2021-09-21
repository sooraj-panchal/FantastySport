import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Container from '../../../components/Container';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItem } from 'react-native';
import HeadToHeadTeam from './HeadToHeadTeam';
import { scheduleListTypes } from '../../../types/flatListTypes';
import { useDispatch, useSelector } from 'react-redux';
import { getScheduleListWatcher } from '../../../store/slices/scheduleSlice';
import { RootState } from '../../../types/reduxTypes';
import Label from '../../../components/Label';
import { selectedLeagueWatcher } from '../../../store/slices/selectedLeagueSlice';
import { IWeek } from '../../../utils/jsonArray';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface props extends navigationProps { }


const HeadToHeadTab: React.FC<props> = ({
    navigation, route
}) => {
    const scheduleLoading = useSelector((state: RootState) => state.schedule.loading)
    const scheduleListData: scheduleListTypes[] = useSelector((state: RootState) => state.schedule.data)
    const selectedLeagueData: scheduleListTypes[] = useSelector((state: RootState) => state.selectedLeague.data)
    const selectedWeek: IWeek[] = useSelector((state: RootState) => state.selectedLeague.selectedWeek)

    const dispatch = useDispatch()
    const [scheduleList, setScheduleList] = useState<scheduleListTypes[]>([])
    const [currentWeek, setCurrentWeek] = useState<string | number>(selectedWeek[0]?.week || 0)
    // const isMounted = useRef(false)

    useEffect(() => {
        console.log('selectedWeek', selectedWeek)
        const data = {
            week: currentWeek
        }
        dispatch(getScheduleListWatcher(data))
    }, [currentWeek])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                const isSelectedAnyItem = scheduleList.some(item => item.isSelected == true)
                return <Label
                    labelSize={18}
                    style={{ color: "white", opacity: isSelectedAnyItem ? 1 : 0.3 }}
                    mpLabel={{ mr: 10 }}
                    onPress={() => {
                        const data = scheduleList.filter((item, index) => {
                            return item.isSelected == true
                        })
                        dispatch(selectedLeagueWatcher(data))
                        console.log("data", data)
                        navigation.goBack()
                    }}
                >Save</Label>
            }
        })
    }, [scheduleList])

    useEffect(() => {
        if (selectedLeagueData.length) {
            const data = scheduleListData.map((item, index) => {
                const isSelected = selectedLeagueData.find((i) => i.game_key == item.game_key)?.isSelected
                return {
                    ...item,
                    isSelected: isSelected || false
                }
            })
            data.sort((a, b) => Number(b.isSelected) - Number(a.isSelected))
            setScheduleList(data)
        } else {
            const data = scheduleListData.map((item, index) => {
                return {
                    ...item,
                    isSelected: false
                }
            })
            setScheduleList(data)
        }
    }, [scheduleListData, selectedLeagueData])

    // console.log("data", data)

    // useEffect(() => {
    //     isMounted.current = true
    //     getData()
    //     return () => {
    //         isMounted.current = false;
    //     };
    // }, [])

    const selectLeague = (index: number) => {
        const array = [...scheduleList];
        array[index]['isSelected'] = !array[index]['isSelected'];
        setScheduleList(array);
    };

    const renderItem: ListRenderItem<scheduleListTypes> = ({ item, index }) => {
        // console.log(item.game_key)
        // const { selectedClients, clientsArray } = this.state;
        return <HeadToHeadTeam
            {...item}
            index={index}
            isSelected={item.isSelected}
            onPress={() => {
                selectLeague(index)
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
                // width:screenWidth*0.15,
                flex: 0.32,
                alignItems: "center",
            }}
            height={40}
            mpContainer={{ mt: 10, ml: 15 }}
            onPress={() => {
                setCurrentWeek(item.week)
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

    const renderListHeader = () => {
        return <FlatList
            data={selectedWeek}
            renderItem={renderSelectedWeekItem}
            numColumns={3}
        />
    }

    return (
        <MainContainer
            loading={scheduleLoading}
        >
            <FlatList
                data={scheduleList}
                // extraData={selectedLeague}
                renderItem={renderItem}
                keyExtractor={(item, index) => `renderList ${item.game_key}`}
                // contentContainerStyle={{paddingBottom:10}}
                ListHeaderComponent={renderListHeader}
                ListFooterComponent={() => <Container mpContainer={{ mb: 10 }} />}
                ItemSeparatorComponent={() => <Container mpContainer={{ mv: 5 }} />}
                showsVerticalScrollIndicator={false}
                getItemLayout={getItemLayout}
                removeClippedSubviews={true} // Unmount components when outside of window 
                initialNumToRender={2} // Reduce initial render amount
                maxToRenderPerBatch={1} // Reduce number in each render batch
                updateCellsBatchingPeriod={100} // Increase time between renders
                windowSize={7}
                ListHeaderComponentStyle={{ marginBottom: 10 }}
            />
        </MainContainer>
    )
}

export default HeadToHeadTab;