import React, { useRef } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';
import { useDispatch } from 'react-redux';
import { PlayerPositionTypes } from '../../../types/flatListTypes';
import { homeNavProps } from '../../../types/nav';
import Container from '../../../components/Container';
import { screenWidth } from '../../../types/sizes';
import Label from '../../../components/Label';
import { OrangeColor } from '../../../assets/colors';
import Img from '../../../components/Img';
import moment from 'moment';
import { useTime } from '../../../utils/timeZone';

const Players: React.FC<PlayerPositionTypes> = ({
    Position,
    photoUrl,
    PlayerID,
    Name,
    ProjectionPoints,
    GameDate,
    Opponent,
    PredictionPoints,
    SniperPoints
}) => {

    const renderMyPlayers = () => {
        let imageType = photoUrl?.split('.').pop() == 'svg';
        return <>
            <Container
                containerStyle={{ flexDirection: "row", alignItems: "center", width: screenWidth }}
                mpContainer={{ mh: 15 }}
                height={60}
                key={`teamheader${PlayerID}`}
            >
                <Label labelSize={12} style={{ color: OrangeColor, width: screenWidth * 0.1 }} >{Position}</Label>
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
                <Container containerStyle={{ width: screenWidth * 0.30 }} >
                    <Label labelSize={12} style={{ color: "black" }} numberOfLines={1} >{Name}</Label>
                    <Label labelSize={10} style={{ color: "grey" }} mpLabel={{ mt: 2 }} >{moment(GameDate).format('ddd')} {useTime(GameDate)} v {Opponent}</Label>
                </Container>
                <Container containerStyle={{ width: screenWidth * 0.12, justifyContent: 'center', alignItems: 'center' }} width={50} >
                    <Label labelSize={10} style={{ color: "green" }}>{ProjectionPoints}</Label>
                </Container>
                <Container containerStyle={{ width: screenWidth * 0.10, justifyContent: 'center', alignItems: 'center' }} width={60} >
                    <Label labelSize={10} style={{ color: "black" }}>{PredictionPoints}</Label>
                </Container>
                <Container containerStyle={{ width: screenWidth * 0.16, justifyContent: 'center', alignItems: 'center' }} width={60} >
                    <Label labelSize={10} style={{ color: "black" }}>{SniperPoints}</Label>
                </Container>
            </Container>
            <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} />
        </>
    }
    return renderMyPlayers()
}
export default Players;