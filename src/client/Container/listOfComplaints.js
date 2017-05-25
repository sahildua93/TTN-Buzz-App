import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchComplaint} from '../Action/async.actions'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';



class TableExampleSimple extends Component {

    componentDidMount() {
        this.props.fetchComplaint(this.props.user);
    };

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
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {complaintDetails.map((items) => (
                            <TableRow key={items._id}>
                                <TableRowColumn>{items.title}</TableRowColumn>
                                <TableRowColumn>{items.description}</TableRowColumn>
                                <TableRowColumn>{items.category}</TableRowColumn>
                                <TableRowColumn>Manoj</TableRowColumn>
                            </TableRow>
                        ))}
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