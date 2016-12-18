import React, { Component } from 'react'
import { connect } from 'react-redux'

import MenuItem from 'components/MenuItem'
import LogoWide from 'icons/LogoWide'

@connect(state => ({
    /* TBD */    
}))

class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            menuData: [
                {
                    to: '/',
                    text: 'Testing Update'
                },
                {
                    to: '/customers/add',
                    text: 'New Customer'
                }
            ]
        }
    }

  componentDidMount(){
      var menuData = this.state.menuData
      var activeMenuItem = 0
      var activeMenuItems = menuData.filter(function(menuItemData, i){
          if (menuItemData.to.length > 1) {
              var re = new RegExp(menuItemData.to, 'i')
              if (re.test( window.location.href )) {
                  activeMenuItem = i
                  return true
              }
          }
          return false
      })
      if (activeMenuItems.length == 1) menuData[ activeMenuItem ].active = true
      else menuData[0].active = true
      this.setState({
          menuData: menuData
      })
  }

  updateActiveMenuItem(menuItemKey){
      var menuData = this.state.menuData;
      menuData = menuData.map(function(menuItemData, i){
          menuItemData.active = i == menuItemKey ? true : false
          return menuItemData 
      })
      this.setState({ menuData: menuData })
  }

  render() {
    
    var menuItems = this.state.menuData.map(function(menuItemData, i){
        return <MenuItem key={`menu-item-${i}`} updateActiveMenuItem={ this.updateActiveMenuItem.bind(this, i) } { ...menuItemData } />
    }, this)

    return (
        <section className="customer-menu">
            <div className="customer-menu-inner-wrapper">
                <LogoWide />
                <ul>
                    { menuItems }
                </ul>
            </div>
        </section>
    );
  }
}

export default Menu