// var currentTime = new Date( '2021-09-09T20:20:00' );
// var currentOffset = currentTime.getTimezoneOffset();
// var ISTOffset = 570;
// var ISTTime = new Date( currentTime.getTime() + ( ISTOffset + currentOffset ) * 60000 );

// const getTime = ( time: Date ) => {
//     console.log( moment( ISTTime ).format( 'LT' ) );
//     return time;
// };
// const getDate = ( date: Date ) => {
//     moment( start_time ).format( 'dddd, MMMM Do' );
// };

import moment from "moment";


const convertTimeDate = (date: Date | any) => {
    var currentTime = new Date(date);
    var currentOffset = currentTime.getTimezoneOffset();
    var ISTOffset = 570;
    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
    return ISTTime;
}

export const useTime = (time: Date | any) => {
    let ISTTime = convertTimeDate(time)
    let exactTime = moment(ISTTime).format('LT')
    return exactTime;
};

export const useDate = (date: Date | any) => {
    let ISTDate = convertTimeDate(date)
    let exactDate = moment(ISTDate).format('dddd, MMMM Do')
    return exactDate;
};