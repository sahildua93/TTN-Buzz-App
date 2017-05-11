/**
 * Created by sahil-dua on 9/5/17.
 */
import {
    CREATE_BUZZ_STARTED,
    CREATE_BUZZ_SUCCESS,
    CREATE_BUZZ_FAILURE,

}from '../Config/constant';

const initialState = {
    buzz: {},
    creating: false,
    created: false,
}

export default function (state = initialState, action) {
    switch (action.type){
        case CREATE_BUZZ_STARTED : {
            return {
                ...state,
                creating:true,

            }
        }
        case CREATE_BUZZ_SUCCESS : {
            const buzz = action.data;
            return {
                ...state,
                buzz,
                creating:false,
                created: true,

            }
        }
        case CREATE_BUZZ_FAILURE : {
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