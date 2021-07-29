import * as actionTypes from '../actionTypes';

const initialState = {
    addToCart: {
        data: null,
        error: null,
        isLoading: false
    },
    getCartDetailsReducer: {
        data: null,
        error: null,
        isLoading: false
    }
};


export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.Add__CART_WATCHER:
            return {
                ...state,
                addToCart: {
                    data: null,
                    error: null,
                    isLoading: true
                }
            };
        case actionTypes.Add__CART_SUCCESS:
            return {
                ...state,
                addToCart: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.Add__CART_ERROR:
            return {
                ...state,
                addToCart: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
            ///
            case actionTypes.GET_CART_DETAILS_WATCHER:
            return {
                ...state,
                getCartDetailsReducer: {
                    data: null,
                    error: null,
                    isLoading: true
                }
            };
        case actionTypes.GET_CART_DETAILS_SUCCESS:
            return {
                ...state,
                getCartDetailsReducer: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.GET_CART_DETAILS_ERROR:
            return {
                ...state,
                getCartDetailsReducer: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        default:
            return state;
    }
};
