import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router'

@connect(state => ({
    /* TBD */    
}))

class MenuItem extends Component {
  constructor(props){
      super(props)
      this.handleClick = this.handleClick.bind(this)
  }

  handleClick(ev){
      this.props.updateActiveMenuItem()
  }

  render() {
    return (
        <li className={ this.props.active ? 'active' : null }>
            <Link to={ this.props.to } onClick={ this.handleClick }>{ this.props.text }</Link>
        </li>
    );
  }
}

export default MenuItem