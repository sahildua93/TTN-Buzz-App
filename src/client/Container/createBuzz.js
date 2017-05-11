/**
 * Created by sahil-dua on 5/5/17.
 */

import React, { Component } from 'react';
import '../../assets/CSS/buzz.css';
import { connect } from 'react-redux';
import { buzzCreate, imageUpload } from '../Action/async.actions';

class CreateBuzz extends Component{

    constructor(props){
        super(props)

        this.state = {
            comment :'',
            category: '',
            file: '',
        }
    }
    testImage = (event) => {
        const file = event.target.files[0]
        this.setState({ file })
    }

    eventHandler = (event) => {
        this.setState({creater:this.props.userId});
        this.setState({[event.target.name]: event.target.value}, function () {
        })
    }

    createBuzzOnSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('category', this.state.category);
        formData.append('comment', this.state.comment);
        formData.append('file', this.state.file);
        this.props.buzzCreate(formData);
    }

    render(){
        return(
            <div className="wrapper">
                <form method="post" encType="multipart/form-data">
                    <div className="main-buzz">
                        <div className="inputarea">
                            <textarea placeholder="Type here to create Buzz...." name="comment" onChange={this.eventHandler}></textarea>
                        </div>
                        <div className="header">
                            <select name="category" onChange={this.eventHandler}>
                                <option disabled="true" selected="true">Select one</option>
                                <option>Activity</option>
                                <option>Lost n found</option>
                            </select>
                            <div className="image_upload">
                                {/*<a className="glyphicon glyphicon-camera camera-upload"></a>*/}
                                <input type="file" name="image_url" onChange={this.testImage} />
                            </div>
                            <input type="submit" value="submit" onClick={this.createBuzzOnSubmit}/>
                        </div>
                    </div>
                </form>
               <div className="post">
                    <div className="postheader">
                        <img src={require('../../assets/images/img_avatar2.png')}/>
                        <div className="postby">
                            <span className="by">Sahil dua Create a New Buzz</span>
                            <span className="time">2 days ago</span>
                        </div>
                        <span className="actorlost">Activity</span>
                    </div>
                   <div className="postcontainer">
                      <div className="image">
                          <img src={require('../../assets/images/img_avatar2.png')}/>
                          <p>

                          </p>

                      </div>
                   </div>
               </div>

            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    buzz: state.buzz.buzz,
    userId: state.user.user._id
})

const mapDispatchToProps = (dispatch, state) => ({
    buzzCreate: (formData) => dispatch(buzzCreate(formData)),
})
const CreateBuzzContainer = connect(mapStateToProps, mapDispatchToProps)(CreateBuzz)
export default CreateBuzzContainer;