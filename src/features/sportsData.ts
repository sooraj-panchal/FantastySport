import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
import { MyTeamLogoResponse, MyTeamResponse } from '../types/responseTypes'

export const sportsDataApi = createApi({
    reducerPath: 'sportsDataApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.sportsdata.io/v3/nfl/',
        prepareHeaders: (headers, { getState }) => {
            headers.set('Accept', 'application/json')
            headers.set('Ocp-Apim-Subscription-Key', '881199c7a4104d75876bd87860a231a8')
            return headers
        },
    }),
    // tagTypes: ['League'],
    endpoints: (builder) => ({
        getMyLiveMatch: builder.query({
            query: () => ({
                url: 'projections/json/PlayerGameProjectionStatsByPlayerID/2021REG/1/4314'
            }),
            transformResponse: (response: { data: MyTeamResponse[] }) => {
                console.log("getMyLiveMatch Response==>", response)
                return response;
            }
        }),
        getMyTeamLogo: builder.query({
            query: () => ({
                url: 'scores/json/Teams'
            }),
            transformResponse: (response: MyTeamLogoResponse[]) => {
                let teamLogoList = response.map((item, index) => {
                    return {
                        WikipediaLogoUrl: item.WikipediaLogoUrl
                    };
                })
                console.log("getMyTeamLogo Response==>", teamLogoList)
                return teamLogoList;
            }
        })
    })
})

export const { useGetMyLiveMatchQuery, useGetMyTeamLogoQuery } = sportsDataApi

