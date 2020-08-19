import ACTION from '../actions/actionTypes';

const initialState = {
    isFetching: true,
    productData: null,
    error: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_PRODUCT_BY_ID_REQUEST: {
            return {
                ...state,
                isFetching: true,
                productData: null,
                error: null,
            }
        }
        case ACTION.GET_PRODUCT_BY_ID_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                productData: action.productData,
                error: null,
            }
        }
        case ACTION.GET_PRODUCT_BY_ID_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        }
        default:
            return state;
    }
}