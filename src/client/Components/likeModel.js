import React from 'react';
import '../../assets/CSS/buzz.css';
export default ({ option}) => {
    return(
        <div >
            <div className="modal fade" data-backdrop="false" id="likeModal" role="dialog">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">{option}</h4>
                        </div>
                        <div className="modal-body">
                            <p>count of likes</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}