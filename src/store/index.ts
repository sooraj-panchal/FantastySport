import { configureStore } from '@reduxjs/toolkit';
import scheduleReducer from './slices/schedule';
import leaguePlayerReducer from './slices/leaguePlayer';
import selectedLeagueReducer from './slices/selectedLeague';
import myPlayerListReducer from './slices/myPlayerList';
import defPositionReducer from './slices/defPosition';
import { useDispatch } from 'react-redux';
import { authApi } from '../features/auth';
import authReducer from './slices/auth';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducers = combineReducers({
    schedule: scheduleReducer,
    leaguePlayer: leaguePlayerReducer,
    selectedLeague: selectedLeagueReducer,
    myPlayer: myPlayerListReducer,
    defPosition: defPositionReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth']
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST"]
            }
        }).concat(authApi.middleware)
    // getDefaultMiddleware().concat(authApi.middleware),
});

let persistor = persistStore(store);

export {
    store,
    persistor,
};

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types

