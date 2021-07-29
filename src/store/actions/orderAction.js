import * as actionTypes from '../actionTypes';

export const getOrderWatcher = (payload) => ({
    type: actionTypes.GET_ORDER_WATCHER,
    payload
});

export const getOrderSuccess = (payload) => ({
    type: actionTypes.GET_ORDER_SUCCESS,
    payload
});

export const getOrderError = (payload) => ({
    type: actionTypes.GET_ORDER_ERROR,
    payload
});
///
export const addOrderWatcher = (payload) => ({
    type: actionTypes.ADD_ORDER_WATCHER,
    payload
});

export const addOrderSuccess = (payload) => ({
    type: actionTypes.ADD_ORDER_SUCCESS,
    payload
});

export const addOrderError = (payload) => ({
    type: actionTypes.ADD_ORDER_ERROR,
    payload
});
///
export const cancelOrderWatcher = (payload) => ({
    type: actionTypes.CANCEL_ORDER_WATCHER,
    payload
});

export const cancelOrderSuccess = (payload) => ({
    type: actionTypes.CANCEL_ORDER_SUCCESS,
    payload
});

export const cancelOrderError = (payload) => ({
    type: actionTypes.CANCEL_ORDER_ERROR,
    payload
});
////
export const trackOrderWatcher = (payload) => ({
    type: actionTypes.TRACK_ORDER_WATCHER,
    payload
});

export const trackOrderSuccess = (payload) => ({
    type: actionTypes.TRACK_ORDER_SUCCESS,
    payload
});

export const trackOrderError = (payload) => ({
    type: actionTypes.TRACK_ORDER_ERROR,
    payload
});
///
export const getCompletedOrderWatcher = (payload) => ({
    type: actionTypes.GET_COMPLETED_ORDER_WATCHER,
    payload
});
export const getCompletedOrderSuccess = (payload) => ({
    type: actionTypes.GET_COMPLETED_ORDER_SUCCESS,
    payload
});
export const getCompletedOrderError = (payload) => ({
    type: actionTypes.GET_COMPLETED_ORDER_ERROR,
    payload
});
///
export const getCancelledOrderWatcher = (payload) => ({
    type: actionTypes.GET_CANCELLED_ORDER_WATCHER,
    payload
});
export const getCancelledOrderSuccess = (payload) => ({
    type: actionTypes.GET_CANCELLED_ORDER_SUCCESS,
    payload
});
export const getCancelledOrderError = (payload) => ({
    type: actionTypes.GET_CANCELLED_ORDER_ERROR,
    payload
});
///
export const getPromocodeWatcher = (payload) => ({
    type: actionTypes.GET_PROMOCODE_WATCHER,
    payload
});
export const getPromocodeSuccess = (payload) => ({
    type: actionTypes.GET_PROMOCODE_SUCCESS,
    payload
});
export const getPromocodeError = (payload) => ({
    type: actionTypes.GET_PROMOCODE_ERROR,
    payload
});
///
export const applyPromocodeWatcher = (payload) => ({
    type: actionTypes.APPLY_PROMOCODE_WATCHER,
    payload
});
export const applyPromocodeSuccess = (payload) => ({
    type: actionTypes.APPLY_PROMOCODE_SUCCESS,
    payload
});
export const applyPromocodeError = (payload) => ({
    type: actionTypes.APPLY_PROMOCODE_ERROR,
    payload
});