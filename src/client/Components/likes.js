import React from 'react';
export default ({ buzzDetails, buzzId }) => {
    let filteredArray = buzzDetails.find((item) => item._id === buzzId);
    let count_like = filteredArray.likes_dislikes.filter((item) => item.option === 'like').length;
    return(
        <p>
            {count_like}
        </p>
    )
}