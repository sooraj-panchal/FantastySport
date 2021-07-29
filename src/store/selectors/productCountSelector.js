import { createSelector } from 'reselect';

const productCountReducer = state => state.productCountReducer;

export const getProductCountSelector = createSelector(
    productCountReducer,
    productCount => productCount.productCount,
);


