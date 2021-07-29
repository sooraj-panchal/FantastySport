import { all } from 'redux-saga/effects';
import { forgotPasswordSaga, loginSaga, registerSaga, resetPasswordSaga, verifyOtpSaga } from './authSaga';
import { asyncBuyerDataSaga } from './whiteListSaga';
export default function* rootSaga() {
  yield all([
    registerSaga(),
    loginSaga(),
    verifyOtpSaga(),
    forgotPasswordSaga(),
    resetPasswordSaga(),
    asyncBuyerDataSaga()
  ]);
}
