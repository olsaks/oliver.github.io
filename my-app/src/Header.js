import React, { Component } from 'react';

var Header = React.createClass({
	getInitialState: function(){
    return {
    	menu_active: false
    };
  },

  toggleMenuActive: function(){
    this.setState({menu_active: !this.state.menu_active})
  },

  render: function() {
    return (
    	<div className="header">
	      <header>
	      	<div className="grid_layout">
		      	<div className="logo"></div>
		      	<ul className="nav_container">
		      		<li className="phone_number">212.555.5555</li>
		      		<li className="login_btn">Login</li>
		      		<li className={this.state.menu_active ? "menu_btn active" : "menu_btn"} onClick={this.toggleMenuActive}>
		      			<div></div>
		      			<div></div>
		      			<div></div>
		      		</li>
		      	</ul>
		      </div>
	    	</header>
	    	<div className="sticky_nav_spacer"></div>
	   	</div>
    )
  }
});


export default Header;