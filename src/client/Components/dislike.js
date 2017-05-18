/**
 * Created by sahil-dua on 14/5/17.
 */

import React from 'react';
export default (props) => {
    let buzzDetails = props.buzzDetails;
    let buzzId = props.buzzId;

    let filteredArray = buzzDetails.filter((item) => {
        return(item._id === buzzId)
    });

    let count_dislike = filteredArray[0].likes_dislikes.filter((item) => {
        return(item.option === 'dislike')
    }).length;
    return(
        <p>
            { count_dislike }
        </p>
    )

}