import { call, put, takeLatest } from "redux-saga/effects";
import * as globals from '../../utils/globals'
import * as actionTypes from "../../store/actionTypes";
import {
    addUserAddressError,
    addUserAddressSuccess,
    deleteUserAddressError,
    deleteUserAddressSuccess,
    getDefaultAddressError,
    getDefaultAddressSuccess,
    getDefaultAddressWatcher,
    getUserAddressError,
    getUserAddressSuccess,
    getUserAddressWathcer,
    updateDefaultAddressError,
    updateDefaultAddressSuccess,
    updateUserAddressSuccess,
    updateUserAddressError,
    getUserProfileSuccess,
    getUserProfileError,
    updateUserProfileSuccess,
    updateUserProfileError,
    getAsyncUserDataSuccess,
    getAsyncUserDataError,
    getAsyncUserDataWatcher
} from "../actions";
import { defaultAddressApi } from "../apiService";

function* getDefaultAddressActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(defaultAddressApi, variable);
        console.log("======>get default address Response ", response)
        yield put(getDefaultAddressSuccess(response))
    } catch (e) {
        console.log("=====>ge default address Error", e)
        yield put(getDefaultAddressError(e));
    }
}

export function* defaultAddressSaga() {
    yield takeLatest(actionTypes.DEFAULT_ADDRESS_WATCHER, getDefaultAddressActionEffect);
}

/////

function addUserAddressApi(data) {
    return fetch(globals.mainUrl + globals.addUserAddress, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}


function* addUserAddressActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(addUserAddressApi, variable);
        console.log("======>addUserAddressApi Response ", response)
        globals.successMessage = response.message
        yield put(addUserAddressSuccess(response))
        yield put(getDefaultAddressWatcher({
            user_id: globals.userId
        }))
        yield put(getUserAddressWathcer({
            user_id: globals.userId
        }))
    } catch (e) {
        console.log("=====>addUserAddressApi Error", e)
        yield put(addUserAddressError(e));
    }
}

export function* addUserAddressSaga() {
    yield takeLatest(actionTypes.ADD_USER_ADDRESS_WATCHER, addUserAddressActionEffect);
}

///////


function getUserAddressApi(data) {
    return fetch(globals.mainUrl + globals.getUserAddress, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}


function* getUserAddressActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(getUserAddressApi, variable);
        console.log("======>getUserAddressApi Response ", response)
        yield put(getUserAddressSuccess(response))
    } catch (e) {
        console.log("=====>getUserAddressApi Error", e)
        yield put(getUserAddressError(e));
    }
}

export function* getUserAddressSaga() {
    yield takeLatest(actionTypes.GET_USER_ADDRESS_WATCHER, getUserAddressActionEffect);
}

////

function deleteUserAddressApi(data) {
    return fetch(globals.mainUrl + globals.deleteUserAddress, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}


function* deleteUserAddressActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(deleteUserAddressApi, variable);
        console.log("======>deleteUserAddressApi Response ", response)
        globals.successMessage = response.message

        yield put(deleteUserAddressSuccess(response))
        // yield put(getUserAddressWathcer({
        //     user_id: globals.userId
        // }))
    } catch (e) {
        console.log("=====>deleteUserAddressApi Error", e)
        yield put(deleteUserAddressError(e));
    }
}

export function* deleteUserAddressSaga() {
    yield takeLatest(actionTypes.DELETE_USER_ADDRESS_WATCHER, deleteUserAddressActionEffect);
}

///

function updateDefaultAddressApi(data) {
    return fetch(globals.mainUrl + globals.updateUserDefaultAddress, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}


function* updateDefaultAddressActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(updateDefaultAddressApi, variable);
        console.log("======>updateDefaultAddressApi Response ", response)
        globals.successMessage = response.message
        yield put(updateDefaultAddressSuccess(response))
        yield put(getDefaultAddressWatcher({
            user_id: globals.userId
        }))

    } catch (e) {
        console.log("=====>updateDefaultAddressApi Error", e)
        yield put(updateDefaultAddressError(e));
    }
}

