import { createSelector } from 'reselect';

const authReducer = state => state.authReducer;

export const registerSelector = createSelector(
    authReducer,
    registerSelector => registerSelector.registerReducer.data,
);

export const registerLoading = createSelector(
    authReducer,
    registerLoading => registerLoading.registerReducer.isLoading,
);
/////
export const loginSelector = createSelector(
    authReducer,
    loginSelector => loginSelector.loginReducer.data,
);

export const loginLoading = createSelector(
    authReducer,
    loginLoading => loginLoading.loginReducer.isLoading,
);
///
export const verifyOtpSelector = createSelector(
    authReducer,
    verifyOtpSelector => verifyOtpSelector.verifyOtpReducer.data,
);

export const verifyOtpLoading = createSelector(
    authReducer,
    verifyOtpLoading => verifyOtpLoading.verifyOtpReducer.isLoading,
);
///
export const forgotPasswordSelector = createSelector(
    authReducer,
    forgotPasswordSelector => forgotPasswordSelector.forgotPasswordReducer.data,
);

export const forgotPasswordLoading = createSelector(
    authReducer,
    forgotPasswordLoading => forgotPasswordLoading.forgotPasswordReducer.isLoading,
);
///
export const resetPasswordSelector = createSelector(
    authReducer,
    resetPasswordSelector => resetPasswordSelector.resetPasswordReducer.data,
);

export const resetPasswordLoading = createSelector(
    authReducer,
    resetPasswordLoading => resetPasswordLoading.resetPasswordReducer.isLoading,
);
