import { call, put, takeLatest } from "redux-saga/effects";
import * as globals from '../../utils/globals'
import * as actionTypes from "../../store/actionTypes";
import { forgotPasswordApi, loginApi, registerApi, resetPasswordApi, verifyOtpApi } from "../apiService";
import { forgotPasswordError, forgotPasswordSuccess, loginError, loginSuccess, registerError, registerSuccess, resetPasswordError, resetPasswordSuccess, verifyOtpError, verifyOtpSuccess } from "../actions";

function* registerActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(registerApi, action.payload);
        console.log("======>registerApi success ", response)
        globals.toastMessage = response.message
        yield put(registerSuccess(response));
    } catch (e) {
        console.log("=====>registerApi Error", e)
        yield put(registerError(e));
    }
}

export function* registerSaga() {
    yield takeLatest(actionTypes.REGISTER_WATCHER, registerActionEffect);
}

function* loginActionEffect(action) {
    let variable = { ...action.payload }
    // console.log("variable", variable)
    try {
        const response = yield call(loginApi, action.payload);
        console.log("======>loginApi success ", response)
        globals.toastMessage = response.message
        yield put(loginSuccess(response));
    } catch (e) {
        console.log("=====>loginApi Error", e)
        yield put(loginError(e));
    }
}

export function* loginSaga() {
    yield takeLatest(actionTypes.LOGIN_WATCHER, loginActionEffect);
}
/////
function* verifyOtpActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(verifyOtpApi, action.payload);
        console.log("======>verifyOtpApi success ", response)
        globals.toastMessage = response.message
        yield put(verifyOtpSuccess(response));
    } catch (e) {
        console.log("=====>verifyOtpApi Error", e)
        yield put(verifyOtpError(e));
    }
}

export function* verifyOtpSaga() {
    yield takeLatest(actionTypes.VERIFY_OTP_WATCHER, verifyOtpActionEffect);
}
/////
function* forgotPasswordActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(forgotPasswordApi, action.payload);
        console.log("======>forgotPasswordApi success ", response)
        globals.toastMessage = response.message
        yield put(forgotPasswordSuccess(response));
    } catch (e) {
        console.log("=====>forgotPasswordApi Error", e)
        yield put(forgotPasswordError(e));
    }
}

export function* forgotPasswordSaga() {
    yield takeLatest(actionTypes.FORGOT_PASSWORD_WATCHER, forgotPasswordActionEffect);
}
/////
function* resetPasswordActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(resetPasswordApi, action.payload);
        console.log("======>resetPasswordApi success ", response)
        globals.toastMessage = response.message
        yield put(resetPasswordSuccess(response));
    } catch (e) {
        console.log("=====>resetPasswordApi Error", e)
        yield put(resetPasswordError(e));
    }
}

export function* resetPasswordSaga() {
    yield takeLatest(actionTypes.RESET_PASSWORD_WATCHER, resetPasswordActionEffect);
}
