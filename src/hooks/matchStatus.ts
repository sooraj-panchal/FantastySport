// import moment from 'moment';
// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';
// import { MyLeagueResponse } from '../types/responseTypes';


// const useGetMatchStatus = (week: any, deadlineDate: Date | any) => {

//     console.log('deadlineDate', deadlineDate)

//     const [data, setData] = useState({
//         matchDate: '',
//         dateText: '',
//         weekText: '',
//         isStarted: false,
//         isEnded: false
//     })

//     const currentDate = new Date()
//     const { NFLCurrentWeek } = useSelector((store: RootState) => store.leaguePlayer)
//     let lastIndexOfSchedule = week?.[0]?.schedule.length - 1

//     let getMatchEndTime = week?.[0].schedule[lastIndexOfSchedule].start_time
//     let getMatchStartTime = week?.[0].schedule[0].start_time

//     let matchEndingTime = new Date(getMatchEndTime)
//     let matchStartTime = new Date(getMatchStartTime)

//     // console.log('matchEndingTime',moment(getMatchEndTime).format('MMM D, LT'))

//     useEffect(() => {
//         if (matchEndingTime > currentDate && week?.[0].week_no == NFLCurrentWeek) {
//             console.log('matchEndingTime', matchEndingTime);
//             setData({
//                 dateText: 'End time',
//                 matchDate: moment(getMatchEndTime).format('MMM D, LT'),
//                 weekText: 'Started',
//                 isStarted: true,
//                 isEnded: false
//             })
//         }
//         if (matchStartTime > currentDate && week?.[0].week_no > NFLCurrentWeek) {
//             console.log('match will start soon at', matchStartTime);
//             if (new Date(deadlineDate) < matchStartTime) {
//                 console.log('hello')
//                 setData({
//                     dateText: 'Picks deadline',
//                     matchDate: moment(deadlineDate).format('MMM D, LT'),
//                     weekText: `Week ${week?.[0].week_no} Will start soon`,
//                     isStarted: false,
//                     isEnded: false,
//                 })
//             } else {
//                 setData({
//                     dateText: 'Start time',
//                     matchDate: moment(getMatchStartTime).format('MMM D, LT'),
//                     weekText: `Week ${week?.[0].week_no} Will start soon`,
//                     isStarted: true,
//                     isEnded: false
//                 })
//             }
//         }
//         if (matchEndingTime <= currentDate && week?.[0].week_no <= NFLCurrentWeek) {
//             setData({
//                 dateText: 'Ended time',
//                 matchDate: moment(getMatchEndTime).format('MMM D, LT'),
//                 weekText: 'Completed',
//                 isStarted: false,
//                 isEnded: true
//             })
//         }
//     }, [week]);
//     return { ...data }
// };

// export default useGetMatchStatus;

import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { MyLeagueResponse } from '../types/responseTypes';


const useGetMatchStatus = (week: any, deadlineDate: Date | any) => {

    // console.log('week', JSON.stringify(week))

    const [data, setData] = useState({
        matchDate: '',
        dateText: '',
        weekText: '',
        isStarted: false,
        isEnded: false
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
            setData({
                dateText: 'End time',
                matchDate: moment(getMatchEndTime).format('MMM D, LT'),
                weekText: 'Started',
                isStarted: true,
                isEnded: false
            })
        } else {
            if (matchEndingTime <= currentDate && week?.[0].week_no <= NFLCurrentWeek) {
                setData({
                    dateText: 'Ended time',
                    matchDate: moment(getMatchEndTime).format('MMM D, LT'),
                    weekText: 'Completed',
                    isStarted: false,
                    isEnded: true
                })
            }
        }
        if (matchStartTime > currentDate && week?.[0].week_no >= NFLCurrentWeek) {
            console.log('match will start soon at', matchStartTime);
            if (new Date(deadlineDate) < matchStartTime) {
                console.log('hello')
                setData({
                    dateText: 'Picks deadline',
                    matchDate: moment(deadlineDate).format('MMM D, LT'),
                    weekText: `Week ${week?.[0].week_no} Will start soon`,
                    isStarted: false,
                    isEnded: false,
                })
            } else {
                // if (matchEndingTime > currentDate && week?.[0].week_no == NFLCurrentWeek) {
                // console.log('matchEndingTime', matchEndingTime);
                // setData({
                //     dateText: 'End time',
                //     matchDate: moment(getMatchEndTime).format('MMM D, LT'),
                //     weekText: 'Started',
                //     isStarted: true,
                //     isEnded: false
                // })
                // } else {
                setData({
                    dateText: 'Start time',
                    matchDate: moment(getMatchStartTime).format('MMM D, LT'),
                    weekText: `Week ${week?.[0].week_no} Will start soon`,
                    isStarted: true,
                    isEnded: false
                })
                // }
            }
        }

    }, [week,NFLCurrentWeek]);
    return { ...data }
};

export default useGetMatchStatus;