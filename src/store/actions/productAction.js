import * as actionTypes from '../actionTypes';

export const getCatAllProductWatcher = (payload) => ({
    type: actionTypes.CAT_ALL_PRODUCTS_WATCHER,
    payload
});

export const getCatAllProductSuccess = (payload) => ({
    type: actionTypes.CAT_ALL_PRODUCTS_SUCCESS,
    payload
});

export const getCatAllProductError = (payload) => ({
    type: actionTypes.CAT_ALL_PRODUCTS_ERROR,
    payload
});

export const productDetailWatcher = (payload) => ({
    type: actionTypes.PRODUCT_DETAILS_WATCHER,
    payload
});

export const productDetailSuccess = (payload) => ({
    type: actionTypes.PRODUCT_DETAILS_SUCCESS,
    payload
});

export const productDetailError = (payload) => ({
    type: actionTypes.PRODUCT_DETAILS_ERROR,
    payload
});
//
export const searchProductWatcher = (payload) => ({
    type: actionTypes.SEARCH_PRODUCT_WATCHER,
    payload
});

export const searchProductSuccess = (payload) => ({
    type: actionTypes.SEARCH_PRODUCT_SUCCESS,
    payload
});

export const searchProductError = (payload) => ({
    type: actionTypes.SEARCH_PRODUCT_ERROR,
    payload
});
///
export const offerProductWatcher = (payload) => ({
    type: actionTypes.OFFER_PRODUCT_WATCHER,
    payload
});

export const offerProductSuccess = (payload) => ({
    type: actionTypes.OFFER_PRODUCT_SUCCESS,
    payload
});

export const offerProductError = (payload) => ({
    type: actionTypes.OFFER_PRODUCT_ERROR,
    payload
});

///
export const addWishListWatcher = (payload) => ({
    type: actionTypes.ADD_TO_WISHLIST_WATCHER,
    payload
});

export const addWishListSuccess = (payload) => ({
    type: actionTypes.ADD_TO_WISHLIST_SUCCESS,
    payload
});

export const addWishListErrro = (payload) => ({
    type: actionTypes.ADD_TO_WISHLIST_ERROR,
    payload
});
///
export const getWishListWatcher = (payload) => ({
    type: actionTypes.GET_WISHLIST_WATCHER,
    payload
});

export const getWishListSuccess = (payload) => ({
    type: actionTypes.GET_WISHLIST_SUCCESS,
    payload
});

export const getWishListError = (payload) => ({
    type: actionTypes.GET_WISHLIST_ERROR,
    payload
});
///
export const ProductListWatcher = (payload) => ({
    type: actionTypes.PRODUCTLIST_WATCHER,
    payload
});

export const ProductListSuccess = (payload) => ({
    type: actionTypes.PRODUCTLIST_SUCCESS,
    payload
});

export const ProductListError = (payload) => ({
    type: actionTypes.PRODUCTLIST_ERROR,
    payload
});
///
export const addProductRatingWatcher = (payload) => ({
    type: actionTypes.ADD_PRODUCT_RATING_WATCHER,
    payload
});

export const addProductRatingSuccess = (payload) => ({
    type: actionTypes.ADD_PRODUCT_RATING_SUCCESS,
    payload
});

export const addProductRatingError = (payload) => ({
    type: actionTypes.ADD_PRODUCT_RATING_ERROR,
    payload
});
///
export const getProuductReviewWatcher = (payload) => ({
    type: actionTypes.GET_PRODUCT_REVIEW_WATCHER,
    payload
});

export const getProuductReviewSuccess = (payload) => ({
    type: actionTypes.GET_PRODUCT_REVIEW_SUCCESS,
    payload
});

export const getProuductReviewtError = (payload) => ({
    type: actionTypes.GET_PRODUCT_REVIEW_ERROR,
    payload
});