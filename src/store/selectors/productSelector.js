import { createSelector } from 'reselect';

const productReducer = state => state.productReducer;

export const getCatAllProductSelector = createSelector(
    productReducer,
    isLoading => isLoading.catAllProducts.data,
);

export const getCatAllProductLoading = createSelector(
    productReducer,
    catAllProductsData => catAllProductsData.catAllProducts.isLoading,
);

export const getProductDetailsSelector = createSelector(
    productReducer,
    productDetails => productDetails.productDetails.data,
);

export const getProductDetailsLoading = createSelector(
    productReducer,
    productDetailsLoading => productDetailsLoading.productDetails.isLoading,
);
///
export const searchProductSelector = createSelector(
    productReducer,
    searchProductSelector => searchProductSelector.searchProductReducer.data,
);

export const searchProductLoading = createSelector(
    productReducer,
    searchProductLoading => searchProductLoading.searchProductReducer.isLoading,
);
///
export const offerProductSelector = createSelector(
    productReducer,
    offerProductSelector => offerProductSelector.offerProductReducer.data,
);

export const offerProductLoading = createSelector(
    productReducer,
    offerProductLoading => offerProductLoading.offerProductReducer.isLoading,
);
///
export const addToWishListSelector = createSelector(
    productReducer,
    addToWishListSelector => addToWishListSelector.addToWishListReducer.data,
);

export const addToWishListLoading = createSelector(
    productReducer,
    addToWishListLoading => addToWishListLoading.addToWishListReducer.isLoading,
);
///
export const getWishListSelector = createSelector(
    productReducer,
    getWishListSelector => getWishListSelector.getWishListReducer.data,
);

export const getWishListLoading = createSelector(
    productReducer,
    getWishListLoading => getWishListLoading.getWishListReducer.isLoading,
);
///
export const productListSelector = createSelector(
    productReducer,
    productListSelector => productListSelector.productListReducer.data,
);

export const productListLoading = createSelector(
    productReducer,
    productListLoading => productListLoading.productListReducer.isLoading,
);
///
export const addProductRatingSelector = createSelector(
    productReducer,
    addProductRatingSelector => addProductRatingSelector.addProductRatingReducer.data,
);

export const addProductRatingLoading = createSelector(
    productReducer,
    addProductRatingLoading => addProductRatingLoading.addProductRatingReducer.isLoading,
);
///
export const getProductReviewSelector = createSelector(
    productReducer,
    getProductReviewSelector => getProductReviewSelector.getProductReviewReducer.data,
);

export const getProductReviewLoading = createSelector(
    productReducer,
    getProductReviewLoading => getProductReviewLoading.getProductReviewReducer.isLoading,
);
