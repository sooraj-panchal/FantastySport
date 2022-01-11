import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../types/reduxTypes'
import { UserResponse } from '../../types/responseTypes'

interface initialState {
  user: UserResponse,
  token: string | any
}

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: '',
    token: ''
  } as initialState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user } }: PayloadAction<{ user: UserResponse }>
    ) => {
      state.user = user
      state.token = user.api_token || ''
    },
    logoutUser: (state) => {
      state.user = {}
      state.token = ''
    },
  },
})

export const { setCredentials, logoutUser } = slice.actions

export default slice.reducer

// export const selectCurrentUser = (state: RootState) => state.auth.user
