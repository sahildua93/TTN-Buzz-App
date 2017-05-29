/**
 * Created by sahil-dua on 29/5/17.
 */
import React, {Component} from 'react';
import Toggle from 'material-ui/Toggle';
import Modal from 'react-modal';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import '../../assets/CSS/complaints.css'

const styles = {
  toggle: {
    marginBottom: 16,
  },
};

export default class ComplaintTableRow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      complaintData: {...props.complaintDetail},
      toggle: false
    };
  }

  componentWillReceiveProps() {
    this.setState({complaintData: this.props.complaintDetails});
  };

  handleToggle(items) {
    this.setState({
      complaintData: {...items},
      toggle: !this.state.toggle
    });
  }

  closePopUp = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  };

  render() {
    const items = this.state.complaintData;
    return (
      <TableRow key={items._id}>
        <TableRowColumn>{items.title}</TableRowColumn>
        <TableRowColumn>{items.description}</TableRowColumn>
        <TableRowColumn>{items.category}</TableRowColumn>
        <TableRowColumn>
          {(items.category === 'Hardware') ?
            <span>Manoj</span>
            :
            (items.category === 'Software') ?
              <span>Yatin</span>
              :
              <span>Sahil</span>
          }
        </TableRowColumn>
        <TableRowColumn>
          {(items.image != '') ?
            <Toggle
              style={styles.toggle}
              defaultToggled={this.state.toggle}
              onToggle={(e) => this.handleToggle.bind(this)(items)}
              toggle={items.toggled}
            /> :
            <div>No Image</div>
          }
          <Modal
            isOpen={this.state.toggle}
            overlayClassName={'shade-overlay'}
            contentLabel="Modal">
            <button type="button" className="close" aria-label="Close" onClick={this.closePopUp}>
              <span aria-hidden="false" className="close-button">&times;</span>
            </button>
            <h2>Uploaded Image</h2>
            <img src={ `/complaint_uploads/${items.image}`} className="complaint-image"/>
          </Modal>
        </TableRowColumn>
      </TableRow>
    )
  }
}