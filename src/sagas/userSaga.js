import {put} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';

export function* headerRequestSaga(){
    yield put({type: ACTION.GET_USER_REQUEST});
    try{
        const data = localStorage.getItem("user");
        yield  put({type: ACTION.GET_USER_SUCCESS, data: data});
    }
    catch (e) {
        yield put({type: ACTION.GET_USER_ERROR, error: e.response});
    }
}