import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import { SvgUri } from 'react-native-svg';
import { useDispatch } from 'react-redux';
import { OrangeColor, PrimaryColor } from '../assets/colors';
import { bold, medium } from '../assets/fonts/fonts';
import { AppImages } from '../assets/images/map';
import { useJoinPrivateLeagueMutation } from '../features/league';
import useGetMatchStatus from '../hooks/matchStatus';
import { AppStack } from '../navigator/navActions';
import { leagueDetailsWatcher } from '../store/slices/selectedLeague';
import { homeNavProps } from '../types/nav';
import { MyLeagueResponse } from '../types/responseTypes';
import { screenWidth } from '../types/sizes';
import Btn from './Btn';
import Container from './Container';
import Img from './Img';
import Label from './Label';

interface props {
    createMatchHandler: () => void,
    goToTeamDetail: () => void,
    joinLeagueHandler: () => void,
    createPlayersHandler: () => void

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
    team_id,
    user_name,
    deadline,
    scoring_system,
    league_flag,
    isPlayerCreated,
    createMatchHandler,
    goToTeamDetail,
    joinLeagueHandler,
    createPlayersHandler
}) => {
    let imageType = team_logo?.split('.').pop() == 'svg';
    const dispatch = useDispatch()
    const navigation = useNavigation<homeNavProps>()
    // const { dateText, matchDate, weekText } = useGetMatchStatus(week, deadline)
    return (
        <Container
            containerStyle={{
                backgroundColor: 'white',
                elevation: 4,
                borderRadius: 10,
            }}
            mpContainer={{ mh: 15, pv: 10 }}
            onPress={() => {
                navigation.navigate('LeagueDetail', {
                    league_id: league_id,
                    week_id: week?.[0]?.week_id,
                })
            }}
        >
            {
                is_your_league ?
                    <Container containerStyle={{
                        flexDirection: 'row'
                    }}
                        mpContainer={{ ml: 5 }}
                    >
                        <Img
                            imgSrc={AppImages.league_icon}
                            imgStyle={{
                                width: 40,
                                height: 40,
                                resizeMode: 'contain',
                            }}
                        />
                        <Container
                            containerStyle={{
                                flex: 0.8
                            }}
                            mpContainer={{ ml: 5 }}
                        >
                            <Label
                                labelSize={12}
                                textColor='grey'
                                // mpLabel={{ pl: 10 }}
                                style={{ fontFamily: medium }}
                            >Created by you</Label>
                            <Label style={{
                                fontFamily: medium
                            }}
                                labelSize={18}
                                textColor='black'
                                numberOfLines={2}
                            >{name}</Label>
                        </Container>
                    </Container>
                    : <Container containerStyle={{
                        flexDirection: 'row'
                    }}
                        mpContainer={{ ml: 10 }}
                    >
                        <Img
                            imgSrc={AppImages.green_logo}
                            imgStyle={{
                                width: 30,
                                height: 40,
                                resizeMode: 'contain',
                            }}
                        />
                        <Container
                            containerStyle={{
                                flex: 0.8
                            }}
                            mpContainer={{ ml: 10 }}
                        >
                            <Label
                                labelSize={12}
                                textColor='grey'
                                // mpLabel={{ pl: 10 }}
                                style={{ fontFamily: medium }}
                            >Created by {user_name}</Label>
                            <Label style={{
                                fontFamily: medium
                            }}
                                labelSize={18}
                                textColor='black'
                                numberOfLines={2}
                            >{name}</Label>
                        </Container>
                    </Container>
            }
            <Label
                labelSize={14}
                style={{ color: 'black' }}
                mpLabel={{ pl: 10, mt: 5 }}
            >{`${league_flag.dateText}: ${moment(league_flag?.matchDate).format('MMM D, LT')}`}</Label>
            <Label
                style={{
                    color: "green",
                }}
                labelSize={14}
                mpLabel={{ mt: 5, pl: 10 }}
            >{league_flag?.weekText}</Label>

            <Container
                containerStyle={{
                    alignItems: 'flex-end',
                    position: 'absolute',
                    right: 10,
                    top: 0
                }}
            >
                <Img
                    imgSrc={AppImages.team}
                    width={30} height={28}
                    imgStyle={{
                        top: 10,
                        resizeMode: 'contain'
                    }}
                />
                <Label
                    labelSize={15}
                    style={{
                        color: 'black',
                        fontFamily: bold,
                        top: 20,
                        // right: 12
                    }}
                >{participant_user}/{max_participant}</Label>
            </Container>
            {
                you_join_league ? null
                    :
                    scoring_system == 'SNIPER+' && !isPlayerCreated && !you_join_league ? null :
                        // is_your_league && weekText != 'Completed' ?
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
                                title="Join"
                                onPress={() => {
                                    // console.log({
                                    //     week_id: week[0]?.week_id,
                                    //     type: 'public',
                                    //     league_id: league_id
                                    // })
                                    joinLeagueHandler()
                                    // navigation.navigate('CreateTeam', {
                                    //     week_id: week[0]?.week_id,
                                    //     type: 'public',
                                    //     league_id: league_id
                                    // })
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
                // : null
            }
            {
                scoring_system == 'SNIPER+' &&
                    isPlayerCreated == false ?
                    <Container
                        containerStyle={{
                            flexDirection: 'row',
                            // alignItems: 'center',
                            // justifyContent: "center",
                            maxWidth: screenWidth * 0.70
                        }}
                        mpContainer={{ mt: 5, ml: 10 }}
                    >
                        <Label
                            labelSize={14}
                            textColor={OrangeColor}
                        >You must need to create Lineup for SNIPER+</Label>
                        <Btn
                            title="Create"
                            onPress={() => {
                                createPlayersHandler()
                                // console.log({
                                //     week_id: week[0]?.week_id,
                                //     type: 'public',
                                //     league_id: league_id
                                // })
                                // joinLeagueHandler()
                                // navigation.navigate('CreateTeam', {
                                //     week_id: week[0]?.week_id,
                                //     type: 'public',
                                //     league_id: league_id
                                // })
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
            {
                you_join_league ?

                    is_game_created ?
                        <Btn
                            title='View team'
                            onPress={() => {
                                goToTeamDetail()
                            }}
                            btnStyle={{
                                backgroundColor: 'white',
                                borderWidth: 1,
                                borderColor: PrimaryColor,
                                borderRadius: 10,
                                position: "absolute",
                                right: 10,
                                bottom: 6
                            }}
                            btnHeight={25}
                            textColor={PrimaryColor}
                            labelSize={10}
                            mpBtn={{ ph: 10 }}
                        /> :
                        <Btn
                            title='Create team'
                            onPress={() => {
                                createMatchHandler()
                            }}
                            btnStyle={{
                                backgroundColor: 'white',
                                borderWidth: 1,
                                borderColor: 'green',
                                borderRadius: 10,
                                position: "absolute",
                                right: 10,
                                bottom: 6
                            }}
                            btnHeight={25}
                            textColor='green'
                            labelSize={10}
                            mpBtn={{ ph: 10 }}
                        /> : null
            }

            {/* {
                scoring_system == 'SNIPER+' ?
                    <Container
                        containerStyle={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            // justifyContent: "center"
                        }}
                        mpContainer={{ mt: 5,pl:10 }}
                    >
                        <Label
                            style={{maxWidth:'75%'}}
                            labelSize={14}
                        >SNIPER+ You have not created match yet?.</Label>
                        <Btn
                            title="Create"
                            onPress={() => {
                                // navigation.navigate('CreateTeam', {
                                //     week_id: week[0]?.week_id,
                                //     type: 'public',
                                //     league_id: league_id
                                // })
                                navigation.navigate('ShowPlayer')
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
                    </Container> : null
            } */}
        </Container>
    )
}
export default PublicGameList;