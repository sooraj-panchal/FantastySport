import * as actionTypes from '../actionTypes';

export const getStoreDataWatcher = (payload) => ({
    type: actionTypes.GET_STORE_DATA_WATCHER,
    payload
});

export const getStoreDataSuccess = (payload) => ({
    type: actionTypes.GET_STORE_DATA_SUCCESS,
    payload
});
export const getStoreDataError = (payload) => ({
    type: actionTypes.GET_STORE_DATA_ERROR,
    payload
});
////
export const setStoreWatcher = (payload) => ({
    type: actionTypes.SET_STORE_WATCHER,
    payload
});

export const setStoreSuccess = (payload) => ({
    type: actionTypes.SET_STORE_SUCCESS,
    payload
});
export const setStoreError = (payload) => ({
    type: actionTypes.SET_STORE_ERROR,
    payload
});
///
export const getMyStoreWatcher = (payload) => ({
    type: actionTypes.GET_MY_STORE_WATCHER,
    payload
});

export const forHomeGetMyStoreWatcher = (payload) => ({
    type: actionTypes.FOR_HOME_GET_MY_STORE_WATCHER,
    payload
});

export const getMyStoreSuccess = (payload) => ({
    type: actionTypes.GET_MY_STORE_SUCCESS,
    payload
});
export const getMyStoreError = (payload) => ({
    type: actionTypes.GET_MY_STORE_ERROR,
    payload
});