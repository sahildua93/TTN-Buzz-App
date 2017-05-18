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
    likeDislikeFailure
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

export const fetchBuzz = () => (dispatch) => {
    dispatch(fetchBuzzStarted());
    fetch('http://localhost:3004/Buzz/fetch-buzz',
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

export const likeDislike = (userDetails) => (dispatch, getStore) => {
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
            const store = getStore();
            console.log("gettong store",store);
            // const store = getStore();
            // const currentBuzz = store.buzz.buzz && store.buzz.buzz.find((buzz) => (buzz._id === data.buzz_id));
            // currentBuzz.likes_dislikes = [...currentBuzz.likes_dislikes.filter((op) => (op.user_id !== data.user_id)), data];
            // console.log(currentBuzz, '##################');
            dispatch(likeDislikeSuccess(data));
        })
        .catch(error => {
            dispatch(likeDislikeFailure(error));
        })
};