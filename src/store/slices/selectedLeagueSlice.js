import { createSlice } from '@reduxjs/toolkit';

export const selectedLeagueSlice = createSlice( {
    name: "selectedLeagueSlice",
    initialState: {
        data: []
    },
    reducers: {
        selectedLeagueWatcher: ( state, action ) => {
            state.data = action.payload;
        },
        deleteLeagueWatcher: ( state, action ) => {
            state.data = state.data.filter( ( item, index ) => item.game_key != action.payload );
        },
        // updateLeagueWatcher: ( state, action ) => {
        //     state.data = 
        // }
    }
} );

export const { selectedLeagueWatcher, deleteLeagueWatcher } = selectedLeagueSlice.actions;
export default selectedLeagueSlice.reducer;