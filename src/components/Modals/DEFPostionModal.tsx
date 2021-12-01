import React, { useEffect } from 'react';
import Container from '../Container';
import Label from '../Label';
import { BlackColor, OrangeColor, PrimaryColor } from '../../assets/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Modalize } from 'react-native-modalize';
import { Alert, FlatList, ListRenderItem } from 'react-native';
import { Portal } from 'react-native-portalize';
import { useNavigation } from '@react-navigation/native';
import { homeNavProps } from '../../types/nav';
import { useDispatch, useSelector } from 'react-redux';
import { LeaguePlayerTypes, PlayerPositionTypes } from '../../types/flatListTypes';
import { getDefPositionList, setDefPlayers } from '../../store/slices/defPosition';
import { RootState } from '../../types/reduxTypes';
import Img from '../Img';
import { medium } from '../../assets/fonts/fonts';
import moment from 'moment';
import { useTime } from '../../utils/timeZone';
import { SvgUri } from 'react-native-svg';
import { addToMyPlayerWatcher } from '../../store/slices/myPlayerList';
import Btn from '../Btn';

interface props {
    closeModal: () => void,
    // selectedPosition: (position: string) => void,
    modalizeRef: React.Ref<Modalize>,

}

const DEFPositionModal: React.FC<props> = ({
    closeModal,
    modalizeRef
}) => {
    const defensePositionList: LeaguePlayerTypes[] = useSelector((state: RootState) => state.defPosition.data)
    const myPlayerListArray: PlayerPositionTypes[] = useSelector((state: RootState) => state.myPlayer.data)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDefPositionList())
    }, [])

    console.log("defensePositionList", defensePositionList)


    const renderItem: ListRenderItem<LeaguePlayerTypes> = ({ item, index }) => {
        const { photoUrl, Name, Position, Accuracy, FantasyPointsDraftKings, isSelected, GameDate, Team, Opponent } = item
        // console.log('item', item)
        let imageType = photoUrl?.split('.').pop() == 'svg';
        return (
            <>
                <Container
                    containerStyle={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                    mpContainer={{ mh: 15 }}
                    height={80}
                    onPress={() => {
                        playerSelectedPosition(item, index)
                    }}
                >
                    <Container height={45} width={50} >
                        {
                            imageType ?
                                <SvgUri
                                    width={45}
                                    height={45}
                                    uri={photoUrl || 'dummy'}
                                />
                                :
                                <Img
                                    imgSrc={{ uri: photoUrl || 'dummy' }}
                                    imgStyle={{}}
                                    width={40} height={45} />
                        }
                    </Container>
                    <Container mpContainer={{ pl: 15 }} >
                        <Label labelSize={14} style={{ color: "black", fontFamily: medium }}  >{Name}</Label>
                        <Container containerStyle={{ flexDirection: "row", alignItems: "center" }} mpContainer={{ mt: 2 }} >
                            <Label labelSize={12} style={{ color: 'grey' }} >{Position}</Label>
                            {Accuracy ? <Label labelSize={13} style={{ color: 'black' }} mpLabel={{ pl: 5 }} >Accuracy {Accuracy} %</Label> : null}
                            <Label labelSize={14} style={{ color: 'black' }} mpLabel={{ pl: 10 }} >Proj. {FantasyPointsDraftKings}pts</Label>
                        </Container>
                        <Label labelSize={14} style={{ color: "grey" }} mpLabel={{ mt: 2 }} >{moment(GameDate).format('ddd')} {useTime(GameDate)} {Team} vs {Opponent}</Label>
                    </Container>
                    {
                        isSelected ?
                            <Container
                                containerStyle={{
                                    borderRadius: 30,
                                    position: 'absolute',
                                    right: 0,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: OrangeColor
                                }}
                                width={30} height={30}
                            // onPress={() => {
                            //     Alert.alert('hello')
                            //     playerSelectedPosition(item, index)
                            // }}
                            >
                                <Ionicons
                                    name="md-checkmark"
                                    size={25}
                                    style={{

                                    }}
                                    color={'white'}
                                />
                            </Container> :
                            <Container
                                containerStyle={{
                                    borderWidth: 2,
                                    borderRadius: 30,
                                    borderColor: OrangeColor,
                                    position: 'absolute',
                                    right: 0,
                                    borderStyle: "dashed",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                                width={30} height={30}
                            >
                                <Ionicons
                                    name="add-sharp"
                                    size={25}
                                    style={{

                                    }}
                                    color={OrangeColor}
                                />
                            </Container>
                    }
                </Container>
                <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} mpContainer={{ mh: 15 }} />
            </>
        )
    }

    const playerSelectedPosition = (item: LeaguePlayerTypes, index: number) => {
        let data = defensePositionList.map((item, placeIndex) => {
            return {
                ...item,
                isSelected: index == placeIndex ? true : false
            }
        })
        dispatch(setDefPlayers(data))
    }

    const addPlayerToTeam = () => {
        const data = defensePositionList.filter((item) => item.isSelected)
        console.log('data', data)
        let newData = myPlayerListArray.filter((item, index) => item.Position != 'DEF')
        dispatch(addToMyPlayerWatcher([...newData, ...data]))
        closeModal()
    }

    // console.log('defensePositionList', defensePositionList)

    return (
        <Portal>
            <Modalize ref={modalizeRef}
                modalStyle={{
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }}
                adjustToContentHeight={true}
                withHandle={false}
                childrenStyle={{
                    // paddingBottom: 50
                }}
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
                        >Pick One Defense </Label>
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
                    data: defensePositionList,
                    // extraData:defensePositionList,
                    renderItem: renderItem,
                    keyExtractor: (item, index) => `renderPosition${index.toString()}`,
                    showsVerticalScrollIndicator: false,
                    ListFooterComponent: () => {
                        const isSelectedAnyItem = defensePositionList.some(item => item.isSelected == true)
                        return <Btn
                            title="Save"
                            btnStyle={{
                                backgroundColor: PrimaryColor,
                                borderRadius: 4,
                                opacity: isSelectedAnyItem ? 1 : 0.5
                            }}
                            btnHeight={40}
                            mpBtn={{ mh: 15, mt: 20, mb: 20 }}
                            onPress={() => {
                                addPlayerToTeam()
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

export default DEFPositionModal