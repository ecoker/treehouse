import React, { Component } from 'react'
import { connect } from 'react-redux'

import CustomerCard from './../components/CustomerCard'
import AddCard from 'components/AddCard'

@connect(state => ({
    customers: state.Customer.customers
}))

class Customers extends Component {
  constructor(props){
      super(props);
  }

  render() {
    var CustomerCards = this.props.customers.map(function(c,i){
        return <CustomerCard key={`customer-project-card-${i}`} { ...c } />
    })
    return (
        <section className="customer-projects">
            <div>
                <AddCard to={ `/customers/add` } className="home-card add" text="Add Customer" />
                { CustomerCards }
            </div>
        </section>
    );
  }
}

export default Customers