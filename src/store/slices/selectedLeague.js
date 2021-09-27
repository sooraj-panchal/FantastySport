import { createSlice } from '@reduxjs/toolkit';



export const selectedLeagueSlice = createSlice( {
    name: "selectedLeagueSlice",
    initialState: {
        data: [],
        selectedWeek: [],
        leagueTeamNameList: []
    },
    reducers: {
        selectedLeagueWatcher: ( state, action ) => {
            const LegueTeamList = [];
            action.payload.map( ( item ) => {
                if ( item.homeTeam ) {
                    LegueTeamList.push( item.homeTeam.key );
                }
                if ( item.awayTeam ) {
                    LegueTeamList.push( item.awayTeam.key );
                }
            } );
            state.data = action.payload;
            state.leagueTeamNameList = LegueTeamList;
        },
        deleteLeagueWatcher: ( state, action ) => {
            state.data = state.data.filter( ( item, index ) => item.game_key != action.payload );
        },
        selectedWeekWatcher: ( state, action ) => {
            state.selectedWeek = action.payload;
        }
    }
} );

export const { selectedLeagueWatcher, deleteLeagueWatcher, selectedWeekWatcher } = selectedLeagueSlice.actions;
export default selectedLeagueSlice.reducer;