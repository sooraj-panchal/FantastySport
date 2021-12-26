import React from 'react';
import Container from './Container';
import Label from './Label';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { screenWidth } from '../types/sizes';
import { useNavigation } from '@react-navigation/native';
import { homeNavProps } from '../types/nav';
import { OrangeColor } from '../assets/colors';
import { PlayerPositionTypes } from '../types/flatListTypes';
import Img from './Img';
import moment from 'moment';
import { useTime } from '../utils/timeZone';
import InputBox from './InputBox';
import { SvgUri } from 'react-native-svg';
interface props {
    onChangeText: (val: string) => void
}
const PointAddedPlayerList: React.FC<PlayerPositionTypes & props> = ({
    Position,
    photoUrl,
    PlayerID,
    Name,
    FantasyPointsDraftKings,
    GameDate,
    Opponent,
    onChangeText,
    PredictionPoints,
    ProjectionPoints
}) => {
    let imageType = photoUrl?.split('.').pop() == 'svg';
    console.log('PredictionPoints', PredictionPoints)
    return <>
        <Container
            containerStyle={{ flexDirection: "row", alignItems: "center", width: screenWidth }}
            mpContainer={{ mh: 15 }}
            height={60}
            key={`teamheader${PlayerID}`}
        >
            <Label labelSize={12} style={{ letterSpacing: 0.5, color: OrangeColor, width: screenWidth * 0.08 }} >{Position}</Label>
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
            <Container containerStyle={{ width: screenWidth * 0.14, justifyContent: 'center', alignItems: 'center' }} width={60} >
                <Label labelSize={12} style={{ letterSpacing: 0.5, color: "green" }}>{FantasyPointsDraftKings || ProjectionPoints}</Label>
            </Container>
            <InputBox
                placeholder="0.00"
                containerStyle={{
                    borderWidth: 1,
                    borderColor: "lightgrey",
                    width: screenWidth * 0.15
                }}
                inputStyle={{ padding: 0 }}
                mpContainer={{ pl: 10, ml: 10 }}
                inputHeight={30}
                onChangeText={(text) => {
                    onChangeText(text)
                }}
                value={String(PredictionPoints)}
                keyboardType="numeric"
                maxLength={4}
            />
        </Container>
        <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} />
    </>
}
export default PointAddedPlayerList;