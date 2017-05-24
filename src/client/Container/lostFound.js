import React, { Component } from 'react';
import '../../assets/CSS/buzz.css'
import { connect } from 'react-redux';
import { complaintCreate } from '../Action/async.actions';
import '../../assets/CSS/complaints.css'

class LostAndFound extends Component {

    constructor(props){
        super(props);
        this.state = {
            title : '',
            description: '',
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
        this.setState({[event.target.name]: event.target.value});
    };

    createBuzzOnSubmit = (e) => {
        e.preventDefault();
        if(this.state.title==='' || this.state.description===''){
            alert('Field cannot be left blank');
            return false;
        }
        const formData = new FormData();
        formData.append('title', this.state.title);
        formData.append('description', this.state.description);
        formData.append('category', this.state.category);
        formData.append('file', this.state.file);
        this.props.complaintCreate(formData);
    };

    render() {
        return (
            <div className="row complaint-box">
                <div className="col-md-3">&nbsp;</div>
                <div className="col-md-6">
                    <h3 className="complain-heading">Complaint Form</h3>
                    <form className="complaint-form">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                                <input type="text"  name="title" id="title" className="form-control" onChange={this.eventHandler} placeholder="Enter Title for Complaint" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="Description">Description</label>
                            <textarea placeholder="Enter Description" name="description" className="form-control complaint-text-area" onChange={this.eventHandler} id="Description"></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="category">Select Category</label>
                            <input list="category_hsi" onChange={this.eventHandler} title="Select Category" name="category" id="category" placeholder="Search Category" className="form-control"/>
                                <datalist id="category_hsi">
                                    <option value="Hardware"></option>
                                    <option value="Software"></option>
                                    <option value="IT"></option>
                                </datalist>
                        </div>
                        <input type="file" name="image_url" onChange={this.imageUpload}/>
                        <input type="submit" className="btn btn-success complaint-btn" value="Submit" onClick={this.createBuzzOnSubmit}/>

                    </form>
                </div>

            </div>

    )
    }
}

const mapStateToProps = (state) => ({
    userId: state.user.user._id
});

const mapDispatchToProps = (dispatch) => ({
    complaintCreate: (formData) => dispatch(complaintCreate(formData)),

});

const LostAndFoundContainer = connect(mapStateToProps, mapDispatchToProps)(LostAndFound);
export default LostAndFoundContainer;