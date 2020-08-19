import ACTION from './actionTypes';

export const headerRequest = () => {
    return {
        type: ACTION.HEADER_REQUEST_AUTHORIZE
    }
};

export const clearUserStore = () => {
    return {
        type: ACTION.CLEAR_USER_STORE
    }
};

export const clearErrorSignUpAndLogin = () => {
    return {
        type: ACTION.AUTH_ACTION_CLEAR_ERROR
    }
};

export const clearAuth = () => {
    return {
        type: ACTION.AUTH_ACTION_CLEAR
    }
};

export const authActionLogin = (data) => {
    return {
        type: ACTION.AUTH_ACTION_LOGIN,
        data: data
    }
};

export const authActionRegister = (data) => {
    return {
        type: ACTION.AUTH_ACTION_REGISTER,
        data: data
    }
};

export const getProductsAction = () => {
    return{
        type: ACTION.GET_PRODUCTS_ACTION_REQUEST,
    }
};

export const getProductByIdAction = (id) => {
    return {
        type: ACTION.GET_PRODUCT_BY_ID_ACTION,
        id: id
    }
};

export const createReviewAction = (data) => {
    return {
        type: ACTION.CREATE_REVIEW_ACTION,
        data: data
    }
};