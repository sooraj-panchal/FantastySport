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

const MyPlayersList: React.FC<PlayerPositionTypes> = ({
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
    const renderEmptyPlayers = () => {
        return <>
            <Container
                containerStyle={{ flexDirection: "row", alignItems: "center", width: '100%' }}
                mpContainer={{ mh: 20 }}
                height={55}
            >
                <Label labelSize={12} style={{ letterSpacing: 0.5, color: 'grey',width:35 }} >{Position}</Label>
                <Ionicons
                    name="md-person"
                    size={52}
                    color={'grey'}
                    style={{
                        alignSelf: "flex-end",
                        marginHorizontal: 20,
                        marginTop: 10
                    }}
                />
                <Label labelSize={16} style={{ letterSpacing: 0.5, color: "grey" }} >Empty</Label>
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
                        right: screenWidth * 0.30
                    }}
                    width={30} height={30}
                    onPress={() => {
                        if (Position == 'DEF') {
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
                <Label labelSize={14} style={{ letterSpacing: 0.5, color: OrangeColor, width: screenWidth * 0.08 }} >{Position}</Label>
                {/* <Img
                    imgSrc={{ uri: photoUrl }}
                    width={screenWidth * 0.10} height={40}
                    mpImage={{ mh: 15 }}
                /> */}
                <Container height={45} width={45} mpContainer={{ mh: 10 }} >
                    {
                        imageType ?
                            <SvgUri
                                width={40}
                                height={40}
                                uri={photoUrl || ''}
                            />
                            :
                            <Img
                                imgSrc={{ uri: photoUrl || '' }}
                                width={40} height={45} />
                    }
                </Container>
                <Container containerStyle={{ width: screenWidth * 0.35 }} >
                    <Label labelSize={14} style={{ letterSpacing: 0.5, color: "black" }} numberOfLines={1} >{Name}</Label>
                    <Label labelSize={12} style={{ letterSpacing: 0.5, color: "grey" }} mpLabel={{ mt: 2 }} >{moment(GameDate).format('ddd')} {useTime(GameDate)} v {Opponent}</Label>
                </Container>
                <Container containerStyle={{ width: screenWidth * 0.18, justifyContent: 'center', alignItems: 'center' }} width={60} >
                    <Label labelSize={12} style={{ letterSpacing: 0.5, color: "green" }}>{FantasyPointsDraftKings}</Label>
                </Container>
                <Container containerStyle={{ width: screenWidth * 0.16, justifyContent: 'center', alignItems: 'center' }} width={60} >
                    <Label labelSize={12} style={{ letterSpacing: 0.5, color: "black" }}>{PredictionPoints}</Label>
                </Container>
                <Container containerStyle={{ width: screenWidth * 0.20, justifyContent: 'center', alignItems: 'center' }} width={60} >
                    <Label labelSize={12} style={{ letterSpacing: 0.5, color: "black" }}>{SniperPoints}</Label>
                </Container>
            </Container>
            <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} />
        </>
    }
    if (photoUrl) {
        return renderMyPlayers()
    } else {
        return renderEmptyPlayers()
    }
}
export default MyPlayersList;