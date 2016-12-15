import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(state => ({
    /* TBD */    
}))

class Map extends Component {
  constructor(props){
      super(props);
  }

  componentDidMount(){
    var title = 'Treehouse Customers Austin'
    var coords = { lat: 30.230816153585547, lng: -97.79935219458162 }
    var mapStyles = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]

    var map = new google.maps.Map(document.getElementById('customer-map'), {
        center: coords,
        draggable: false,
        scrollwheel: false,
        styles: mapStyles,
        zoom: 15
    });

    var marker = new google.maps.Marker({
        icon: {
        url: 'https://s3.amazonaws.com/cdn.treehouse.co/images/map-pin.png',
        scaledSize: new google.maps.Size(62, 91)
        },
        position: coords,
        map: map,
        title: 'title'
    });

  }

  handleClick(ev){
    
  }

  render() {
    return (
        <section id="customer-map">
            Hello, map
        </section>
    );
  }
}

export default Map