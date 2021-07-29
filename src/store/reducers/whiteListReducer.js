import * as actionTypes from '../actionTypes';

const initialState = {
    data: null,
    error: null,
    isLoading: false,
    asyncBuyerData: {
        data: null,
        error: null,
        isLoading: false
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ASYNC_BUYER_DATA_WATCHER:
            return {
                ...state,
                asyncBuyerData: {
                    data: null,
                    error: null,
                    isLoading: true
                },
            };
        case actionTypes.ASYNC_BUYER_DATA_SUCCESS:
            return {
                ...state,
                asyncBuyerData: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.ASYNC_BUYER_DATA_ERROR:
            return {
                ...state,
                asyncBuyerData: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        default:
            return state;
    }
};
