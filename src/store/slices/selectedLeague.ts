import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { scheduleListTypes } from '../../types/flatListTypes';
import { MyLeagueResponse } from '../../types/responseTypes';

export interface initialState {
    data: any | [],
    selectedWeek: any | [],
    leagueTeamNameList: any | [],
    leagueDetails: MyLeagueResponse
}

export const selectedLeagueSlice = createSlice({
    name: "selectedLeagueSlice",
    initialState: {
        data: [],
        selectedWeek: [],
        leagueTeamNameList: [],
        leagueDetails: {}
    } as initialState,
    reducers: {
        selectedWeekWatcher: (state, action) => {
            state.selectedWeek = action.payload;
        },
        leagueDetailsWatcher: (state, action: PayloadAction<MyLeagueResponse>) => {
            const LegueTeamList: any = [];
            action.payload?.week?.map((item) => {
                item.schedule?.map((item) => {
                    if (item?.team_id) {
                        LegueTeamList.push(item.team_key);
                    }
                    if (item?.op_team_id) {
                        LegueTeamList.push(item.op_team_key);
                    }
                })
            })
            state.leagueDetails = action.payload;
            state.leagueTeamNameList = LegueTeamList;
        },
    }
});

export const { selectedWeekWatcher, leagueDetailsWatcher } = selectedLeagueSlice.actions;
export default selectedLeagueSlice.reducer;