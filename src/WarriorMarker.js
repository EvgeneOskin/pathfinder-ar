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
          patternUrl: 'patterns/warrior.patt',
          preset: 'custom'
        }}
      >

      <a-entity
        material="color: #FFF0; shader: flat"
        light="color: #DDDDFF; distance: 120; intensity: 0.5; type: point"
        rotation="-90 0 0 "
        position="0 1 0 "
      />

      <a-box cursor-listener
        height={0.1}
        light="type:directional; castShadow:true;"
        // rotation="-90 0 0 "
        src="images/warrior.png"
        >
        {/* <a-animation
            attribute="rotation"
            to="360 0 0"
            dur="2000"
            easing="linear"
            repeat="indefinite"
        /> */}
      </a-box>
      <a-text
        position="0 1 0"
        value={health}
        anchor="left"
      ></a-text>
    </Marker>
  }
}
