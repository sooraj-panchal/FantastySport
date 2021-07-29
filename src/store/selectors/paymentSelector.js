import { createSelector } from 'reselect';

const PaymentReducer = state => state.paymentReducer;

export const walletBalanceSelector = createSelector(
    PaymentReducer,
    walletBalanceSelector => walletBalanceSelector.walletBalanceReducer.data,
);
export const walletBalanceLoading = createSelector(
    PaymentReducer,
    walletBalanceLoading => walletBalanceLoading.walletBalanceReducer.isLoading,
);
// /
export const paymentTransactionSelector = createSelector(
    PaymentReducer,
    paymentTransactionSelector => paymentTransactionSelector.paymentTransactionReducer.data,
);
export const paymentTransactionLoading = createSelector(
    PaymentReducer,
    paymentTransactionLoading => paymentTransactionLoading.paymentTransactionReducer.isLoading,
);
// /
export const walletTransactionSelector = createSelector(
    PaymentReducer,
    walletTransactionSelector => walletTransactionSelector.walletTransactionReducer.data,
);
export const walletTransactionLoading = createSelector(
    PaymentReducer,
    walletTransactionLoading => walletTransactionLoading.walletTransactionReducer.isLoading,
);
