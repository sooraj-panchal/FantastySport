import { isRejectedWithValue } from '@reduxjs/toolkit'
import Toast from 'react-native-simple-toast';
import { Middleware, MiddlewareAPI } from 'redux'

export const rtkQueryErrorLogger: Middleware =
    (api: MiddlewareAPI) => (next) => (action) => {
        // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these use matchers!
        if (isRejectedWithValue(action)) {
            console.warn('We got a rejected action!')
            Toast.show('Async error!', Toast.LONG)
        }
        return next(action)
    }