/**
 * Created by sahil-dua on 18/5/17.
 */

import React from 'react';
export default ({ commentDetails, buzzId }) => {
    let filteredComments = commentDetails.filter((items) => (items.buzz_id === buzzId));
    //console.log('filteredComments--------------------------------',filteredComments);

    return (
        <div>
            {
                (filteredComments.length>0) ?
                    filteredComments.map((items) => (
                    <div key={items._id}>
                        <div className="col-md-1">
                            <img src={items.user_image}
                                 className="img-responsive pull-left comments-image"/>
                        </div>
                        <div className="col-md-11">
                            <h5><b>{items.username}</b></h5>
                            <p>{items.comment}</p>
                        </div>
                        <hr/>
                    </div>
                    ))
                    :
                    console.log()
            }
        </div>
    )
}


