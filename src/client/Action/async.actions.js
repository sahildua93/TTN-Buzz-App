/**
 * Created by sahil-dua on 9/5/17.
 */

import {
    fetchUserStarted,
    fetchUserSuccess,
    fetchUserFailure,
    createBuzzStarted,
    createBuzzSuccess,
    createBuzzFailure,
    fetchBuzzStarted,
    fetchBuzzSuccess,
    fetchBuzzFailure,
    likeDislikeStarted,
    likeDislikeSuccess,
    likeDislikeFailure,
    createCommentStarted,
    createCommentSuccess,
    createCommentFailure,
    fetchCommentsStarted,
    fetchCommentsSuccess,
    fetchCommentsFailure,
} from './action'
import fetch from 'isomorphic-fetch';

export const fetchUser = () => (dispatch) => {
    dispatch(fetchUserStarted());
    fetch('http://localhost:3004/Users/me',
        {
            method: 'get',
            credentials: "include"
        })
        .then(response => response.json())
        .then(data => {
            dispatch(fetchUserSuccess(data))
        })
        .catch(error => {
            dispatch(fetchUserFailure(error));
        })
};

export const buzzCreate = (newBuzz) => {
    return (dispatch) => {
        dispatch(createBuzzStarted());
        fetch('http://localhost:3004/Buzz/create-buzz',
            {
                method: 'post',
                credentials: "include",
                body: newBuzz,
            })
            .then(response => {
                console.log("response>>>>>>", response);
                return response.json()
            })
            .then(data => {
                console.log('createsuccess------------------', data);
                dispatch(createBuzzSuccess(data))
            })
            .catch(error => {
                dispatch(createBuzzFailure(error));
            })
    }
};

export const fetchBuzz = () => (dispatch, getStore) => {
    let store = getStore();
    let skip = store.buzz.skip;
    dispatch(fetchBuzzStarted());
    fetch(`http://localhost:3004/Buzz/fetch-buzz/${skip}`,
        {
            method: 'get',
            credentials: "include"
        })
        .then(response => response.json())
        .then(data => {
            dispatch(fetchBuzzSuccess(data))
        })
        .catch(error => {
            dispatch(fetchBuzzFailure(error));
        })
};

export const likeDislike = (userDetails) => (dispatch) => {
    dispatch(likeDislikeStarted());
    fetch('http://localhost:3004/Buzz/like-dislike',
        {
            method: 'put',
            credentials: "include",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'},
            body: JSON.stringify(userDetails),
        })
        .then(response => response.json())
        .then(data => {
            dispatch(likeDislikeSuccess(data));
        })
        .catch(error => {
            dispatch(likeDislikeFailure(error));
        })
};

export const commentCreate = (newComment) => {
    return (dispatch) => {
        dispatch(createCommentStarted());
        fetch('http://localhost:3004/Comment/create-comment',
            {
                method: 'post',
                credentials: "include",
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'},
                body: JSON.stringify(newComment),
            })
            .then(response => {
                console.log("response>>>>>>", response);
                return response.json()
            })
            .then(data => {
                console.log('createsuccess------------------', data);
                dispatch(createCommentSuccess(data))
            })
            .catch(error => {
                dispatch(createCommentFailure(error));
            })
    }
};

export const fetchComments = () => (dispatch) => {
    dispatch(fetchCommentsStarted());
    fetch('http://localhost:3004/Comment/fetch-comments',
        {
            method: 'get',
            credentials: "include"
        })
        .then(response => response.json())
        .then(data => {
            dispatch(fetchCommentsSuccess(data))
        })
        .catch(error => {
            dispatch(fetchCommentsFailure(error));
        })
};

