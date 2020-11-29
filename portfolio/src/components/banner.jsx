import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import camera from '../assets/camera-brown.png';
import compass from '../assets/compass-brown.png';
import '../design/banner.scss'

function Banner() {
  return (
    <>
      <Jumbotron id="banner" fluid>
          <img id="camera" src={camera} alt="camera"/>
          <h1>Curious and Courageous</h1>
          <p>
          “When you're curious, you find lots of interesting things to do. And one thing it takes to accomplish something is courage.” - Walt Disney
          </p>
          <img id="compass" src={compass} alt="compass"/>
      </Jumbotron>
    </>
  )
}

export default Banner;

