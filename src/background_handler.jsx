// handles changing of backgrounds based on time of day

import React, { Component } from 'react';

// Define the correct relative path to your images

const backgroundImages = [
  { name: 'morning', start: 5, end: 11, src:'/backgrounds/morning.png' },
  { name: 'afternoon', start: 12, end: 17, src:'/backgrounds/afternoon.png' },
  { name: 'night', start: 18, end: 23, src:'/backgrounds/night.png' },
  { name: 'midnight', start: 0, end: 4, src:'/backgrounds/midnight.png' }
];

function getBackgroundImage(hour) {
  for (let bg of backgroundImages) {
    if (bg.start <= bg.end) {
      if (hour >= bg.start && hour <= bg.end) return bg.src;
    } else {
      // For ranges that cross midnight
      if (hour >= bg.start || hour <= bg.end) return bg.src;
    }
  }
  // if error returns afternoon bc it is the default
  return '/backgrounds/afternoon.png';
}

class BackgroundHandler extends Component {
    constructor(props){
        super(props);
        this.state = {
            image_src: ''
        }
    }
    componentDidMount() {
        const hour = new Date().getHours();
        const image = getBackgroundImage(hour);
        // Set background on body
        document.body.style.backgroundImage = `url(${image})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        this.setState({ image_src: image });
    }
    render() {
        return null
    }
}

export default BackgroundHandler;