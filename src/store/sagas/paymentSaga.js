import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../../store/actionTypes";
import { getWalletBalanceApi, transactionApi } from "../apiService";
import { paymentTransactionSuccess, walletBalanceError, walletBalanceSuccess, walletTransactionError, walletTransactionSuccess } from "../actions";

function* walletBalanceActionEffect(action) {
    let variable = {
        ...action.payload
    }

    try {
        const response = yield call(getWalletBalanceApi, variable);
        console.log("======>getWalletBalanceApi Response ", response)
        yield put(walletBalanceSuccess(response))
    } catch (e) {
        console.log("=====>getWalletBalanceApi Error", e)
        yield put(walletBalanceError(e))
    }
}

export function* walletBalanceSaga() {
    yield takeLatest(actionTypes.WALLET_BALANCE_WATCHER, walletBalanceActionEffect);
}
//
function* walletTransactionActionEffect(action) {
    let variable = {
        ...action.payload
    }

    try {
        const response = yield call(transactionApi, variable);
        console.log("======>wallettransactionApi Response ", response)
        yield put(walletTransactionSuccess(response))
    } catch (e) {
        console.log("=====>wallettransactionApi Error", e)
        yield put(walletTransactionError(e))
    }
}

export function* walletTransactionSaga() {
    yield takeLatest(actionTypes.WALLET_TRANSACTION_WATCHER, walletTransactionActionEffect);
}
//
function* paymentTransactionActionEffect(action) {
    let variable = {
        ...action.payload
    }

    try {
        const response = yield call(transactionApi, variable);
        console.log("======>paymenttransactionApi Response ", response)
        yield put(paymentTransactionSuccess(response))
    } catch (e) {
        console.log("=====>paymenttransactionApi Error", e)
        yield put(paymentTransactionError(e))
    }
}

export function* paymentTransactionSaga() {
    yield takeLatest(actionTypes.PAYMENT_TRAINSACTION_WATCHER, paymentTransactionActionEffect);
}