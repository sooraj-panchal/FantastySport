// // import React, { useRef, useState } from 'react';
// // import Btn from '../../../components/Btn';
// // import Container from '../../../components/Container';
// // import MainContainer from '../../../components/MainContainer';
// // import { navigationProps } from '../../../types/nav';
// // import Ionicons from 'react-native-vector-icons/Ionicons'
// // import Label from '../../../components/Label';
// // import { OrangeColor, PrimaryColor } from '../../../assets/colors';
// // import { FlatList } from 'react-native-gesture-handler';
// // import { ListRenderItem } from 'react-native';
// // import InputBox from '../../../components/InputBox';
// // import EditProfileModal from "../../../components/Modals/EditProfileModal";
// // import PlayerList from './PlayerList';
// // import PickPlayerModal from '../../../components/Modals/PickPlayerModal';
// // import { Modalize } from 'react-native-modalize';
// // import SelectPlayerPositionModal from '../../../components/Modals/SelectPlayerPositionModal';
// // import axios, { AxiosError, AxiosResponse } from 'axios';
// // import { api_token } from '../../../services/apiPaths';
// // import { LeaguePlayerTypes, PlayerDetailTypes } from '../../../types/flatListTypes';

// // const AddPlayerScreen: React.FC<navigationProps> = ({
// //     navigation
// // }) => {
// //     const [openModal, setOpenModal] = React.useState(false)
// //     const modalizeRef = useRef<Modalize>(null);
// //     const [playersByTeam, setPlayersByTeam] = React.useState([])
// //     const [playerList, setPlayerList] = React.useState<LeaguePlayerTypes[]>([])
// //     const leagueTeams = ["DAL", "TB"]
// //     const [loading, setLoading] = useState(true)
// //     const [playerByPositionList, setplayerByPositionList] = React.useState<LeaguePlayerTypes[]>([])
// //     React.useLayoutEffect(() => {
// //         return (
// //             navigation.setOptions({
// //                 headerRight: () => {
// //                     return <Label labelSize={16}
// //                         style={{
// //                             color: "white"
// //                         }}
// //                         onPress={() => {
// //                             navigation.navigate('AddPlayerPoint')
// //                         }}
// //                     >ADD</Label>
// //                 }
// //             })
// //         )
// //     }, [])


// //     React.useEffect(() => {
// //         leagueTeams.map((item, index) => {
// //             axios.get<LeaguePlayerTypes>(`https://api.sportsdata.io/v3/nfl/projections/json/PlayerSeasonProjectionStatsByTeam/2021/${item}`, {
// //                 headers: {
// //                     'Accept': 'application/json',
// //                     'Content-Type': 'application/json',
// //                     "Ocp-Apim-Subscription-Key": api_token
// //                 }
// //             })
// //                 .then((response: AxiosResponse) => {
// //                     // setPlayerList((prev) => [...response.data?.slice(0, 10), ...prev])
// //                     getPlayerImage(response.data?.slice(0, 10))
// //                 }).catch((error: AxiosError) => {
// //                     console.log("Errror==>", error)
// //                 })
// //             // setLoading(false)
// //         })
// //     }, [])

// //     const getPlayerImage = (playerList: Array<LeaguePlayerTypes>) => {
// //         axios.get('https://api.sportsdata.io/v3/nfl/scores/json/Players', {
// //             headers: {
// //                 'Accept': 'application/json',
// //                 'Content-Type': 'application/json',
// //                 "Ocp-Apim-Subscription-Key": api_token
// //             }
// //         })
// //             .then((response: AxiosResponse) => {
// //                 // console.log('response==>', response.data)
// //                 let playerDetail: Array<PlayerDetailTypes> = response.data
// //                 let data = playerList.map((item, index) => {
// //                     const TeamData = playerDetail.find((i) => i.PlayerID == item.PlayerID)
// //                     return {
// //                         ...item,
// //                         photoUrl: TeamData?.PhotoUrl
// //                     }
// //                 })
// //                 setPlayerList((prev) => [...data, ...prev])
// //                 setplayerByPositionList((prev) => [...data, ...prev])
// //                 setLoading(false)
// //             }).catch((error: AxiosError) => {
// //                 console.log("Errror==>", error)
// //             })
// //     }

