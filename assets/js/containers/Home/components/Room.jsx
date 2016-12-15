import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router'

import SlideInput from 'components/SlideInput'
import IncrementInput from 'components/IncrementInput' 

class Room extends Component {
  constructor(props){
      super(props);
  }

  render() {
    return (
        <div className="flex-wrapper full room">
            <div className="customer-input-card flex-wrapper full">
                <div className="input-with-labels full">
                    <label htmlFor="rooms.name">Room Name (Optional)</label>
                    <input type="text" placeholder="Master Bedroom" name="rooms.name" defaultValue={ this.props.name } />
                </div>
                <div className="flex-wrapper full flex-between flex-nowrap">
                    <div className="customer-input-card shrink">
                        <label>Windows</label>
                        <IncrementInput name="rooms.windows" defaultValue={ this.props.windows } />
                    </div>
                    <div className="customer-input-card shrink">
                        <label>Story</label>
                        <IncrementInput name="rooms.story" defaultValue={ this.props.story } />
                    </div>
                    <div className="customer-input-card square-feet">
                        <SlideInput label="Sq.Ft." name="rooms.sqft" defaultValue={ this.props.sqft } max={ 800 } increment={ 5 } hideColon={ true } />
                    </div>
                </div>
                <div className="flex-wrapper full customer-notes">
                    <textarea placeholder="Notes" name="rooms.notes" defaultValue={ this.props.notes } />
                </div>
            </div>
        </div>
    );
  }
}

require('./_room.scss')
export default Room