/* global AFRAME */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { AFrameRenderer, Marker } from "react-web-ar";

class App extends Component {
  componentWillUnmount() {
    this.scene.exitVR()
  }

  componentDidMount() {
    AFRAME.registerComponent('cursor-listener', {
      init: function() {
        var lastIndex = -1;
        var COLORS = ['red', 'green', 'blue'];
        this.el.addEventListener('click', function (evt) {
          lastIndex = (lastIndex + 1) % COLORS.length;
          this.setAttribute('material', 'color', COLORS[lastIndex]);
          console.log('I was clicked at: ', evt.detail.intersection.point);
        });
      }
    });
  }

  render() {
    let players = Array(8).fill()
    return (
      <AFrameRenderer
        // arToolKit={{ sourceType: 'image', sourceUrl: '/images/warrior_marker.png'}}
        stats
        getSceneRef={ref => (this.scene = ref)}
        inherent={true}
      >
        {players.map((_, i) =>
          <Marker key={1}
              parameters={{
                type: 'pattern',
                patternUrl: '/patterns/warrior.patt',
                'hit-testing-renderDebug': true,
                preset: 'custom'
              }}
            >
            <a-image cursor-listener height={0.5} front="front" src="/images/warrior.png">
              <a-animation
                  attribute="rotation"
                  to="360 0 0"
                  dur="2000"
                  easing="linear"
                  repeat="indefinite"
              />
            </a-image>
          </Marker>
        )}
        <a-cursor></a-cursor>
      </AFrameRenderer>
    )
  }
}
export default App;
