import { createSelector } from 'reselect';

const homeReducer = state => state.homeReducer;
const whiteListReducer = state => state.whiteListReducer;


export const getHomeSliderSelector = createSelector(
    homeReducer,
    sliderImage => sliderImage.data,
);

export const getHomeCategorySelector = createSelector(
    homeReducer,
    homeCategory => homeCategory.homeCategory.data,
);
export const getHomeCategoryLoading = createSelector(
    homeReducer,
    isLoading => isLoading.homeCategory.isLoading
);

export const getSubCatAllSelector = createSelector(
    homeReducer,
    subCatAll => subCatAll.subCatAll.data,
);
//
export const tokenSelector = createSelector(
    whiteListReducer,
    tokenSelector => tokenSelector.tokenReducer.data,
);
export const tokenLoading = createSelector(
    whiteListReducer,
    tokenLoading => tokenLoading.tokenReducer.isLoading
);


