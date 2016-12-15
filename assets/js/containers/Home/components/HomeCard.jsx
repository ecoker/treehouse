import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router'

class HomeCard extends Component {
  constructor(props){
      super(props);
  }

  shouldDisplayIcon(propValue) {
      if (!propValue) return false
      if (propValue.length > 0) return true
      return false
  }

  handleClick(ev){
      console.log( ev.target )
  }

  render() {
    return (
        <div onClick={ this.handleClick } className="customer-card">
            <Link to={`/customers/${ this.props.id }/edit`}>
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
            </Link>
            <a href={`tel:${ this.props.phone }`} className="phone">{ this.props.phone }</a>
            <a href={`mailto:${ this.props.email }`} className="email">{ this.props.email }</a>
        </div>
    );
  }
}

export default HomeCard