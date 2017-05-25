import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchBuzz, likeDislike, fetchComments} from '../Action/async.actions'
import Likes from '../Components/likes';
import Dislikes from '../Components/dislike';
import Comments from '../Container/comments';
import CommentsList from '../Components/commentsList';
import Toggle from 'material-ui/Toggle';
import '../../assets/CSS/model.css';
import '../../assets/CSS/buzz.css';

class PopulateBuzz extends Component {

    constructor(props) {
        super(props);
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
                <Comments buzzId={items._id}/>
                <div className="comment-box">
                    <div>
                        <CommentsList commentDetails={this.props.comment}
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
    fetchComments: () => dispatch(fetchComments())
});

const PopulateBuzzContainer = connect(mapStateToProps, mapDispatchToProps)(PopulateBuzz);
export default PopulateBuzzContainer;