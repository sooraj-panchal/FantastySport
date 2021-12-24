// import { useNavigation } from '@react-navigation/native';
// import React from 'react';
// import { SvgUri } from 'react-native-svg';
// import { useDispatch, useSelector } from 'react-redux';
// import { OrangeColor } from '../assets/colors';
// import { bold, medium } from '../assets/fonts/fonts';
// import { AppImages } from '../assets/images/map';
// import useGetMatchStatus from '../hooks/matchStatus';
// import { RootState } from '../store';
// import { leagueDetailsWatcher } from '../store/slices/selectedLeague';
// import { homeNavProps } from '../types/nav';
// import { MyLeagueResponse, UserResponse } from '../types/responseTypes';
// import { screenWidth } from '../types/sizes';
// import Btn from './Btn';
// import Container from './Container';
// import Img from './Img';
// import Label from './Label';

// interface props {
//     createMatchHandler: () => void
// }

// const MyLeagueItem: React.FC<MyLeagueResponse & props> = ({
//     league_id,
//     week,
//     name,
//     deadline,
//     participant_user,
//     max_participant,
//     is_your_league,
//     team_logo,
//     team_name,
//     is_game_created,
//     you_join_league,
//     createMatchHandler,
//     team_id,
//     league_flag
// }) => {

//     let imageType = team_logo?.split('.').pop() == 'svg';
//     const dispatch = useDispatch()
//     const navigation = useNavigation<homeNavProps>()
//     const { dateText, matchDate, weekText } = useGetMatchStatus(week, deadline)
//     const user: UserResponse = useSelector((store: RootState) => store.auth.user)

//     return (
//         <Container
//             containerStyle={{
//                 width: screenWidth * 0.90,
//                 backgroundColor: "white",
//                 elevation: 2,
//                 alignSelf: 'center',
//                 borderRadius: 10
//             }}
//             mpContainer={{ ph: 10, pt: 10, pb: 15 }}
//             onPress={() => {
//                 navigation.navigate('LeagueDetail', {
//                     league_id: league_id,
//                     week_id: week?.[0]?.week_id,
//                 })

//             }}
//         >
//             <Container containerStyle={{
//                 flexDirection: "row",
//             }}
//             // mpContainer={{ mt: 10 }}
//             >
//                 <Img
//                     imgSrc={AppImages.league_icon}
//                     imgStyle={{
//                         height: 35, width: 40,
//                         resizeMode: 'contain'
//                     }}
//                 />
//                 <Container
//                     containerStyle={{

//                     }}
//                     mpContainer={{ ml: 10 }}
//                 >
//                     <Label
//                         labelSize={12}
//                         style={{
//                             color: "black"
//                         }}
//                     // mpLabel={{ mt: 10 }}
//                     >Created by you</Label>
//                     <Label
//                         labelSize={20}
//                         style={{
//                             color: "black"
//                         }}
//                         mpLabel={{ mt: -2 }}
//                     >{name}</Label>
//                 </Container>
//             </Container>
//             <Label
//                 labelSize={14}
//                 style={{ color: 'black' }}
//                 mpLabel={{ pl: 10, mt: 10 }}
//             >{`${dateText}: ${matchDate}`}</Label>
//             <Label
//                 style={{
//                     color: "green",
//                 }}
//                 labelSize={14}
//                 mpLabel={{ mt: 5, pl: 10 }}
//             >{weekText}</Label>
//             <Label
//                 labelSize={15}
//                 style={{
//                     color: 'black',
//                     fontFamily: bold,
//                     position: 'absolute',
//                     top: 60,
//                     right: 12
//                 }}
//             >{participant_user}/{max_participant}</Label>
//             <Img
//                 imgSrc={AppImages.team}
//                 imgStyle={{
//                     width: 35, height: 35,
//                     position: 'absolute',
//                     right: 10,
//                     top: 10,
//                     resizeMode: 'contain'
//                 }}
//             />
//         </Container>
//     )
// }
// export default MyLeagueItem;

import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import { SvgUri } from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';
import { OrangeColor } from '../assets/colors';
import { bold, medium } from '../assets/fonts/fonts';
import { AppImages } from '../assets/images/map';
import useGetMatchStatus from '../hooks/matchStatus';
import { RootState } from '../store';
import { leagueDetailsWatcher } from '../store/slices/selectedLeague';
import { homeNavProps } from '../types/nav';
import { MyLeagueResponse, UserResponse } from '../types/responseTypes';
import { screenWidth } from '../types/sizes';
import Btn from './Btn';
import Container from './Container';
import Img from './Img';
import Label from './Label';

interface props {
    createMatchHandler: () => void
}

const MyLeagueItem: React.FC<MyLeagueResponse & props> = ({
    league_id,
    week,
    name,
    deadline,
    participant_user,
    max_participant,
    is_your_league,
    team_logo,
    team_name,
    is_game_created,
    you_join_league,
    createMatchHandler,
    team_id,
    league_flag
}) => {

    let imageType = team_logo?.split('.').pop() == 'svg';
    const dispatch = useDispatch()
    const navigation = useNavigation<homeNavProps>()
    const { dateText, matchDate, weekText } = useGetMatchStatus(week, deadline)
    const user: UserResponse = useSelector((store: RootState) => store.auth.user)

    return (
        <Container
            containerStyle={{
                width: screenWidth * 0.90,
                backgroundColor: "white",
                elevation: 2,
                alignSelf: 'center',
                borderRadius: 10
            }}
            mpContainer={{ ph: 10, pt: 10, pb: 15 }}
            onPress={() => {
                navigation.navigate('LeagueDetail', {
                    league_id: league_id,
                    week_id: week?.[0]?.week_id,
                })

            }}
        >
            <Container containerStyle={{
                flexDirection: "row",
            }}
            // mpContainer={{ mt: 10 }}
            >
                <Img
                    imgSrc={AppImages.league_icon}
                    imgStyle={{
                        height: 35, width: 40,
                        resizeMode: 'contain'
                    }}
                />
                <Container
                    containerStyle={{

                    }}
                    mpContainer={{ ml: 10 }}
                >
                    <Label
                        labelSize={12}
                        style={{
                            color: "black"
                        }}
                    // mpLabel={{ mt: 10 }}
                    >Created by you</Label>
                    <Label
                        labelSize={20}
                        style={{
                            color: "black"
                        }}
                        mpLabel={{ mt: -2 }}
                    >{name}</Label>
                </Container>
            </Container>
            <Label
                labelSize={14}
                style={{ color: 'black' }}
                mpLabel={{ pl: 10, mt: 10 }}
            >{`${league_flag.dateText}: ${moment(league_flag.matchDate).format('MMM D, LT')}`}</Label>
            <Label
                style={{
                    color: "green",
                }}
                labelSize={14}
                mpLabel={{ mt: 5, pl: 10 }}
            >{league_flag.weekText}</Label>
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
                imgStyle={{
                    width: 35, height: 35,
                    position: 'absolute',
                    right: 10,
                    top: 10,
                    resizeMode: 'contain'
                }}
            />
        </Container>
    )
}
export default MyLeagueItem;