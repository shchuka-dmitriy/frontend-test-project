import ACTION from '../actions/actionTypes';

const initialState = {
    error: null,
    data: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.CREATE_REVIEW_ACTION_ERROR:{
            return{
                ...state,
                error: action.error,
                data: null
            }
        }
        case ACTION.CREATE_REVIEW_ACTION_SUCCESS:{
            return{
                ...state,
                error: null,
                data: action.data,
            }
        }
        default:
            return state;
    }
};