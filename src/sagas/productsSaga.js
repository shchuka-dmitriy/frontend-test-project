import {put} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import * as restController from '../api/rest/restController';

export  function* getProductsSaga() {
    try{
        const { data } = yield restController.getProducts();
        yield  put({type: ACTION.GET_PRODUCTS_ACTION_SUCCESS, products: data});
    }
    catch (e) {
        yield put({type: ACTION.GET_PRODUCTS_ACTION_ERROR, error: e.response});
    }
}

export function* getProductByIdSaga(action){
    yield put({type: ACTION.GET_PRODUCT_BY_ID_REQUEST});
    try{
        const {data} = yield  restController.getProductById(action.id);
        yield  put({type: ACTION.GET_PRODUCT_BY_ID_SUCCESS, productData: data});
    }
    catch (e) {
        yield put({type: ACTION.GET_PRODUCT_BY_ID_ERROR, error: e.response});
    }
}