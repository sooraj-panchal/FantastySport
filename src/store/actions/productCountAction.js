import * as actionTypes from '../actionTypes';

export const getProductCountWatcher = (payload) => ({
    type: actionTypes.PRODUCT_COUNT_PENDING,
    payload:payload ?payload :[]
});

export const getProductCountSuccess = (payload) => ({
    type: actionTypes.PRODUCT_COUNT_SUCCESS,
    payload
});

export const getProductCountError = (payload) => ({
    type: actionTypes.PRODUCT_COUNT_ERROR,
    payload
});
