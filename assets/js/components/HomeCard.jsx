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
        <Link to={`/customers/${ this.props.customer }/homes/${ this.props.id }/edit`} className="home-card">
            <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${ this.props.addressLine1},${ this.props.city },${ this.props.state },${ this.props.zipcode }&size=350x160&key=AIzaSyA9y4FlV64DW9HKKieSStZta8CE8WfLfz4`} />
            <div className="pad-wrapper">
                <h4>{ this.props.addressLine1 }</h4>
                <address>
                    { this.props.addressLine2 ? this.props.addressLine2 : null }
                    { this.props.addressLine2 ? (<br />) : null }
                    { this.props.city }, { this.props.state } { this.props.zipcode }
                </address>
                <span className="home-meta">{ this.props.bedrooms || 0 }bd &middot; { this.props.bathrooms || 0 }ba &middot; { this.props.sqft || 0 }sqft</span>
            </div>
        </Link>
    );
  }
}
require(__dirname + '/_HomeCard.scss')

export default HomeCard