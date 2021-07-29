import { getUserAddressWathcer } from '../actions';
import * as actionTypes from '../actionTypes';

const initialState = {
    defaultAddress: {
        data: null,
        error: null,
        isLoading: false
    },
    addUserAddress: {
        data: null,
        error: null,
        isLoading: false
    },
    getUserAddress: {
        data: null,
        error: null,
        isLoading: false
    },
    deleteUserAddress: {
        data: null,
        error: null,
        isLoading: false
    },
    updateDefaultAddress: {
        data: null,
        error: null,
        isLoading: false
    },
    updateUserAddress: {
        data: null,
        error: null,
        isLoading: false
    },
    getUserProfile: {
        data: null,
        error: null,
        isLoading: false
    },
    updateUserProfile: {
        data: null,
        error: null,
        isLoading: false
    }
};


export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DEFAULT_ADDRESS_WATCHER:
            return {
                ...state,
                defaultAddress: {
                    data: null,
                    error: null,
                    isLoading: true
                },
                updateDefaultAddress: {
                    data: null,
                    error: null,
                    isLoading: false
                },
            };
        case actionTypes.DEFAULT_ADDRESS_SUCCESS:
            return {
                ...state,
                defaultAddress: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.DEFAULT_ADDRESS_ERROR:
            return {
                ...state,
                defaultAddress: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        ////

        case actionTypes.ADD_USER_ADDRESS_WATCHER:
            return {
                ...state,
                addUserAddress: {
                    data: null,
                    error: null,
                    isLoading: true
                }
            };
        case actionTypes.ADD_USER_ADDRESS_SUCCESS:
            return {
                ...state,
                addUserAddress: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                },
            };
        case actionTypes.ADD_USER_ADDRESS_ERROR:
            return {
                ...state,
                addUserAddress: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        ////
        case actionTypes.GET_USER_ADDRESS_WATCHER:
            return {
                ...state,
                getUserAddress: {
                    data: null,
                    error: null,
                    isLoading: true,
                },
                addUserAddress: {
                    data: null,
                    error: null,
                    isLoading: false
                },
                updateUserAddress: {
                    data: null,
                    error: null,
                    isLoading: false
                },
            };
        case actionTypes.GET_USER_ADDRESS_SUCCESS:
            return {
                ...state,
                getUserAddress: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.GET_USER_ADDRESS_ERROR:
            return {
                ...state,
                getUserAddress: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        ///

        case actionTypes.DELETE_USER_ADDRESS_WATCHER:
            return {
                ...state,
                deleteUserAddress: {
                    data: null,
                    error: null,
                    isLoading: true
                },
            };
        case actionTypes.DELETE_USER_ADDRESS_SUCCESS:
            return {
                ...state,
                deleteUserAddress: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.DELETE_USER_ADDRESS_ERROR:
            return {
                ...state,
                deleteUserAddress: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        /////
        case actionTypes.UPDATE_DEFAULT_ADDRESS_WATCHER:
            return {
                ...state,
                updateDefaultAddress: {
                    data: null,
                    error: null,
                    isLoading: true
                },
            };
        case actionTypes.UPDATE_DEFAULT_ADDRESS_SUCCESS:
            return {
                ...state,
                updateDefaultAddress: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.UPDATE_DEFAULT_ADDRESS_ERROR:
            return {
                ...state,
                updateDefaultAddress: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        //
        case actionTypes.UPDATE_USER_ADDRESS_WATCHER:
            return {
                ...state,
                updateUserAddress: {
                    data: null,
                    error: null,
                    isLoading: true
                },
            };
        case actionTypes.UPDATE_USER_ADDRESS_SUCCESS:
            return {
                ...state,
                updateUserAddress: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.UPDATE_USER_ADDRESS_ERROR:
            return {
                ...state,
                updateUserAddress: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        ///
        case actionTypes.GET_USER_PROFILE_WATCHER:
            return {
                ...state,
                getUserProfile: {
                    data: null,
                    error: null,
                    isLoading: true
                },
            };
        case actionTypes.GET_USER_PROFILE_SUCCESS:
            return {
                ...state,
                getUserProfile: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.GET_USER_PROFILE_ERROR:
            return {
                ...state,
                getUserProfile: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        /////
        case actionTypes.UPDATE_USER_PROFILE_WATCHER:
            return {
                ...state,
                updateUserProfile: {
                    data: null,
                    error: null,
                    isLoading: true
                },
            };
        case actionTypes.UPDATE_USER_PROFILE_SUCCESS:
            return {
                ...state,
                updateUserProfile: {
                    data: action.payload,
                    error: null,
                    isLoading: false
                }
            };
        case actionTypes.UPDATE_USER_PROFILE_ERROR:
            return {
                ...state,
                updateUserProfile: {
                    data: null,
                    error: action.payload,
                    isLoading: false
                }
            };
        default:
            return state;
    }
};
