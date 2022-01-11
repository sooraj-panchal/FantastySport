import { BaseQueryApi, BaseQueryFn } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import { FetchArgs, fetchBaseQuery, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
import { baseUrl } from '../utils/globals'

export const baseApi = fetchBaseQuery({
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

type meta = {
  user_id: number,
  token: number
}

export const fetchBaseQueryApi: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  {},
  meta & FetchBaseQueryMeta
> = async (args, api, extraOptions) => {

  const state: RootState | any = api.getState()

  const baseResult = await baseApi(
    args,
    api,
    extraOptions
  )
  // console.log('Request Url ==>', baseResult.meta?.request.url)
  console.log('requested api ====>', JSON.stringify(args))
  // console.log('args', args.body)
  // if (baseResult.meta?.request.method == 'POST') {
  // const Arguments: any = await baseResult.meta?.request?._bodyFormData
  // console.log('Arguments ==>', Arguments)

  // } else {
  //   const Arguments: any = await baseResult.meta?.request?.formData()
  //   console.log('Arguments ==>', Arguments)
  // }

  return {
    ...baseResult,
    meta: baseResult.meta && {
      ...baseResult.meta,
      user_id: state.auth.user.id,
      token: state.auth.token
    },
  }
}


