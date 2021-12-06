import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { leagueDetailsWatcher } from '../store/slices/selectedLeague';
import { homeNavProps } from '../types/nav';
import { LiveMatchUpResponse } from '../types/responseTypes';
import Container from './Container';
import Label from './Label';

interface props {
    index: number,
}

const WinnerList: React.FC<LiveMatchUpResponse & props> = (props) => {
    let { id,
        team_name,
        rank,
        pts,
        index,
        week_id,
        week_no } = props

    const navigation = useNavigation<homeNavProps>()
    const dispatch = useDispatch()
    return (
        <Container
            containerStyle={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: index % 2 ? '#f7dfd2' : 'white'
            }}
            mpContainer={{ ph: 10 }}
            height={50}
            onPress={() => {
                let week = []
                week.push({ week_id: week_id, week_no: week_no })
                const data = {
                    ...props,
                    week: week
                }
                // console.log(data)
                dispatch(leagueDetailsWatcher({ ...data }))
                navigation.navigate('TeamDetail', {
                    team_id: id
                })
            }}
        >
            <Label
                labelSize={16}
                mpLabel={{ ml: 20 }}
                numberOfLines={1}
            >{rank}</Label>
            <Label
                labelSize={16}
                mpLabel={{ ml: 35 }}
                numberOfLines={1}
            >{team_name}</Label>
            <Label
                labelSize={15}
                style={{
                    position: 'absolute',
                    right: 15,
                    letterSpacing: 0.5
                }}
            >{pts}</Label>
        </Container >
    )
}
export default WinnerList;