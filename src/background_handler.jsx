// handles changing of backgrounds and background audio based on time of day

import { Component } from 'react';
import ReactHowler from 'react-howler';

const backgroundImages = [
  { name: 'morning', start: 5, end: 11, src: '/backgrounds/morning.png' },
  { name: 'afternoon', start: 12, end: 17, src: '/backgrounds/afternoon.png' },
  { name: 'night', start: 18, end: 23, src: '/backgrounds/night.png' },
  { name: 'midnight', start: 0, end: 4, src: '/backgrounds/midnight.png' }
];
const audioSources = {
  morning: '/audio/morning.mp3',
  afternoon: '/audio/afternoon.mp3',
  night: '/audio/night.mp3',
  midnight: '/audio/midnight.mp3'
};

function getBackground(hour) {
  for (let bg of backgroundImages) {
    if (bg.start <= bg.end) {
      if (hour >= bg.start && hour <= bg.end) return bg;
    } else {
      // For ranges that cross midnight
      if (hour >= bg.start || hour <= bg.end) return bg;
    }
  }
  // default fallback
  return backgroundImages[1]; // afternoon
}

class BackgroundHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_src: '',
      audio_src: '',
      playing: false,
      key: ''
    };
  }

  componentDidMount() {
    const hour = new Date().getHours();
    const bg = getBackground(hour);
    document.body.style.backgroundImage = `url(${bg.src})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    this.setState({
      image_src: bg.src,
      audio_src: audioSources[bg.name],
      playing: true,
      key: bg.name
    });
  }

  render() {
    // Only render audio if audio_src is set
    return this.state.audio_src ? (
      <ReactHowler
        src={this.state.audio_src}
        playing={this.state.playing}
        loop={true}
        key={this.state.key} // force re-mount if key (background) changes
        volume={1}
      />
    ) : null;
  }
}

export default BackgroundHandler;