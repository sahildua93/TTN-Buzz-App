import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBuzz, likeDislike, commentCreate, fetchComments } from '../Action/async.actions'
import Likes from '../Components/likes';
import Dislikes from '../Components/dislike';
import Comments from '../Components/comments'
import '../../assets/CSS/buzz.css';

class PopulateBuzz extends Component {

    constructor(props) {
        super(props);

        this.state = {
            commentBox: '',
        }
    }

    componentDidMount() {
        this.props.fetchBuzz();
        this.props.fetchComments();
    };

    incrementLikeDislike = (option, key) => {
        let userDetails = {
            user_id: this.props.user._id,
            buzz_id: key,
            username: this.props.user.username,
            image: this.props.user.image_url,
            option: option,
        };
        this.props.likeDislike(userDetails);
    };

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    submitBuzzComment = (key) => {
        const commentDetails = {
            buzz_id: key,
            comment: this.state.commentBox,
        };
        this.props.submitComment(commentDetails);
    };

    render() {
        const buzzDetails = this.props.buzz;
        const renderBuzz = buzzDetails.map((items) => (
            <div className="post" key={items._id}>
                <div className="postheader">
                    <img src={items.user_picture || require('../../assets/images/img_avatar2.png')}/>
                    <div className="postby">
                        {/*<span className="by">Sahil dua Create a New Buzz</span>*/}
                        {/*<span className="time">{items.createdAt}</span>*/}
                    </div>
                    <div className="actorlost">
                        { items.category }
                    </div>
                </div>
                <div>
                    <hr/>
                    <div className="comment">
                        <div>
                            {items.comment}
                        </div>
                    </div>
                    <div className="image">
                        {(items.image) ?
                            <img src={ `/uploads/${items.image}`}/>
                            :
                            console.log('')
                        }
                    </div>
                </div>
                <div className="like-dislike-section">
                    <div className="like-section">
                        <a className="glyphicon glyphicon-thumbs-up glyphicon-uploads"
                           onClick={() => this.incrementLikeDislike('like', items._id)}>
                            <Likes buzzDetails={this.props.buzz}
                                   buzzId={items._id}/>
                        </a>
                    </div>
                    <div className="dislike-section">
                        <a className="glyphicon glyphicon-thumbs-down glyphicon-uploads"
                           onClick={() => this.incrementLikeDislike('dislike', items._id)}>
                            <Dislikes buzzDetails={this.props.buzz}
                                      buzzId={items._id}/>
                        </a>
                    </div>
                    <div className="comment-section">
                        <a className="glyphicon glyphicon-comment glyphicon-uploads"> </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                            <textarea rows="4" cols="50" className="comment-box" name="commentBox" placeholder="Enter comments......"
                                      onChange={this.changeHandler}>
                            </textarea>
                        <input type="submit" value="comment" className="comment-button" onClick={() => this.submitBuzzComment(items._id)}/>
                    </div>
                </div>
                <hr/>
                <div className="row comment-box">
                    <Comments commentDetails={this.props.comment}
                              buzzId={items._id}/>
                </div>
            </div>
        ));
        return (
            <div>
                <div>
                    {renderBuzz}
                </div>
                <h2>
                    <center>All Buzz Populated</center>
                </h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    buzz: state.buzz.buzz,
    user: state.user.user,
    comment: state.comment.comment,
});

const mapDispatchToProps = (dispatch) => ({
    fetchBuzz: () => dispatch(fetchBuzz()),
    likeDislike: (userDetails) => dispatch(likeDislike(userDetails)),
    submitComment: (commentDetails) => dispatch(commentCreate(commentDetails)),
    fetchComments: () => dispatch(fetchComments())

});

const PopulateBuzzContainer = connect(mapStateToProps, mapDispatchToProps)(PopulateBuzz);
export default PopulateBuzzContainer;