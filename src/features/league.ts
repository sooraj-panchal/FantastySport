import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
import { forgotPasswordResponse, MyLeagueResponse, MyTeamResponse, UserResponse } from '../types/responseTypes'
import { fetchBaseQueryApi } from './fetchBaseQuery'

export const LeagueApi = createApi({
    reducerPath: 'LeagueApi',
    baseQuery: fetchBaseQueryApi,
    tagTypes: ['League'],
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
            // invalidatesTags: ['League'],
            transformResponse: (response: { data: MyTeamResponse[] }) => {
                console.log("teamList Response==>", response)
                return response.data[0];
            }
        })
    }),
})

export const { useCreateLeagueMutation, useLeagueListQuery, useCreateTeamMutation, useGetMyTeamsQuery } = LeagueApi

