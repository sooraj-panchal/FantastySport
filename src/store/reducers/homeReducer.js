import * as actionTypes from '../actionTypes';

const initialState = {
    data: [],
    error: null,
    isLoading: false,
    homeCategory: {
        data: [],
        error: null,
        isLoading: false,
    },
    subCatAll: {
        data: [],
        error: null,
        isLoading: false,
    },

};


export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.HOME_SLIDER_WATCHER:
            return {
                ...state,
                isLoading: true,
            };
        case actionTypes.HOME_SLIDER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case actionTypes.HOME_SLIDER_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };


        case actionTypes.HOME_CATEGORY_WATCHER:
            return {
                ...state,
                homeCategory: {
                    data: [],
                    error: null,
                    isLoading: true,
                },
            };
        case actionTypes.HOME_CATEGORY_SUCCESS:
            return {
                ...state,
                homeCategory: {
                    data: action.payload,
                    error: null,
                    isLoading: false,
                },
            }
        case actionTypes.HOME_CATEGORY_ERROR:
            return {
                ...state,
                homeCategory: {
                    data: null,
                    error: action.payload,
                    isLoading: false,
                },
            };

        case actionTypes.SUB_CATEGORY_ALL_WATCHER:
            return {
                ...state,
                subCatAll: {
                    data: [],
                    error: null,
                    isLoading: true,
                },
            };
        case actionTypes.SUB_CATEGORY_ALL_SUCCESS:
            return {
                ...state,
                subCatAll: {
                    data: action.payload,
                    error: null,
                    isLoading: false,
                },
            }
        case actionTypes.SUB_CATEGORY_ALL_ERROR:
            return {
                ...state,
                subCatAll: {
                    data: null,
                    error: action.payload,
                    isLoading: false,
                },
            };
        default:
            return state;
    }
};
