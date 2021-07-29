import { createSelector } from 'reselect';

const profileReducer = state => state.profileReducer;
const whiteListReducer = state => state.whiteListReducer;

export const getDefaultAddressSelector = createSelector(
    profileReducer,
    defaultAddress => defaultAddress.defaultAddress.data,
);

export const getDefaultAddressLoading = createSelector(
    profileReducer,
    getDefaultAddressLoading => getDefaultAddressLoading.defaultAddress.isLoading,
);


export const addUserAddressSelector = createSelector(
    profileReducer,
    addUserAddressSelector => addUserAddressSelector.addUserAddress.data,
);
export const addUserAddressLoading = createSelector(
    profileReducer,
    addUserAddressLoading => addUserAddressLoading.addUserAddress.isLoading,
);

export const getUserAddressSelector = createSelector(
    profileReducer,
    getUserAddressSelector => getUserAddressSelector.getUserAddress.data,
);

export const getUserAddressLoading = createSelector(
    profileReducer,
    getUserAddressLoading => getUserAddressLoading.getUserAddress.isLoading,
);


export const deleteUserAddressSelector = createSelector(
    profileReducer,
    deleteUserAddressSelector => deleteUserAddressSelector.deleteUserAddress.data,
);

export const deleteUserAddressLoading = createSelector(
    profileReducer,
    deleteUserAddressLoading => deleteUserAddressLoading.deleteUserAddress.isLoading,
);

export const updateDefaultAddressSelector = createSelector(
    profileReducer,
    updateDefaultAddressSelector => updateDefaultAddressSelector.updateDefaultAddress.data,
);

export const updateDefaultAddressLoading = createSelector(
    profileReducer,
    updateDefaultAddressLoading => updateDefaultAddressLoading.updateDefaultAddress.isLoading,
);

export const updateUserAddressSelector = createSelector(
    profileReducer,
    updateUserAddressSelector => updateUserAddressSelector.updateUserAddress.data,
);

export const updateUserAddressLoading = createSelector(
    profileReducer,
    updateUserAddressLoading => updateUserAddressLoading.updateUserAddress.isLoading,
);


export const getUserProfileSelector = createSelector(
    profileReducer,
    getUserProfileSelector => getUserProfileSelector.getUserProfile.data,
);

export const getUserProfileLoading = createSelector(
    profileReducer,
    getUserProfileLoading => getUserProfileLoading.getUserProfile.isLoading,
);

export const updateUserProfileSelector = createSelector(
    profileReducer,
    updateUserProfileSelector => updateUserProfileSelector.updateUserProfile.data,
);

export const updateUserProfileLoading = createSelector(
    profileReducer,
    updateUserProfileLoading => updateUserProfileLoading.updateUserProfile.isLoading,
);

export const getAsynUserDataSelector = createSelector(
    whiteListReducer,
    getAsynUserDataSelector => getAsynUserDataSelector.getAsyncUserData.data,
);