import { createSelector } from 'reselect';

const whiteListReducer = state => state.whiteListReducer;

export const asyncBuyerDataSelector = createSelector(
    whiteListReducer,
    asyncBuyerDataSelector => asyncBuyerDataSelector.asyncBuyerData.data,
);
export const asyncBuyerDataLoading = createSelector(
    whiteListReducer,
    asyncBuyerDataLoading => asyncBuyerDataLoading.asyncBuyerData.isLoading
);
