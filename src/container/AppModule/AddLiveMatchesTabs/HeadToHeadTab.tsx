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

interface props extends navigationProps { }


const HeadToHeadTab: React.FC<props> = ({
    navigation, route
}) => {
    const scheduleLoading = useSelector((state: RootState) => state.schedule.loading)
    const scheduleListData: scheduleListTypes[] = useSelector((state: RootState) => state.schedule.data)
    const selectedLeagueData: scheduleListTypes[] = useSelector((state: RootState) => state.selectedLeague.data)

    const dispatch = useDispatch()
    const [scheduleList, setScheduleList] = useState<scheduleListTypes[]>([])
    // const isMounted = useRef(false)

    useEffect(() => {
        dispatch(getScheduleListWatcher())
    }, [])

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
                ListHeaderComponent={() => <Container mpContainer={{ mt: 10 }} />}
                ListFooterComponent={() => <Container mpContainer={{ mb: 10 }} />}
                ItemSeparatorComponent={() => <Container mpContainer={{ mv: 5 }} />}
                showsVerticalScrollIndicator={false}
                getItemLayout={getItemLayout}
                removeClippedSubviews={true} // Unmount components when outside of window 
                initialNumToRender={2} // Reduce initial render amount
                maxToRenderPerBatch={1} // Reduce number in each render batch
                updateCellsBatchingPeriod={100} // Increase time between renders
                windowSize={7}
            />
        </MainContainer>
    )
}

export default HeadToHeadTab;