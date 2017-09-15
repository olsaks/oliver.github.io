import React, { Component } from 'react';

var Footer = React.createClass({
  render: function() {
    return (
      <footer>
      	<ul className="nav_container">
      		<li className>© 2017 &#8212; Sparta Pleasent</li>
          <span>-</span>
      		<li className="social_media_link">Instagram</li>
          <span>-</span>
      		<li className="social_media_link">Facebook</li>
          <span>-</span>
      		<li className="social_media_link">Twitter</li>
      	</ul>
    	</footer>
    )
  }
});

export default Footer;