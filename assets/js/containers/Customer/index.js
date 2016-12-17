import React, { Component } from 'react'
import { connect } from 'react-redux'

import Sidebar from './sections/Sidebar'
import Menu from './sections/Menu'
import Map from './sections/Map'

import * as CustomerActions from 'actions/Customer'
import * as HomeActions from 'actions/Home'

@connect(state => ({
    customers: state.Customer.customers
}))

class Customer extends Component {
  constructor(props){
      super(props);
      this.state = {
          loading: true
      }
      this.setCustomers = this.setCustomers.bind(this)
      this.handleCustomerEvents = this.handleCustomerEvents.bind(this)
      this.setHomes = this.setHomes.bind(this)
      this.handleHomeEvents = this.handleHomeEvents.bind(this)
  }

  componentDidMount(){
      io.socket.get('/customers?sort=updatedAt desc', this.setCustomers)
      io.socket.on('customer', this.handleCustomerEvents)

      io.socket.get('/homes?sort=updatedAt desc', this.setHomes)
      io.socket.on('home', this.handleHomeEvents)
  }

  setCustomers(customers) {
      this.props.dispatch( CustomerActions.setCustomers(customers) )
  }

  setHomes(homes) {
      this.props.dispatch( HomeActions.setHomes(homes) )
  }

  handleCustomerEvents(event) {
      if (event.verb == 'created') this.props.dispatch( CustomerActions.addCustomer(event.data) )
      else if (event.verb == 'destroyed') this.props.dispatch( CustomerActions.removeCustomer(event.previous) )
      else if (event.verb == 'updated') this.props.dispatch( CustomerActions.updateCustomer(event.data) )
      else {
          // this serves as a "catch-all" to keep us in sync
          io.socket.get('/customers?sort=updatedAt desc', this.setCustomers)
      }
  }

  handleHomeEvents(event) {
      if (event.verb == 'updated') {
          // updates are not captured under the Customer Event pipeline
          io.socket.get('/customers?sort=updatedAt desc', this.setCustomers)
      }
  }

  render() {
    return (
        <div className="flex-wrapper">
            <Sidebar />
            <section className="primary-content">
                <Menu />
                { this.props.children }
            </section>
        </div>
    );
  }
}

require('./styles.scss')

export default Customer