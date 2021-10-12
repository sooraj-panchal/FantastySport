import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'
import { mainUrl } from '../services/apiPaths'
import { RootState } from '../store'
import { liveMatchWatcher } from '../store/slices/myPlayerList'
import { forgotPasswordResponse, MyLeagueResponse, MyTeamResponse, TeamMatchDetailsResponse, UserResponse } from '../types/responseTypes'
import { fetchBaseQueryApi } from './fetchBaseQuery'

export const LeagueApi = createApi({
    reducerPath: 'LeagueApi',
    baseQuery: fetchBaseQueryApi,
    tagTypes: ['League', 'EditTeam'],
    endpoints: (builder) => ({
        createLeague: builder.mutation<any, any>({
            query: (credentials) => ({
                url: 'createLeague',
                method: 'POST',
                body: credentials
            }),
            invalidatesTags: ['League'],
            transformResponse: (response) => {
                console.log("createLeague Response==>", response)
                return response;
            }
        }),
        leagueList: builder.query({
            query: () => ({
                url: 'leagueList',
                method: 'POST'
            }),
            providesTags: ['League'],
            transformResponse: (response: { data: MyLeagueResponse[] }) => response.data
            // transformResponse: (response: { data: UserResponse }) => response.data
        }),
        createTeam: builder.mutation<any, any>({
            query: (credentials) => ({
                url: 'createTeam',
                method: 'POST',
                body: credentials
            }),
            // invalidatesTags: ['League'],
            transformResponse: (response) => {
                console.log("createTeam Response==>", response)
                return response;
            }
        }),
        getMyTeams: builder.query<MyTeamResponse, any>({
            query: ({ league_id, week_id }) => ({
                url: `teamList/${league_id}/${week_id}`
            }),
            providesTags: ['EditTeam'],
            transformResponse: (response: { data: MyTeamResponse[] }) => {
                console.log("teamList Response==>", response)
                return response.data[0];
            }
        }),
        updateTeamDetails: builder.mutation<any, any>({
            query: (credentials) => ({
                url: 'editTeam',
                method: 'POST',
                body: credentials
            }),
            invalidatesTags: ['EditTeam'],
            transformResponse: (response) => {
                console.log("response Response==>", response)
                return response;
            }
        }),
        getLiveMatches: builder.query<any, any>({
            query: ({ league_id, week }) => ({
                url: `myTeam/${league_id}/${week}`
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled, getState }) {
                const state: RootState | any = getState()
                try {
                    const { data } = await queryFulfilled;
                    let pointsDetailsArray: any[] = []
                    for await (const item of data?.data) {
                        const response: any = await axios.get(`https://chessmafia.com/php/fantasy/api/pointDetail/${item?.user_team_id}`, {
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                "Authorization": state.auth.token
                            }
                        });
                        pointsDetailsArray.push({
                            ...item,
                            ...response.data?.data
                        })
                    };
                    console.log("pointsDetailsArray==>", JSON.stringify(pointsDetailsArray));
                    dispatch(liveMatchWatcher(pointsDetailsArray))
                } catch (err) {
                    console.log("error... ", err);
                }
            },

        }),
        allLeagueList: builder.query({
            query: () => ({
                url: 'allpublicLeague'
            }),
            // providesTags: ['League'],
            transformResponse: (response: { data: MyLeagueResponse[] }) => {
                console.log("allpublicLeague===>", response)
                return response.data
            }
        }),
        teamMatchDetails: builder.query<TeamMatchDetailsResponse[], any>({
            query: ({ team_id, op_team_id }) => ({
                url: `matchDetail/${team_id}/${op_team_id}`
            }),
            // providesTags: ['League'],
            transformResponse: (response: { data: TeamMatchDetailsResponse[] }) => {
                console.log("matchDetail===>", JSON.stringify(response))
                return response.data
            }
        })
    }),
})

export const {
    useCreateLeagueMutation,
    useLeagueListQuery,
    useCreateTeamMutation,
    useGetMyTeamsQuery,
    useUpdateTeamDetailsMutation,
    useGetLiveMatchesQuery,
    useAllLeagueListQuery,
    useTeamMatchDetailsQuery
} = LeagueApi
