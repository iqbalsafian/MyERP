import React, { Component } from 'react';
import { setDisplayedDepartment } from '../../actions/department';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Department extends Component {
  constructor(props) {
    super(props)
    this.props.setDisplayedDepartment();
  }
  componentWillReceiveProps(nextProps) {
    if (
      !(this.props.humanresource.departmentList) ||
      JSON.stringify(this.props.humanresource.departmentList[0].id) !== JSON.stringify(nextProps.humanresource.departmentList[0].id)
    ) {
      this.render()
    }
  }
  render() {
    const { humanresource = {} } = this.props;
    const { departmentList = [] } = humanresource;
    console.log(this.props);
    return(
      <div>
        Department
        <div className="grid-container">
          {
            departmentList.map((department, key) => {
              return (
                <div key={key} onClick="" className="pt-card pt-elevation-1 pt-interactive transparentThis grid-30 grid-container card-padding" style={{margin:'10px 10px 0px 10px'}}>
                  <div>
                    { department.fullname }
                  </div>
                  <div>
                    Department head:
                  </div>
                  <div>
                    Staff count: 3
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    humanresource: state.humanresource
  }
}

export default connect(mapStateToProps, { setDisplayedDepartment })(Department);
