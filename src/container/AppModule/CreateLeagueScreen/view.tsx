import React, { useCallback, useEffect, useRef, useState } from 'react';
import Container from '../../../components/Container';
import InputBox from '../../../components/InputBox';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Btn from '../../../components/Btn';
import { greenColor, OrangeColor, PrimaryColor } from '../../../assets/colors';
import { ListRenderItem, FlatList, ScrollView, Alert } from 'react-native';
import TeamList from './TeamList';
import PickerModal from '../../../components/Picker';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../types/reduxTypes';
import { scheduleItemTypes, scheduleListTypes } from '../../../types/flatListTypes';
import WeekModal from '../../../components/Modals/WeekModal';
import { Modalize } from 'react-native-modalize';
import { useCreateLeagueMutation, useLeagueListQuery } from '../../../features/league';
import { AppStack } from '../../../navigator/navActions';
import { removeAllScheduleListWatcher } from '../../../store/slices/schedule';

interface props extends navigationProps {

}


let PointSystemList: Array<string> = ['SNIPER', 'SNIPER+']

const CreateLeagueScreen: React.FC<props> = ({
    navigation, route
}) => {
    const [selectPointSystem, setSelectPointSystem] = React.useState<string>(PointSystemList[0])
    const [leagueName, setLeagueName] = React.useState<string>('')
    const [numOfParticipent, setNumOfParticipent] = React.useState<string>('')
    const [isPrivate, setIsPrivate] = React.useState<boolean>(false)
    const [isSingleWeek, setIsSingleWeek] = useState<boolean>(true)
    const selectedScheduleData: Array<scheduleItemTypes> = useSelector((state: RootState) => state.schedule.selectedScheduleData)
    const selectedWeek: Array<{ week: string }> = useSelector((state: RootState) => state.selectedLeague.selectedWeek)
    const weekModalRef = useRef<Modalize>(null)

    const [createLeague, { isLoading, data, error: leagueCreateError }] = useCreateLeagueMutation<any>()

    const onChangeScope = (value: boolean) => {
        setIsSingleWeek(value)
    }

    const dispatch = useDispatch()
    // useEffect(()=>{
    //     if(data?.success)
    // },[data])


    const createLeagueHandler = () => {
        // console.log('selectedScheduleData',selectedScheduleData[0].start_time)
        if (!selectedScheduleData?.length) {
            Alert.alert("Fantasy sniper", "Please select atleast 1 game.")
        } else if (!leagueName.length) {
            Alert.alert("Fantasy sniper", "League name should not be empty.")
        } else if (parseInt(numOfParticipent) < 5) {
            Alert.alert("Fantasy sniper", "Participent should be minimum 5")
        } else {
            const mySelectedWeek = selectedWeek.map((item, index) => ({ week: item.week }))
            const leagueTeam = selectedScheduleData.map((item, index) => {
                return {
                    team_id: item.homeTeam.team_id,
                    team_key: item.homeTeam.key,
                    team_logo: item.homeTeam.logo,
                    team_name: item.homeTeam.full_name,
                    op_team_id: item.awayTeam.team_id,
                    op_team_key: item.awayTeam.key,
                    op_team_logo: item.awayTeam.logo,
                    op_team_name: item.awayTeam.full_name,
                    start_time: item.start_time,
                }
            })
            // console.log('selectedScheduleData', selectedScheduleData)

            const leagueData = selectedWeek.map((item, index) => {
                return {
                    week: item.week,
                    schedule: index == 0 ? leagueTeam : []
                }
            })

            const formData = new FormData()
            formData.append('week_type', isSingleWeek ? 'singleWeek' : 'multipleWeek')
            formData.append('week', JSON.stringify(mySelectedWeek))
            formData.append('type', isPrivate ? 'private' : 'public')
            formData.append('name', leagueName)
            formData.append('max_participant', numOfParticipent)
            formData.append('scoring_system', selectPointSystem)
            formData.append('week_detail', JSON.stringify(leagueData))
            console.log('body data ', JSON.stringify(formData))
            createLeague(formData).unwrap().then((res) => {
                // if (selectPointSystem == PointSystemList[1]) {
                //     navigation.navigate('ShowPlayer')
                // } else {
                // navigation.navigate(''

                // dispatch(leagueDetailsWatcher({ ...item }))
                // dispatch(addToMyPlayerWatcher([]))
                // dispatch(setMyTeamWatcher([]))
                // navigation.navigate('ShowPlayer'))
                dispatch(removeAllScheduleListWatcher())
                navigation.navigate("MyLeague")
                // }
            })
        }
    }

    console.log('data', data)
    console.log('leagueCreateError', leagueCreateError)

    const leagueScope = () => {
        return <>
            <Label
                labelSize={18} style={{}} mpLabel={{ pl: 15 }}
            >League scope</Label>
            <Container
                containerStyle={{
                    flexDirection: "row",
                    alignItems: "center"
                }}
                mpContainer={{ mt: 15, mb: 10 }}
            >
                <Container
                    containerStyle={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                    onPress={() => onChangeScope(true)}
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
                        {isSingleWeek ?
                            <Container
                                containerStyle={{
                                    borderRadius: 30,
                                    borderWidth: 1,
                                    backgroundColor: "black",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                width={12} height={12}
                            /> : null}
                    </Container>
                    <Label
                        labelSize={15}
                        mpLabel={{ ml: 10 }}
                    >Single Week</Label>
                </Container>
                {/* <Container
                    containerStyle={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                    onPress={() => onChangeScope(false)}

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
                        {!isSingleWeek ?
                            <Container
                                containerStyle={{
                                    borderRadius: 30,
                                    borderWidth: 1,
                                    backgroundColor: "black",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                width={12} height={12}
                            /> : null}
                    </Container>
                    <Label
                        labelSize={15}
                        mpLabel={{ ml: 10 }}
                    >Multi Week</Label>
                </Container> */}
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
                    onPress={() => {
                        setIsPrivate(true)
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
                        {
                            isPrivate ?
                                <Container
                                    containerStyle={{
                                        borderRadius: 30,
                                        borderWidth: 1,
                                        backgroundColor: "black",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                                    width={12} height={12}
                                /> : null
                        }
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
                    onPress={() => {
                        setIsPrivate(false)
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
                        {
                            !isPrivate ?
                                <Container
                                    containerStyle={{
                                        borderRadius: 30,
                                        borderWidth: 1,
                                        backgroundColor: "black",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                                    width={12} height={12}
                                /> : null
                        }
                    </Container>
                    <Label
                        labelSize={15}
                        mpLabel={{ ml: 10 }}
                    >Public</Label>
                </Container>
            </Container>
        </>
    }

    const renderLeagueName = () => {
        return <>
            <Label
                labelSize={18} style={{}} mpLabel={{ pl: 15, mt: 15 }}
            >League name</Label>
            <InputBox
                placeholder="Type here.."
                mpContainer={{ mh: 15, mt: 10, pl: 10 }}
                textSize={14}
                containerStyle={{ borderColor: "lightgrey" }}
                inputHeight={45}
                value={leagueName}
                onChange={(val) => setLeagueName(val.nativeEvent.text)}
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
            >Max Number of participants</Label>
            <InputBox
                placeholder="Type here.."
                mpContainer={{ mh: 15, mt: 10, pl: 10 }}
                textSize={14}
                containerStyle={{ borderColor: "lightgrey" }}
                inputStyle={{ color: 'black' }}
                inputHeight={45}
                // value={'10'}
                value={numOfParticipent}
                onChangeText={(val) => setNumOfParticipent(val)}
                maxLength={2}
                keyboardType='numeric'
            // editable={false}
            />
        </>
    }

    const pointScoring = () => {
        return <>
            <Label
                labelSize={18} style={{}} mpLabel={{ pl: 15, mt: 15 }}
            >Fantasy point scoring system</Label>
            <PickerModal
                data={PointSystemList}
                value={selectPointSystem}
                setValue={(val) => setSelectPointSystem(val)}
                mpContainer={{ mt: 10, mh: 15 }}
                mode="dropdown"
            />
        </>
    }

    const renderAddedTeamItem = (item: scheduleItemTypes, index: number) => {
        return <TeamList {...item}
        />
    }

    const renderFooter = () => {
        return <>
            <Btn
                title="Choose game"
                onPress={() => {
                    if (selectedScheduleData.length) {
                        navigation.navigate('AddBattleLeague')
                    } else {
                        weekModalRef.current?.open()
                    }
                    // navigation.navigate('AddLiveMatches')
                }}
                mpBtn={{ mh: 20, mt: 10 }}
                btnHeight={30}
                radius={5}
                btnStyle={{ backgroundColor: greenColor, width: 120, elevation: 2 }}
                labelSize={14}
                labelStyle={{ color: "white" }}
            />
            {/* {leagueOption()} */}
            {renderLeagueName()}
            {/* {leagueType()} */}
            {participent()}
            {pointScoring()}
            <Btn
                title="CREATE"
                mpBtn={{ mh: 20, mt: 15 }}
                btnHeight={45}
                radius={5}
                btnStyle={{ backgroundColor: OrangeColor }}
                labelSize={16}
                labelStyle={{ color: "white" }}
                onPress={createLeagueHandler}
            />
        </>
    }

    return (
        <MainContainer
            absoluteModalLoading={isLoading}
            successMessage={data?.message}
            errorMessage={leagueCreateError}
        >
            <Container containerStyle={{
                width: "90%",
                backgroundColor: "white",
                alignSelf: "center",
                elevation: 2,
                borderRadius: 10
            }}
                mpContainer={{ mv: 20, mh: 10, pv: 20 }}
            >
                <ScrollView
                    contentContainerStyle={{ paddingBottom: 10 }}
                >
                    {leagueScope()}
                    {
                        selectedScheduleData.map((item, index) => {
                            return renderAddedTeamItem(item, index)
                        })
                    }
                    {/* <FlatList
                        data={selectedLeagueList}
                        renderItem={renderAddedTeamItem}
                        keyExtractor={(item, index) => `renderList ${index.toString()}`}
                        contentContainerStyle={{ paddingBottom: 10 }}
                        ListHeaderComponent={leagueScope}
                        ItemSeparatorComponent={() => <Container mpContainer={{ mv: 5 }} />}
                        ListFooterComponentStyle={{ marginTop: 10 }}
                        showsVerticalScrollIndicator={false}
                    /> */}
                    {renderFooter()}
                </ScrollView>
            </Container>
            {/* </ScrollView> */}
            <WeekModal
                modalizeRef={weekModalRef}
                closeModal={() => {
                    weekModalRef.current?.close()
                }}
                isSingleWeek={isSingleWeek}
            />
        </MainContainer>
    )
}
export default CreateLeagueScreen;