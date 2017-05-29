/**
 * Created by sahil-dua on 9/5/17.
 */
import {
  CREATE_COMPLAINT_STARTED,
  CREATE_COMPLAINT_SUCCESS,
  CREATE_COMPLAINT_FAILURE,
  FETCH_COMPLAINT_STARTED,
  FETCH_COMPLAINT_SUCCESS,
  FETCH_COMPLAINT_FAILURE,
}from '../Config/constant';

const initialState = {
  complaint: [],
  creating: false,
  created: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_COMPLAINT_STARTED : {
      return {
        ...state,
        creating: true,
      }
    }
    case CREATE_COMPLAINT_SUCCESS : {
      const createComplaint = state.complaint.concat(action.data);
      return {
        ...state,
        complaint: createComplaint,
        creating: false,
        created: true,
      }
    }
    case CREATE_COMPLAINT_FAILURE : {
      return {
        ...state,
        error: action.error,
      }
    }
    case FETCH_COMPLAINT_STARTED : {
      return {
        ...state,
        creating: true,
      }
    }
    case FETCH_COMPLAINT_SUCCESS : {
      const complaint = action.data;
      return {
        ...state,
        complaint,
        creating: false,
        created: true,

      }
    }
    case FETCH_COMPLAINT_FAILURE : {
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