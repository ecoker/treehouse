import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router'

class AddCard extends Component {
  constructor(props){
      super(props);
  }

  render() {
    return (
        <Link to={ this.props.to } className={ this.props.className }>
            <div className="card-inner-wrapper">
                <h4>&#43;</h4>
                <p>{ this.props.text }</p>
            </div>
        </Link>
    );
  }
}

export default AddCard