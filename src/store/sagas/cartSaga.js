import { call, put, takeLatest } from "redux-saga/effects";
import * as globals from '../../utils/globals'
import * as actionTypes from "../../store/actionTypes";
import { AddToCartError, AddToCartSuccess, getCartDetailsError, getCartDetailsSuccess, getCatAllProductWatcher, getProductCountWatcher } from "../actions";
import { getCartDetailsApi } from "../apiService";

function getAddToCartApi(data) {
    console.log("data", data)
    return fetch(globals.mainUrl + globals.AddToCart, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}


function* getAddToCartActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(getAddToCartApi, variable);
        console.log("======>AddToCartSuccess", response)
        yield put(AddToCartSuccess(response))
        yield put(getProductCountWatcher({
            user_id: globals.userId,
            token: globals.tokenForWithoutLogin
        }))
        // yield put(getCatAllProductWatcher({
        //     cat_id: "4",
        //     user_id: globals.userId,
        //     token: globals.tokenForWithoutLogin
        // }))
    } catch (e) {
        console.log("=====>AddToCartError", e)
        yield put(AddToCartError(e));
    }
}

export function* addToCartSaga() {
    yield takeLatest(actionTypes.Add__CART_WATCHER, getAddToCartActionEffect);
}
///
function* getCartDetailsActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(getCartDetailsApi, variable);
        console.log("======>getCartDetailsApi", response)
        yield put(getCartDetailsSuccess(response))
    } catch (e) {
        console.log("=====>getCartDetailsApi", e)
        yield put(getCartDetailsError(e));
    }
}

export function* getCartDetailsSaga() {
    yield takeLatest(actionTypes.GET_CART_DETAILS_WATCHER, getCartDetailsActionEffect);
}

