import React, { Component } from 'react'
import { connect } from 'react-redux'

import Crosshairs from 'icons/Crosshairs'

@connect(state => ({
    /* TBD */    
}))

class Address extends Component {
  constructor(props){
      super(props);
      this.state = {
          hasGeolocationSupport: "geolocation" in navigator && typeof google !== 'undefined'
      }
      this.geolocationError = this.geolocationError.bind(this)
      this.setGeolocation = this.setGeolocation.bind(this)
      this.getGeolocation = this.getGeolocation.bind(this)
      this.getAddressByGeolocation = this.getAddressByGeolocation.bind(this)
      this.initAutocomplete = this.initAutocomplete.bind(this)
      this.fillInAddress = this.fillInAddress.bind(this)
      this.updateInputsWithAddress = this.updateInputsWithAddress.bind(this)
  }

  componentDidMount(){
      if (this.state.hasGeolocationSupport) this.getGeolocation()
  }

  setGeolocation(position){
      this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude
      })
      this.initAutocomplete()
      var circle = new google.maps.Circle({
        center: { lat: position.coords.latitude, lng: position.coords.longitude },
        radius: position.coords.accuracy
      })
      this.autocomplete.setBounds(circle.getBounds())
  }

  geolocationError(error){
      console.warn(`Error with geolocation (${error.code}): ${error.message}`)
      this.setState({
          hasGeolocationSupport: false
      })
  }

  getGeolocation(){
    navigator.geolocation.getCurrentPosition(this.setGeolocation, this.geolocationError, {
        timeout: 45000,
        maximumAge: 0    
    });
  }

  getGeocodeProperty(addressParts, property, format="short_name") {
    var addressPart = ''
    addressParts.forEach((address) => {
        if (address.types.indexOf(property) > -1) addressPart = address[format]
    })
    return addressPart
  }

  getAddressByGeolocation(ev){
    ev.preventDefault()
    var latlng = {
        lat: parseFloat(this.state.lat),
        lng: parseFloat(this.state.lng)
    }
    var _this = this
    var geocoder = new google.maps.Geocoder
    geocoder.geocode({'location': latlng}, function(results, status){
        if (status !== 'OK') return false
        if (results[1]) {
            _this.updateInputsWithAddress( results[0].address_components )
        } else {
            alert('Sorry, we couldn\'t figure out the address.')
        }
    })
  }

  updateInputsWithAddress(addressParts){
    /*
    // THIS IS SET UP FOR EASY READING, BUT IT LOOPS THROUGH THE DATA MORE THAN I'D LIKE FOR A PRODUCTION APP
    */
    document.getElementsByName('addressLine1')[0].value = `${this.getGeocodeProperty(addressParts, 'street_number', 'long_name')} ${this.getGeocodeProperty(addressParts, 'route', 'long_name')}`
    document.getElementsByName('city')[0].value = this.getGeocodeProperty(addressParts, 'locality', 'long_name')
    document.getElementsByName('state')[0].value = this.getGeocodeProperty(addressParts, 'administrative_area_level_1')
    document.getElementsByName('zipcode')[0].value = this.getGeocodeProperty(addressParts, 'postal_code')
  }

  initAutocomplete(){
      this.autocomplete = new google.maps.places.Autocomplete( (document.getElementsByName('addressLine1')[0] ), {types: ['geocode']});
      this.autocomplete.addListener('place_changed', this.fillInAddress);
  }

  fillInAddress() {
        // Get the place details from the autocomplete object.
        this.place = this.autocomplete.getPlace()
        this.updateInputsWithAddress( this.place.address_components )
  }

  render() {
      
    return (
        <div className="address-input-wrapper flex-wrapper flex-between">
            { this.state.hasGeolocationSupport ? <a href="#" className="get-address" onClick={ this.getAddressByGeolocation }><Crosshairs />Estimate Address using Current Location</a> : null }
            <div className="input-with-labels full">
                <label htmlFor="addressLine1">Address</label>
                <input type="text" placeholder="1313 Disneyland Drive" name="addressLine1" defaultValue={ this.props.customer.addressLine1 } />
            </div>
            <div className="input-with-labels full">
                <label htmlFor="addressLine2">Apt / Suite / Unit / Etc.</label>
                <input type="text" placeholder="1A" name="addressLine2"  defaultValue={ this.props.customer.addressLine2 } />
            </div>
            <div className="input-with-labels">
                <label htmlFor="city">City</label>
                <input type="text" placeholder="Anaheim" name="city"  defaultValue={ this.props.customer.city } />
            </div>
            <div className="input-with-labels fourths">
                <label htmlFor="state">State</label>
                <input type="text" placeholder="CA" name="state"  defaultValue={ this.props.customer.state } />
            </div>
            <div className="input-with-labels fourths">
                <label htmlFor="state">Zip</label>
                <input type="text" placeholder="92802" name="zipcode"  defaultValue={ this.props.customer.zipcode } />
            </div>
        </div>
    );
  }
}

Address.defaultProps = {
    customer: {}
}
export default Address