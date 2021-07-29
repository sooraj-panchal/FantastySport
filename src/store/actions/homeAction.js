import * as actionTypes from '../actionTypes';

export const getHomeSliderWatcher = (payload) => ({
    type: actionTypes.HOME_SLIDER_WATCHER, payload
});

export const getHomeSliderSuccess = (payload) => ({
    type: actionTypes.HOME_SLIDER_SUCCESS,
    payload
});
export const getHomeSliderError = (payload) => ({
    type: actionTypes.HOME_SLIDER_ERROR,
    payload
});

export const getHomeCategoryWatcher = (payload) => ({
    type: actionTypes.HOME_CATEGORY_WATCHER,
    payload
});
export const getHomeCategorySuccess = (payload) => ({
    type: actionTypes.HOME_CATEGORY_SUCCESS,
    payload
});
export const getHomeCategoryError = (payload) => ({
    type: actionTypes.HOME_CATEGORY_ERROR,
    payload
});
//
export const getSubCatAllWatcher = (payload) => ({
    type: actionTypes.SUB_CATEGORY_ALL_WATCHER,
    payload
});
export const getSubCatAllSuccess = (payload) => ({
    type: actionTypes.SUB_CATEGORY_ALL_SUCCESS,
    payload
});
export const getSubCatAllError = (payload) => ({
    type: actionTypes.SUB_CATEGORY_ALL_ERROR,
    payload
});
//
export const tokenWatcher = (payload) => ({
    type: actionTypes.TOKEN_WATCHER,
    payload
});
export const tokenSuccess = (payload) => ({
    type: actionTypes.TOKEN_SUCCESS,
    payload
});
export const tokenError = (payload) => ({
    type: actionTypes.TOKEN_ERROR,
    payload
});
// 
