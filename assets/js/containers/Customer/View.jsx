import React, { Component } from 'react'
import { connect } from 'react-redux'

import EditForm from './components/EditForm'
import Address from 'components/Address'
import SlideInput from 'components/SlideInput' 
import IncrementInput from 'components/IncrementInput'
import AddCard from 'components/AddCard'
import HomeCard from 'components/HomeCard'

import * as CustomerActions from 'actions/Customer'

@connect(state => ({
    customers: state.Customer.customers
}))

class CustomerView extends Component {
  constructor(props){
      super(props)
      this.state = {
          foundCustomer: false
      }
      this.getHomes = this.getHomes.bind(this)
      this.findCurrentCustomer = this.findCurrentCustomer.bind(this)
      this.setCurrentCustomer = this.setCurrentCustomer.bind(this)
  }

  componentDidMount(){
      this.findCurrentCustomer()
  }

  setCurrentCustomer(customer) {
      this.setState({
        customer: customer,
        foundCustomer: true          
      })
  }

  findCurrentCustomer(){
    var currentCustomer = this.props.customers.filter(function(customer){
        return customer.id == this.props.routeParams.customerId
    }, this)
    if (currentCustomer.length > 0) {
        this.setState({
            customer: currentCustomer[0],
            foundCustomer: true
        })
    } else {
        $.getJSON(`/customers/${this.props.routeParams.customerId}`, this.setCurrentCustomer);
    }
  }

  getHomes(){
    /* CUSTOMER IS NOT DEFINED, DO NOT RENDER HOMES --- */
    if (!this.state.customer) return []
    /* HOMES IS NOT DEFINED, DO NOT LOOP THROUGH HOMES --- */
    if (!this.state.customer.homes) return []
    return this.state.customer.homes.map(function(home, i){
        return <HomeCard key={`home-card-${i}`} { ...home } />
    })
  }

  render() {
    
    return (
        <div className="customer-input-wrapper">
            { this.state.foundCustomer ? <EditForm routeParams={ this.props.routeParams } customer={ this.state.customer } /> : null }
            <div className="flex-wrapper full home-cards">
                { 
                    this.state.foundCustomer ? (
                        <AddCard to={ `/customers/${ this.props.routeParams.customerId }/homes/add` } className="home-card add" text="Add Home" />
                    ): null
                }
                { this.getHomes() }
            </div>
        </div>
    );
  }
}

CustomerView.defaultProps = {
    customers: []
}

export default CustomerView