// //     const changedPositionData = (position: string) => {
// //         if (position == "All") {
// //             setPlayerList(playerByPositionList)
// //         } else {
// //             const data = playerByPositionList.filter((item, index) => {
// //                 return item.Position == position
// //             })
// //             setPlayerList(data)
// //         }
// //     }


// //     const renderItem: ListRenderItem<LeaguePlayerTypes> = ({ item, index }) => {
// //         return <PlayerList
// //             onPress={() => {
// //                 // setOpenModal(true)
// //             }}
// //             index={index}
// //             {...item}
// //         />
// //     }
// //     return <MainContainer
// //         style={{ backgroundColor: 'white' }}
// //         modalLoading={loading}
// //     >
// //         <Container containerStyle={{
// //             flexDirection: "row",
// //             alignItems: "center",
// //             justifyContent: "space-between"
// //         }} mpContainer={{ mh: 20, mt: 10 }}>
// //             <InputBox
// //                 placeholder="Search Player"
// //                 mpContainer={{ pl: 10 }}
// //                 containerStyle={{
// //                     width: "60%",
// //                     borderColor: 'lightgrey'
// //                 }}
// //                 radius={30}
// //                 inputHeight={40}
// //                 leftIcon={() => <Ionicons name="ios-search" size={15} color="grey" />}
// //             />
// //             <Btn
// //                 title="Position"
// //                 onPress={() => {
// //                     modalizeRef.current?.open();
// //                 }}
// //                 rightIcon={() => <Ionicons name="ios-chevron-down" size={20} color="white" />}
// //                 btnStyle={{
// //                     backgroundColor: PrimaryColor, width: "35%",
// //                 }}
// //                 radius={30}
// //                 btnHeight={40}
// //                 labelSize={14}
// //                 labelStyle={{ color: 'white' }}
// //                 mpLabel={{ pr: 10 }}
// //             />
// //         </Container>
// //         <Container
// //             mpContainer={{ pv: 10, mh: 15 }}
// //         >
// //             <Label labelSize={16} >Selected by</Label>
// //         </Container>
// //         <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} mpContainer={{ mh: 15 }} />
// //         <FlatList
// //             data={playerList}
// //             renderItem={renderItem}
// //             // keyExtractor={(_, index) => `Player${index.toString()}`}
// //             keyExtractor={(item, index) => item.PlayerID}

// //         />
// //         <PickPlayerModal
// //             openModal={openModal}
// //             closeModal={() => setOpenModal(false)}
// //         />
// //         <SelectPlayerPositionModal
// //             modalizeRef={modalizeRef}
// //             closeModal={() => { modalizeRef.current?.close() }}
// //             selectedPosition={(position) => {
// //                 changedPositionData(position)
// //                 modalizeRef.current?.close()
// //             }}
// //         />
// //     </MainContainer>
// // }
// // export default AddPlayerScreen;






import React, { useEffect, useRef, useState } from 'react';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Label from '../../../components/Label';
import { OrangeColor, PrimaryColor } from '../../../assets/colors';
import { FlatList } from 'react-native-gesture-handler';
import { ActivityIndicator, Alert, ListRenderItem, View } from 'react-native';
import InputBox from '../../../components/InputBox';
import EditProfileModal from "../../../components/Modals/EditProfileModal";
import PlayerList from './PlayerList';
import PickPlayerModal from '../../../components/Modals/PickPlayerModal';
import { Modalize } from 'react-native-modalize';
import SelectPlayerPositionModal from '../../../components/Modals/SelectPlayerPositionModal';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { api_token } from '../../../services/apiPaths';
import { LeaguePlayerTypes, PlayerDetailTypes } from '../../../types/flatListTypes';

