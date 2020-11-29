import React from 'react';
import '../design/header.scss';
import github from '../assets/github-brown.png';
import linkedIn from '../assets/linkedin-logo-brown.png';

function Header() {
  return (
    <header>
      <div>
        <h3>Sara Russert</h3>
        <a href="https://github.com/sarabeth-russert"><img id="linkIconGH" src={github} alt="github" /></a>
        <a href="https://www.linkedin.com/in/sararussert/"><img id="linkIconLI" src={linkedIn} alt="linked-in" /></a>
      </div>
      <nav>
        <a href="">About Me</a>
        <a href="">Work</a>
        <a href="">Current Toolkit</a>
        <a href="">Connect</a>
        <a href="https://docs.google.com/document/d/18ri5xK_B7VXBgN3Jwy2Wv_JOU1Lk3qQuLQCSWGvFsZw/edit?usp=sharing">Resume</a>
      </nav>
    </header>
  )
}

export default Header;