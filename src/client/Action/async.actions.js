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
    createComplaintStarted,
    createComplaintSuccess,
    createComplaintFailure,
    fetchComplaintStarted,
    fetchComplaintSuccess,
    fetchComplaintFailure,
    fetchLostAndFoundBuzzStarted,
    fetchLostAndFoundBuzzSuccess,
    fetchLostAndFoundBuzzFailure
} from './action'
import fetch from 'isomorphic-fetch';

export const fetchUser = () => (dispatch) => {
    dispatch(fetchUserStarted());
    var myHeaders = new Headers();
    myHeaders.append('pragma', 'no-cache');
    myHeaders.append('cache-control', 'no-cache');
    fetch('http://localhost:3004/Users/me',
        {
            method: 'get',
            credentials: "include",
            headers: myHeaders
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
                return response.json()
            })
            .then(data => {
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
                return response.json()
            })
            .then(data => {
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

export const complaintCreate = (newComplaint) => {
    return (dispatch) => {
        dispatch(createComplaintStarted());
        fetch('http://localhost:3004/Complaint/create-complaint',
            {
                method: 'post',
                credentials: "include",
                body: newComplaint,
            })
            .then(response => {
                return response.json()
            })
            .then(data => {
                dispatch(createComplaintSuccess(data))
            })
            .catch(error => {
                dispatch(createComplaintFailure(error));
            })
    }
};

export const fetchComplaint = (userId) => (dispatch) => {
    dispatch(fetchComplaintStarted());
    fetch(`http://localhost:3004/Complaint/fetch-complaint/${userId}`,
        {
            method: 'get',
            credentials: "include"
        })
        .then(response => response.json())
        .then(data => {
            dispatch(fetchComplaintSuccess(data))
        })
        .catch(error => {
            dispatch(fetchComplaintFailure(error));
        })
};

export const fetchLostAndFoundData = () => (dispatch) => {
  console.log('1');
  dispatch(fetchLostAndFoundBuzzStarted());
  fetch('/Buzz/lost-found',
    {
      method: 'get',
      credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
        dispatch(fetchLostAndFoundBuzzSuccess(data));
    })
    .catch(error => {
      dispatch(fetchLostAndFoundBuzzFailure(error));
    })
};
