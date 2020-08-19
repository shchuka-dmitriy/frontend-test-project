import {put} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import history from '../browserHistory';
import * as restController from '../api/rest/restController';
import CONSTANTS from "../constants";

export  function* loginSaga(action){
    yield put({type: ACTION.AUTH_ACTION_REQUEST});
    try{
        const userData = yield restController.loginRequest(action.data);
        if (userData) {
            window.localStorage.setItem(CONSTANTS.USER_IN_STORAGE, JSON.parse(userData.config.data).username);
        }
        history.replace('/');
        yield  put({type: ACTION.AUTH_ACTION_SUCCESS, data: action.data});
    }
    catch (err) {
        yield  put({type: ACTION.AUTH_ACTION_ERROR, error: err.response});
    }
}

export  function* registerSaga(action){
    yield put({type: ACTION.AUTH_ACTION_REQUEST});
    try{
        const userData = yield restController.registerRequest(action.data);
        if (userData) {
            window.localStorage.setItem(CONSTANTS.USER_IN_STORAGE, JSON.parse(userData.config.data).username);
        }
        history.replace('/');
        yield put({type: ACTION.AUTH_ACTION_SUCCESS});
    }
    catch (e) {
        yield put({type: ACTION.AUTH_ACTION_ERROR, error: e.response});
    }
}