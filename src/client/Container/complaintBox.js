import React, {Component} from "react";
import "../../assets/CSS/buzz.css";
import {connect} from "react-redux";
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {complaintCreate} from "../Action/async.actions";
import "../../assets/CSS/complaints.css";
const styles = {
  uploadButton: {
    verticalAlign: 'middle',
  },
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  submitButton: {
    margin: 20,
  }
};

class Complaints extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      category: '',
      file: '',
    }
  }

  imageUpload = (event) => {
    const file = event.target.files[0];
    this.setState({file});
  };

  eventHandler = (event) => {
    this.setState({creater: this.props.userId});
    this.setState({[event.target.name]: event.target.value});
  };

  createBuzzOnSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim() === '' || this.state.description.trim() === '') {
      alert('Field cannot be left blank');
      return false;
    }
    let category = this.state.category;
    if (category !== 'Hardware' && category !== 'Software' && category !== 'IT') {
      alert('Invalid Category');
      return false
    }
    const formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('description', this.state.description);
    formData.append('category', this.state.category);
    formData.append('file', this.state.file);
    this.props.complaintCreate(formData);
    this.setState({title: '', description: '', category: '', file: ''})
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
              <input type="text" name="title" id="title" className="form-control"
                     onChange={this.eventHandler} placeholder="Enter Title for Complaint" value={this.state.title}/>
            </div>

            <div className="form-group">
              <label htmlFor="Description">Description</label>
              <textarea placeholder="Enter Description" name="description"
                        className="form-control complaint-text-area" onChange={this.eventHandler}
                        id="Description" value={this.state.description}></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="category">Select Category</label>
              <input list="category_hsi" onChange={this.eventHandler} title="Select Category"
                     name="category" id="category" placeholder="Search Category"
                     className="form-control"/>
              <datalist id="category_hsi" value={this.state.category}>
                <option value="Hardware"></option>
                <option value="Software"></option>
                <option value="IT"></option>
              </datalist>
            </div>
            <FlatButton
              label="Choose an Image"
              labelPosition="before"
              style={styles.uploadButton}
              containerElement="label">

              <input type="file" style={styles.uploadInput} value={this.state.file} name="image_url"
                     onChange={this.imageUpload}/>
            </FlatButton>
            <RaisedButton label="Register" secondary={true} style={styles.submitButton}
                          onClick={this.createBuzzOnSubmit}/>
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

const LostAndFoundContainer = connect(mapStateToProps, mapDispatchToProps)(Complaints);
export default LostAndFoundContainer;