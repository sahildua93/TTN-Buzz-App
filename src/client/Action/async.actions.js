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
} from './action'
import fetch from 'isomorphic-fetch';

export const fetchUser = () => (dispatch) => {
    dispatch(fetchUserStarted())
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
            fetchUserFailure(error);
        })
}


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
                console.log("response>>>>>>", response)
                return response.json()
            })
            .then(data => {
                console.log('createsuccess------------------', data)
                dispatch(createBuzzSuccess(data))
            })
            .catch(error => {
                console.log('Catch ', error)
                createBuzzFailure(error)
            })
    }
}