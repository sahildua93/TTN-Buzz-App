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
    let _ = require('lodash');

const initialState = {
    buzz: [],
    skip: 0,
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
            const buzz = state.buzz.concat(action.data);
            let incSkip = state.skip+5;
            return {
                ...state,
                buzz,
                creating: false,
                created: true,
                skip: incSkip,
            }
        }
        case FETCH_BUZZ_FAILURE : {
            return {
                ...state,
                error: action.error,
            }
        }
        case LIKE_DISLIKE_STARTED : {
            return {
                ...state,
            }
        }
        case LIKE_DISLIKE_SUCCESS : {
          let Buzz = JSON.stringify(state.buzz);
          let allBuzz = JSON.parse(Buzz);
          let changedvalue = action.data;
          let like_dislike_buzz = allBuzz.find((items) => (items._id === changedvalue.buzz_id));
          let indexOfBuzz = _.findIndex(allBuzz, like_dislike_buzz);
          if(changedvalue.category === 'like'){
              _.remove(like_dislike_buzz.dislike, (o) =>( o.user_id ===changedvalue.user_id ));
              _.remove(like_dislike_buzz.likes, (o) =>( o.user_id ===changedvalue.user_id ));
              like_dislike_buzz.likes.push(changedvalue);
              allBuzz.splice(indexOfBuzz,1,like_dislike_buzz);
          }
          else if(changedvalue.category === 'dislike') {
              _.remove(like_dislike_buzz.likes, (o) =>( o.user_id ===changedvalue.user_id ));
              _.remove(like_dislike_buzz.dislike, (o) =>( o.user_id ===changedvalue.user_id ));
              like_dislike_buzz.dislike.push(changedvalue);
              allBuzz.splice(indexOfBuzz,1,like_dislike_buzz);
          }
            return {
                ...state,
                buzz: allBuzz,
            };
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