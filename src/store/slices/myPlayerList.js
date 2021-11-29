import { createSlice } from '@reduxjs/toolkit';
import { LeagueApi } from '../../features/league';

export const myPlayerListSlice = createSlice( {
    name: "myPlayerListSlice",
    initialState: {
        data: [],
        MyTeamList: [],
        LiveMatchList: []
    },
    reducers: {
        addToMyPlayerWatcher: ( state, action ) => {
            let data = action.payload.filter( ( thing, index, self ) =>
                index === self.findIndex( ( t ) => {
                    console.log( t.PlayerID === thing.PlayerID );
                    return t.PlayerID === thing.PlayerID;
                } )
            );
            state.data = data;
        },
        liveMatchWatcher: ( state, action ) => {
            state.LiveMatchList = action.payload;
        },
        setMyTeamWatcher: ( state, action ) => {
            state.data = action.payload;
        }
        // deleteLeagueWatcher: ( state, action ) => {
        //     state.data = state.data.filter( ( item, index ) => item.game_key != action.payload );
        // },
        // updateLeagueWatcher: ( state, action ) => {
        //     state.data = 
        // }
    },
    extraReducers: ( builder ) => {
        builder.addMatcher(
            LeagueApi.endpoints.getMyTeams.matchFulfilled,
            ( state, { payload } ) => {
                state.MyTeamList = payload?.players;
            }
        );
    },
} );

export const { addToMyPlayerWatcher, liveMatchWatcher,setMyTeamWatcher } = myPlayerListSlice.actions;
export default myPlayerListSlice.reducer;