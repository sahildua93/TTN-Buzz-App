import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { toast } from 'react-toastify';
import { commentCreate } from '../Action/async.actions';
const style = {
  margin: 12,
};

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
    if (this.state.commentBox.trim() === '') {
      toast.error("Comment feild cannot be blank ....");
      return null;
    }
    else {
      const commentDetails = {
        buzz_id: key,
        comment: this.state.commentBox,
      };
      this.props.submitComment(commentDetails);
      this.setState({commentBox: ''});
      toast("Commented Successfully");
    }
  };

  render() {
    return (
      <div>
        <div>
          <input type="text" name="commentBox" className="input-comment-box"
                 placeholder="Enter comments..." value={this.state.commentBox}
                 onChange={this.changeHandler}>
          </input>
          <span>
            <RaisedButton label="Comment" primary={true} style={style}
                          onClick={() => this.submitBuzzComment(this.props.buzzId)}/>
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


