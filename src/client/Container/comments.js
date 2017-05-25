import React, {Component} from 'react';
import { connect } from 'react-redux';
import { commentCreate } from '../Action/async.actions'
class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentBox: '',
        };
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value}, function () {
        });
    };

    submitBuzzComment = (key) => {
        if(this.state.commentBox === ''){
            alert("Comment feild cannot be blank ....");
            return
        }
        else {
            const commentDetails = {
                buzz_id: key,
                comment: this.state.commentBox,
            };
            this.props.submitComment(commentDetails);
        }
    };

    render() {
        return (
            <div>
                <div>
                    <input type="text" name="commentBox" className="input-comment-box"
                           placeholder="Enter comments..."
                           onChange={this.changeHandler}>
                    </input>
                    <span>
                        <button className="comment-button"
                                type="button"
                                onClick={() => this.submitBuzzComment(this.props.buzzId)}>
                                Comment
                        </button>
                    </span>
                </div>
                <hr/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    submitComment: (commentDetails) => dispatch(commentCreate(commentDetails)),
});
const commentsContainer = connect(null, mapDispatchToProps)(Comments);
export default commentsContainer;


