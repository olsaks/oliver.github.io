import React, { Component } from 'react';
import image_1 from './assets/images/masonry_1.jpg';
import image_2 from './assets/images/masonry_2.jpg';
import image_3 from './assets/images/masonry_3.jpg';
import image_4 from './assets/images/masonry_4.jpg';
import image_5 from './assets/images/masonry_5.jpg';
import image_6 from './assets/images/masonry_6.jpg';

var MasonryGrid = React.createClass({

	"masonry_data": [
		{
			id: "masonry_1",
			image_src: image_1,
			image_alt: "lorem ipsum",
			date: "February 10 2017",
			title: "Bureaux exquisite delightful carefully curated soft power.",
			presenter: "LOREM IPSUM"
		},
		{
			id: "masonry_4",
			image_src: image_4,
			image_alt: "lorem ipsum",
			date: "January 21 2017",
			title: "Esse airport veniam ryokan soft power.",
			presenter: "LOREM IPSUM"
		},
		{
			id: "masonry_2",
			image_src: image_2,
			image_alt: "lorem ipsum",
			date: "February 2 2017",
			title: "Sharp bureaux sleepy K-pop carefully curated.",
			presenter: "LOREM IPSUM"
		},
		{
			id: "masonry_5",
			image_src: image_5,
			image_alt: "lorem ipsum",
			date: "January 18 2017",
			title: "K-pop extraordinary.",
			presenter: "LOREM IPSUM"
		},
		{
			id: "masonry_3",
			image_src: image_3,
			image_alt: "lorem ipsum",
			date: "January 27 2017",
			title: "St Moritz uniforms Beams.",
			presenter: "LOREM IPSUM"
		},
		{
			id: "masonry_6",
			image_src: image_6,
			image_alt: "lorem ipsum",
			date: "January 12 2017",
			title: "Artisanal iconic cutting-edge business class.",
			presenter: "LOREM IPSUM"
		}
	],

	render() {
		return (
			<ul className="masonry_grid grid_layout">
        {this.masonry_data.map(function(masonry_data,i){
          return (
            <li key={i} className="masonry_item">
              <div className="image_container">
                <img className="thumb" src={masonry_data.image_src} alt={masonry_data.image_alt} />
              </div>
              <div className="text_container">
              	<div className="date">
              		{masonry_data.date}
              	</div>
                <div className="content_title">
                  {masonry_data.title}
                </div>
                <div className="presenter_container">
                  <span>Presented by </span>
                  <span className="presenter">{masonry_data.presenter}</span>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
		)
	}

});

export default MasonryGrid;