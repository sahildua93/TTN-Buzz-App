/**
 * Created by sahil-dua on 5/5/17.
 */

import React, { Component } from 'react';
import '../../assets/CSS/buzz.css';
import { connect } from 'react-redux';
import Notifications, {notify} from 'react-notify-toast';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import { buzzCreate } from '../Action/async.actions';
const style = {
    margin: 12,
    float: "right",
    customWidth: {
        width: 200,
    },
};

class CreateBuzz extends Component{

    constructor(props){
        super(props);
        this.state = {
            comment :'',
            category: '',
            file: '',
        }
    }
    imageUpload = (event) => {
        const file = event.target.files[0];
        this.setState({ file })
    };

    eventHandler = (event) => {
        this.setState({creater:this.props.userId});
        this.setState({[event.target.name]: event.target.value})
    };

    createBuzzOnSubmit = (e) => {
        e.preventDefault();
        if(this.state.category.trim() ==='' || this.state.comment.trim() ===''){
            alert('Field cannot be left blank');
            return false;
        }
        const formData = new FormData();
        formData.append('category', this.state.category);
        formData.append('comment', this.state.comment);
        formData.append('file', this.state.file);
        notify.show('Buzz Created Successfully !!!  ');
        this.props.buzzCreate(formData);
        this.setState({comment: '', category: '', file: ''});
    };

    render(){
        return(
            <div>
                <Notifications />
                <form method="post" encType="multipart/form-data">
                    <div className="main-buzz">
                        <div className="inputarea">
                            <textarea placeholder="Type here to create Buzz...." name="comment" value={this.state.comment} onChange={this.eventHandler} />
                        </div>
                        <div className="header">
                            <select name="category" onChange={this.eventHandler}>
                                <option disabled="true" selected="true">Category</option>
                                <option>Activity</option>
                                <option>Lost n found</option>
                            </select>
                            <div className="image_upload">
                                <a className="glyphicon glyphicon-camera camera-upload" />
                                <input type="file" name="image_url" onChange={this.imageUpload} />
                            </div>
                            <RaisedButton label="Create Buzz" secondary={true} style={style} onClick={this.createBuzzOnSubmit}/>
                        </div>
                    </div>
                </form>

            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    buzz: state.buzz.buzz,
    userId: state.user.user._id,
});

const mapDispatchToProps = (dispatch, state) => ({
    buzzCreate: (formData) => dispatch(buzzCreate(formData)),
});
const CreateBuzzContainer = connect(mapStateToProps, mapDispatchToProps)(CreateBuzz)
export default CreateBuzzContainer;