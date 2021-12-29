import React, { useEffect, useState } from 'react';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import MainContainer from '../../../components/MainContainer';
import { AddPlayerProps } from '../../../types/nav';
import Label from '../../../components/Label';
import { PrimaryColor } from '../../../assets/colors';
import { medium } from '../../../assets/fonts/fonts';
import { LeaguePlayerTypes } from '../../../types/flatListTypes';
import PointAddedPlayerList from '../../../components/PointAddedPlayerList';
import { ListRenderItem, FlatList, Alert } from 'react-native';
import { addToMyPlayerWatcher, setMyTeamWatcher } from '../../../store/slices/myPlayerList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../types/reduxTypes';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useUpdateSniperPlusGameMutation } from '../../../features/league';
import { AppStack } from '../../../navigator/navActions';


const AddPlayerPointScreen: React.FC<AddPlayerProps> = ({
    navigation
}) => {
    const myPlayerListArray: LeaguePlayerTypes[] = useSelector((state: RootState) => state.myPlayer.data)
    const isFromEdit: boolean = useSelector((state: RootState) => state.myPlayer.isFromEdit)
    const { leagueDetails } = useSelector((state: RootState) => state.selectedLeague)
    const [updateSniperPlusGame, { data: updateSniperPlus, isLoading, error }] = useUpdateSniperPlusGameMutation()
    const [playerList, setPlayerList] = useState<Array<LeaguePlayerTypes>>([])
    const dispatch = useDispatch()

    console.log('leagueDetails', leagueDetails)

    useEffect(() => {
        setPlayerList(myPlayerListArray)
    }, [])

    const addPlayerToTeam = () => {
        let isPredictionPoints = playerList.every((item, index) => item.PredictionPoints !== "")
        console.log(isPredictionPoints)
        if (isPredictionPoints) {
            const data = playerList.map((item, index) => {
                let B2 = item.PredictionPoints
                let C2 = item.FantasyPointsDraftKings || item.ProjectionPoints
                let sniper;
                if (B2 > C2) {
                    sniper = 0
                } else {
                    sniper = (B2 / C2) * B2
                }
                return {
                    ...item,
                    Accuracy: B2 && C2 ? Math.abs(B2 / C2).toFixed(0) : 0,
                    SniperPoints: sniper.toFixed(2)
                }
            })
            console.log(data)
            dispatch(addToMyPlayerWatcher(data))
            if (isFromEdit) {
                navigation.goBack()
            } else {
                navigation.navigate('CreateMatch')
            }
        } else {
            Alert.alert('Fantasy sniper App', "Please Add All Player's prediction points")
        }
    }

    React.useLayoutEffect(() => {
        return (
            navigation.setOptions({
                headerTitle: leagueDetails?.team_name,
                headerRight: () => {
                    return <Btn
                        title="Save"
                        labelSize={18}
                        labelStyle={{
                            color: 'white',
                            fontFamily: medium
                        }}
                        radius={8}
                        mpBtn={{ ph: 10 }}
                        btnStyle={{
                            backgroundColor: PrimaryColor
                        }}
                        onPress={() => {
                            if (leagueDetails?.scoring_system == 'SNIPER+') {
                                if (leagueDetails?.isFromEdit) {
                                    const isAllPredictionPointsAdded = playerList?.every((item, index) => { return item.PredictionPoints })
                                    if (isAllPredictionPointsAdded) {
                                        const saveLeaguePlayers = playerList.map((item, index) => {
                                            return {
                                                PlayerID: item.PlayerID,
                                                PredictionPoints: item.PredictionPoints,
                                            }
                                        })
                                        let data = new FormData()
                                        data.append('players', JSON.stringify(saveLeaguePlayers))
                                        data.append('team_id', leagueDetails.team_id)
                                        data.append('league_id', leagueDetails.league_id)
                                        console.log('data', JSON.stringify(data))
                                        updateSniperPlusGame(data).unwrap().then(() => {
                                            // navigation.dispatch(AppStack)
                                            navigation.goBack()
                                            dispatch(addToMyPlayerWatcher([]))
                                            dispatch(setMyTeamWatcher([]))
                                        })
                                    } else {
                                        Alert.alert('Fantasy sniper', 'Prediction points cannot be empty.')
                                    }
                                } else {
                                    addPlayerToTeam()
                                }
                            } else {
                                addPlayerToTeam()
                            }
                            // console.log(playerList)
                        }}
                    />
                }
            })
        )
    }, [playerList])

    const renderItem: ListRenderItem<LeaguePlayerTypes> = ({
        item, index
    }) => {
        return <PointAddedPlayerList
            {...item}
            onChangeText={(val) => {
                // const data = [...playerList]
                let data = playerList.map((item, placeIndex) => {
                    return {
                        ...item,
                        PredictionPoints: index == placeIndex ? val : item.PredictionPoints
                    }
                })
                // data[index]['PredictionPoints'] = val
                setPlayerList(data)
            }}
        // Position={item.isWRTPosition ? 'W/R/T' : item.Position}
        />
    }

    return <MainContainer
        style={{ backgroundColor: 'white' }}
        successMessage={updateSniperPlus?.message}
        absoluteModalLoading={isLoading}
    >
        <Container
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
        </Container>
        <KeyboardAwareScrollView
            extraScrollHeight={100}
        >
            <FlatList
                data={playerList}
                renderItem={renderItem}
                keyExtractor={(item) => `${item.PlayerID}`}
                removeClippedSubviews={true}
                keyboardShouldPersistTaps='handled'
            />
        </KeyboardAwareScrollView>
    </MainContainer >
}
export default AddPlayerPointScreen;