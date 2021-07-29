import { call, put, takeLatest } from "redux-saga/effects";
import * as globals from '../../utils/globals'
import * as actionTypes from "../../store/actionTypes";
import { getHomeCategoryError, getHomeCategorySuccess, getHomeSliderError, getHomeSliderSuccess, getHomeSliderWatcher, getProductCountError, getProductCountSuccess, getSubCatAllError, getSubCatAllSuccess, getSubCatAllWatcher, tokenError, tokenSuccess } from "../actions";
import { tokenApi } from "../apiService";

function getHomeSliderApi(data) {
    // return axios.post(`${API_BASE_URL}/forgot`, data);
    // return fetch(globals.mainUrl + globals.get_profile, {
    //     method: 'post',
    //     headers: {
    //         'Content-Type': 'multipart/form-data',
    //     },
    //     body: formdata
    // }).then((res) => res.json())

    return fetch(globals.mainUrl + globals.homeSilderImages, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}


function* getHomeSliderActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(getHomeSliderApi, variable);
        console.log("======>get Home Slider Response ", response)
        yield put(getHomeSliderSuccess(response.slider_image))
    } catch (e) {
        console.log("=====>get Home Slider Error", e)
        yield put(getHomeSliderError(e));
    }
}

export function* HomeSliderSaga() {
    yield takeLatest(actionTypes.HOME_SLIDER_WATCHER, getHomeSliderActionEffect);
}

////////

function getHomeCategoryApi(data) {

    return fetch(globals.mainUrl + globals.getCategoryData, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}
function* getHomeCategoryActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(getHomeCategoryApi, variable);
        console.log("======>get Home Category Response ", JSON.stringify(response))
        yield put(getHomeCategorySuccess(response.data))
    } catch (e) {
        console.log("=====>get Home Category Error", e)
        yield put(getHomeCategoryError(e));
    }
}
export function* HomeCategorySaga() {
    yield takeLatest(actionTypes.HOME_CATEGORY_WATCHER, getHomeCategoryActionEffect);
}

//////


function getSubCatAllApi(data) {

    return fetch(globals.mainUrl + globals.SubCatallproducts, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, user_id: globals.userId })
    }).then(res => res.json())
}
function* getSubCatAllActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(getSubCatAllApi, variable);
        console.log("======>getSubCatAllApi Success ", JSON.stringify(response))
        yield put(getSubCatAllSuccess(response.data))
    } catch (e) {
        console.log("=====>getSubCatAllApi Error", e)
        yield put(getSubCatAllError(e));
    }
}
export function* subCatAllSaga() {
    yield takeLatest(actionTypes.SUB_CATEGORY_ALL_WATCHER, getSubCatAllActionEffect);
}
//

function* tokenActionEffect(action) {
    let variable = {
        ...action.payload
    }
    console.log(variable)
    try {
        const response = yield call(tokenApi, variable);
        console.log("======>tokenApi Success ", JSON.stringify(response))
        yield put(tokenSuccess(response))
    } catch (e) {
        console.log("=====>tokenApi Error", e)
        yield put(tokenError(e));
    }
}
export function* tokenSaga() {
    yield takeLatest(actionTypes.TOKEN_WATCHER, tokenActionEffect);
}

