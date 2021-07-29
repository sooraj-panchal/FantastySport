import { createSelector } from 'reselect';

const cartReducer = state => state.cartReducer;

export const addToCartSelector = createSelector(
    cartReducer,
    addToCart => addToCart.addToCart.data,
);
export const getCartDetailsSelector = createSelector(
    cartReducer,
    getCartDetailsSelector => getCartDetailsSelector.getCartDetailsReducer.data,
);

export const getCartDetailsLoading = createSelector(
    cartReducer,
    getCartDetailsLoading => getCartDetailsLoading.getCartDetailsReducer.isLoading,
);




