import * as actionTypes from '../actionTypes';

export const AddToCartWatcher = (payload) => ({
    type: actionTypes.Add__CART_WATCHER,
    payload
});

export const AddToCartSuccess = (payload) => ({
    type: actionTypes.Add__CART_SUCCESS,
    payload
});

export const AddToCartError = (payload) => ({
    type: actionTypes.Add__CART_ERROR,
    payload
});

///
export const getCartDetailsWatcher = (payload) => ({
    type: actionTypes.GET_CART_DETAILS_WATCHER,
    payload
});

export const getCartDetailsSuccess = (payload) => ({
    type: actionTypes.GET_CART_DETAILS_SUCCESS,
    payload
});

export const getCartDetailsError = (payload) => ({
    type: actionTypes.GET_CART_DETAILS_ERROR,
    payload
});
