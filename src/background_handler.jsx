// handles changing of backgrounds and background audio based on time of day

import { Component } from 'react';
import ReactHowler from 'react-howler';
import {faVolumeHigh, faVolumeOff} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const backgroundImages = [
  { name: 'morning', start: 5, end: 11, src: '/backgrounds/morning.png' },
  { name: 'afternoon', start: 12, end: 17, src: '/backgrounds/afternoon.png' },
  { name: 'night', start: 18, end: 23, src: '/backgrounds/night.png' },
  { name: 'midnight', start: 0, end: 4, src: '/backgrounds/midnight.png' }
];
const audioSources = {
  morning: '/audio/morning.ogg',
  afternoon: '/audio/afternoon.ogg',
  night: '/audio/night.ogg',
  midnight: '/audio/midnight.ogg'
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
      playing: true,
      key: '',
      mute: true
    };
    this.FADE_DURATION = 2000; // ms
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

  toggleMute = () => {
    this.setState((prevState) => ({ mute: !prevState.mute }));
  }

  render() {
    return (
      <>
        {/* Audio player */}
        {this.state.audio_src && (
          <ReactHowler
            ref={ref => { this.howlerRef = ref; }}
            src={this.state.audio_src}
            playing={this.state.playing}
            loop={true}
            key={this.state.key}
            volume={0.5}
            mute={this.state.mute}
          />
        )}
        {/* Mute button - top right */}
        <button
          onClick={this.toggleMute}
          className="audio-btn-fixed"
          style={{
            position: 'fixed',
            top: 30,
            right: 40,
            zIndex: 1000,
            background: 'rgba(255,255,255,0.7)',
            border: 'black solid 1px',
            borderRadius: '50%',
            width: 50,
            height: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
          }}
          aria-label={this.state.mute ? 'Unmute audio' : 'Mute audio'}
        >
          <FontAwesomeIcon icon={this.state.mute ? faVolumeOff : faVolumeHigh} size="lg" color="black" />
        </button>
      </>
    );
  }
}

export default BackgroundHandler;