import React, { Component } from 'react'
import { connect } from 'react-redux'

import Checkbox from 'components/Checkbox'

import Design from 'icons/Design'
import Outdoor from 'icons/Outdoor'
import Performance from 'icons/Performance'

class HVAC extends Component {
  constructor(props){
      super(props);
  }

  render() {
      
    return (
        <div className="hvac-input flex-wrapper full">
            <div className="full">
                <h2 className="short">HVAC</h2>
            </div>
            <div className="checkbox-inputs">
                <h4>A/C</h4>
                <Checkbox name="ac" value="central" label="Central Air" defaultCheckedArray={ this.props.customer['ac']} />
                <Checkbox name="ac" value="window" label="Window Unit" defaultCheckedArray={ this.props.customer['ac']} />
                <Checkbox name="ac" value="minisplit" label="Mini Split" defaultCheckedArray={ this.props.customer['ac']} />
                <Checkbox name="ac" value="other" label="Other" defaultCheckedArray={ this.props.customer['ac']} />
            </div>
            <div className="checkbox-inputs">
                <h4>Heat</h4>
                <Checkbox name="ac" value="furance" label="Furnace" defaultCheckedArray={ this.props.customer['heat']} />
                <Checkbox name="ac" value="boiler" label="Boiler" defaultCheckedArray={ this.props.customer['heat']} />
                <Checkbox name="ac" value="heat pump" label="Heat Pump" defaultCheckedArray={ this.props.customer['heat']} />
                <Checkbox name="ac" value="other" label="Other" defaultCheckedArray={ this.props.customer['heat']} />
            </div>
        </div>
    );
  }
}

export default HVAC