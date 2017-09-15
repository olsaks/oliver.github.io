import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import image_1 from './assets/images/hero_1.jpg';
import image_2 from './assets/images/hero_2.jpg';
import image_3 from './assets/images/hero_3.jpg';

var MainCarousel = React.createClass({

  "carousel_data": [
    {
      id: "slide_1",
      image_src: image_1,
      image_alt: "lorem ipsum",
      date: "October 15, 2017",
      title: "Screening:",
      subtitle: "DVF Secret Agent Part 2",
      description: "Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg."
    },
    {
      id: "slide_2",
      image_src: image_2,
      image_alt: "lorem ipsum",
      date: "October 15, 2017",
      title: "Screening:",
      subtitle: "DVF Secret Agent Part 2",
      description: "Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg."
    },
    {
      id: "slide_3",
      image_src: image_3,
      image_alt: "lorem ipsum",
      date: "October 15, 2017",
      title: "Screening:",
      subtitle: "DVF Secret Agent Part 2",
      description: "Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg."
    }
  ],

  render() {
    return (
      <Carousel showStatus={false} showThumbs={false} showArrows={false} infiniteLoop={true} autoPlay={true} transitionTime={300} interval={5000}>
        {this.carousel_data.map(function(carousel_data,i){
          return (
            <div key={i} className="carousel_container">
              <img src={carousel_data.image_src} />
              <div className="floating_text_area">
                <div className="title_container">
                  <h2 className="title">
                    {carousel_data.title}
                  </h2>
                  <h2 className="title">
                    {carousel_data.subtitle}
                  </h2>
                </div>
                <div className="date">
                  {carousel_data.date}
                </div>
                <p className="description">
                  {carousel_data.description}
                </p>
              </div>
            </div>
          )
        })}
      </Carousel>
    )
  }

});

export default MainCarousel;
