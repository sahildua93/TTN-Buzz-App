import React, {Component} from 'react';
import {connect} from 'react-redux';
import ComplaintTableRow from './complaintTableRow';
import {fetchComplaint} from '../Action/async.actions'
import {
  TableBody,
  Table,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';
const styles = {
  toggle: {
    marginBottom: 16,
  },
};

class TableExampleSimple extends Component {

  constructor(props) {
    super(props);
    this.state = {Toggled: false};
  }

  componentDidMount() {
    this.props.fetchComplaint(this.props.user);
  };

  handleToggle(items) {
    items.toggle = !items.Toggled;
    this.setState({ items: updatedItems});
    this.setState({Toggled: !this.state.Toggled});
    // console.log(this.state.Toggled);
  }

  render() {
    const complaintDetails = this.props.complaint;
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Category</TableHeaderColumn>
              <TableHeaderColumn>Assigned To</TableHeaderColumn>
              <TableHeaderColumn>Image</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              complaintDetails.map(complaintDetail => (
                <ComplaintTableRow complaintDetail = { complaintDetail }/>
              ))
            }
          </TableBody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  complaint: state.complaint.complaint,
  user: state.user.user._id,
});

const mapDispatchToProps = (dispatch) => ({
  fetchComplaint: (userId) => dispatch(fetchComplaint(userId)),
});


const TableExampleSimpleContainer = connect(mapStateToProps, mapDispatchToProps)(TableExampleSimple);
export default TableExampleSimpleContainer;