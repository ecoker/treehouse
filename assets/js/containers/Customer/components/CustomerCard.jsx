import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router'

import Design from 'icons/Design'
import Outdoor from 'icons/Outdoor'
import Performance from 'icons/Performance'

class Card extends Component {
  constructor(props){
      super(props);
  }

  shouldDisplayIcon(propValue) {
      if (!propValue) return false
      /* FORMDATA METHOD WILL ADD EMPTY VALUES. WE NEED TO REMOVE THEM FROM THE ARRAY --- */
      var index = propValue.indexOf("")
      if (index > -1) propValue.splice(index, 1)
      if (propValue.length > 0) return true
      return false
  }

  render() {
    return (
        <Link to={`/customers/${ this.props.id }/edit`} className="customer-card">
            <span className="card-interests">
                { this.shouldDisplayIcon(this.props.design) ? <Design /> : null }
                { this.shouldDisplayIcon(this.props.outdoor) ? <Outdoor /> : null }
                { this.shouldDisplayIcon(this.props.performance) ? <Performance /> : null }
            </span>
            <h4>{ this.props.firstName } { this.props.lastName }</h4>
            {
                this.props.addressLine1 ? (
                    <address>
                    { this.props.addressLine1 }
                    { this.props.addressLine1 ? (<br />) : null }
                    { this.props.addressLine2 ? this.props.addressLine2 : null }
                    { this.props.addressLine2 ? (<br />) : null }
                    { this.props.city }, { this.props.state } { this.props.zipcode }
            </address>
                ) : null
            }
            <span className="phone">{ this.props.phone }</span>
            <span className="email">{ this.props.email }</span>
        </Link>
    );
  }
}

Card.defaultProps = {
    design: [],
    outdoor: [],
    performance: []
}
export default Card