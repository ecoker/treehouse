import React, { Component } from 'react'
import { connect } from 'react-redux'

import Checkbox from 'components/Checkbox'

class HVAC extends Component {
  constructor(props){
      super(props);
  }

  render() {
      
    return (
        <div className="hvac-input customer-input-card full">
            <div className="full">
                <h3 className="short">HVAC</h3>
                <p>Select multiple if home has several different kinds of units</p>
            </div>
            <div className="checkbox-inputs">
                <h4>A/C</h4>
                <Checkbox name="ac" value="central" label="Central Air" defaultCheckedArray={ this.props.home['ac']} />
                <Checkbox name="ac" value="window" label="Window Unit" defaultCheckedArray={ this.props.home['ac']} />
                <Checkbox name="ac" value="minisplit" label="Mini Split" defaultCheckedArray={ this.props.home['ac']} />
                <Checkbox name="ac" value="other" label="Other" defaultCheckedArray={ this.props.home['ac']} />
            </div>
            <div className="checkbox-inputs">
                <h4>Heat</h4>
                <Checkbox name="heat" value="furance" label="Furnace" defaultCheckedArray={ this.props.home['heat']} />
                <Checkbox name="heat" value="boiler" label="Boiler" defaultCheckedArray={ this.props.home['heat']} />
                <Checkbox name="heat" value="heat pump" label="Heat Pump" defaultCheckedArray={ this.props.home['heat']} />
                <Checkbox name="heat" value="other" label="Other" defaultCheckedArray={ this.props.home['heat']} />
            </div>
        </div>
    );
  }
}

require(__dirname + '/_HVAC.scss')

HVAC.defaultProps = {
    customer: {}
}
export default HVAC