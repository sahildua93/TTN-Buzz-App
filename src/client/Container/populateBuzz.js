import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { fetchBuzz, likeDislike, fetchComments } from '../Action/async.actions';
import Likes from '../Components/likes';
import Dislikes from '../Components/dislike';
import Comments from '../Container/comments';
import CommentsList from '../Components/commentsList';
import dateTime from '../Config/dateTimeFormat';
import '../../assets/CSS/model.css';
import '../../assets/CSS/buzz.css';

class PopulateBuzz extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
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
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && this.props.allBuzzData.lazyLoadHit == true ){
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
            <span className="by">{items.username}</span>
            <span className="time">{dateTime(items.createdAt)}</span>
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
        <div>
          {
            (this.props.allBuzzData.creating && this.props.allBuzzData.lazyLoadHit) ?
              <div className="loadingScroller"><CircularProgress size={80} thickness={5}/></div> :
                (this.props.allBuzzData.lazyLoadHit === false)?
                <h3 className="loadingScroller"><b>End Of Content</b></h3> :
                <div></div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  buzz: state.buzz.buzz,
  allBuzzData: state.buzz,
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