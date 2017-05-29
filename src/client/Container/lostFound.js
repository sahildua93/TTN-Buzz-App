import React, { Component } from 'react';
import { connect } from 'react-redux';
import dateTime from '../Config/dateTimeFormat';
import { fetchLostAndFoundData, likeDislike, fetchComments } from '../Action/async.actions';
import Likes from '../Components/likes';
import Dislikes from '../Components/dislike';
import Comments from '../Container/comments';
import CommentsList from '../Components/commentsList';
import '../../assets/CSS/model.css';
import '../../assets/CSS/buzz.css';

class LostFound extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchLostAndFound();
    this.props.fetchComments();
  };

  incrementLikeDislike = (category, key) => {
    let userDetails = {
      buzz_id: key,
      category: category,
    };
    this.props.likeDislike(userDetails);
  };

  render(){
    const lostAndFoundDetails = this.props.lostAndFound;
    const renderBuzz = lostAndFoundDetails.map((items) => (
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
        {/*<div className="like-dislike-section">*/}
          {/*<div className="like-section">*/}
            {/*<a className="glyphicon glyphicon-thumbs-up glyphicon-uploads"*/}
               {/*onClick={() => this.incrementLikeDislike('like', items._id)}>*/}
            {/*</a>*/}
            {/*<Likes buzzDetails={this.props.lostAndFound}*/}
                   {/*buzzId={items._id}/>*/}
          {/*</div>*/}
          {/*<div className="dislike-section">*/}
            {/*<a className="glyphicon glyphicon-thumbs-down glyphicon-uploads"*/}
               {/*onClick={() => this.incrementLikeDislike('dislike', items._id)}>*/}
            {/*</a>*/}
            {/*<Dislikes buzzDetails={this.props.lostAndFound}*/}
                      {/*buzzId={items._id}/>*/}
          {/*</div>*/}
        {/*</div>*/}
        <Comments buzzId={items._id}/>
        <div className="comment-box">
          <div>
            <CommentsList commentDetails={this.props.comment}
                          buzzId={items._id}/>
          </div>
        </div>
      </div>
    ));
    return(
      <div>
        {renderBuzz}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  lostAndFound: state.lostAndFound.lostAndFoundData,
  buzz: state.buzz.buzz,
  comment: state.comment.comment,
});

const mapDispatchToProps = (dispatch) => ({
  fetchLostAndFound: () => dispatch(fetchLostAndFoundData()),
  likeDislike: (userDetails) => dispatch(likeDislike(userDetails)),
  fetchComments: () => dispatch(fetchComments())
});

const LostFoundContainer = connect(mapStateToProps, mapDispatchToProps)(LostFound);
export default LostFoundContainer;