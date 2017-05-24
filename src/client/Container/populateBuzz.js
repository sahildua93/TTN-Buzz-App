import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBuzz, likeDislike, commentCreate, fetchComments } from '../Action/async.actions'
import Likes from '../Components/likes';
import Dislikes from '../Components/dislike';
import Comments from '../Components/comments';
import '../../assets/CSS/model.css';
import '../../assets/CSS/buzz.css';

class PopulateBuzz extends Component {

    constructor(props) {
        super(props);

        this.state = {
            commentBox: '',
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.props.fetchBuzz();
        this.props.fetchComments();
    };

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    };

    incrementLikeDislike = (category, key) => {
        let userDetails = {
            buzz_id: key,
            category: category,
        };
        this.props.likeDislike(userDetails);
    };

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value}, function () {
        });
    };

    submitBuzzComment = (key) => {
        const commentDetails = {
            buzz_id: key,
            comment: this.state.commentBox,
        };
        this.props.submitComment(commentDetails);
    };

    handleScroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            this.props.fetchBuzz();
        }
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
                        </a>
                        <Likes buzzDetails={this.props.buzz}
                               buzzId={items._id}/>
                    </div>
                    <div className="dislike-section">
                        <a className="glyphicon glyphicon-thumbs-down glyphicon-uploads"
                           onClick={() => this.incrementLikeDislike('dislike', items._id)}>
                        </a>
                        <Dislikes buzzDetails={this.props.buzz}
                                  buzzId={items._id}/>
                    </div>
                </div>
                <div>
                    <div>
                            <input type="text" name="commentBox" className="input-comment-box" placeholder="Enter comments..."
                                   onChange={this.changeHandler}>
                            </input>
                        <span>
                            <button className="comment-button" type="button" onClick={() => this.submitBuzzComment(items._id)}>
                                Comment
                            </button>
                        </span>
                    </div>
                    <hr/>
                </div>
                <div className="comment-box">
                    <div>
                        <Comments commentDetails={this.props.comment}
                                  buzzId={items._id}/>
                    </div>
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