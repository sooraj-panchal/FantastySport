import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { api_token } from '../../services/apiPaths';


const getSchedules = async () => {
    const response = await axios.get( 'https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2021REG', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Ocp-Apim-Subscription-Key": api_token
        }
    } );
    return response.data;
};


export const getScheduleListWatcher = createAsyncThunk(
    'teams/schedule',
    async ( dispath, getState ) => {
        const scheduleArray = await getSchedules();
        // console.log( "scheduleArray", scheduleArray );
        const response = await axios.get( 'https://api.sportsdata.io/v3/nfl/scores/json/Teams', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Ocp-Apim-Subscription-Key": api_token
            }
        } );
        let teamList = response.data;
        let newArray = [];
        scheduleArray.map( ( item, index ) => {
            const TeamData = teamList.find( ( i ) => i.Key == item.AwayTeam );
            const homeTeam = teamList.find( ( i, index ) => i.Key == item.HomeTeam );
            // console.log("homeTeam", homeTeam)
            if ( TeamData && homeTeam ) {
                newArray.push( {
                    awayTeam: {
                        logo: TeamData.WikipediaLogoUrl,
                        key: TeamData.Key,
                        short_name: item.AwayTeam,
                        full_name: TeamData.Name,
                        team_id: TeamData.TeamID,
                    },
                    homeTeam: {
                        logo: homeTeam.WikipediaLogoUrl,
                        key: homeTeam.Key,
                        short_name: item.HomeTeam,
                        full_name: homeTeam.Name,
                        team_id: homeTeam.TeamID
                    },
                    start_time: item.Date,
                    game_key:item.GameKey
                } );
            }
        } );
        return newArray;
    }
);


// export const getApi = axios.get( 'https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2021REG', {
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         "Ocp-Apim-Subscription-Key": api_token
//     }
// } )
//     .then( ( response ) => {
//         console.log( 'response==>', response.data );
//         getTeam( response.data );

//     } ).catch( ( error ) => {
//         console.log( "Errror==>", error );
//     } );

const scheduleSlice = createSlice( {
    name: 'scheduleSlice',
    initialState: {
        loading: false,
        data:[],
        error: null
    },
    extraReducers: builder => {
        builder.addCase( getScheduleListWatcher.pending, ( state, action ) => {
            state.loading = true;
            state.data = [];
        } ).addCase( getScheduleListWatcher.fulfilled, ( state, action ) => {
            state.data = action.payload;
            state.loading = false;
        } ).addCase( getScheduleListWatcher.rejected, ( state, action ) => {
            state.loading = false;
            state.error = action.payload;
        } );
    }
} );

export default scheduleSlice.reducer;



    // const getData = () => {
    //     axios.get('https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2021REG', {
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             "Ocp-Apim-Subscription-Key": api_token
    //         }
    //     })
    //         .then((response: AxiosResponse) => {
    //             console.log('response==>', response.data)
    //             getTeam(response.data)

    //         }).catch((error: AxiosError) => {
    //             console.log("Errror==>", error)
    //         })
    // }

    // const getTeam = (scheduleArray: Array<apiScheduleListTypes>) => {
    //     axios.get<teamTypes>('https://api.sportsdata.io/v3/nfl/scores/json/Teams', {
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             "Ocp-Apim-Subscription-Key": api_token
    //         }
    //     })
    //         .then((response: AxiosResponse) => {
    //             console.log('response==>', response.data)
    //             let teamList: Array<teamTypes> = response.data
    //             let newArray: Array<scheduleListTypes> = []
    //             scheduleArray.map((item, index) => {
    //                 const TeamData = teamList.find((i) => i.Key == item.AwayTeam)
    //                 const homeTeam = teamList.find((i, index) => i.Key == item.HomeTeam)
    //                 // console.log("homeTeam", homeTeam)
    //                 if (TeamData && homeTeam) {
    //                     newArray.push({
    //                         awayTeam: {
    //                             logo: TeamData.WikipediaLogoUrl,
    //                             key: TeamData.Key,
    //                             short_name: item.AwayTeam,
    //                             full_name: TeamData.Name,
    //                             team_id: TeamData.TeamID,
    //                         },
    //                         homeTeam: {
    //                             logo: homeTeam.WikipediaLogoUrl,
    //                             key: homeTeam.Key,
    //                             short_name: item.HomeTeam,
    //                             full_name: homeTeam.Name,
    //                             team_id: homeTeam.TeamID
    //                         },
    //                         start_time: item.Date
    //                     })
    //                 }
    //             })
    //             setScheduleList(newArray)
    //         }).catch((error: AxiosError) => {
    //             console.log("Errror==>", error)
    //         })
    // }
