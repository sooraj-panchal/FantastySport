import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { MyLeagueResponse } from '../types/responseTypes';


const useGetMatchStatus = (week: any) => {
    console.log('week', week)
    const [data, setData] = useState({
        matchDate: '',
        dateText: '',
        weekText: ''
    })

    const currentDate = new Date()
    const { NFLCurrentWeek } = useSelector((store: RootState) => store.leaguePlayer)
    let lastIndexOfSchedule = week?.[0]?.schedule.length - 1

    let getMatchEndTime = week?.[0].schedule[lastIndexOfSchedule].start_time
    let getMatchStartTime = week?.[0].schedule[0].start_time

    let matchEndingTime = new Date(getMatchEndTime)
    let matchStartTime = new Date(getMatchStartTime)

    // console.log('matchEndingTime',moment(getMatchEndTime).format('MMM D, LT'))

    useEffect(() => {
        if (matchEndingTime > currentDate && week?.[0].week_no == NFLCurrentWeek) {
            console.log('matchEndingTime', matchEndingTime);
            setData({
                dateText: 'End time',
                matchDate: moment(getMatchEndTime).format('MMM D, LT'),
                weekText: 'Started'
            })
        }
        if (matchStartTime > currentDate && week?.[0].week_no > NFLCurrentWeek) {
            console.log('match will start soon at', matchStartTime);
            setData({
                dateText: 'Start time',
                matchDate: moment(getMatchStartTime).format('MMM D, LT'),
                weekText: `Week ${week?.[0].week_no} Will start soon`
            })
        }

        if (matchEndingTime <= currentDate && week?.[0].week_no <= NFLCurrentWeek) {
            setData({
                dateText: 'Ended time',
                matchDate: moment(getMatchEndTime).format('MMM D, LT'),
                weekText: 'Completed'
            })
        }
    }, [week]);
    return { ...data }
};

export default useGetMatchStatus;