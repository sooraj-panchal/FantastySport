import * as actionTypes from '../actionTypes';

const initialState = {
    getOrder: {
        data: null,
        error: null,
        isLoading: false
    },
    addOrder: {
        data: null,
        error: null,
        isLoading: false
    },
    cancelOrder: {
        data: null,
        error: null,
        isLoading: false
    },
    trackOrder: {
        data: null,
        error: null,
        isLoading: false
    },
    getCompletedOrderReducer: {
        data: null,
        error: null,
        isLoading: false
    },
    getCancelledOrderReducer: {
        data: null,
        error: null,
        isLoading: false
    },
    getPromocodeReducer: {
        data: null,
        error: null,
        isLoading: false
    },
    applyPromocodeReducer: {
        data: null,
        error: null,
        isLoading: false
    },
};


export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ORDER_WATCHER:
            return {
                ...state,
                getOrder: {
                    data: null,
                    error: null,
                    isLoading: true
                },
                addOrder: {
                    data: null,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.GET_ORDER_SUCCESS:
            return {
                ...state,
                getOrder: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.GET_ORDER_ERROR:
            return {
                ...state,
                getOrder: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        ///
        case actionTypes.ADD_ORDER_WATCHER:
            return {
                ...state,
                addOrder: {
                    data: null,
                    error: null,
                    isLoading: true
                }
            };
        case actionTypes.ADD_ORDER_SUCCESS:
            return {
                ...state,
                addOrder: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.ADD_ORDER_ERROR:
            return {
                ...state,
                addOrder: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        ///
        case actionTypes.TRACK_ORDER_WATCHER:
            return {
                ...state,
                trackOrder: {
                    data: null,
                    error: null,
                    isLoading: true
                }
            };
        case actionTypes.TRACK_ORDER_SUCCESS:
            return {
                ...state,
                trackOrder: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.TRACK_ORDER_ERROR:
            return {
                ...state,
                trackOrder: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        ///
        case actionTypes.CANCEL_ORDER_WATCHER:
            return {
                ...state,
                cancelOrder: {
                    data: null,
                    error: null,
                    isLoading: true
                }
            };
        case actionTypes.CANCEL_ORDER_SUCCESS:
            return {
                ...state,
                cancelOrder: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.CANCEL_ORDER_ERROR:
            return {
                ...state,
                cancelOrder: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        ////
        case actionTypes.GET_COMPLETED_ORDER_WATCHER:
            return {
                ...state,
                getCompletedOrderReducer: {
                    data: null,
                    error: null,
                    isLoading: true
                }
            };
        case actionTypes.GET_COMPLETED_ORDER_SUCCESS:
            return {
                ...state,
                getCompletedOrderReducer: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.GET_COMPLETED_ORDER_ERROR:
            return {
                ...state,
                getCompletedOrderReducer: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        ///
        case actionTypes.GET_CANCELLED_ORDER_WATCHER:
            return {
                ...state,
                getCancelledOrderReducer: {
                    data: null,
                    error: null,
                    isLoading: true
                }
            };
        case actionTypes.GET_CANCELLED_ORDER_SUCCESS:
            return {
                ...state,
                getCancelledOrderReducer: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.GET_CANCELLED_ORDER_ERROR:
            return {
                ...state,
                getCancelledOrderReducer: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        ///
        case actionTypes.GET_PROMOCODE_WATCHER:
            return {
                ...state,
                getPromocodeReducer: {
                    data: null,
                    error: null,
                    isLoading: true
                }
            };
        case actionTypes.GET_PROMOCODE_SUCCESS:
            return {
                ...state,
                getPromocodeReducer: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.GET_PROMOCODE_ERROR:
            return {
                ...state,
                getPromocodeReducer: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        ///
        case actionTypes.APPLY_PROMOCODE_WATCHER:
            return {
                ...state,
                applyPromocodeReducer: {
                    data: null,
                    error: null,
                    isLoading: true
                }
            };
        case actionTypes.APPLY_PROMOCODE_SUCCESS:
            return {
                ...state,
                applyPromocodeReducer: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.APPLY_PROMOCODE_ERROR:
            return {
                ...state,
                applyPromocodeReducer: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        default:
            return state;
    }
};
