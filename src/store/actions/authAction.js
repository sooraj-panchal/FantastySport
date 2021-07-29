import * as actionTypes from '../actionTypes';

export const registerWatcher = (payload) => ({
    type: actionTypes.REGISTER_WATCHER,
    payload
});

export const registerSuccess = (payload) => ({
    type: actionTypes.REGISTER_SUCCESS,
    payload
});

export const registerError = (payload) => ({
    type: actionTypes.REGISTER_ERROR,
    payload
});
// /
export const loginWatcher = (payload) => ({
    type: actionTypes.LOGIN_WATCHER,
    payload
});

export const loginSuccess = (payload) => ({
    type: actionTypes.LOGIN_SUCCESS,
    payload
});

export const loginError = (payload) => ({
    type: actionTypes.LOGIN_ERROR,
    payload
});
// /
export const verifyOtpWatcher = (payload) => ({
    type: actionTypes.VERIFY_OTP_WATCHER,
    payload
});

export const verifyOtpSuccess = (payload) => ({
    type: actionTypes.VERIFY_OTP_SUCCESS,
    payload
});

export const verifyOtpError = (payload) => ({
    type: actionTypes.VERIFY_OTP_ERROR,
    payload
});
// /
export const forgotPasswordWatcher = (payload) => ({
    type: actionTypes.FORGOT_PASSWORD_WATCHER,
    payload
});

export const forgotPasswordSuccess = (payload) => ({
    type: actionTypes.FORGOT_PASSWORD_SUCCESS,
    payload
});

export const forgotPasswordError = (payload) => ({
    type: actionTypes.FORGOT_PASSWORD_ERROR,
    payload
});
// /
export const resetPasswordWatcher = (payload) => ({
    type: actionTypes.RESET_PASSWORD_WATCHER,
    payload
});

export const resetPasswordSuccess = (payload) => ({
    type: actionTypes.RESET_PASSWORD_SUCCESS,
    payload
});

export const resetPasswordError = (payload) => ({
    type: actionTypes.RESET_PASSWORD_ERROR,
    payload
});