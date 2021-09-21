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
import { addToMyPlayerWatcher } from '../../../store/slices/myPlayerListSlice';
import { useDispatch } from 'react-redux';


const AddPlayerPointScreen: React.FC<AddPlayerProps> = ({
    navigation, route
}) => {
    // const myPlayerListArray: PlayerPositionTypes[] = useSelector((state: RootState) => state.myPlayer.data)
    const [playerList, setPlayerList] = useState<Array<LeaguePlayerTypes>>([])
    const dispatch = useDispatch()
    useEffect(() => {
        const data = route.params?.myPlayerListArray.map((item, index) => {
            item.PredictionPoints = item.PredictionPoints || ''
            return item
        })
        // console.log("data", data)
        setPlayerList(data)
        // if (myPlayerListArray.length) {
        //     console.log(myPlayerListArray)
        //     setPlayerList(myPlayerListArray)
        // }
    }, [])

    const addPlayerToTeam = () => {
        let isPredictionPoints = playerList.every((item, index) => item.PredictionPoints !== "")
        console.log(isPredictionPoints)
        if (isPredictionPoints) {
            const data = playerList.map((item, index) => {
                let B2 = item.PredictionPoints
                let C2 = item.FantasyPointsDraftKings
                return {
                    ...item,
                    Accuracy: Math.abs(B2 / C2).toFixed(0),
                    SniperPoints: ((1 - Math.abs((B2 - C2) / C2)) * C2).toFixed(0)
                }
            })
            dispatch(addToMyPlayerWatcher(data))
            navigation.navigate('MyTeamTab', {
                screen: 'MyTeam'
            })
        } else {
            Alert.alert('Fantasy sniper App', "Please Add All Player's prediction points")
        }
    }

    React.useLayoutEffect(() => {
        return (
            navigation.setOptions({
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
                            addPlayerToTeam()
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
                const data = [...playerList]
                data[index]['PredictionPoints'] = val
                setPlayerList(data)
            }}
        // Position={item.isWRTPosition ? 'W/R/T' : item.Position}
        />
    }

    return <MainContainer
        style={{ backgroundColor: 'white' }}
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
        <FlatList
            data={playerList}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.PlayerID}`}
        />
    </MainContainer >
}
export default AddPlayerPointScreen;