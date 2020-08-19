import {put} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import * as restController from '../api/rest/restController';

export function* createReviewSaga(action) {
    try {
        const {data} = yield restController.createReview(action.data);
        yield put({type: ACTION.CREATE_REVIEW_ACTION_SUCCESS, data: data});
    } catch (err) {
        yield  put({type: ACTION.CREATE_REVIEW_ACTION_ERROR, error: err.response});
    }
}