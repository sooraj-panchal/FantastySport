import { put, takeLatest } from "redux-saga/effects";
import * as globals from '../../utils/globals'
import * as actionTypes from "../../store/actionTypes";
import { asyncBuyerDataError, asyncBuyerDataSuccess } from "../actions";


function* asyncBuyerDataActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        console.log("=====>asyncBuyerDataSuccess ", action.payload)
        // if (action.payload) {
        //     globals.buyer_id = action.payload.buyer_id
        // }
        yield put(asyncBuyerDataSuccess(action.payload))
    } catch (e) {
        console.log("=====>asyncBuyerDataError", e)
        yield put(asyncBuyerDataError(e));
    }
}

export function* asyncBuyerDataSaga() {
    yield takeLatest(actionTypes.ASYNC_BUYER_DATA_WATCHER, asyncBuyerDataActionEffect);
}
