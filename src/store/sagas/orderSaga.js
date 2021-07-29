import { call, put, takeLatest } from "redux-saga/effects";
import * as globals from '../../utils/globals'
import * as actionTypes from "../../store/actionTypes";
import { addOrderApi, applyPromocodeApi, cancelOrderApi, getOrderApi, getPromocodeApi, trackOrderApi } from "../apiService";
import { addOrderError, addOrderSuccess, applyPromocodeError, applyPromocodeSuccess, cancelOrderError, cancelOrderSuccess, getCancelledOrderError, getCancelledOrderSuccess, getCompletedOrderError, getCompletedOrderSuccess, getOrderError, getOrderSuccess, getPromocodeError, getPromocodeSuccess, trackOrderError, trackOrderSuccess } from "../actions";


function* getOrderActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(getOrderApi, variable);
        console.log("======>getOrderApi Response ", response)
        yield put(getOrderSuccess(response))
    } catch (e) {
        console.log("=====>getOrderApi Error", e)
        yield put(getOrderError(e));
    }
}

export function* getOrderSaga() {
    yield takeLatest(actionTypes.GET_ORDER_WATCHER, getOrderActionEffect);
}
////
function* addOrderActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(addOrderApi, variable);
        console.log("======>addOrderApi Response ", response)
        yield put(addOrderSuccess(response))
    } catch (e) {
        console.log("=====>addOrderApi Error", e)
        yield put(addOrderError(e));
    }
}

export function* addOrderSaga() {
    yield takeLatest(actionTypes.ADD_ORDER_WATCHER, addOrderActionEffect);
}
///
function* cancelOrderActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(cancelOrderApi, variable);
        console.log("======>cancelOrderApi Response ", response)
            globals.successMessage = response.message
        yield put(cancelOrderSuccess(response))
    } catch (e) {
        console.log("=====>cancelOrderApi Error", e)
        yield put(cancelOrderError(e));
    }
}

export function* cancelOrderSaga() {
    yield takeLatest(actionTypes.CANCEL_ORDER_WATCHER, cancelOrderActionEffect);
}
///
function* trackOrderActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(trackOrderApi, variable);
        console.log("======>trackOrderApi Response ", response)
        yield put(trackOrderSuccess(response))
    } catch (e) {
        console.log("=====>trackOrderApi Error", e)
        yield put(trackOrderError(e));
    }
}

export function* trackOrderSaga() {
    yield takeLatest(actionTypes.TRACK_ORDER_WATCHER, trackOrderActionEffect);
}
////

function* getCompletedOrderActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(getOrderApi, variable);
        console.log("======>getCompletedOrder Success", response)
        yield put(getCompletedOrderSuccess(response));
    } catch (e) {
        // const error = responseError(e);
        console.log("=====>getCompletedOrder error ", e)
        yield put(getCompletedOrderError(e));
    }
}
export function* getCompletedOrderSaga() {
    yield takeLatest(actionTypes.GET_COMPLETED_ORDER_WATCHER, getCompletedOrderActionEffect);
}
///
function* getCancelledOrderActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(getOrderApi, variable);
        console.log("======>getCancelledOrder Success", response)
        yield put(getCancelledOrderSuccess(response));
    } catch (e) {
        // const error = responseError(e);
        console.log("=====>getCancelledOrder error ", e)
        yield put(getCancelledOrderError(e));
    }
}
export function* getCancelledOrderSaga() {
    yield takeLatest(actionTypes.GET_CANCELLED_ORDER_WATCHER, getCancelledOrderActionEffect);
}
//
function* applyPromocodeActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(applyPromocodeApi, variable);
        console.log("======>applyPromocodeApi Success", response)
        globals.successMessage = response.message

        yield put(applyPromocodeSuccess(response));
    } catch (e) {
        // const error = responseError(e);
        console.log("=====>applyPromocodeApi error ", e)
        yield put(applyPromocodeError(e));
    }
}
export function* applyPromocodeSaga() {
    yield takeLatest(actionTypes.APPLY_PROMOCODE_WATCHER, applyPromocodeActionEffect);
}
//
function* getPromocodeActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(getPromocodeApi, variable);
        console.log("======>getPromocodeApi Success", response)
        yield put(getPromocodeSuccess(response));
    } catch (e) {
        // const error = responseError(e);
        console.log("=====>getPromocodeApi error ", e)
        yield put(getPromocodeError(e));
    }
}
export function* getPromocodeSaga() {
    yield takeLatest(actionTypes.GET_PROMOCODE_WATCHER, getPromocodeActionEffect);
}
