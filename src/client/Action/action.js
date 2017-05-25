/**
 * Created by sahil-dua on 9/5/17.
 */

import {
    FETCH_USER_STARTED,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    CREATE_BUZZ_STARTED,
    CREATE_BUZZ_SUCCESS,
    CREATE_BUZZ_FAILURE,
    FETCH_BUZZ_STARTED,
    FETCH_BUZZ_SUCCESS,
    FETCH_BUZZ_FAILURE,
    LIKE_DISLIKE_STARTED,
    LIKE_DISLIKE_SUCCESS,
    LIKE_DISLIKE_FAILURE,
    CREATE_COMMENT_STARTED,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_FAILURE,
    FETCH_COMMENTS_STARTED,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE,
    CREATE_COMPLAINT_STARTED,
    CREATE_COMPLAINT_SUCCESS,
    CREATE_COMPLAINT_FAILURE,
    FETCH_COMPLAINT_STARTED,
    FETCH_COMPLAINT_SUCCESS,
    FETCH_COMPLAINT_FAILURE,
} from '../Config/constant';

export function fetchUserStarted() {
    return({ type: FETCH_USER_STARTED});
}

export function fetchUserSuccess(data) {
    return { type: FETCH_USER_SUCCESS, data };
}

export function fetchUserFailure(err) {
    return{ type: FETCH_USER_FAILURE , err };
}

export function createBuzzStarted() {
    return({ type: CREATE_BUZZ_STARTED })
}

export function createBuzzSuccess(data) {
    return({ type: CREATE_BUZZ_SUCCESS, data })
}

export  function createBuzzFailure(err) {
    return({ type: CREATE_BUZZ_FAILURE, err })
}

export function fetchBuzzStarted() {
    return({ type: FETCH_BUZZ_STARTED } )
}

export function fetchBuzzSuccess(data) {
    return({ type: FETCH_BUZZ_SUCCESS, data })
}

export  function fetchBuzzFailure(err) {
    return({ type: FETCH_BUZZ_FAILURE, err })
}

export function likeDislikeStarted() {
    return({ type: LIKE_DISLIKE_STARTED })
}

export function likeDislikeSuccess(data) {
    return({ type: LIKE_DISLIKE_SUCCESS, data })
}

export  function likeDislikeFailure(err) {
    return({ type: LIKE_DISLIKE_FAILURE, err })
}

export function createCommentStarted() {
    return({ type: CREATE_COMMENT_STARTED })
}

export function createCommentSuccess(data) {
    return({ type: CREATE_COMMENT_SUCCESS, data })
}

export  function createCommentFailure(err) {
    return({ type: CREATE_COMMENT_FAILURE, err })
}
export function fetchCommentsStarted() {
    return({ type: FETCH_COMMENTS_STARTED })
}

export function fetchCommentsSuccess(data) {
    return({ type: FETCH_COMMENTS_SUCCESS, data })
}

export  function fetchCommentsFailure(err) {
    return({ type: FETCH_COMMENTS_FAILURE, err })
}

export function createComplaintStarted() {
    return({ type: CREATE_COMPLAINT_STARTED})
}

export  function createComplaintSuccess(data) {
    return({ type: CREATE_COMPLAINT_SUCCESS, data })
}

export function createComplaintFailure(err) {
    return({ type: CREATE_COMPLAINT_FAILURE, err })
}
export function fetchComplaintStarted() {
    return({ type: FETCH_COMPLAINT_STARTED })
}

export function fetchComplaintSuccess(data) {
    return({ type: FETCH_COMPLAINT_SUCCESS, data })
}

export  function fetchComplaintFailure(err) {
    return({ type: FETCH_COMPLAINT_FAILURE, err })
}