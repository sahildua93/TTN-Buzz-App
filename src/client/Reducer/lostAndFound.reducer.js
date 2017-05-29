/**
 * Created by sahil-dua on 28/5/17.
 */
import {
  FETCH_LOSTANDFOUND_STARTED,
  FETCH_LOSTANDFOUND_SUCCESS,
  FETCH_LOSTANDFOUND_FAILURE,
}from '../Config/constant';

const initialState = {
  loading: false,
  lostAndFoundData: [],
  loaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOSTANDFOUND_STARTED : {
     return {
       ...state,
       loading: true,
     }
    }
    case FETCH_LOSTANDFOUND_SUCCESS : {
      let lostAndFoundData = action.data;
      return {
        ...state,
        lostAndFoundData,
        loading: false,
        loaded: true
      }
    }
    case FETCH_LOSTANDFOUND_FAILURE : {
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