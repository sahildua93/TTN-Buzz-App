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
    return({ type: FETCH_BUZZ_STARTED })
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
    console.log('dataaaaaaa---a-a-a-a-a-a---', data);
    return({ type: LIKE_DISLIKE_SUCCESS, data })
}

export  function likeDislikeFailure(err) {
    return({ type: LIKE_DISLIKE_FAILURE, err })
}