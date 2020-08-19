import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import userReducer from "./userReducer";
import getProductsReducer from "./getProductsReducer";
import getProductByIdReducer from "./getProductByIdReducer";
import createReviewReducer from "./createReviewReducer";

const appReducer = combineReducers({
    form: formReducer,
    productsStore: getProductsReducer,
    productByIdStore: getProductByIdReducer,
    userStore: userReducer,
    auth: authReducer,
    reviewStore: createReviewReducer
});

export default appReducer;