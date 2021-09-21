// import { createStore, applyMiddleware } from "redux";
// // import logger from "redux-logger";
// import createSagaMiddleware from "redux-saga";
// import { persistStore, persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import rootSaga from "./sagas";
// import rootReducers from "./reducers";

// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     // whitelist: [
//     //     'whiteListReducer',
//     // ],
//     blacklist: [
//         'authReducer'
//     ]
// };

// export const configureStore = (initialStore = {}) => {
//     const sagaMiddleware = createSagaMiddleware();
//     // const middlewares = [logger, sagaMiddleware];
//     const persistedReducer = persistReducer(persistConfig, rootReducers);
//     const store = createStore(
//         persistedReducer,
//         initialStore,
//         // applyMiddleware(...middlewares),
//         applyMiddleware(sagaMiddleware)
//     );
//     const persistor = persistStore(store);
//     sagaMiddleware.run(rootSaga);
//     return { store, persistor };
// };


import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import scheduleReducer from './slices/scheduleSlice';
import leaguePlayerReducer from './slices/leaguePlayerSlice';
import selectedLeagueReducer from './slices/selectedLeagueSlice';
import myPlayerListReducer from './slices/myPlayerListSlice';
import defPositionReducer from './slices/defPositionSlice';

export const store = configureStore( {
    reducer: {
        counter: counterReducer,
        schedule: scheduleReducer,
        leaguePlayer: leaguePlayerReducer,
        selectedLeague: selectedLeagueReducer,
        myPlayer: myPlayerListReducer,
        defPosition:defPositionReducer
    },
    middleware: ( getDefaultMiddleware ) =>
        getDefaultMiddleware( {
            immutableCheck: {
                ignoredPaths: [ 'ignoredPath', 'ignoredNested.one', 'ignoredNested.two' ],
            },
        } ),
} );