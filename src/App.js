import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { AFrameRenderer, Marker } from "react-web-ar";
import WarriorMarker from './WarriorMarker'

class App extends Component {
  componentWillUnmount() {
    this.scene.exitVR()
  }

  render() {
    return (
      <AFrameRenderer
        // arToolKit={{ sourceType: 'image', sourceUrl: '/images/warrior_marker.png'}}
        stats
        getSceneRef={ref => (this.scene = ref)}
        inherent={true}
      >
        <WarriorMarker />
        <a-cursor></a-cursor>
      </AFrameRenderer>
    )
  }
}
export default App;
