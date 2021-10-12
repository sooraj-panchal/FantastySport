import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
import { forgotPasswordResponse, UserResponse } from '../types/responseTypes'

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
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://chessmafia.com/php/fantasy/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
      console.log("token", token)
      headers.set('Accept', 'application/json')
      headers.set('Content-Type', 'multipart/form-data')
      if (token) {
        headers.set('Authorization', `${token}`)
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
      }),
      transformResponse: (response: { data: forgotPasswordResponse }) => response.data
    }),
    otpVerify: builder.mutation<UserResponse, any>({
      query: (credentials) => ({
        url: 'otpVerify',
        method: 'POST',
        body: credentials
      }),
      transformResponse: (response: { data: UserResponse }) => response.data
    }),
    resetPassword: builder.mutation<UserResponse, any>({
      query: (credentials) => ({
        url: 'resetPassword',
        method: 'POST',
        body: credentials
      })
      // transformResponse: (response: { data: UserResponse }) => response.data
    }),
    changePassword: builder.mutation<UserResponse, any>({
      query: (credentials) => ({
        url: 'changePassword',
        method: 'POST',
        body: credentials
      })
      // transformResponse: (response: { data: UserResponse }) => response.data
    })
  }),
})

export const { useLoginMutation, useRegisterMutation, useForgotPasswordMutation, useOtpVerifyMutation, useResetPasswordMutation, useChangePasswordMutation } = authApi
