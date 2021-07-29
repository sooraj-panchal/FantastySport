import * as actionTypes from '../actionTypes';

export const asyncBuyerDataWatcher = (payload) => ({
    type: actionTypes.ASYNC_BUYER_DATA_WATCHER,
    payload
});

export const asyncBuyerDataSuccess = (payload) => ({
    type: actionTypes.ASYNC_BUYER_DATA_SUCCESS,
    payload
});

export const asyncBuyerDataError = (payload) => ({
    type: actionTypes.ASYNC_BUYER_DATA_ERROR,
    payload
});
// /