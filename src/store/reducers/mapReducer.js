import * as actionTypes from '../actionTypes';

const initialState = {
    productCount: null,
    error: null,
    isLoading: false,
    storeDataReducer: {
        data: null,
        error: null,
        isLoading: false
    },
    setStoreReducer: {
        data: null,
        error: null,
        isLoading: false
    },
    getMystoreReducer: {
        data: null,
        error: null,
        isLoading: false
    }
};


export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_STORE_DATA_WATCHER:
            return {
                ...state,
                storeDataReducer: {
                    data: null,
                    error: null,
                    isLoading: true
                },
            };
        case actionTypes.GET_STORE_DATA_SUCCESS:
            return {
                ...state,
                storeDataReducer: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.GET_STORE_DATA_ERROR:
            return {
                ...state,
                storeDataReducer: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            }
        ///
        case actionTypes.SET_STORE_WATCHER:
            return {
                ...state,
                setStoreReducer: {
                    data: null,
                    error: null,
                    isLoading: true
                }
            };
        case actionTypes.SET_STORE_SUCCESS:
            return {
                ...state,
                setStoreReducer: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.SET_STORE_ERROR:
            return {
                ...state,
                setStoreReducer: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            }
        ///
        case actionTypes.FOR_HOME_GET_MY_STORE_WATCHER:
            return {
                ...state,
                getMystoreReducer: {
                    data: null,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.GET_MY_STORE_WATCHER:
            return {
                ...state,
                getMystoreReducer: {
                    data: null,
                    error: null,
                    isLoading: true
                },
                setStoreReducer: {
                    data: null,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.GET_MY_STORE_SUCCESS:
            return {
                ...state,
                getMystoreReducer: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.GET_MY_STORE_ERROR:
            return {
                ...state,
                getMystoreReducer: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            }
        default:
            return state;
    }
};
