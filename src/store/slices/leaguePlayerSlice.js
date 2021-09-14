import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { api_token } from '../../services/apiPaths';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useDispatch } from 'react-redux';


// const getSchedules = async () => {
//     const response = await axios.get( 'https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2021REG', {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             "Ocp-Apim-Subscription-Key": api_token
//         }
//     } );
//     return response.data;
// };

const leagueTeams = [ "DAL", "TB", "JAX", "HOU" ];

export const paginPlayerWatcher = createAsyncThunk(
    'paginPlayer',
    async ( index, thunkAPI ) => {
        const response = await axios.get( `https://api.sportsdata.io/v3/nfl/projections/json/PlayerSeasonProjectionStatsByTeam/2021/${ leagueTeams[ index ] }`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Ocp-Apim-Subscription-Key": api_token
            }
        } );
        thunkAPI.dispatch( addOffSet( index ) );
        return response.data?.slice( 0, 10 );
    }
);

const getLeaguePlayersWatcher = createAsyncThunk(
    'league/players',
    async ( dispath, getState ) => {
        const playerList = await paginPlayerData();
        const response = await axios.get( 'https://api.sportsdata.io/v3/nfl/scores/json/Players', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Ocp-Apim-Subscription-Key": api_token
            }
        } );
        // console.log('response==>', response.data)
        let playerDetail = response.data;
        let data = playerList.map( ( item, index ) => {
            const TeamData = playerDetail.find( ( i ) => i.PlayerID == item.PlayerID );
            return {
                ...item,
                photoUrl: TeamData?.PhotoUrl
            };
        } );
        return data;
        // setPlayerList((prev) => [...prev, ...data])
        // setplayerByPositionList((prev) => [...prev, ...data])
        // setLoading(false)
        // setPaginLoading(false)
    }
);

const leaguePlayerSlice = createSlice( {
    name: 'leaguePlayerSlice',
    initialState: {
        loading: false,
        data: [],
        error: null,
        offSet: 0
    },
    reducers: {
        addOffSet: ( state, action ) => {
            state.offSet = action.payload;
        },
        resetData: ( state ) => {
            state.data = [];
            state.offSet = 0;
        },
    },
    extraReducers: builder => {
        builder.addCase( paginPlayerWatcher.pending, ( state, action ) => {
            state.loading = true;
            // state.data = [];
        } ).addCase( paginPlayerWatcher.fulfilled, ( state, action ) => {
            // console.log( "index", action.meta );
            state.data = [ ...state.data, ...action.payload ];
            state.loading = false;
        } ).addCase( paginPlayerWatcher.rejected, ( state, action ) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
} );

export const { resetData, addOffSet } = leaguePlayerSlice.actions;
export default leaguePlayerSlice.reducer;
