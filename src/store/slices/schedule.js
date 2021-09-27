import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { api_token } from '../../services/apiPaths';


const getSchedules = async ( week ) => {
    const response = await axios.get( 'https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2021REG', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Ocp-Apim-Subscription-Key": api_token
        }
    } );
    let data = response.data.filter( ( item, index ) => item.Week == week );
    return data;
};


export const getScheduleListWatcher = createAsyncThunk(
    'teams/schedule',
    async ( payload, { getState } ) => {
        const state = getState();
        const scheduleArray = await getSchedules( state.schedule.currentWeek );
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
                    game_key: item.GameKey
                } );
            }
        } );
        return newArray;
    }
);

const scheduleSlice = createSlice( {
    name: 'scheduleSlice',
    initialState: {
        loading: false,
        data: [],
        error: null,
        currentWeek: 1,
    },
    reducers: {
        updateWeek: ( state, action ) => {
            state.currentWeek = action.payload;
        }
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
export const { updateWeek } = scheduleSlice.actions;
export default scheduleSlice.reducer;