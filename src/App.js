import React, { Component } from 'react';
import './App.css';

// Components..
import Carousel from './Elastic-Carousel/ElasticCarousel';


class App extends Component {

  state = {}

  render() {

    return (
      <div>

        <div className = 'header'>
          <div className = 'logo'>WorkShop</div>
        </div>
        <div className = 'fixer'>
           <Carousel />
        </div>

        </div>

        

      
    );
  }


}


export default App;