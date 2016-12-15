import React, { Component } from 'react'
import { connect } from 'react-redux'

import Checkbox from 'components/Checkbox'

import Design from 'icons/Design'
import Outdoor from 'icons/Outdoor'
import Performance from 'icons/Performance'

class Interests extends Component {
  constructor(props){
      super(props);
  }

  render() {
      
    return (
        <div className="customer-interests flex-wrapper full">
            <div className="full">
                <h2 className="short">Interests</h2>
            </div>
            <div className="checkbox-inputs thirds">
                <h4>
                    <Performance />
                    Performance
                </h4>
                <Checkbox name="performance" value="insulation" label="Insulation &amp; Air Sealing" defaultCheckedArray={ this.props.customer['performance']} />
                <Checkbox name="performance" value="roofing" label="Roofing" defaultCheckedArray={ this.props.customer['performance']} />
                <Checkbox name="performance" value="windows" label="Window" defaultCheckedArray={ this.props.customer['performance']} />
                <Checkbox name="performance" value="solar" label="Residential Solar Energy" defaultCheckedArray={ this.props.customer['performance']} />
            </div>
            <div className="checkbox-inputs thirds">
                <h4>
                    <Design />
                    Design
                </h4>
                <Checkbox name="design" value="kitchen-bath" label="Kitchen &amp; Bath Remodel" defaultCheckedArray={ this.props.customer['design']} />
                <Checkbox name="design" value="flooring" label="Flooring" defaultCheckedArray={ this.props.customer['design']} />
                <Checkbox name="design" value="painting" label="Interior &amp; Exterior Paint" defaultCheckedArray={ this.props.customer['design']} />
            </div>
            <div className="checkbox-inputs thirds">
                <h4>
                    <Outdoor />
                    Outdoor
                </h4>
                <Checkbox name="outdoor" value="rainwater" label="Rainwater Harvesting" defaultCheckedArray={ this.props.customer['outdoor']} />
            </div>
        </div>
    );
  }
}

Interests.defaultProps = {
    customer: {
        performance:[],
        design:[],
        outdoor:[]
    }
}
export default Interests