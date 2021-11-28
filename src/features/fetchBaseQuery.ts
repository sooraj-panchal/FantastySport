import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
import { baseUrl } from '../utils/globals'

export const fetchBaseQueryApi = fetchBaseQuery({

  baseUrl: baseUrl,
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
})