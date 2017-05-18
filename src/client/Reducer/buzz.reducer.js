/**
 * Created by sahil-dua on 9/5/17.
 */
import {
    CREATE_BUZZ_STARTED,
    CREATE_BUZZ_SUCCESS,
    CREATE_BUZZ_FAILURE,
    FETCH_BUZZ_STARTED,
    FETCH_BUZZ_SUCCESS,
    FETCH_BUZZ_FAILURE,
    LIKE_DISLIKE_STARTED,
    LIKE_DISLIKE_SUCCESS,
    LIKE_DISLIKE_FAILURE,

}from '../Config/constant';

const initialState = {
    buzz: [],
    creating: false,
    likes_updated: false,
    created: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_BUZZ_STARTED : {
            return {
                ...state,
                creating: true,
            }
        }
        case CREATE_BUZZ_SUCCESS : {
            const createBuzz = state.buzz.concat(action.data);
            return {
                ...state,
                buzz: createBuzz,
                creating: false,
                created: true,
            }
        }
        case CREATE_BUZZ_FAILURE : {
            return {
                ...state,
                error: action.error,
            }
        }
        case FETCH_BUZZ_STARTED : {
            return {
                ...state,
                creating: true,
            }
        }
        case FETCH_BUZZ_SUCCESS : {
            const buzz = action.data;
            return {
                ...state,
                buzz,
                creating: false,
                created: true,
            }
        }
        case FETCH_BUZZ_FAILURE : {
            return {
                ...state,
                error: action.error,
            }
        }
        case LIKE_DISLIKE_STARTED : {
            console.log('state statrted ----ZZZZZZZ', state);
            return {
                ...state,
            }
        }
        case LIKE_DISLIKE_SUCCESS : {
            const Buzz = JSON.stringify(state.buzz);
            const newBuzz = JSON.parse(Buzz);
            const currentBuzz = newBuzz.find((buzz) => (buzz._id === action.data.buzz_id));
           let newObj = currentBuzz.likes_dislikes.find((items) => (items.user_id === action.data.user_id));
           newObj.option = action.data.option;
            console.log('updatedcurrent buzz-------zzz',currentBuzz);
            let _updatedState = {
                ...state,
                buzz: newBuzz,
                likes_updated: true,
            };
            console.log('Updated state is ', _updatedState);
            return _updatedState;
        }
        case LIKE_DISLIKE_FAILURE : {
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