export function* updateDfaultAddressSaga() {
    yield takeLatest(actionTypes.UPDATE_DEFAULT_ADDRESS_WATCHER, updateDefaultAddressActionEffect);
}

////


function updateUserAddressApi(data) {
    return fetch(globals.mainUrl + globals.userUpdateAddress, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}


function* updateUserAddressActionEffect(action) {
    let variable = {
        ...action.payload
    }
    console.log("'variable", variable)
    try {
        const response = yield call(updateUserAddressApi, variable);
        console.log("======>updateUserAddressApi Response ", response)
        yield put(updateUserAddressSuccess(response))
        yield put(getUserAddressWathcer({
            user_id: globals.userId
        }))
        if (variable.default_status == "Y") {
            yield put(getDefaultAddressWatcher({
                user_id: globals.userId
            }))
        }
    } catch (e) {
        console.log("=====>updateUserAddressApi Error", e)
        yield put(updateUserAddressError(e));
    }
}

export function* updateUserAddressSaga() {
    yield takeLatest(actionTypes.UPDATE_USER_ADDRESS_WATCHER, updateUserAddressActionEffect);
}
/////
function getUserProfileApi(data) {
    return fetch(globals.mainUrl + globals.getUserData, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}


function* getUserProfileActionEffect(action) {
    let variable = {
        ...action.payload
    }

    try {
        const response = yield call(getUserProfileApi, variable);
        console.log("======>getUserProfileApi Response ", response)
        yield put(getUserProfileSuccess(response))
    } catch (e) {
        console.log("=====>getUserProfileApi Error", e)
        yield put(getUserProfileError(e));
    }
}

export function* getUserProfileSaga() {
    yield takeLatest(actionTypes.GET_USER_PROFILE_WATCHER, getUserProfileActionEffect);
}

//////

function updateUserProfileApi(data) {
    var formData = new FormData();
    if (data.image == "N/A") {
        formData.append('image', data.image)
    } else {
        formData.append('image', {
            uri: data.image,
            name: 'my_photo.jpg',
            type: 'image/jpg'
        })
    }
    formData.append('old_image', data.old_image)
    formData.append('user_name', data.user_name);
    formData.append('user_id', data.user_id);
    formData.append('mobile_no', data.mobile_no);

    return fetch(globals.mainUrl + globals.updateProfile, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            'Content-Type': 'multipart/form-data',
            // 'Authorization': globals.apiToken
        },
        body: formData
    }).then(res => res.json())

}


function* updateUserProfileActionEffect(action) {
    let variable = {
        ...action.payload
    }
    console.log(variable)
    try {
        const response = yield call(updateUserProfileApi, variable);
        console.log("======>updateUserProfileApi Response ", response)
        globals.successMessage=response.message
        yield put(updateUserProfileSuccess(response))
        yield put(getAsyncUserDataWatcher(variable))
    } catch (e) {
        console.log("=====>updateUserProfileApi Error", e)
        yield put(updateUserProfileError(e));
    }
}

export function* updateUserProfileSaga() {
    yield takeLatest(actionTypes.UPDATE_USER_PROFILE_WATCHER, updateUserProfileActionEffect);
}

function* getUserAsyncDataActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        console.log("=====>getAsyncUserData Success ", action.payload)
        if (action.payload) {
            globals.userId = action.payload.user_id
        }
        yield put(getAsyncUserDataSuccess(action.payload))
    } catch (e) {
        console.log("=====>getAsyncUserData Error", e)
        yield put(getAsyncUserDataError(e));
    }
}

export function* getUserAsyncDataSaga() {
    yield takeLatest(actionTypes.GET_ASYNC_USER_DATA_WATCHER, getUserAsyncDataActionEffect);
}