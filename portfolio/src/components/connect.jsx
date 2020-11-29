import React from 'react';
import '../design/connect.scss';
import gitHub from '../assets/github-brown.png';
import linkedinLogo from '../assets/linkedin-logo-brown.png';
import mail from '../assets/mail-brown.png';
import resume from '../assets/resume-brown.png';

function Connect() {
  return (
    <div id="connect">
      <h2>Connect with me!</h2>
      <p>Come find me on LinkedIn, email me, or checkout my Github or Resume. I would love to chat about your company, your project, or your last big adventure!</p>
      <div id="connectLinks">
        <a href="https://www.linkedin.com/in/sararussert/" ><img className="connectImages" src={linkedinLogo} alt="linkedIn" /></a>
        <a href="mailto:sarabeth.russert@gmail.com" ><img className="connectImages" src={mail} alt="email me" /></a>
        <a href="https://github.com/sarabeth-russert" ><img className="connectImages" src={gitHub} alt="gitHub" /></a>
        <a href="https://docs.google.com/document/d/18ri5xK_B7VXBgN3Jwy2Wv_JOU1Lk3qQuLQCSWGvFsZw/edit?usp=sharing" ><img className="connectImages" src={resume} alt="resume" /></a>
      </div>
    </div>
  )
}

export default Connect;