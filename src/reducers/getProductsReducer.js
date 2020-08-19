import ACTION from '../actions/actionTypes';

const initialState = {
    products: null,
    isFetching: true,
    error: null,
};

export default function (state = initialState, action) {

    switch (action.type) {
        case ACTION.GET_PRODUCTS_ACTION_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null
            }
        }
        case ACTION.GET_PRODUCTS_ACTION_SUCCESS: {
            return {
                ...state,
                products: action.products,
                isFetching: false,
                error: null
            };
        }
        case ACTION.GET_PRODUCTS_ACTION_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}