import React, { Component } from 'react'
import { connect } from 'react-redux'

import EditForm from './components/EditForm'
import Address from 'components/Address'
import SlideInput from 'components/SlideInput' 
import IncrementInput from 'components/IncrementInput' 

import * as CustomerActions from 'actions/Customer'

class CustomerAdd extends Component {
  constructor(props){
      super(props)
  }

  render() {
    return (
        <div className="customer-input-wrapper">
            <EditForm />
        </div>
    );
  }
}

export default CustomerAdd