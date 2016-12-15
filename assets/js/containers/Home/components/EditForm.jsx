import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router';
import { Link } from 'react-router'

import Address from 'components/Address'
import SlideInput from 'components/SlideInput' 
import IncrementInput from 'components/IncrementInput' 
import HVAC from 'components/HVAC'
import Room from './Room'

import * as CustomerActions from 'actions/Customer'

@connect(state => ({ }))

class EditHomeForm extends Component {
  constructor(props){
      super(props)
      this.state = {
          rooms: props.home.rooms || []
      }
      this.addRoom = this.addRoom.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev){
    ev.preventDefault()
    var formData = new FormData(ev.target)
    
    /*
    // NOTE: THIS ONE IS WEIRD. WE'RE BASICALLY CREATING A NON-STANDARD POST OBJECT
    // SAILS HAS PROBLEMS WITH THE FORM AS IT'S SET UP, SO WE'RE GETTING ALL OF THE 
    // DATA OUT OF THE FORM AND SUBMITTING IT WITH JQUERY. GOOD NEWS, IT WORKS!
    // BAD NEWS - IT'S NOT SUPER CLEAN. FROWN.
    */

    /*
    // GATHER ALL FORM DATA USING THE NAME ATTRIBUTE
    */
    var convertedFormData = {}
    $('[name]').each(function(){
        if (!/meta/i.test(this.tagName)) {
            var name = $(this).attr('name')
            if (!convertedFormData[name]) convertedFormData[name] = formData.getAll(name)
        }
    })
    
    /*
    // TRANSFORM OBJECT INTO SOMETHING WE CAN POST
    */
    var formDataToPost = {};
    Object.keys(convertedFormData).forEach(function(key){
        var data = convertedFormData[key]
        var dataKey = key.split('.')[0]
        if (key.split('.').length > 1) {
            /* HANDLE OBJECTS --- */
            var name = key.split('.')[1]
            for (var i = 0; i < data.length; i++) {
                if (!formDataToPost[ dataKey ]) formDataToPost[ dataKey ] = []
                if (!formDataToPost[ dataKey ][i]) formDataToPost[ dataKey ][i] = {}
                formDataToPost[ dataKey ][i][name] = data[i]
            }
        } else if (data.length > 1) {
            /* HANDLE ARRAYS --- */
            formDataToPost[ dataKey ] = data
        } else {
            /* HANDLE STRINGS, ETC --- */
            formDataToPost[ dataKey ] = data[0]
        }
    })
    if (!formDataToPost['performance']) formDataToPost['performance'] = []
    if (!formDataToPost['design']) formDataToPost['design'] = []
    if (!formDataToPost['outdoor']) formDataToPost['outdoor'] = []
    console.log('to post', formDataToPost )
    var _this = this
    if (this.props.home.id) {
        $.ajax({
            url: ev.target.action,
            type: 'PUT',
            data: formDataToPost,
            success: function(response) {
                _this.props.dispatch( CustomerActions.updateCustomerHome(response) )
                browserHistory.push(`/customers/${response.customer.id}/edit`)
            }
        });
    } else {
        $.post(ev.target.action, formDataToPost, function(response){
            _this.props.dispatch( CustomerActions.addCustomerHome(response) )
            browserHistory.push(`/customers/${response.customer}/edit`)
        })
    }

  }

  addRoom(ev) {
      ev.preventDefault()
      var newRooms = this.state.rooms
      newRooms.push({})
      this.setState({
          rooms: newRooms
      })
  }

  render() {
    var Rooms = this.state.rooms.map(function(room, i){
        return <Room key={`home-rooms-${i}`} { ...room } formKey={i} />
    })
    Rooms.reverse()
    return (
        <form method="POST" onSubmit={ this.handleSubmit } action={`/homes${ this.props.home.id ? `/${this.props.home.id}` : ''}`}>
            <input type="hidden" name="customer" value={ this.props.routeParams.customerId } />
            { this.props.home.id ? <input type="hidden" name="id" value={ this.props.routeParams.customerId } /> : null }
            <div className="customer-input-wrapper">
                <div className="customer-input-card full">
                    <Link to={`/customers/${this.props.routeParams.customerId}/edit`} className="back-link">&lt; Back to Customer Information</Link>
                    <span className="subhead-lockup">
                        <h2>{ this.props.customer.firstName ? `${this.props.customer.firstName} ${this.props.customer.lastName}'s Home` : 'Home Details' }</h2>
                        <Address customer={ this.props.home } />
                    </span>
                </div>
                <div className="customer-input-card full">
                    <SlideInput defaultValue={ this.props.home.sqft } label="Square Footage" name="sqft" max={ 5000 } increment={ 5 } />
                </div>
                <div className="flex-wrapper full">
                    <div className="customer-input-card">
                        <label>Stories</label>
                        <IncrementInput name="stories" defaultValue={ this.props.home.stories } />
                    </div>
                    <div className="customer-input-card">
                        <label>Bedrooms</label>
                        <IncrementInput name="bedrooms" defaultValue={ this.props.home.bedrooms } />
                    </div>
                    <div className="customer-input-card">
                        <label>Bathrooms</label>
                        <IncrementInput name="bathrooms" incrementAmount={ .5 } defaultValue={ this.props.home.bathrooms } />
                    </div>
                </div>
                <HVAC home={ this.props.home } />
                <div className="flex-wrapper full room">
                    <h3 className="alt">Rooms: { this.state.rooms.length }<button onClick={ this.addRoom } className="secondary">&#43; Add Room</button></h3>
                </div>
                { Rooms }
                <button>Submit</button>
            </div>
        </form>
    );
  }
}

EditHomeForm.defaultProps = {
    home: {},
    customer: {}
}
export default EditHomeForm