import React from 'react';
import '../design/experience.scss';
import techIcons from '../assets/techIcons-brown.png';

function Experience() {
  return (
    <div className="experience">
      <h2>What do I know?</h2>
      <ul>
        <li>LANGUAGES: HTML, CSS, SASS, JAVASCRIPT, TYPESCRIPT, EJS, MUSTACHE</li>
        <li>FRAMEWORKS: Express.js, React, Bootstrap</li>
        <li>TOOLS:  Node.js, Git, Github, VS Code, PostgresSQL, MongoDB/Mongoose, Socket.io, Redux, JQuery</li>
        <li>WHAT'S NEXT: Unity, C#, Johnny-Five: JS Robotics Platform</li>
      </ul>
      <img src={techIcons} alt="tech icons"/>
    </div>
  )
}

export default Experience;