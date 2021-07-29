import { call, put, takeLatest } from "redux-saga/effects";
import * as globals from '../../utils/globals'
import * as actionTypes from "../../store/actionTypes";
import { forHomeGetMyStoreWatcher, getMyStoreError, getMyStoreSuccess, getMyStoreWatcher, getStoreDataSuccess, getStoreDataWatcher, setStoreError, setStoreSuccess } from "../actions";
import { getMyStoreApi } from "../apiService";

function getStoreDataApi(data) {
    return fetch(globals.mainUrl + globals.storeData, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}


function* getStoreDataActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(getStoreDataApi, variable);
        console.log("======>getStoreDataSuccess Response ", response)
        yield put(getStoreDataSuccess(response.data));
    } catch (e) {
        console.log("=====>getStoreDataError Error", e)
        yield put(getStoreDataError(e));
    }
}

export function* getStoreDataSaga() {
    yield takeLatest(actionTypes.GET_STORE_DATA_WATCHER, getStoreDataActionEffect);
}
/////
function setStoreApi(data) {
    return fetch(globals.mainUrl + globals.setStore, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}


function* setStoreActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(setStoreApi, variable);
        console.log("======>setStoreApi Response ", response)
        globals.successMessage=response.message
        yield put(setStoreSuccess(response));
        if (variable.fromSelectStore) {
            yield put(getMyStoreWatcher({
                user_id: globals.userId
            }))
        }
        if (variable.forGetMyHomeStore) {
            yield put(forHomeGetMyStoreWatcher({
                user_id: globals.userId
            }))
        }
    } catch (e) {
        console.log("=====>setStoreApi Error", e)
        yield put(setStoreError(e));
    }
}


export function* setStoreSaga() {
    yield takeLatest(actionTypes.SET_STORE_WATCHER, setStoreActionEffect);
}

export function* forHomeGetMyStoreSaga() {
    yield takeLatest(actionTypes.FOR_HOME_GET_MY_STORE_WATCHER, getMyStoreActionEffect);
}



function* getMyStoreActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(getMyStoreApi, variable);
        console.log("======>getMyStoreApi Response ", response)
        if (response && response.data?.length != 0) {
            globals.store_id = response.data.store_id
            globals.storeLatLng = {
                latitude: response.data.latitude,
                longitude: response.data.longitude
            }
        }
        yield put(getMyStoreSuccess(response));
    } catch (e) {
        console.log("=====>getMyStoreApi Error", e)
        yield put(getMyStoreError(e));
    }
}

export function* getMyStoreSaga() {
    yield takeLatest(actionTypes.GET_MY_STORE_WATCHER, getMyStoreActionEffect);
}


