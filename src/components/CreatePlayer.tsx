import React, { useRef } from 'react';
import Container from './Container';
import Label from './Label';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { screenWidth } from '../types/sizes';
import { useNavigation } from '@react-navigation/native';
import { homeNavProps, unAuthParamList } from '../types/nav';
import { OrangeColor } from '../assets/colors';
import { LeaguePlayerTypes, PlayerPositionTypes } from '../types/flatListTypes';
import Img from './Img';
import moment from 'moment';
import { useTime } from '../utils/timeZone';
import { Modalize } from 'react-native-modalize';
import DEFPositionModal from './Modals/DEFPostionModal';
import { SvgUri } from 'react-native-svg';
import { useDispatch } from 'react-redux';
import { getDefPositionList } from '../store/slices/defPosition';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CreatePlayer: React.FC<PlayerPositionTypes> = ({
    Position,
    photoUrl,
    PlayerID,
    Name,
    FantasyPointsDraftKings,
    GameDate,
    Opponent,
    PredictionPoints,
    SniperPoints
}) => {
    const navigation = useNavigation<homeNavProps>();
    const defModalRef = useRef<Modalize>(null)
    const dispatch = useDispatch()
    const renderEmptyPlayers = () => {
        return <>
            <Container
                containerStyle={{ flexDirection: "row", alignItems: "center", width: '100%' }}
                mpContainer={{ mh: 15 }}
                height={55}
            >
                <Label labelSize={10} style={{ color: 'grey', width: 30 }} >{Position}</Label>
                <Ionicons
                    name="md-person"
                    size={40}
                    color={'grey'}
                    style={{
                        alignSelf: "flex-end",
                        marginHorizontal: 10,
                        marginTop: 10
                    }}
                />
                <Label labelSize={14} style={{ color: "grey" }} >Empty</Label>
                <Container
                    containerStyle={{
                        borderWidth: 2,
                        borderRadius: 30,
                        borderColor: OrangeColor,
                        borderStyle: "dashed",
                        justifyContent: "center",
                        alignItems: "center",
                        marginHorizontal: 20,
                        position: 'absolute',
                        right: 15
                    }}
                    width={30} height={30}
                    onPress={() => {
                        if (Position == 'DEF') {
                            dispatch(getDefPositionList())
                            defModalRef.current?.open()
                        } else {
                            navigation.navigate('AddPlayer', {
                                Position: Position,
                                isWRTPosition: Position == 'W/R/T' ? true : false
                            })
                        }
                    }}
                >
                    <Ionicons
                        name="add-sharp"
                        size={25}
                        style={{

                        }}
                        color={OrangeColor}
                    />
                </Container>
            </Container>
            <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} mpContainer={{ mh: 15 }} />
            <DEFPositionModal
                modalizeRef={defModalRef}
                closeModal={() => {
                    defModalRef.current?.close()
                }}
            />
        </>
    }

    const renderMyPlayers = () => {
        let imageType = photoUrl?.split('.').pop() == 'svg';

        return <>
            <Container
                containerStyle={{ flexDirection: "row", alignItems: "center", width: screenWidth }}
                mpContainer={{ mh: 15 }}
                height={60}
                key={`teamheader${PlayerID}`}
            >
                <Label labelSize={14} style={{ color: OrangeColor, width: screenWidth * 0.1 }} >{Position}</Label>
                {/* <Img
                    imgSrc={{ uri: photoUrl }}
                    width={screenWidth * 0.10} height={40}
                    mpImage={{ mh: 15 }}
                /> */}
                <Container height={40} width={40} mpContainer={{ mh: 5 }} >
                    {
                        imageType ?
                            <SvgUri
                                width={35}
                                height={35}
                                uri={photoUrl || ''}
                            />
                            :
                            <Img
                                imgSrc={{ uri: photoUrl || '' }}
                                width={35} height={40} />
                    }
                </Container>
                <Container containerStyle={{ width: screenWidth * 0.40 }} >
                    <Label labelSize={14} style={{ color: "black" }} numberOfLines={1} >{Name}</Label>
                    <Label labelSize={12} style={{ color: "grey" }} mpLabel={{ mt: 2 }} >{moment(GameDate).format('ddd')} {useTime(GameDate)} v {Opponent}</Label>
                </Container>
                <Container containerStyle={{ width: screenWidth * 0.45 }} >
                    <Label labelSize={12} style={{ color: "green" }} numberOfLines={1} >{FantasyPointsDraftKings}</Label>
                </Container>
                <FontAwesome5
                    name='exchange-alt'
                    size={20}
                    color={OrangeColor}
                    onPress={() => {
                        console.log(Position)
                        if (Position == 'DEF') {
                            // const data = {
                            //     league_week = 
                            // }
                            dispatch(getDefPositionList())
                            defModalRef.current?.open()
                        } else {
                            navigation.navigate('AddPlayer', {
                                Position: Position,
                                isWRTPosition: Position == 'W/R/T' ? true : false
                            })
                        }
                    }}
                    style={{
                        width: 50,
                        position: 'absolute',
                        right: 10
                    }}
                />
                {/* <Label labelSize={10} style={{ color: "red",fontFamily:medium }}>Change</Label> */}
            </Container>
            <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} />
            <DEFPositionModal
                modalizeRef={defModalRef}
                closeModal={() => {
                    defModalRef.current?.close()
                }}
            />
        </>
    }
    if (photoUrl) {
        return renderMyPlayers()
    } else {
        return renderEmptyPlayers()
    }
}
export default CreatePlayer;