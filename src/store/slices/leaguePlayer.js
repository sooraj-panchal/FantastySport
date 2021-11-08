import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { api_token } from '../../services/apiPaths';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useDispatch } from 'react-redux';
import { LeagueApi } from '../../features/league';
import { sportsDataApi } from '../../features/sportsData';

const leaguePlayerSlice = createSlice( {
    name: 'leaguePlayerSlice',
    initialState: {
        NFLCurrentWeek:0
    },

    extraReducers: builder => {
        builder.addMatcher(
            sportsDataApi.endpoints.NFLCurrentWeek.matchFulfilled,
            ( state, { payload } ) => {
                state.NFLCurrentWeek = payload;
            }
        );
    }
} );

export const { resetData, addOffSet } = leaguePlayerSlice.actions;
export default leaguePlayerSlice.reducer;
