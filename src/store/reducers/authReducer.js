import * as actionTypes from '../actionTypes';

const initialState = {
    registerReducer: {
        data: null,
        error: null,
        isLoading: false
    },
    loginReducer: {
        data: null,
        error: null,
        isLoading: false
    },
    verifyOtpReducer: {
        data: null,
        error: null,
        isLoading: false
    },
    forgotPasswordReducer: {
        data: null,
        error: null,
        isLoading: false
    },
    resetPasswordReducer: {
        data: null,
        error: null,
        isLoading: false
    },
};


export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_WATCHER:
            return {
                ...state,
                registerReducer: {
                    data: null,
                    error: null,
                    isLoading: true
                },
            };
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                registerReducer: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.REGISTER_ERROR:
            return {
                ...state,
                registerReducer: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        ////
        case actionTypes.LOGIN_WATCHER:
            return {
                ...state,
                loginReducer: {
                    data: null,
                    error: null,
                    isLoading: true
                },
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loginReducer: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.LOGIN_ERROR:
            return {
                ...state,
                loginReducer: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        ////
        case actionTypes.VERIFY_OTP_WATCHER:
            return {
                ...state,
                verifyOtpReducer: {
                    data: null,
                    error: null,
                    isLoading: true
                },
            };
        case actionTypes.VERIFY_OTP_SUCCESS:
            return {
                ...state,
                verifyOtpReducer: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.VERIFY_OTP_ERROR:
            return {
                ...state,
                verifyOtpReducer: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
             ////
        case actionTypes.FORGOT_PASSWORD_WATCHER:
            return {
                ...state,
                forgotPasswordReducer: {
                    data: null,
                    error: null,
                    isLoading: true
                },
            };
        case actionTypes.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                forgotPasswordReducer: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.FORGOT_PASSWORD_ERROR:
            return {
                ...state,
                forgotPasswordReducer: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
              ////
        case actionTypes.RESET_PASSWORD_WATCHER:
            return {
                ...state,
                resetPasswordReducer: {
                    data: null,
                    error: null,
                    isLoading: true
                },
            };
        case actionTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetPasswordReducer: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.RESET_PASSWORD_ERROR:
            return {
                ...state,
                resetPasswordReducer: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        default:
            return state;
    }
};
