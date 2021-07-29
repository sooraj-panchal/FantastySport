import * as actionTypes from '../actionTypes';

const initialState = {
    productCount: 0,
    error: null,
    isLoading: false
};


export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PRODUCT_COUNT_PENDING:
            return {
                ...state,
                isLoading: true,
                productCount: state.productCount ? state.productCount : 0
            };
        case actionTypes.PRODUCT_COUNT_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case actionTypes.PRODUCT_COUNT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                productCount: action.payload
            }
        default:
            return state;
    }
};
