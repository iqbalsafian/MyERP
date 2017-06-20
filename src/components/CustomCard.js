import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomCard extends Component {
  render() {
    return(
      <div className="row pie-charts">
        {
          this.props.items.map(item => {
            return (
              <div class="pie-chart-item-container">
                <div>
                  <div class="pie-chart-item">
                    <div class="chart"> <span class="percent"></span> </div>
                    <div class="description">
                      <div>{ item.title }</div>
                      <div class="description-stats">{ item.stats }</div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

CustomCard.PropTypes = {
  items: PropTypes.object.isRequired
}

export default CustomCard;
