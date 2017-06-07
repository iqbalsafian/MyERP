import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import TableBody from 'react-md/lib/DataTables/TableBody';
import DataTable from 'react-md/lib/DataTables/DataTable';
import Card from 'react-md/lib/Cards/Card';
import Dialog from 'react-md/lib/Dialogs';
import PropTypes from 'prop-types';
import StaffProfile from './StaffProfile';
import { fetchStaff } from './actions';

class StaffList extends Component {
  constructor() {
    super();
    this.state = {
      dialogVisibility: false,
      selectedId: 0
    };
  }
  componentDidMount() {
    this.props.fetchStaff()
  }

  handleClick(staffid) {
    this.setState(
      {
        dialogVisibility: true,
        selectedId: staffid
      }
    )
  }

  closeDialog() {this.setState({ dialogVisibility: false })}

  openDialog() {this.setState({ dialogVisibility: true })}

  render() {
    const cnHeader = 'md-table-column--adjusted whiteningText centering-text';
    const cn = 'md-table-column--adjusted whiteningText';
    const { staff } = this.props;
    const {dialogVisibility} = this.state;
    return(
      <div>
        <p className="centering-text whiteningText">Staff List</p>
        <Card tableCard className="transparentWhite">
          <DataTable baseId="staff" className="zeroing-padding">
            <TableHeader>
              <TableRow autoAdjust={false} className="centering-text">
                <TableColumn numeric className={cnHeader}>No</TableColumn>
                <TableColumn className="md-table-column--grow whiteningText centering-text">Name</TableColumn>
                <TableColumn className={cnHeader}>Job Title</TableColumn>
                <TableColumn className={cnHeader}>Department</TableColumn>
                <TableColumn className={cnHeader}>Email</TableColumn>
                <TableColumn className={cnHeader}>Phone Number</TableColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                staff.map(
                  (staff, index) => <TableRow autoAdjust={false} key={staff._id}>
                    <TableColumn numeric className={cn}>{index+1}</TableColumn>
                    <TableColumn
                      className="md-table-column--adjusted cursor-pointer whiteningText"
                      onClick={() => this.handleClick(staff._id)}>{staff.firstName} {staff.lastName}</TableColumn>
                    <TableColumn className={cn}>{staff.jobTitle}</TableColumn>
                    <TableColumn className={cn}>{staff.department}</TableColumn>
                    <TableColumn className={cn}>{staff.email}</TableColumn>
                    <TableColumn className={cn}>{staff.phoneNumber}</TableColumn>
                  </TableRow>
                )
              }
            </TableBody>
          </DataTable>
        </Card>
        <Dialog id="staffProfile"
          visible={this.state.dialogVisibility}
          title=""
          onHide={this.closeDialog}
          modal>
          <p className="centering-text">
            <StaffProfile _id={this.state.selectedId} />
          </p>
          <div>DIV</div>
          <div className="centering-text">
            <button type="button" onClick={this.closeDialog.bind(this)}>Close</button>
          </div>
        </Dialog>
      </div>
    )
  }
}

StaffList.PropTypes = {
  staff: PropTypes.array.isRequired,
  fetchStaff: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {staff: state.staff}
}

export default connect(mapStateToProps, { fetchStaff })(StaffList);
