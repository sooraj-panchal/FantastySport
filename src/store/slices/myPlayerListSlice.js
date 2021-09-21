import { createSlice } from '@reduxjs/toolkit';

export const myPlayerListSlice = createSlice( {
    name: "myPlayerListSlice",
    initialState: {
        data: []
    },
    reducers: {
        addToMyPlayerWatcher: ( state, action ) => {
            state.data = action.payload;
        },
        // deleteLeagueWatcher: ( state, action ) => {
        //     state.data = state.data.filter( ( item, index ) => item.game_key != action.payload );
        // },
        // updateLeagueWatcher: ( state, action ) => {
        //     state.data = 
        // }
    }
} );

export const { addToMyPlayerWatcher } = myPlayerListSlice.actions;
export default myPlayerListSlice.reducer;