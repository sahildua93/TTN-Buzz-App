/**
 * Created by sahil-dua on 14/5/17.
 */

import React from 'react';
import '../../assets/CSS/buzz.css';
import '../../assets/CSS/model.css';
import Model from './dislikeModel'

export default ({ buzzDetails, buzzId }) => {
    let filteredList = buzzDetails.find((item) => item._id === buzzId);
    let count_dislike = filteredList.dislike.length;
    return(
        <div className="lke-dslke-count" data-toggle="modal" data-target="#dislikeModal">
            <span>{count_dislike}</span>
            <Model option = "dislike"/>
        </div>
    )
}

