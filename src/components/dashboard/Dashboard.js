import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import CustomCard from '../CustomCard';

class Dashboard extends Component {
  render() {
    const items = [
      {
        title: 'Revenue',
        stats: '34'
      },
      {
        title: 'Sales',
        stats: '55'
      },
      {
        title: 'Margin',
        stats: '65'
      },
      {
        title: 'Revenue vs Sales',
        stats: '43'
      }
    ]
    return(
      <div>
        Dashboard
        <CustomCard items={items} />
      </div>
    )
  }
}

export default Dashboard;
