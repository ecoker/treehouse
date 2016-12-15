import React, { Component } from 'react'
import { connect } from 'react-redux'

import EditForm from './components/EditForm'

class CustomerEdit extends Component {
  constructor(props){
      super(props)
      this.state = {
          customer:{},
          foundHome: false
      }
      this.setCurrentCustomer = this.setCurrentCustomer.bind(this)
      this.setCurrentHome = this.setCurrentHome.bind(this)
      this.findCurrentCustomer = this.findCurrentCustomer.bind(this)
      this.findCurrentHome = this.findCurrentHome.bind(this)
  }

  componentDidMount(){
      this.findCurrentHome()
  }

  setCurrentCustomer(customer) {
      this.setState({
        customer: customer
      })
  }

  setCurrentHome(homes) {
      var home = homes[0]
      this.setState({
        home: home,
        foundHome: true
      })
      var currentCustomer = this.findCurrentCustomer()
      if (currentCustomer.length > 0) {
        this.setState({ customer: currentCustomer[0] })
      } else {
          $.getJSON(`/customers/${this.props.routeParams.customerId}`, this.setCurrentCustomer);
      }
  }

  findCurrentCustomer(){
    var currentCustomer = this.props.customers.filter(function(customer){
        return customer.id == this.props.routeParams.customerId
    }, this)
    if (currentCustomer.length > 0) return currentCustomer
    return []
  }

  findCurrentHome(){
    var currentCustomer = this.findCurrentCustomer()
    if (currentCustomer.length > 0) {
        var currentHome = currentCustomer.filter(function(home){
            return home.id == this.props.routeParams.homeId
        })
        if (currentHome.length > 0) {
            this.setState({
                home: currentHome[0],
                customer: currentCustomer[0],
                foundHome: true
            })
        } else {
            $.getJSON(`/customers/${this.props.routeParams.customerId}/homes/${this.props.routeParams.homeId}`, this.setCurrentHome);    
        }
    } else {
        $.getJSON(`/customers/${this.props.routeParams.customerId}/homes/${this.props.routeParams.homeId}`, this.setCurrentHome);
    }
  }

  render() {
    return (
        <div>
            { this.state.foundHome ? <EditForm routeParams={ this.props.routeParams } home={ this.state.home } customer={ this.state.customer } /> : null }
        </div>
    );
  }
}

CustomerEdit.defaultProps = {
    customers: []
}
export default CustomerEdit