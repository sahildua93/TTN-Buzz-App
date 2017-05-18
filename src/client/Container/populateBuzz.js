import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchBuzz, likeDislike} from '../Action/async.actions'
import Likes from '../Components/likes';
import Dislikes from '../Components/dislike';
import '../../assets/CSS/buzz.css';

class PopulateBuzz extends Component {

    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.fetchBuzz();
    };

    incrementLikeDislike = (option, key) => {
        let userDetails = {
            user_id: this.props.user._id,
            buzz_id: key,
            username: this.props.user.username,
            image: this.props.user.image_url,
            option: option,
        }
        this.props.likeDislike(userDetails);
    };

    render() {
        console.log(this.props.buzz)
        const buzzDetails = this.props.buzz;
        const renderBuzz = buzzDetails.reverse().map((items) => (
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
                           onClick={() => this.incrementLikeDislike('like',items._id)}>
                            <Likes buzzDetails = {this.props.buzz}
                                   buzzId = {items._id} />
                        </a>
                    </div>
                    <div className="dislike-section">
                        <a className="glyphicon glyphicon-thumbs-down glyphicon-uploads"
                           onClick={() => this.incrementLikeDislike('dislike',items._id)}>
                            <Dislikes buzzDetails = {this.props.buzz}
                                   buzzId = {items._id} />
                        </a>
                    </div>
                    <div className="comment-section">
                        <a className="glyphicon glyphicon-comment glyphicon-uploads">0 </a>
                    </div>
                </div>
            </div>
        ))
        return (
            <div>
                <div>
                    {renderBuzz}
                </div>
                <h2><center>All Buzz Populated</center></h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    buzz: state.buzz.buzz,
    user: state.user.user,
})

const mapDispatchToProps = (dispatch) => ({
    fetchBuzz: () => dispatch(fetchBuzz()),
    likeDislike: (userDetails) => dispatch(likeDislike(userDetails))

})

const PopulateBuzzContainer = connect(mapStateToProps, mapDispatchToProps)(PopulateBuzz);
export default PopulateBuzzContainer;