const AddPlayerScreen: React.FC<navigationProps> = ({
    navigation
}) => {
    const [openModal, setOpenModal] = React.useState(false)
    const modalizeRef = useRef<Modalize>(null);
    const [playersByTeam, setPlayersByTeam] = React.useState([])
    const [playerList, setPlayerList] = React.useState<LeaguePlayerTypes[]>([])
    const leagueTeams = ["DAL", "TB"]
    const [loading, setLoading] = useState(false)
    const [playerByPositionList, setplayerByPositionList] = React.useState<LeaguePlayerTypes[]>([])
    const [paginLoading, setPaginLoading] = useState(false)
    const [offSet, setOffSet] = React.useState<number>(0)
    const [position, setPosition] = useState('Dummy')
    React.useLayoutEffect(() => {
        return (
            navigation.setOptions({
                headerRight: () => {
                    // const isSelectedAnyItem = playerList.some(item => item.isSelected == true)

                    return <Label labelSize={16}
                        style={{
                            color: "white"
                        }}
                        onPress={() => {
                            navigation.navigate('AddPlayerPoint')
                            // const data = playerList.filter((item, index) => {
                            //     return item.isSelected == true
                            // })
                            // // dispatch(selectedLeagueWatcher(data))
                            // console.log("data", data)
                            // navigation.goBack()
                        }}
                    >ADD</Label>
                }
            })
        )
    }, [playerList])


    React.useEffect(() => getPlayerList(), [])

    const getPlayerList = () => {
        setPaginLoading(true)
        axios.get<LeaguePlayerTypes>(`https://api.sportsdata.io/v3/nfl/stats/json/PlayerGameStatsByTeam/2021REG/1/${leagueTeams[offSet]}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Ocp-Apim-Subscription-Key": api_token
            }
        })
            .then((response: AxiosResponse) => {
                setOffSet(offSet + 1);
                getPlayerImage(response.data?.slice(0, 10))
            }).catch((error: AxiosError) => {
                console.log("Errror==>", error)
            })
    }

    const getPlayerImage = (playerList: Array<LeaguePlayerTypes>) => {
        axios.get('https://api.sportsdata.io/v3/nfl/scores/json/Players', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Ocp-Apim-Subscription-Key": api_token
            }
        })
            .then((response: AxiosResponse) => {
                // console.log('response==>', response.data)
                let playerDetail: Array<PlayerDetailTypes> = response.data
                let data = playerList.map((item, index) => {
                    const TeamData = playerDetail.find((i) => i.PlayerID == item.PlayerID)
                    return {
                        ...item,
                        photoUrl: TeamData?.PhotoUrl
                    }
                })
                setPlayerList((prev) => [...prev, ...data])
                setplayerByPositionList((prev) => [...prev, ...data])
                setLoading(false)
                setPaginLoading(false)
            }).catch((error: AxiosError) => {
                console.log("Errror==>", error)
            })
    }

    useEffect(() => {
        if (position == "All" && offSet == 0 && playerList.length == 0 && playerByPositionList.length == 0) {
            getPlayerList()
        }
    }, [offSet, playerList, playerByPositionList])

    const changedPositionData = (position: string) => {
        if (position == "All") {
            setOffSet(0)
            setPlayerList([])
            setplayerByPositionList([])
            // setPlayerList(playerByPositionList)
        } else {
            const data = playerByPositionList.filter((item, index) => {
                return item.Position == position
            })
            setPlayerList(data)
        }
    }

    let posLength = 1

    // const isAvailabePosition = (length: number) => {
    //     // let length = playerList.filter((item, i) => item.Position == "QB").length
    //     if (item.Position == "QB" && length > ) {
    //         alert('Hello Added')
    //         isAvailabePosition(length + 1)
    //     }
    // }

    // useEffect(() => {
    //     if (playerList.length) {
    //         const data = playerList.map((item, index) => {
    //             let positionLength = playerList.filter((item, index) => item.Position == "QB").length
    //             return item.Position == "QB"
    //         })
    //     }
    // }, [playerList])

    const playerSelectedPosition = (item: LeaguePlayerTypes, index: number, position: string, length: number) => {
        const array = [...playerList];
        if (item.Position == position) {
            let posLength = array.filter((item, index) => item.Position == position && item.isSelected).length
            if (posLength == length && !item.isSelected) {
                Alert.alert('', `You can select up to ${length} ${position}`)
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
            onPress={() => {
                selectPlayerHandler(item, index)
                // setOpenModal(true)
            }}
            {...item}
        />
    }

    const footerComponent = React.useCallback(() => {
        return <View style={{
            height: 100,
            justifyContent: "center",
            alignItems: "center",
        }} >
            <ActivityIndicator
                size="large"
                color="black"
                animating={paginLoading}
            />
        </View>
    }, [paginLoading])

    return <MainContainer
        style={{ backgroundColor: 'white' }}
        modalLoading={loading}
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
            <Btn
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
            // keyExtractor={(_, index) => `Player${index.toString()}`}
            keyExtractor={(item, index) => item.PlayerID}
            maxToRenderPerBatch={8}
            getItemLayout={React.useCallback((data, index) => ({
                length: 80,
                offset: 80 * index,
                index
            }), [])}
            onEndReachedThreshold={0.1}
            onEndReached={() => {
                if (offSet == leagueTeams.length) {
                    return;
                } else {
                    // if (playerList.length >= 10) {
                    // setPaginLoading(true)
                    getPlayerList()
                }
                // }
            }}
            ListFooterComponent={footerComponent}

        />
        <PickPlayerModal
            openModal={openModal}
            closeModal={() => setOpenModal(false)}
        />
        <SelectPlayerPositionModal
            modalizeRef={modalizeRef}
            closeModal={() => { modalizeRef.current?.close() }}
            selectedPosition={(position) => {
                setPosition(position)
                changedPositionData(position)
                modalizeRef.current?.close()
            }}
        />
    </MainContainer>
}
export default AddPlayerScreen;


// import React, { useRef, useState } from 'react';
// import Btn from '../../../components/Btn';
// import Container from '../../../components/Container';
// import MainContainer from '../../../components/MainContainer';
// import { navigationProps } from '../../../types/nav';
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import Label from '../../../components/Label';
// import { OrangeColor, PrimaryColor } from '../../../assets/colors';
// import { FlatList } from 'react-native-gesture-handler';
// import { ListRenderItem } from 'react-native';
// import InputBox from '../../../components/InputBox';
// import EditProfileModal from "../../../components/Modals/EditProfileModal";
// import PlayerList from './PlayerList';
// import PickPlayerModal from '../../../components/Modals/PickPlayerModal';
// import { Modalize } from 'react-native-modalize';
// import SelectPlayerPositionModal from '../../../components/Modals/SelectPlayerPositionModal';
// import axios, { AxiosError, AxiosResponse } from 'axios';
// import { api_token } from '../../../services/apiPaths';
// import { LeaguePlayerTypes, PlayerDetailTypes } from '../../../types/flatListTypes';

// const AddPlayerScreen: React.FC<navigationProps> = ({
//     navigation
// }) => {
//     const [openModal, setOpenModal] = React.useState(false)
//     const modalizeRef = useRef<Modalize>(null);
//     const [playersByTeam, setPlayersByTeam] = React.useState([])
//     const [playerList, setPlayerList] = React.useState<LeaguePlayerTypes[]>([])
//     const leagueTeams = ["DAL", "TB"]
//     const [loading, setLoading] = useState(true)
//     const [playerByPositionList, setplayerByPositionList] = React.useState<LeaguePlayerTypes[]>([])
//     React.useLayoutEffect(() => {
//         return (
//             navigation.setOptions({
//                 headerRight: () => {
//                     return <Label labelSize={16}
//                         style={{
//                             color: "white"
//                         }}
//                         onPress={() => {
//                             navigation.navigate('AddPlayerPoint')
//                         }}
//                     >ADD</Label>
//                 }
//             })
//         )
//     }, [])


//     React.useEffect(() => {
//         leagueTeams.map((item, index) => {
//             axios.get<LeaguePlayerTypes>(`https://api.sportsdata.io/v3/nfl/projections/json/PlayerSeasonProjectionStatsByTeam/2021/${item}`, {
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                     "Ocp-Apim-Subscription-Key": api_token
//                 }
//             })
//                 .then((response: AxiosResponse) => {
//                     // setPlayerList((prev) => [...response.data?.slice(0, 10), ...prev])
//                     getPlayerImage(response.data?.slice(0, 10))
//                 }).catch((error: AxiosError) => {
//                     console.log("Errror==>", error)
//                 })
//             // setLoading(false)
//         })
//     }, [])

//     const getPlayerImage = (playerList: Array<LeaguePlayerTypes>) => {
//         axios.get('https://api.sportsdata.io/v3/nfl/scores/json/Players', {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 "Ocp-Apim-Subscription-Key": api_token
//             }
//         })
//             .then((response: AxiosResponse) => {
//                 // console.log('response==>', response.data)
//                 let playerDetail: Array<PlayerDetailTypes> = response.data
//                 let data = playerList.map((item, index) => {
//                     const TeamData = playerDetail.find((i) => i.PlayerID == item.PlayerID)
//                     return {
//                         ...item,
//                         photoUrl: TeamData?.PhotoUrl
//                     }
//                 })
//                 setPlayerList((prev) => [...data, ...prev])
//                 setplayerByPositionList((prev) => [...data, ...prev])
//                 setLoading(false)
//             }).catch((error: AxiosError) => {
//                 console.log("Errror==>", error)
//             })
//     }

//     const changedPositionData = (position: string) => {
//         if (position == "All") {
//             setPlayerList(playerByPositionList)
//         } else {
//             const data = playerByPositionList.filter((item, index) => {
//                 return item.Position == position
//             })
//             setPlayerList(data)
//         }
//     }


//     const renderItem: ListRenderItem<LeaguePlayerTypes> = ({ item, index }) => {
//         return <PlayerList
//             onPress={() => {
//                 // setOpenModal(true)
//             }}
//             index={index}
//             {...item}
//         />
//     }
//     return <MainContainer
//         style={{ backgroundColor: 'white' }}
//         modalLoading={loading}
//     >
//         <Container containerStyle={{
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between"
//         }} mpContainer={{ mh: 20, mt: 10 }}>
//             <InputBox
//                 placeholder="Search Player"
//                 mpContainer={{ pl: 10 }}
//                 containerStyle={{
//                     width: "60%",
//                     borderColor: 'lightgrey'
//                 }}
//                 radius={30}
//                 inputHeight={40}
//                 leftIcon={() => <Ionicons name="ios-search" size={15} color="grey" />}
//             />
//             <Btn
//                 title="Position"
//                 onPress={() => {
//                     modalizeRef.current?.open();
//                 }}
//                 rightIcon={() => <Ionicons name="ios-chevron-down" size={20} color="white" />}
//                 btnStyle={{
//                     backgroundColor: PrimaryColor, width: "35%",
//                 }}
//                 radius={30}
//                 btnHeight={40}
//                 labelSize={14}
//                 labelStyle={{ color: 'white' }}
//                 mpLabel={{ pr: 10 }}
//             />
//         </Container>
//         <Container
//             mpContainer={{ pv: 10, mh: 15 }}
//         >
//             <Label labelSize={16} >Selected by</Label>
//         </Container>
//         <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} mpContainer={{ mh: 15 }} />
//         <FlatList
//             data={playerList}
//             renderItem={renderItem}
//             // keyExtractor={(_, index) => `Player${index.toString()}`}
//             keyExtractor={(item, index) => item.PlayerID}

//         />
//         <PickPlayerModal
//             openModal={openModal}
//             closeModal={() => setOpenModal(false)}
//         />
//         <SelectPlayerPositionModal
//             modalizeRef={modalizeRef}
//             closeModal={() => { modalizeRef.current?.close() }}
//             selectedPosition={(position) => {
//                 changedPositionData(position)
//                 modalizeRef.current?.close()
//             }}
//         />
//     </MainContainer>
// }
// export default AddPlayerScreen;






// import React, { useRef, useState } from 'react';
// import Btn from '../../../components/Btn';
// import Container from '../../../components/Container';
// import MainContainer from '../../../components/MainContainer';
// import { navigationProps } from '../../../types/nav';
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import Label from '../../../components/Label';
// import { OrangeColor, PrimaryColor } from '../../../assets/colors';
// import { FlatList } from 'react-native-gesture-handler';
// import { ActivityIndicator, ListRenderItem, View } from 'react-native';
// import InputBox from '../../../components/InputBox';
// import EditProfileModal from "../../../components/Modals/EditProfileModal";
// import PlayerList from './PlayerList';
// import PickPlayerModal from '../../../components/Modals/PickPlayerModal';
// import { Modalize } from 'react-native-modalize';
// import SelectPlayerPositionModal from '../../../components/Modals/SelectPlayerPositionModal';
// import axios, { AxiosError, AxiosResponse } from 'axios';
// import { api_token } from '../../../services/apiPaths';
// import { LeaguePlayerTypes, PlayerDetailTypes } from '../../../types/flatListTypes';
// import { useDispatch, useSelector } from 'react-redux';
// import { paginPlayerWatcher, resetData } from '../../../store/slices/leaguePlayerSlice';
// import { RootState } from '../../../types/reduxTypes';

// const AddPlayerScreen: React.FC<navigationProps> = ({
//     navigation
// }) => {
//     const [openModal, setOpenModal] = React.useState(false)
//     const modalizeRef = useRef<Modalize>(null);
//     const [playersByTeam, setPlayersByTeam] = React.useState([])
//     // const [playerList, setPlayerList] = React.useState<LeaguePlayerTypes[]>([])
//     const leagueTeams = ["DAL", "TB"]
//     const [loading, setLoading] = useState(false)
//     const [playerByPositionList, setplayerByPositionList] = React.useState<LeaguePlayerTypes[]>([])
//     const [paginLoading, setPaginLoading] = useState(false)
//     // const [offSet, setOffSet] = React.useState<number>(0)

//     const leagueLoading = useSelector((state: RootState) => state.leaguePlayer.loading)
//     const playerList = useSelector((state: RootState) => state.leaguePlayer.data)
//     const offSet = useSelector((state: RootState) => state.leaguePlayer.offSet)
//     const dispatch = useDispatch()
//     // const isMounted = useRef(false)
//     // let offSet = 0
//     console.log(offSet)
//     React.useEffect(() => {
//         dispatch(paginPlayerWatcher(offSet))
//         return () => {
//             dispatch(resetData())
//         }
//     }, [])

//     React.useLayoutEffect(() => {
//         return (
//             navigation.setOptions({
//                 headerRight: () => {
//                     return <Label labelSize={16}
//                         style={{
//                             color: "white"
//                         }}
//                         onPress={() => {
//                             navigation.navigate('AddPlayerPoint')
//                         }}
//                     >ADD</Label>
//                 }
//             })
//         )
//     }, [])


//     // React.useEffect(() => getPlayerList(), [])

//     const getPlayerList = () => {
//         setPaginLoading(true)
//         axios.get<LeaguePlayerTypes>(`https://api.sportsdata.io/v3/nfl/projections/json/PlayerSeasonProjectionStatsByTeam/2021/${leagueTeams[offSet]}`, {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 "Ocp-Apim-Subscription-Key": api_token
//             }
//         })
//             .then((response: AxiosResponse) => {
//                 // setOffSet(offSet + 1)
//                 setOffSet(offSet + 1);

//                 // setPlayerList((prev) => [...prev, ...response.data?.slice(0, 10)])
//                 // if (offSet) {
//                 // setPlayerList(response.data?.slice(0, 10))
//                 // }
//                 getPlayerImage(response.data?.slice(0, 10))
//             }).catch((error: AxiosError) => {
//                 console.log("Errror==>", error)
//             })
//     }

//     const getPlayerImage = (playerList: Array<LeaguePlayerTypes>) => {
//         axios.get('https://api.sportsdata.io/v3/nfl/scores/json/Players', {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 "Ocp-Apim-Subscription-Key": api_token
//             }
//         })
//             .then((response: AxiosResponse) => {
//                 // console.log('response==>', response.data)
//                 let playerDetail: Array<PlayerDetailTypes> = response.data
//                 let data = playerList.map((item, index) => {
//                     const TeamData = playerDetail.find((i) => i.PlayerID == item.PlayerID)
//                     return {
//                         ...item,
//                         photoUrl: TeamData?.PhotoUrl
//                     }
//                 })
//                 setPlayerList((prev) => [...prev, ...data])
//                 setplayerByPositionList((prev) => [...prev, ...data])
//                 setLoading(false)
//                 setPaginLoading(false)
//             }).catch((error: AxiosError) => {
//                 console.log("Errror==>", error)
//             })
//     }

//     const changedPositionData = (position: string) => {
//         if (position == "All") {
//             setPlayerList(playerByPositionList)
//         } else {
//             const data = playerByPositionList.filter((item, index) => {
//                 return item.Position == position
//             })
//             setPlayerList(data)
//         }
//     }


//     const renderItem: ListRenderItem<LeaguePlayerTypes> = ({ item, index }) => {
//         return <PlayerList
//             onPress={() => {
//                 // setOpenModal(true)
//             }}
//             index={index}
//             {...item}
//         />
//     }

//     const footerComponent = React.useCallback(() => {
//         return <View style={{
//             height: 100,
//             justifyContent: "center",
//             alignItems: "center",
//         }} >
//             <ActivityIndicator
//                 size="large"
//                 color="black"
//                 animating={leagueLoading}
//             />
//         </View>
//     }, [leagueLoading])

//     return <MainContainer
//         style={{ backgroundColor: 'white' }}
//         // modalLoading={leagueLoading}
//     >
//         <Container containerStyle={{
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between"
//         }} mpContainer={{ mh: 20, mt: 10 }}>
//             <InputBox
//                 placeholder="Search Player"
//                 mpContainer={{ pl: 10 }}
//                 containerStyle={{
//                     width: "60%",
//                     borderColor: 'lightgrey'
//                 }}
//                 radius={30}
//                 inputHeight={40}
//                 leftIcon={() => <Ionicons name="ios-search" size={15} color="grey" />}
//             />
//             <Btn
//                 title="Position"
//                 onPress={() => {
//                     modalizeRef.current?.open();
//                 }}
//                 rightIcon={() => <Ionicons name="ios-chevron-down" size={20} color="white" />}
//                 btnStyle={{
//                     backgroundColor: PrimaryColor, width: "35%",
//                 }}
//                 radius={30}
//                 btnHeight={40}
//                 labelSize={14}
//                 labelStyle={{ color: 'white' }}
//                 mpLabel={{ pr: 10 }}
//             />
//         </Container>
//         <Container
//             mpContainer={{ pv: 10, mh: 15 }}
//         >
//             <Label labelSize={16} >Selected by</Label>
//         </Container>
//         <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} mpContainer={{ mh: 15 }} />
//         <FlatList
//             data={playerList}
//             renderItem={renderItem}
//             // keyExtractor={(_, index) => `Player${index.toString()}`}
//             keyExtractor={(item, index) => item.PlayerID}
//             maxToRenderPerBatch={8}
//             getItemLayout={React.useCallback((data, index) => ({
//                 length: 80,
//                 offset: 80 * index,
//                 index
//             }), [])}
//             onEndReachedThreshold={0.1}
//             onEndReached={() => {
//                 // console.log('offSet', offSet)
//                 // if (offSet == leagueTeams.length - 1) {
//                 //     return;
//                 // } else {
//                 if (playerList.length >= 10) {
//                     // setPaginLoading(true)
//                     // getPlayerList()
//                     dispatch(paginPlayerWatcher(offSet + 1))
//                     // setOffSet((prev) => prev + 1)
//                 }
//                 // }
//             }}
//             ListFooterComponent={footerComponent}

//         />
//         <PickPlayerModal
//             openModal={openModal}
//             closeModal={() => setOpenModal(false)}
//         />
//         <SelectPlayerPositionModal
//             modalizeRef={modalizeRef}
//             closeModal={() => { modalizeRef.current?.close() }}
//             selectedPosition={(position) => {
//                 changedPositionData(position)
//                 modalizeRef.current?.close()
//             }}
//         />
//     </MainContainer>
// }
// export default AddPlayerScreen;