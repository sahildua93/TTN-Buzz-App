/**
 * Created by sahil-dua on 9/5/17.
 */
import {
    FETCH_USER_STARTED,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
}from '../Config/constant';

const initialState = {
    loading : 'NOT_STARTED',
    user: '',
    error: null,
};

export default function (state = initialState, action) {
    switch (action.type){
        case FETCH_USER_STARTED : {
            return {
                ...state,
                loading: 'STARTED',
            }
        }
        case FETCH_USER_SUCCESS : {
            const user = action.data;

            return {
                ...state,
                loading: 'COMPLETE',
                user,
            }
        }
        case FETCH_USER_FAILURE : {
            return {
                    ...state,
                    user,
                    error: action.error,
                    loading: 'COMPLETE'
            }
        }
        default : {
            return state;
        }
    }
}
