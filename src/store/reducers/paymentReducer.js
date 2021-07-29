import * as actionTypes from '../actionTypes';

const initialState = {
    user: null,
    error: null,
    isLoading: false,
    walletBalanceReducer: {
        data: null,
        error: null,
        isLoading: true
    },
    walletTransactionReducer: {
        data: null,
        error: null,
        isLoading: false
    },
    paymentTransactionReducer: {
        data: null,
        error: null,
        isLoading: false
    }
};


export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.WALLET_BALANCE_WATCHER:
            return {
                ...state,
                walletBalanceReducer: {
                    data: null,
                    error: null,
                    isLoading: true
                },
            };
        case actionTypes.WALLET_BALANCE_SUCCESS:
            return {
                ...state,
                walletBalanceReducer: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.WALLET_BALANCE_ERROR:
            return {
                ...state,
                walletBalanceReducer: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        ///
        case actionTypes.WALLET_TRANSACTION_WATCHER:
            return {
                ...state,
                walletTransactionReducer: {
                    data: null,
                    error: null,
                    isLoading: true
                },
            };
        case actionTypes.WALLET_TRANSACTION_SUCCESS:
            return {
                ...state,
                walletTransactionReducer: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.WALLET_TRANSACTION_ERROR:
            return {
                ...state,
                walletTransactionReducer: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        ///
        case actionTypes.PAYMENT_TRAINSACTION_WATCHER:
            return {
                ...state,
                paymentTransactionReducer: {
                    data: null,
                    error: null,
                    isLoading: true
                },
            };
        case actionTypes.PAYMENT_TRAINSACTION_SUCCESS:
            return {
                ...state,
                paymentTransactionReducer: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.PAYMENT_TRAINSACTION_ERROR:
            return {
                ...state,
                paymentTransactionReducer: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        default:
            return state;
    }
};
