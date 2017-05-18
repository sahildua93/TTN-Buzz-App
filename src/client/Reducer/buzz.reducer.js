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
}

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
            const Buzz = state.buzz;

            console.log('previous buzz -----XXXX', Buzz);
            //console.log('data in reducer', action.data);
            let _buzz = [ ...Buzz ];
            const currentBuzz = _buzz.find((buzz) => (buzz._id === action.data.buzz_id));
            console.log("previous current buzz ",currentBuzz)
           let indexOfLike= currentBuzz.likes_dislikes.indexOf(action.data.userId);
          // console.log("action data",action.data);
          // console.log("like-dislike array",currentBuzz.likes_dislikes);
           let newObj = currentBuzz.likes_dislikes.find((items) => (items.user_id === action.data.user_id));
           //console.log("index of like",newObj);
           let indexOfLikes = currentBuzz.po.indexOf(newObj);
          // console.log("index is :",indexOfLikes);
           currentBuzz.likes_dislikes.splice(indexOfLikes,1,action.data);
            state.buzz = _buzz
            console.log('updatedcurrent buzz-------zzz',currentBuzz);
            return {
                ...state,
                buzz: _buzz,
                likes_updated: true,
            }
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