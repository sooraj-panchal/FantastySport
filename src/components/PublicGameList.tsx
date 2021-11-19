import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SvgUri } from 'react-native-svg';
import { useDispatch } from 'react-redux';
import { OrangeColor } from '../assets/colors';
import { bold, medium } from '../assets/fonts/fonts';
import { AppImages } from '../assets/images/map';
import useGetMatchStatus from '../hooks/matchStatus';
import { leagueDetailsWatcher } from '../store/slices/selectedLeague';
import { homeNavProps } from '../types/nav';
import { MyLeagueResponse } from '../types/responseTypes';
import Btn from './Btn';
import Container from './Container';
import Img from './Img';
import Label from './Label';

interface props {
    createMatchHandler: () => void
}

const PublicGameList: React.FC<MyLeagueResponse & props> = ({
    league_id,
    week,
    name,
    participant_user,
    max_participant,
    is_your_league,
    team_logo,
    team_name,
    is_game_created,
    you_join_league,
    createMatchHandler,
    team_id
}) => {
    let imageType = team_logo?.split('.').pop() == 'svg';
    const dispatch = useDispatch()
    const navigation = useNavigation<homeNavProps>()
    const { dateText, matchDate, weekText } = useGetMatchStatus(week)


    return (
        <Container
            containerStyle={{
                backgroundColor: 'white',
                elevation: 4,
                borderRadius: 10,
            }}
            mpContainer={{ mh: 15, pt: 5, pb: 10 }}
            onPress={() => {
                // navigation.navigate('GameDetail', {
                //     league_id: league_id,
                //     week_id: week?.[0]?.week_id,
                //     league_name: name,
                //     my_team_id: '',
                //     // fromMyLeague: false
                // })
                navigation.navigate('GameDetail', {
                    league_id: league_id,
                    week_id: week[0].week_id,
                    league_name: name,
                    my_team_id: team_id
                })
            }}
        >
            {
                is_your_league ?
                    <Label
                        labelSize={12}
                        textColor='grey'
                        mpLabel={{ pl: 10 }}
                        style={{ fontFamily: medium }}
                    >Created by you*</Label> : null
            }
            <Label
                labelSize={20}
                mpLabel={{ pl: 10 }}

            >{name}</Label>
            <Label
                labelSize={14}
                style={{ color: 'black' }}
                mpLabel={{ pl: 10, mt: 5 }}
            >{`${dateText}: ${matchDate}`}</Label>
            <Label
                style={{
                    color: "green",
                }}
                labelSize={14}
                mpLabel={{ mt: 5, pl: 10 }}
            >{weekText}</Label>
            <Label
                labelSize={15}
                style={{
                    color: 'black',
                    fontFamily: bold,
                    position: 'absolute',
                    top: 60,
                    right: 12
                }}
            >{participant_user}/{max_participant}</Label>
            <Img
                imgSrc={AppImages.team}
                width={30} height={28}
                imgStyle={{
                    position: 'absolute',
                    right: 15,
                    top: 10,
                    resizeMode: 'contain'
                }}
            />
            {
                you_join_league ?
                    <Container containerStyle={{
                        borderWidth: 0.5,
                        // borderTopWidth: 1,
                        justifyContent: "center",
                        borderRadius: 4,
                        borderColor: 'grey'
                    }}
                        height={45}
                        mpContainer={{ ph: 10, mt: 15, mh: 10 }}
                        onPress={() => {
                            navigation.navigate('TeamDetail', {
                                team_id: team_id
                            })
                        }}
                    >
                        <Container
                            containerStyle={{
                                flexDirection: 'row',
                                alignItems: "center"
                            }}
                        >
                            {
                                imageType ?
                                    <SvgUri
                                        width={25}
                                        height={28}
                                        uri={team_logo || ''}
                                    />
                                    :
                                    <Img
                                        imgSrc={{ uri: team_logo || '' }}
                                        imgStyle={{ borderRadius: 25 }}
                                        width={28} height={28} />
                            }
                            <Label
                                mpLabel={{ ml: 10 }}
                                labelSize={18}
                            >{team_name}</Label>
                        </Container>
                        {
                            is_game_created ?
                                <Label
                                    style={{
                                        position: 'absolute',
                                        right: 10,
                                        color: "green"
                                    }}
                                    labelSize={14}
                                // onPress={createMatchHandler}
                                >View</Label>
                                :
                                <Label
                                    style={{
                                        position: 'absolute',
                                        right: 10,
                                        color: "green",
                                    }}
                                    labelSize={14}
                                    mpLabel={{ mt: 5 }}
                                    onPress={createMatchHandler}
                                >Create team</Label>
                        }
                    </Container>
                    :
                    is_your_league && weekText != 'Completed' ?
                        <Container
                            containerStyle={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: "center"
                            }}
                            mpContainer={{ mt: 5 }}
                        >
                            <Label>Want to Join Your League?</Label>
                            <Btn
                                title="Create team"
                                onPress={() => {
                                    navigation.navigate('CreateTeam', {
                                        week_id: week[0]?.week_id,
                                        type: 'public',
                                        league_id: league_id
                                    })
                                    // createMatchHandler()
                                }}
                                btnStyle={{
                                    backgroundColor: 'white',
                                    borderWidth: 1,
                                    borderColor: OrangeColor,
                                    borderRadius: 10,
                                    // width:100,
                                    // alignSelf:'center',
                                    // position:"absolute",
                                    // top:-10,
                                    height: 25
                                }}
                                mpBtn={{ mh: 10, ph: 10, mt: 2 }}
                                labelSize={12}
                                textColor={OrangeColor}
                            />
                        </Container>
                        : null
            }
        </Container>
    )
}
export default PublicGameList;