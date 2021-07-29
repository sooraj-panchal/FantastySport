import * as actionTypes from '../actionTypes';

export const walletBalanceWatcher = (payload) => ({
    type: actionTypes.WALLET_BALANCE_WATCHER,
    payload
});

export const walletBalanceSuccess = (payload) => ({
    type: actionTypes.WALLET_BALANCE_SUCCESS,
    payload
});

export const walletBalanceError = (payload) => ({
    type: actionTypes.WALLET_BALANCE_ERROR,
    payload
});
///
export const paymentTransactionWatcher = (payload) => ({
    type: actionTypes.PAYMENT_TRAINSACTION_WATCHER,
    payload
});

export const paymentTransactionSuccess = (payload) => ({
    type: actionTypes.PAYMENT_TRAINSACTION_SUCCESS,
    payload
});

export const paymentTransactionError = (payload) => ({
    type: actionTypes.PAYMENT_TRAINSACTION_ERROR,
    payload
});
///
export const walletTransactionWatcher = (payload) => ({
    type: actionTypes.WALLET_TRANSACTION_WATCHER,
    payload
});

export const walletTransactionSuccess = (payload) => ({
    type: actionTypes.WALLET_TRANSACTION_SUCCESS,
    payload
});

export const walletTransactionError = (payload) => ({
    type: actionTypes.WALLET_TRANSACTION_ERROR,
    payload
});


