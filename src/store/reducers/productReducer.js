import * as actionTypes from '../actionTypes';

const initialState = {
    catAllProducts: {
        data: [],
        error: null,
        isLoading: false
    },
    productDetails: {
        data: null,
        error: null,
        isLoading: false
    },
    searchProductReducer: {
        data: null,
        error: null,
        isLoading: false
    },
    offerProductReducer: {
        data: null,
        error: null,
        isLoading: false
    },
    addToWishListReducer: {
        data: null,
        error: null,
        isLoading: false
    },
    getWishListReducer: {
        data: null,
        error: null,
        isLoading: false
    },
    productListReducer: {
        data: null,
        error: null,
        isLoading: false
    },
    addProductRatingReducer: {
        data: null,
        error: null,
        isLoading: false
    },
    getProductReviewReducer: {
        data: null,
        error: null,
        isLoading: false
    }
};


export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CAT_ALL_PRODUCTS_WATCHER:
            return {
                ...state,
                catAllProducts: {
                    data: [],
                    error: null,
                    isLoading: true
                }
            };
        case actionTypes.CAT_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                catAllProducts: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.CAT_ALL_PRODUCTS_ERROR:
            return {
                ...state,
                catAllProducts: {
                    data: [],
                    error: action.payload,
                    isLoading: false
                }
            };
        case actionTypes.PRODUCT_DETAILS_WATCHER:
            return {
                ...state,
                productDetails: {
                    data: null,
                    error: null,
                    isLoading: true
                }
            };
        case actionTypes.PRODUCT_DETAILS_SUCCESS:
            return {
                ...state,
                productDetails: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.PRODUCT_DETAILS_ERROR:
            return {
                ...state,
                productDetails: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        ///
        case actionTypes.SEARCH_PRODUCT_WATCHER:
            return {
                ...state,
                searchProductReducer: {
                    data: null,
                    error: null,
                    isLoading: true
                }
            };
        case actionTypes.SEARCH_PRODUCT_SUCCESS:
            return {
                ...state,
                searchProductReducer: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.SEARCH_PRODUCT_ERROR:
            return {
                ...state,
                searchProductReducer: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        ///
        case actionTypes.OFFER_PRODUCT_WATCHER:
            return {
                ...state,
                offerProductReducer: {
                    data: null,
                    error: null,
                    isLoading: true
                }
            };
        case actionTypes.OFFER_PRODUCT_SUCCESS:
            return {
                ...state,
                offerProductReducer: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.OFFER_PRODUCT_ERROR:
            return {
                ...state,
                offerProductReducer: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        ///
        case actionTypes.ADD_TO_WISHLIST_WATCHER:
            return {
                ...state,
                addToWishListReducer: {
                    data: null,
                    error: null,
                    isLoading: true
                }
            };
        case actionTypes.ADD_TO_WISHLIST_SUCCESS:
            return {
                ...state,
                addToWishListReducer: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.ADD_TO_WISHLIST_ERROR:
            return {
                ...state,
                addToWishListReducer: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        ///
        case actionTypes.GET_WISHLIST_WATCHER:
            return {
                ...state,
                getWishListReducer: {
                    data: null,
                    error: null,
                    isLoading: true
                }
            };
        case actionTypes.GET_WISHLIST_SUCCESS:
            return {
                ...state,
                getWishListReducer: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.GET_WISHLIST_ERROR:
            return {
                ...state,
                getWishListReducer: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        ///
        case actionTypes.PRODUCTLIST_WATCHER:
            return {
                ...state,
                productListReducer: {
                    data: null,
                    error: null,
                    isLoading: true
                }
            };
        case actionTypes.PRODUCTLIST_SUCCESS:
            return {
                ...state,
                productListReducer: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.PRODUCTLIST_ERROR:
            return {
                ...state,
                productListReducer: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        ///
        case actionTypes.ADD_PRODUCT_RATING_WATCHER:
            return {
                ...state,
                addProductRatingReducer: {
                    data: null,
                    error: null,
                    isLoading: true
                }
            };
        case actionTypes.ADD_PRODUCT_RATING_SUCCESS:
            return {
                ...state,
                addProductRatingReducer: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.ADD_PRODUCT_RATING_ERROR:
            return {
                ...state,
                addProductRatingReducer: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
                ///
                case actionTypes.GET_PRODUCT_REVIEW_WATCHER:
                    return {
                        ...state,
                        getProductReviewReducer: {
                            data: null,
                            error: null,
                            isLoading: true
                        }
                    };
                case actionTypes.GET_PRODUCT_REVIEW_SUCCESS:
                    return {
                        ...state,
                        getProductReviewReducer: {
                            data: action.payload,
                            error: null,
                            isLoading: false
                        }
                    };
                case actionTypes.GET_PRODUCT_REVIEW_ERROR:
                    return {
                        ...state,
                        getProductReviewReducer: {
                            data: null,
                            error: action.payload,
                            isLoading: false
                        }
                    };
        default:
            return state;
    }
};
