import React, { Component } from 'react'
import { connect } from 'react-redux'

import EditForm from './components/EditForm'

class CustomerAdd extends Component {
  constructor(props){
      super(props)
  }

  render() {
    return (
        <div>
            <EditForm routeParams={ this.props.routeParams } />
        </div>
    );
  }
}

export default CustomerAdd