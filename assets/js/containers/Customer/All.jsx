import React, { Component } from 'react'
import { connect } from 'react-redux'

import Sidebar from './sections/Sidebar'
import Menu from './sections/Menu'
import Map from './sections/Map'
import CurrentCustomers from './sections/CurrentCustomers'

import * as CustomerActions from 'actions/Customer'

class CustomerAll extends Component {
  constructor(props){
      super(props);
  }

  render() {
    return (
        <div>
            <CurrentCustomers />
        </div>
    );
  }
}

export default CustomerAll