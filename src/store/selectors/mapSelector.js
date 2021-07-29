import { createSelector } from 'reselect';

const mapReducer = state => state.mapReducer;

export const getStoreDataSelector = createSelector(
    mapReducer,
    getStoreDataSelector => getStoreDataSelector.storeDataReducer.data,
);
export const getStoreDataLoading = createSelector(
    mapReducer,
    getStoreDataLoading => getStoreDataLoading.storeDataReducer.isLoading
);

export const setStoreSelector = createSelector(
    mapReducer,
    setStoreSelector => setStoreSelector.setStoreReducer.data,
);
export const setStoreLoading = createSelector(
    mapReducer,
    setStoreLoading => setStoreLoading.setStoreReducer.isLoading
);

export const getMyStoreSelector = createSelector(
    mapReducer,
    getMyStoreSelector => getMyStoreSelector.getMystoreReducer.data,
);
export const getMyStoreLoading = createSelector(
    mapReducer,
    getMyStoreLoading => getMyStoreLoading.getMystoreReducer.isLoading
);