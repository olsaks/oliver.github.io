import React, { Component } from 'react';
import Header from './Header';
import MasonryGrid from './MasonryGrid';
import Footer from './Footer';
import Carousel from './Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Carousel/>
        <MasonryGrid/>
        <Footer/>
      </div>
    );
  }
}

export default App;
