import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Pagination extends Component {
  render() {
    const { theElements } = this.props
    return(
      <div className="pagination">
        {
          theElements.map((element, key) => {
            return (
                <NavLink
                  to={element.linkTo}
                  activeClassName="active" key={key}>
                  <div onClick={() => this.props.reRender(key+1)} style={{width:'100%', minHeight:'100%'}}>
                    {element.display}
                  </div>
                </NavLink>
            )
          })
        }
      </div>
    )
  }
}

export default Pagination;
