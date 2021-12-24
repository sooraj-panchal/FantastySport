import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { scheduleListTypes } from '../../types/flatListTypes';
import { MyLeagueResponse } from '../../types/responseTypes';

export interface initialState {
    data: any | [],
    selectedWeek: any | [],
    leagueTeamNameList: any | [],
    leagueDetails: MyLeagueResponse,
    leagueData: {
        league_id?: number,
        week_id?: number
    },
    league_week: number
}

export const selectedLeagueSlice = createSlice({
    name: "selectedLeagueSlice",
    initialState: {
        data: [],
        selectedWeek: [],
        leagueTeamNameList: [],
        leagueDetails: {},
        leagueData: {
            league_id: 0,
            week_id: 0
        },
        league_week: 0
    } as initialState,
    reducers: {
        selectedWeekWatcher: (state, action) => {
            state.selectedWeek = action.payload;
        },
        leagueUpdateWatcher: (state, action: PayloadAction<{ league_id?: number, week_id?: number }>) => {
            console.log('action', action)
            state.leagueData = { ...action.payload };
        },
        // selectedLeagueTeamList:()=>{

        // },
        leagueDetailsWatcher: (state, action: PayloadAction<MyLeagueResponse | any>) => {
            const LegueTeamList: any = [];
            action.payload?.week?.map((item: { schedule: any[]; }) => {
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
            state.league_week = action.payload?.week[0]?.week_no
        },
    }
});

export const { selectedWeekWatcher, leagueDetailsWatcher, leagueUpdateWatcher } = selectedLeagueSlice.actions;
export default selectedLeagueSlice.reducer;