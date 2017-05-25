/**
 * Created by sahil-dua on 18/5/17.
 */

import React from 'react';
export default ({ commentDetails, buzzId }) => {
    let filteredComments = commentDetails.filter((items) => (items.buzz_id === buzzId));

    return (
        <div>
            {
                (filteredComments.length>0) ?
                    filteredComments.map((items) => (
                    <div key={items._id}>
                        <span>
                            <img className="comments-image" src={items.user_image}/>
                        </span>
                        <span>
                            <span className="username-comment">{items.username}</span>
                            <div className="comment-text">{items.comment}</div>
                        </span>
                    </div>
                    ))
                    :
                    console.log()
            }
        </div>
    )
}


