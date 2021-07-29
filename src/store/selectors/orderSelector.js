import { createSelector } from 'reselect';

const orderReducer = state => state.orderReducer;

export const getOrderSelector = createSelector(
    orderReducer,
    getOrderSelector => getOrderSelector.getOrder.data,
);

export const getOrderLoading = createSelector(
    orderReducer,
    getOrderLoading => getOrderLoading.getOrder.isLoading,
);
/////
export const addOrderSelector = createSelector(
    orderReducer,
    addOrderSelector => addOrderSelector.addOrder.data,
);

export const addOrderLoading = createSelector(
    orderReducer,
    addOrderLoading => addOrderLoading.addOrder.isLoading,
);
///
export const cancelOrderSelector = createSelector(
    orderReducer,
    cancelOrderSelector => cancelOrderSelector.cancelOrder.data,
);

export const cancelOrderLoading = createSelector(
    orderReducer,
    cancelOrderLoading => cancelOrderLoading.cancelOrder.isLoading,
);
////
export const trackOrderSelector = createSelector(
    orderReducer,
    trackOrderSelector => trackOrderSelector.trackOrder.data,
);

export const trackOrderLoading = createSelector(
    orderReducer,
    trackOrderLoading => trackOrderLoading.trackOrder.isLoading,
);
////
export const getCompletedOrderSelector = createSelector(
    orderReducer,
    getCompletedOrderSelector => getCompletedOrderSelector.getCompletedOrderReducer.data,
);
export const getCompletedOrderLoading = createSelector(
    orderReducer,
    getCompletedOrderLoading => getCompletedOrderLoading.getCompletedOrderReducer.isLoading,
);
///
export const getCancelledOrderSelector = createSelector(
    orderReducer,
    getCancelledOrderSelector => getCancelledOrderSelector.getCancelledOrderReducer.data,
);
export const getCancelledOrderLoading = createSelector(
    orderReducer,
    getCancelledOrderLoading => getCancelledOrderLoading.getCancelledOrderReducer.isLoading,
);
///
export const applyPromocodeSelector = createSelector(
    orderReducer,
    applyPromocodeSelector => applyPromocodeSelector.applyPromocodeReducer.data,
);
export const applyPromocodeLoading = createSelector(
    orderReducer,
    applyPromocodeLoading => applyPromocodeLoading.applyPromocodeReducer.isLoading,
);
///
export const getPromocodeSelector = createSelector(
    orderReducer,
    getPromocodeSelector => getPromocodeSelector.getPromocodeReducer.data,
);
export const getPromocodeLoading = createSelector(
    orderReducer,
    getPromocodeLoading => getPromocodeLoading.getPromocodeReducer.isLoading,
);