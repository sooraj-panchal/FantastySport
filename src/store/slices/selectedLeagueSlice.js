import { createSlice } from '@reduxjs/toolkit';



export const selectedLeagueSlice = createSlice( {
    name: "selectedLeagueSlice",
    initialState: {
        data: [],
        selectedWeek:[]
    },
    reducers: {
        selectedLeagueWatcher: ( state, action ) => {
            state.data = action.payload;
        },
        deleteLeagueWatcher: ( state, action ) => {
            state.data = state.data.filter( ( item, index ) => item.game_key != action.payload );
        },
        selectedWeekWatcher:(state,action)=>{
            state.selectedWeek = action.payload
        }
    }
} );

export const { selectedLeagueWatcher, deleteLeagueWatcher,selectedWeekWatcher } = selectedLeagueSlice.actions;
export default selectedLeagueSlice.reducer;