import React from 'react';
import '../../assets/CSS/buzz.css';
import '../../assets/CSS/model.css';
export default ({ buzzDetails, buzzId }) => {
    let filteredList = buzzDetails.find((item) => item._id === buzzId);
    let count_like = filteredList.likes.length;

    return(
        <div className="lke-dslke-count" data-toggle="modal" data-target="#likeModal">
            <span>{count_like} </span>
        </div>
    )
}

