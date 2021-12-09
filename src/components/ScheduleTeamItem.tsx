import React from 'react';
import { OrangeColor } from '../assets/colors';
import Container from './Container';
import Img from './Img';
import Label from './Label';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SvgUri } from 'react-native-svg';
import { scheduleItemTypes } from '../types/flatListTypes';
import { useDate, useTime } from '../utils/timeZone';
import { Alert } from 'react-native';

interface other {
    onPress: () => void
}

const ScheduleTeamItem: React.FC<scheduleItemTypes & other> = ({
    awayTeam,
    homeTeam,
    start_time,
    isSelected,
    onPress
}) => {

    const schedule_date = new Date(start_time).getTime()
    const canSelectSchedule = schedule_date >= new Date().getTime()
    // console.log(isGreaterThanDate)

    return (
        <Container
            containerStyle={{
                backgroundColor: "white",
                height: 140,
                elevation: 1,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "flex-start",
                opacity: canSelectSchedule ? 1 : 0.5
            }}
            mpContainer={{ mh: 15 }}
        >
            <Container
                containerStyle={{ flexDirection: "row", alignItems: "center" }}
            >
                <Container containerStyle={{
                    justifyContent: "center",
                    alignItems: 'center'
                }}
                    width={80}
                    height={100}
                >
                    <Container height={45} >
                        {
                            awayTeam.logo.split('.').pop() == 'svg' ?
                                <SvgUri
                                    width={45}
                                    height={45}
                                    uri={awayTeam.logo}
                                />
                                :
                                <Img
                                    imgSrc={{ uri: awayTeam.logo }}
                                    imgStyle={{}}
                                    width={40} height={45} />
                        }
                    </Container>
                    <Label
                        labelSize={15}
                        style={{}}
                        mpLabel={{ mt: 5 }}
                    >{awayTeam.short_name}</Label>
                    <Label
                        labelSize={12}
                        style={{}}
                        numberOfLines={1}
                        mpLabel={{ mt: 5 }}
                    >({awayTeam.full_name})</Label>
                </Container>
                <Label labelSize={16} mpLabel={{ mt: 5, mh: 5 }} style={{ color: "grey", letterSpacing: 0.5 }} >VS</Label>
                <Container containerStyle={{
                    justifyContent: "center",
                    alignItems: 'center'
                }}
                    width={80}
                    height={100}
                >
                    <Container height={45} >
                        {
                            homeTeam.logo.split('.').pop() == 'svg' ?
                                <SvgUri
                                    width={45}
                                    height={45}
                                    uri={homeTeam.logo}
                                />
                                :
                                <Img
                                    imgSrc={{ uri: homeTeam.logo }}
                                    imgStyle={{}}
                                    width={40} height={45} />
                        }
                    </Container>
                    <Label
                        labelSize={15}
                        style={{}}
                        mpLabel={{ mt: 5 }}
                    >{homeTeam.short_name}</Label>
                    <Label
                        labelSize={12}
                        style={{}}
                        numberOfLines={1}
                        mpLabel={{ mt: 5 }}
                    >({homeTeam.full_name})</Label>
                </Container>
            </Container>
            <Container containerStyle={{
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: 'space-around',
                width: '100%'
            }}
                mpContainer={{ mt: 5 }}
            >
                <Label
                    labelSize={16}
                    style={{}}
                    mpLabel={{}}
                >{useDate(start_time)} </Label>
                <Label
                    labelSize={16}
                >{useTime(start_time)} </Label>
            </Container>
            {/* 21-07-2000   04:00 PM */}
            {
                isSelected ?
                    <Container
                        containerStyle={{
                            borderRadius: 35,
                            position: 'absolute',
                            right: 15,
                            top: 15,
                            borderStyle: "dashed",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: OrangeColor
                        }}
                        width={35} height={35}
                        onPress={() => onPress()}
                    >
                        <Ionicons
                            name="ios-checkmark-sharp"
                            size={25}
                            style={{
                                color: "white"
                            }}
                            color={OrangeColor}
                        />
                    </Container> :
                    <Container
                        containerStyle={{
                            borderWidth: 2,
                            borderRadius: 35,
                            borderColor: OrangeColor,
                            position: 'absolute',
                            right: 15,
                            top: 15,
                            borderStyle: "dashed",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        width={35} height={35}
                        onPress={() => {
                            if (canSelectSchedule) {
                                onPress()
                            } else {
                                Alert.alert('Fantasy sniper', 'You cannot select this schedule')
                            }
                        }}
                    >
                        <Ionicons
                            name="add-sharp"
                            size={30}
                            style={{

                            }}
                            color={OrangeColor}
                        />
                    </Container>
            }
        </Container>
    )
}
export default ScheduleTeamItem;