import React from 'react';
import '../design/work.scss';
import Cards from './card.jsx';
import accioImage from '../assets/acciopic.jpg';
import chqImage from '../assets/CodeHerosQuest.png';
import hmrImage from '../assets/holiday-movie-recommender.jpg';
import nodeImage from '../assets/nodejs.png';


function Work() {
  const hMR = {
    title: 'Holiday Movie Recommender',
    image: hmrImage,
    text: 'A seasonal movie recommender that dynamically renders based on the date.',
    tech: ['Express.js', 'EJS', 'JQuery', 'PostgreSQL', 'TMDB API', 'Heroku'],
    link: 'https://holiday-movie-recommender.herokuapp.com/'
  }

  const accio = {
    title: 'Hogwarts Adventures - Accio',
    image: accioImage,
    text: 'An interactive text based scavenger hunt quest game built on the Wizarding World of Harry Potter',
    tech: ['Javascript', 'HTML', 'CSS', 'Local Storage', 'Adobe Photoshop', 'Github Pages'],
    link: 'https://sarabeth-russert.github.io/accio/'
  }

  const cHQ = {
    title: 'Code Hero\'s Quest: Battle for the Kingdom',
    image: chqImage,
    text: 'A strongly object oriented and event driven, text based campaign style RPG, for four players.',
    tech: ['Node.js', 'Socket.io', 'Inquirer', 'Javascript', 'Chalk', 'Javascript'],
    link: 'https://github.com/code-heros-quest/battle-for-the-kingdom'
  }
  const apiServer = {
    title: 'Api Server',
    image: nodeImage,
    text: 'A personal API server with a Non-Relational Database',
    tech: ['Node.js', 'MongoDB', 'Mongoose', 'Javascript', 'Atlas'],
    link: 'https://github.com/401-advanced-javascript-sararussert/api-server'
  }



  return(
    <div className="work">
        <div id="workHeader"><h2>See my work</h2></div>
        <div id="workCards">
          <Cards project={apiServer}/>
          <Cards project={cHQ}/>
          <Cards project={hMR}/>
          <Cards project={accio}/>
        </div>
    </div>
  )
}

export default Work;

