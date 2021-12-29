
import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Alert, ListRenderItem, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { OrangeColor, PrimaryColor } from '../../../assets/colors';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import InputBox from '../../../components/InputBox';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import EditProfileModal from "../../../components/Modals/EditProfileModal";
import PickPlayerModal from '../../../components/Modals/PickPlayerModal';
import SelectPlayerPositionModal from '../../../components/Modals/SelectPlayerPositionModal';
import { api_token } from '../../../services/apiPaths';
import { addToMyPlayerWatcher } from '../../../store/slices/myPlayerList';
import { LeaguePlayerTypes, PlayerDetailTypes, PlayerPositionTypes, scheduleListTypes } from '../../../types/flatListTypes';
import { navigationProps, PlayersNav } from '../../../types/nav';
import { RootState } from '../../../types/reduxTypes';
import PlayerList from './PlayerList';

const AddPlayerScreen: React.FC<PlayersNav> = ({
    navigation,
    route
}) => {
    const [openModal, setOpenModal] = React.useState(false)
    const modalizeRef = useRef<Modalize>(null);
    const [playerList, setPlayerList] = React.useState<LeaguePlayerTypes[]>([])
    const [loading, setLoading] = useState(true)
    const [playerByPositionList, setplayerByPositionList] = React.useState<LeaguePlayerTypes[]>([])
    const myPlayerListArray: PlayerPositionTypes[] = useSelector((state: RootState) => state.myPlayer.data)
    const leagueTeamNameList: Array<scheduleListTypes> = useSelector((state: RootState) => state.selectedLeague.leagueTeamNameList)
    const { leagueDetails } = useSelector((state: RootState) => state.selectedLeague)

    console.log("myPlayerListArray",myPlayerListArray)

    const dispatch = useDispatch()
    React.useLayoutEffect(() => {
        return (
            navigation.setOptions({
                headerRight: () => {
                    return <Label labelSize={16}
                        style={{
                            color: "white"
                        }}
                        onPress={() => {
                            addPlayerToTeam()

                        }}
                    >ADD</Label>
                }
            })
        )
    }, [playerList])

    React.useEffect(() => getLeaguePlayers(), [])

    const getLeaguePlayers = () => {
        // console.log('leagueTeamNameList==>', leagueTeamNameList)
        leagueTeamNameList.map(async (item, index) => {
            try {
                // https://api.sportsdata.io/v3/nfl/scores/json/Players/{team}
                const response: AxiosResponse<LeaguePlayerTypes[]> = await axios.get(`https://api.sportsdata.io/v3/nfl/projections/json/PlayerGameProjectionStatsByTeam/2021REG/${leagueDetails?.week[0].week_no}/${item}`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        "Ocp-Apim-Subscription-Key": '881199c7a4104d75876bd87860a231a8'
                    }
                })
                // console.log("players data",response.data)
                let data = await getPlayerImage(response.data?.filter((item)=>item.Activated == 1))
                let myPlayers:LeaguePlayerTypes[] = getMyPlayerList(data)
                // console.log('myPlayers',myPlayers)
                let getDataByFilterPosition = myPlayers.filter((item, index) => {
                    if (route.params.Position == "W/R/T" && !item.isSelected) {
                        return item.Position == "WR" || item.Position == "RB" || item.Position == "TE"
                    } else {
                        return item.Position == route.params.Position
                    }
                }).map((item, index) => {
                    let isWrtPosition = item.Position == "WR" || item.Position == "RB" || item.Position == "TE"
                    if (route.params.Position == "W/R/T" && !item.isSelected && isWrtPosition) {
                        item.Position = 'W/R/T'
                    } else {
                        item.Position = item.Position;
                    }
                    return item
                })
                // console.log('getDataByFilterPosition', getDataByFilterPosition)
                setPlayerList((prev) => [...prev, ...getDataByFilterPosition])
                setplayerByPositionList((prev) => [...prev, ...myPlayers])
                setLoading(false)
            } catch (error) {
                console.log('errror', error)
            }
        })
    }

    // console.log("playerList", playerList)

    const getPlayerImage = async (playerList: Array<LeaguePlayerTypes>) => {
        const response: AxiosResponse<PlayerDetailTypes[]> = await axios.get('https://api.sportsdata.io/v3/nfl/scores/json/Players', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Ocp-Apim-Subscription-Key": api_token
            }
        })
        let data = playerList.map((item, index) => {
            const TeamData = response.data.find((i) => i.PlayerID == item.PlayerID)
            return {
                ...item,
                photoUrl: TeamData?.PhotoUrl,
                Position: item.Position,
                PlayerID: item.PlayerID,
                Team: item.Team,
                Name: item.Name,
                FantasyPointsDraftKings: item.FantasyPointsDraftKings,
                isSelected: item.isSelected,
                GameDate: item.GameDate,
                Opponent: item.Opponent,
                Accuracy: item.Accuracy,
                PredictionPoints: item.PredictionPoints || '',
                SniperPoints: item.SniperPoints || ''
            }
        })
        return data
    }

    const getMyPlayerList = (leaguePlayers: Array<LeaguePlayerTypes>) => {
        if (myPlayerListArray.length) {
            const data = leaguePlayers.map((item, index) => {
                const data = myPlayerListArray.find((i) => i.PlayerID == item.PlayerID)
                // console.log('data',data?.PredictionPoints)
                return {
                    ...item,
                    Position: data?.Position || item.Position,
                    isSelected: data?.isSelected || false,
                    Accuracy: data?.Accuracy || '',
                    PredictionPoints: data?.PredictionPoints || '',
                    ProjectionPoints: item.FantasyPointsDraftKings
                }
            })
            data.sort((a, b) => Number(b.isSelected) - Number(a.isSelected))
            return data;
        } else {
            let data = leaguePlayers;
            return data
        }
    }


    const changedPositionData = (position: string) => {
        if (position == "All") {
            setPlayerList(playerByPositionList)
        } else {
            const data = playerByPositionList.filter((item, index) => {
                if (position == "W/R/T") {
                    return item.Position == 'WR' || item.Position == "RB" || item.Position == "TE"
                } else {
                    return item.Position == position
                }
            })
            setPlayerList(data)
        }
    }

    const addPlayerToTeam = () => {
        const data = playerByPositionList.filter((item) => item.isSelected)
        // console.log(data)
        // console.log(data)
        let newArray: any = [...data]
        myPlayerListArray.forEach((item, index) => {
            if (item.Position == 'DEF') {
                newArray.push(item)
            }
        })
        // console.log('newArray', newArray)
        // console.log('playerByPositionList', playerByPositionList)
        dispatch(addToMyPlayerWatcher(newArray))
        navigation.goBack()
    }

    const playerSelectedPosition = (item: LeaguePlayerTypes, index: number, position: string, length: number) => {
        const array = [...playerList];
        if (item.Position == position) {
            let posLength = array.filter((item, index) => item.Position == position && item.isSelected).length
            if (posLength == length && !item.isSelected) {
                Alert.alert('Fantasy sniper', `You can select up to ${length} ${position}`)
            } else {
                array[index]['isSelected'] = !array[index]['isSelected'];
            }
        }
        setPlayerList(array);
    }

    let newArray = [
        {
            "Position": 'QB',
            "length": 1
        },
        {
            "Position": 'WR',
            "length": 3
        },
        {
            "Position": 'RB',
            "length": 2
        },
        {
            "Position": 'TE',
            "length": 1
        },
        {
            "Position": 'W/R/T',
            "length": 1
        },
        {
            "Position": 'K',
            "length": 1
        },
        {
            "Position": 'DEF',
            "length": 1
        }
    ]

    const selectPlayerHandler = (item: LeaguePlayerTypes, index: number) => {
        newArray.map((i) => {
            playerSelectedPosition(item, index, i.Position, i.length)
        })
    };

    const renderItem: ListRenderItem<LeaguePlayerTypes> = ({ item, index }) => {
        return <PlayerList
            onPress={(): void => {
                selectPlayerHandler(item, index)
                // setOpenModal(true)
            }}
            {...item}
        />
    }


    return <MainContainer
        style={{ backgroundColor: 'white' }}
        loading={loading}
    >
        <Container containerStyle={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        }} mpContainer={{ mh: 20, mt: 10 }}>
            <InputBox
                placeholder="Search Player"
                mpContainer={{ pl: 10 }}
                containerStyle={{
                    width: "60%",
                    borderColor: 'lightgrey'
                }}
                radius={30}
                inputHeight={40}
                leftIcon={() => <Ionicons name="ios-search" size={15} color="grey" />}
            />
            {!route.params.isWRTPosition && <Btn
                title="Position"
                onPress={() => {
                    modalizeRef.current?.open();
                }}
                rightIcon={() => <Ionicons name="ios-chevron-down" size={20} color="white" />}
                btnStyle={{
                    backgroundColor: PrimaryColor, width: "35%",
                }}
                radius={30}
                btnHeight={40}
                labelSize={14}
                labelStyle={{ color: 'white' }}
                mpLabel={{ pr: 10 }}
            />
            }
        </Container>
        <Container
            mpContainer={{ pv: 10, mh: 15 }}
        >
            <Label labelSize={16} >Selected by</Label>
        </Container>
        <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} mpContainer={{ mh: 15 }} />
        <FlatList
            data={playerList}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.PlayerID}
            getItemLayout={React.useCallback((data, index) => ({
                length: 80,
                offset: 80 * index,
                index
            }), [])}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={true} // Unmount components when outside of window 
            initialNumToRender={4} // Reduce initial render amount
            maxToRenderPerBatch={4} // Reduce number in each render batch
            updateCellsBatchingPeriod={100} // Increase time between renders
            windowSize={7}
        />
        <PickPlayerModal
            openModal={openModal}
            closeModal={() => setOpenModal(false)}
        />
        <SelectPlayerPositionModal
            modalizeRef={modalizeRef}
            closeModal={() => { modalizeRef.current?.close() }}
            selectedPosition={(position) => {
                changedPositionData(position)
                modalizeRef.current?.close()
            }}
            Position={route.params.Position}
        />
    </MainContainer>
}
export default AddPlayerScreen;
