import React from 'react';
import Container from '../../../components/Container';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Label from '../../../components/Label';
import { navigationProps } from '../../../types/nav';
import Img from '../../../components/Img';
import { AppImages } from '../../../assets/images/map';
import { OrangeColor } from '../../../assets/colors';
import { medium } from '../../../assets/fonts/fonts';
import { LeaguePlayerTypes } from '../../../types/flatListTypes';
import { useTime } from '../../../utils/timeZone';
import moment from 'moment';
interface props {
    onPress: () => void
}
const PlayerList: React.FC<props & LeaguePlayerTypes> = ({
    onPress,
    photoUrl,
    Name,
    Position,
    FantasyPointsDraftKings,
    FantasyPosition,
    Team,
    isSelected,
    Opponent,
    GameDate
}) => {

    return <>
        <Container
            containerStyle={{
                flexDirection: "row",
                alignItems: "center"
            }}
            mpContainer={{ mh: 15 }}
            height={80}
        >
            <Img
                imgSrc={{ uri: photoUrl || 'dummy' }}
                width={50} height={50}
            // imgStyle={{
            //     resizeMode: 'contain'
            // }}
            />
            <Container mpContainer={{ pl: 15 }} >
                <Label labelSize={14} style={{ color: "black", fontFamily: medium }}  >{Name}</Label>
                <Container containerStyle={{ flexDirection: "row", alignItems: "center" }} mpContainer={{ mt: 2 }} >
                    <Label labelSize={14} style={{ color: 'grey' }} >{FantasyPosition}</Label>
                    <Label labelSize={14} style={{ color: 'black' }} mpLabel={{ pl: 5 }} >Accuracy 98%</Label>
                    <Label labelSize={14} style={{ color: 'black' }} mpLabel={{ pl: 10 }} >Proj. {FantasyPointsDraftKings}pts</Label>
                </Container>
                <Label labelSize={14} style={{ color: "grey" }} mpLabel={{ mt: 2 }} >{moment(GameDate).format('ddd')} {useTime(GameDate)} v {Opponent}</Label>
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
                        onPress={onPress}
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
                        onPress={onPress}
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
}
export default PlayerList;