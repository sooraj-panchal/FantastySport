import { call, put, takeLatest } from "redux-saga/effects";
import * as globals from '../../utils/globals'
import * as actionTypes from "../../store/actionTypes";
import { addProductRatingError, addProductRatingSuccess, addWishListErrro, addWishListSuccess, getCatAllProductError, getCatAllProductSuccess, getDefaultAddressError, getDefaultAddressSuccess, getProuductReviewSuccess, getProuductReviewtError, getWishListError, getWishListSuccess, getWishListWatcher, offerProductError, offerProductSuccess, productDetailError, productDetailSuccess, ProductListError, ProductListSuccess, searchProductError, searchProductSuccess } from "../actions";
import { addToWishListApi, offerProductApi, searchProductApi, getWishListApi, productListApi, addProductRatingApi, getProductReviewApi } from "../apiService";

function getCatAllProductsApi(data) {
    return fetch(globals.mainUrl + globals.catAllProducts, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, user_id: globals.userId })
    }).then(res => res.json())
}


function* getCatAllProductsActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(getCatAllProductsApi, variable);
        console.log("======>getCatAllProductsApi Response ", response)
        yield put(getCatAllProductSuccess(response.data))
    } catch (e) {
        console.log("=====>getCatAllProductsApi Error", e)
        yield put(getCatAllProductError(e));
    }
}

export function* catAllProductSaga() {
    yield takeLatest(actionTypes.CAT_ALL_PRODUCTS_WATCHER, getCatAllProductsActionEffect);
}

//////

function getProductDetailsApi(data) {
    return fetch(globals.mainUrl + globals.product_list, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}


function* getProductDetailActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(getProductDetailsApi, variable);
        console.log("======>getProductDetailsApi Response ", response)
        yield put(productDetailSuccess(response.data));
    } catch (e) {
        console.log("=====>getProductDetailsApi Error", e)
        yield put(productDetailError(e));
    }
}

export function* productDetailSaga() {
    yield takeLatest(actionTypes.PRODUCT_DETAILS_WATCHER, getProductDetailActionEffect);
}
///
function* searchProductActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(searchProductApi, variable);
        console.log("======>searchProductApi Response ", response)
        yield put(searchProductSuccess(response));
    } catch (e) {
        console.log("=====>searchProductApi Error", e)
        yield put(searchProductError(e));
    }
}

export function* searchProductSaga() {
    yield takeLatest(actionTypes.SEARCH_PRODUCT_WATCHER, searchProductActionEffect);
}
///
function* offerProductActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(offerProductApi, variable);
        console.log("======>offerProductApi Response ", response)
        yield put(offerProductSuccess(response));
    } catch (e) {
        console.log("=====>offerProductApi Error", e)
        yield put(offerProductError(e));
    }
}

export function* offerProductSaga() {
    yield takeLatest(actionTypes.OFFER_PRODUCT_WATCHER, offerProductActionEffect);
}
///
function* addToWishListActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(addToWishListApi, variable);
        console.log("======>addToWishListApi Success", response)
        yield put(addWishListSuccess(response));
        yield put(getWishListWatcher({
            user_id: globals.userId
        }));
    } catch (e) {
        // const error = responseError(e);
        console.log("=====>addToWishListApi error ", e)
        yield put(addWishListErrro(e));
    }
}
export function* addToWishListSaga() {
    yield takeLatest(actionTypes.ADD_TO_WISHLIST_WATCHER, addToWishListActionEffect);
}
///
function* getWishListActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(getWishListApi, variable);
        console.log("======>getWishListApi Success", response)
        yield put(getWishListSuccess(response));
    } catch (e) {
        // const error = responseError(e);
        console.log("=====>getWishListApi error ", e)
        yield put(getWishListError(e));
    }
}
export function* getWishListSaga() {
    yield takeLatest(actionTypes.GET_WISHLIST_WATCHER, getWishListActionEffect);
}
///
function* productListActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(productListApi, variable);
        console.log("======>productListApi Success", response)
        yield put(ProductListSuccess(response));
    } catch (e) {
        // const error = responseError(e);
        console.log("=====>productListApi error ", e)
        yield put(ProductListError(e));
    }
}
export function* productListSaga() {
    yield takeLatest(actionTypes.PRODUCTLIST_WATCHER, productListActionEffect);
}
///
function* addProductRatingActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(addProductRatingApi, variable);
        console.log("======>addProductRatingApi Success", response)
        globals.successMessage=response.message
        yield put(addProductRatingSuccess(response));
    } catch (e) {
        // const error = responseError(e);
        console.log("=====>addProductRatingApi error ", e)
        yield put(addProductRatingError(e));
    }
}
export function* addProductRatingSaga() {
    yield takeLatest(actionTypes.ADD_PRODUCT_RATING_WATCHER, addProductRatingActionEffect);
}
///
function* getProductReviewActionEffect(action) {
    let variable = {
        ...action.payload
    }
    try {
        const response = yield call(getProductReviewApi, variable);
        console.log("======>getProductReviewApi Response ", response)
        yield put(getProuductReviewSuccess(response));
    } catch (e) {
        console.log("=====>getProductReviewApi Error", e)
        yield put(getProuductReviewtError(e));
    }
}

export function* getProductReviewSaga() {
    yield takeLatest(actionTypes.GET_PRODUCT_REVIEW_WATCHER, getProductReviewActionEffect);
}