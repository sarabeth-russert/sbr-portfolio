import React from 'react';
import '../design/about.scss';
import profile from '../assets/profile1.jpeg';

function AboutMe() {
  return(
    <div className="about">
      <h2>Who am I?</h2>
      <p>Hi! I am Sara Russert. A Software Engineer living in Washington state with my family and our pack of dogs. I like to work on projects that require logical architecture, like games and API's. I love learning and doing deep dives on whatever topics take my interest. Right now that means React and home renovation. I am a life-long Disney enthusiast and am excited by animatronics and IOT. I would love to hear your ideas for home IOT projects! </p>
      <img src={profile} alt="Sara Russert"/>
      <ul>Other interests include:
        <li>Lifting heavy weights</li>
        <li>Eating cookies</li>
        <li>Going on hikes with my wife</li>
        <li>Doing scent work training with my dog Indiana.</li>
        <li>Meet me at Disneyland</li>
      </ul>
    </div>
  )
}

export default AboutMe;