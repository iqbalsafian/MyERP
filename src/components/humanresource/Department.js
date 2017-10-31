import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Dialog
  // , Button,  Intent 
} from "@blueprintjs/core";
import { setDisplayedDepartment, getDepartmentById } from '../../actions/department';
import DepartmentDetails from './DepartmentDetails';
import NewDepartmentForm from './NewDepartmentForm';

class Department extends Component {
  constructor(props) {
    super(props)
    this.props.setDisplayedDepartment();
  }

  state = {
    isOpen: false,
    dialogTitle: 'New Department',
    selectedDepartmentid: 0
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    const { humanresource = {} } = this.props;
    const { departmentList = {} } = humanresource;
    const { departments = [] } = departmentList;

    if (
      !(this.props.humanresource.departmentList) || JSON.stringify(departments[0].id) !== JSON.stringify(nextProps.humanresource.departmentList.departments[0].id)
    ) {
      this.render()
    }
  }

  toggleOverlay = () => {
    this.setState({ isOpen: this.state.isOpen ? false : true })
  }

  showDepartmentDetails = (departmentId) => {
    const { id } = this.props.humanresource.departmentList.departments.find(department => department.id === departmentId);
    getDepartmentById(departmentId)
      .then(response => {
        if (response.data)
        {
          this.setState({
            dialogTitle: 'Department Details Information - ' + response.data.fullname,
            selectedDepartmentid: id,
            isOpen: true,
            selectedDepartment: response.data
          })
        }
      })
      .catch(err => {
        alert('There is an error while connecting to the server: ' + err)
      })
  }

  render() {
    const { humanresource = {} } = this.props;
    const { departmentList = {} } = humanresource;
    const { departments = [] } = departmentList;
    return(
      <div>
        Department
        <div className="grid-container">
          {
            departments.map((department, key) => {
              return (
                <div key={key} onClick={() => this.showDepartmentDetails(department.id)} className="pt-card pt-elevation-1 pt-interactive transparentThis grid-30 grid-container card-padding" style={{margin:'10px 10px 0px 10px'}}>
                  <div>
                    { department.fullname }
                  </div>
                  <div>
                    Head:
                  </div>
                  <div>
                    Staff count: 3
                  </div>
                </div>
              )
            })
          }
        </div>
        <Dialog
          title={this.state.dialogTitle}
          className="pt-dark"
          isOpen={this.state.isOpen}
          onClose={this.toggleOverlay}
          style={{width:'450px'}}
          >
            <div className="pt-dialog-body">
              {
                this.state.selectedDepartmentid ?
                <DepartmentDetails selectedDepartmentid={this.state.selectedDepartmentid} /> :
                <NewDepartmentForm />
              }
            </div>
        </Dialog>
      </div>
    )
  }
}

Department.PropTypes = {
  setDisplayedDepartment: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    humanresource: state.humanresource
  }
}

export default connect(mapStateToProps, { setDisplayedDepartment })(Department);
