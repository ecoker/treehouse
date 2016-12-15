import React, { Component } from 'react'
import { connect } from 'react-redux'

class Phone extends Component {
  constructor(props){
      super(props)
      this.state = {
          value: this.props.value || ''
      }
  }

  handleKeyPress(ev) {
    console.log( String.fromCharCode(ev.key) )    
  }

  render() {
    return (
        <input onKeyPress={ this.handleKeyPress } type="tel" name={ this.props.name } placeholder={ this.props.placeholder } value={ this.state.value } />
    );
  }
}
export default Phone