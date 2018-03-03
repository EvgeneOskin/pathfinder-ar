/* global AFRAME */
import React, { Component } from 'react';
import { AFrameRenderer, Marker } from "react-web-ar";

export default class WarriorMarker extends Component {

  constructor(props) {
    super(props)
    this.maxHealth = 5;
    this.state = {
      health: this.maxHealth,
    }
  }
  componentDidMount() {
    const component = this
    AFRAME.registerComponent('cursor-listener', {
      init: function() {
        this.el.addEventListener('click', function (evt) {
          let { health } = component.state
          health = Math.max(health - 1, 0)
          component.setState({ health })
        });
      }
    });
  }
  render() {
    const { health } = this.state
    return <Marker
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
      <a-text
        position="0 1 0"
        value={health}
        anchor="left"
      ></a-text>
    </Marker>
  }
}
