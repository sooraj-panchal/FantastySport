import React from 'react';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { OrangeColor } from '../../../assets/colors';
import { medium } from '../../../assets/fonts/fonts';
import { scheduleItemTypes } from '../../../types/flatListTypes';
import { useDate, useTime } from '../../../utils/timeZone';
import { useDispatch } from 'react-redux';
import { deleteScheduleWatcher } from '../../../store/slices/schedule';

const TeamList: React.FC<scheduleItemTypes> = ({
    awayTeam,
    homeTeam,
    start_time,
    game_key
}) => {
    const dispatch = useDispatch()
    return (
        <Container
            containerStyle={{
                backgroundColor: "white",
                height: 65,
                elevation: 2,
                borderRadius: 5,
                alignItems: "flex-start",
                // borderWidth: 1,
                // borderColor: "#f2f2f2"
            }}
            mpContainer={{ mh: 15,mt:10 }}
        >
            <Container
                containerStyle={{ flexDirection: "row" }}
            >
                <Container containerStyle={{
                    justifyContent: "center",
                    alignItems: 'center'
                }} mpContainer={{ ml: 10 }} >
                    <Label
                        labelSize={14}
                        style={{ fontFamily: medium }}
                        mpLabel={{ mt: 5 }}
                    >{awayTeam.full_name}</Label>
                </Container>
                <Label labelSize={14} mpLabel={{ mt: 5, mh: 10 }} style={{ color: OrangeColor, letterSpacing: 0.5, fontFamily: medium }} >VS</Label>
                <Container containerStyle={{
                    justifyContent: "center",
                    alignItems: 'center'
                }} >
                    <Label
                        labelSize={14}
                        style={{ fontFamily: medium }}
                        mpLabel={{ mt: 5 }}
                    >{homeTeam.full_name}</Label>
                </Container>
            </Container>
            <Container containerStyle={{
                flexDirection: 'row',
                alignItems: "center",
                width: '100%'
            }}
                mpContainer={{ mt: 10, ml: 10 }}
            >
                <Label
                    labelSize={14}
                    style={{}}
                    mpLabel={{}}
                >{useDate(start_time)} </Label>
                <Label
                    labelSize={14}
                >{useTime(start_time)} </Label>
            </Container>
            <Container
                containerStyle={{
                    borderRadius: 35,
                    position: 'absolute',
                    right: 10,
                    top: 10,
                    borderStyle: "dashed",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: 'red'
                }}
                width={20} height={20}
                onPress={() => {
                    dispatch(deleteScheduleWatcher(game_key))
                }}
            >
                <Ionicons
                    name="md-close"
                    size={15}
                    color="white"
                />
            </Container>
        </Container>
    )
}

export default TeamList;