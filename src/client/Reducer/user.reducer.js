/**
 * Created by sahil-dua on 9/5/17.
 */
import {
    FETCH_USER_STARTED,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
}from '../Config/constant';

const initialState = {
    loading : false,
    user: {},
    error: null,
}

export default function (state = initialState, action) {
    switch (action.type){
        case FETCH_USER_STARTED : {
            return {
                ...state,
                loading: true,
            }
        }
        case FETCH_USER_SUCCESS : {
            const user = action.data;
            return {
                ...state,
                loading: false,
                    user
            }
        }
        case FETCH_USER_FAILURE : {
            return {
                    ...state,
                    error: action.error,
            }
        }
        default : {
            return state;
        }
    }
}
