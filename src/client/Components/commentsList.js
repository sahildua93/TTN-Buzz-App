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
                    <div key={items.createdAt}>
                        <span>
                            <img className="comments-image" src={items.user_image}/>
                        </span>
                        <span>
                            <span className="username-comment">{items.username}</span>
                            <div className="comment-text">{items.comment}</div>
                        </span>
                        <hr/>
                    </div>
                    ))
                    :
                    console.log()
            }
        </div>
    )
}


