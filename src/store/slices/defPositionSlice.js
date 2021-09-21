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

export const getDefPositionList = createAsyncThunk(
    'getDefPositionList',
    async ( payload, thunkAPI ) => {
        const response = await axios.get( `https://api.sportsdata.io/v3/nfl/stats/json/FantasyDefenseByGameByTeam/2021/1/DAL`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Ocp-Apim-Subscription-Key": '88408f1a555a44deb6e796be48ba6aab'
            }
        } );
        return response.data;
    }
);

const defPositionSlice = createSlice( {
    name: 'defPositionSlice',
    initialState: {
        loading: false,
        data: [],
        error: null,
        offSet: 0
    },
    extraReducers: builder => {
        builder.addCase( getDefPositionList.pending, ( state, action ) => {
            state.loading = true;
            // state.data = [];
        } ).addCase( getDefPositionList.fulfilled, ( state, action ) => {
            // console.log( "index", action.meta );
            state.data = action.payload;
            state.loading = false;
        } ).addCase( getDefPositionList.rejected, ( state, action ) => {
            state.loading = false;
            state.error = action.payload;
        } );
    }
} );
export default defPositionSlice.reducer;
