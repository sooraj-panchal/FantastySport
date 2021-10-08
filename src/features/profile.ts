import { MutationLifecycleApi } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
import { setCredentials } from '../store/slices/auth'
import { forgotPasswordResponse, UserResponse } from '../types/responseTypes'
import { fetchBaseQueryApi } from './fetchBaseQuery'

export interface LoginRequest {
    email: string
    password: string,
    fcm_token?: string | null
}
export interface registerRequest {
    email: string
    password: string,
    fcm_token?: string | null
}

export const ProfileApi = createApi({
    reducerPath: 'ProfileApi',
    baseQuery: fetchBaseQueryApi,
    endpoints: (builder) => ({
        updateProfile: builder.mutation<UserResponse, any>({
            query: (credentials) => ({
                url: 'updateProfile',
                method: 'POST',
                body: credentials
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                try {
                    const { data }: any = await queryFulfilled
                    dispatch(setCredentials({ user: data }))
                } catch (err) {
                    console.log('err queryFulfilled', err)
                }
            },
        }),
    }),
})

export const { useUpdateProfileMutation } = ProfileApi

