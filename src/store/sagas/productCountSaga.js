import { call, put, takeLatest } from "redux-saga/effects";
import * as globals from '../../utils/globals'
import * as actionTypes from "../../store/actionTypes";
import { getProductCountError, getProductCountSuccess } from "../actions";

function getProductCountApi(data) {
    // return axios.post(`${API_BASE_URL}/forgot`, data);
    // return fetch(globals.mainUrl + globals.get_profile, {
    //     method: 'post',
    //     headers: {
    //         'Content-Type': 'multipart/form-data',
    //     },
    //     body: formdata
    // }).then((res) => res.json())
    return fetch(globals.mainUrl + globals.Productcount, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then(res => res.json())

}

function* getproductCountActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(getProductCountApi, variable);
        console.log("======>getProductCount Response ", response)
        yield put(getProductCountSuccess(response.data))
    } catch (e) {
        console.log("=====>getProductCount Error", e)
        yield put(getProductCountError(e));
    }
}

export function* productCountSaga() {
    yield takeLatest(actionTypes.PRODUCT_COUNT_PENDING, getproductCountActionEffect);
}

