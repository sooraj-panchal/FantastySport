import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { api_token } from '../../services/apiPaths';

const getTeamList = async () => {
    const response = await axios.get( 'https://api.sportsdata.io/v3/nfl/scores/json/Teams', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Ocp-Apim-Subscription-Key": api_token
        }
    } );
    return response.data;
};

// export const getDefPositionList = createAsyncThunk(
//     'getDefPositionList',
//     async ( payload, { getState } ) => {
//         let positionList = [];
//         let state = getState();
//         const { currentWeek } = state.schedule;

//         let LeagueTeams = [ ...state.selectedLeague.leagueTeamNameList ];
//         console.log( 'LeagueTeams', LeagueTeams );
//         for await ( const item of LeagueTeams ) {
//             const response = await axios.get( `https://api.sportsdata.io/v3/nfl/stats/json/FantasyDefenseByGameByTeam/2021/${ currentWeek }/${ item }`, {
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                     "Ocp-Apim-Subscription-Key": '88408f1a555a44deb6e796be48ba6aab'
//                 }
//             } );
//             positionList.push( { ...response.data } );
//         };
//         console.log('positionList',positionList)
//         const teamList = await getTeamList();
//         const newData = positionList?.map( ( item, index ) => {
//             const TeamData = teamList.find( ( i ) => i.TeamID == item.TeamID );
//             return {
//                 Name: TeamData?.Name || '',
//                 Position: 'DEF',
//                 GameDate: item.Date,
//                 isSelected: false,
//                 Accuracy: '',
//                 PlayerID: item.PlayerID,
//                 Team: item.Team,
//                 FantasyPointsDraftKings: item.FantasyPointsDraftKings,
//                 Opponent: item.Opponent,
//                 PredictionPoints: item.PredictionPoints || '',
//                 SniperPoints: item.SniperPoints || '',
//                 photoUrl: TeamData?.WikipediaLogoUrl || '',
//                 HomeOrAway: item.HomeOrAway
//             };
//         } );
//         return newData;
//     }
// );

export const getDefPositionList = createAsyncThunk(
    'getDefPositionList',
    async ( payload, { getState } ) => {
        let state = getState();
        const { league_week, leagueTeamNameList } = state.selectedLeague;
        console.log( "leagueTeamNameList", leagueTeamNameList );
        const response = await axios.get( `https://api.sportsdata.io/v3/nfl/projections/json/FantasyDefenseProjectionsByGame/2021REG/${ league_week }`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Ocp-Apim-Subscription-Key": '881199c7a4104d75876bd87860a231a8'
            }
        } );
        let positionList = response.data;
        const teamList = await getTeamList();
        const DEFPOS = [];
        let newData = positionList.map( ( item, index ) => {
            const TeamData = teamList.find( ( i ) => i.TeamID == item.TeamID );
            return {
                Name: TeamData?.Name || '',
                Position: 'DEF',
                GameDate: item.Date,
                isSelected: false,
                Accuracy: '',
                PlayerID: item.PlayerID,
                Team: item.Team,
                FantasyPointsDraftKings: item.FantasyPointsDraftKings,
                Opponent: item.Opponent,
                PredictionPoints: item.PredictionPoints || '',
                SniperPoints: item.SniperPoints || '',
                photoUrl: TeamData?.WikipediaLogoUrl || '',
                HomeOrAway: item.HomeOrAway
            };
        } );

        leagueTeamNameList.forEach( ( item, index ) => {
            let TempData = newData.find( ( i, index ) => i.Team == item );
            if ( TempData ) {
                DEFPOS.push( { ...TempData } );
            }
        } );
        return DEFPOS;
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
    reducers: {
        setDefPlayers: ( state, action ) => {
            state.data = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase( getDefPositionList.pending, ( state, action ) => {
            state.loading = true;
            state.data = state.data?.length ? state.data : [];
        } ).addCase( getDefPositionList.fulfilled, ( state, action ) => {
            let data = action.payload?.map( ( item, index ) => {
                let newData = state.data?.find( ( i, index ) => i.PlayerID == item.PlayerID );
                console.log( 'newData', newData );
                return {
                    ...item,
                    isSelected: newData?.isSelected || false
                };
            } );
            console.log( "getDefPositionList res", data );
            state.data = data;
            state.loading = false;
        } ).addCase( getDefPositionList.rejected, ( state, action ) => {
            // console.log( "getDefPositionList res err", action.payload );
            state.loading = false;
            state.error = action.payload;
        } );
    }
} );

export const { setDefPlayers } = defPositionSlice.actions;
export default defPositionSlice.reducer;
