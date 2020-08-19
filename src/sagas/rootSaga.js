import {takeLatest} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import {registerSaga, loginSaga} from './authSagas';
import {headerRequestSaga} from './userSaga';
import {getProductByIdSaga, getProductsSaga} from "./productsSaga";
import {createReviewSaga} from "./reviewSaga";

function* rootSaga() {
    yield takeLatest(ACTION.AUTH_ACTION_REGISTER, registerSaga);
    yield takeLatest(ACTION.AUTH_ACTION_LOGIN, loginSaga);
    yield takeLatest(ACTION.HEADER_REQUEST_AUTHORIZE, headerRequestSaga);
    yield takeLatest(ACTION.GET_PRODUCTS_ACTION_REQUEST, getProductsSaga);
    yield takeLatest(ACTION.GET_PRODUCT_BY_ID_ACTION, getProductByIdSaga);
    yield takeLatest(ACTION.CREATE_REVIEW_ACTION, createReviewSaga);
}

export default rootSaga;