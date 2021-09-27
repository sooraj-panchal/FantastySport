import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
import { UserResponse } from '../types/responseTypes'

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

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://chessmafia.com/php/fantasy/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
      headers.set('Accept', 'application/json')
      headers.set('Content-Type', 'multipart/form-data')
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest | any>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials
      }),
      transformResponse: (response: { data: UserResponse }) => response.data
    }),
    register: builder.mutation<UserResponse, any>({
      query: (credentials) => ({
        url: 'register',
        method: 'POST',
        body: credentials
      }),
      transformResponse: (response: { data: UserResponse }) => response.data
    }),
    forgotPassword: builder.mutation({
      query: (credentials) => ({
        url: 'forgotPassword',
        method: 'POST',
        body: credentials
      })
    }),
    otpVerify: builder.mutation<UserResponse, any>({
      query: (credentials) => ({
        url: 'otpVerify',
        method: 'POST',
        body: credentials
      }),
      transformResponse: (response: { data: UserResponse }) => response.data
    })
  }),
})

export const { useLoginMutation, useRegisterMutation, useForgotPasswordMutation, useOtpVerifyMutation } = authApi

