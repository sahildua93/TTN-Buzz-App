/**
 * Created by sahil-dua on 14/5/17.
 */

import React from 'react';
export default ({ buzzDetails, buzzId }) => {
    let filteredArray = buzzDetails.find((item) => item._id === buzzId);
    let count_dislike = filteredArray.likes_dislikes.filter((item) => item.option === 'dislike').length;
    return(
        <span>
            {count_dislike}
        </span>
    )
}

