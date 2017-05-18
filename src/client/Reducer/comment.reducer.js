/**
 * Created by sahil-dua on 18/5/17.
 */
import {
    CREATE_COMMENT_STARTED,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_FAILURE,
    FETCH_COMMENTS_STARTED,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE
}from '../Config/constant';

const initialState = {
    loading : false,
    comment: [],
    error: null,
};

export default function (state = initialState, action) {
    switch (action.type){
        case CREATE_COMMENT_STARTED : {
            return {
                ...state,
                loading: true,
            }
        }
        case CREATE_COMMENT_SUCCESS : {
            const comment = state.comment.concat(action.data);
            return {
                ...state,
                comment,
                loading: false,
            }
        }
        case CREATE_COMMENT_FAILURE : {
            return {
                ...state,
                error: action.error,
            }
        }
        case FETCH_COMMENTS_STARTED : {
            return {
                ...state,
                creating: true,
            }
        }
        case FETCH_COMMENTS_SUCCESS : {
            const comment = action.data;
            return {
                ...state,
                comment,
                creating: false,
                created: true,
            }
        }
        case FETCH_COMMENTS_FAILURE : {
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