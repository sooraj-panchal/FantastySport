import { createSlice } from '@reduxjs/toolkit';

export const myPlayerListSlice = createSlice( {
    name: "myPlayerListSlice",
    initialState: {
        data: []
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