import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { AFrameRenderer, Marker } from "react-web-ar";

class App extends Component {
  componentWillUnmount() {
    this.scene.exitVR()
  }

  render() {
    return (
      <AFrameRenderer
        arToolKit={{ sourceType: 'image', sourceUrl: '/images/warrior_marker.png'}}
        stats
        getSceneRef={ref => (this.scene = ref)}
        inherent={true}
      >
        <Marker parameters={{ type: 'pattern', patternUrl: '/patterns/warrior.patt', preset: 'custom' }}>
          <a-image height={0.5} front="front" src="/images/warrior.png">
            <a-animation
                attribute="rotation"
                to="360 0 0"
                dur="2000"
                easing="linear"
                repeat="indefinite"
            />
          </a-image>
        </Marker>
      </AFrameRenderer>
    )
  }
}
export default App;
