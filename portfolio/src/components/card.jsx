import React from 'react';
import Button from 'react-bootstrap/Button';
import '../design/card.scss';

function Cards(props) {
  return (
    <div className="projectCard">
      <img className="projectImage" src={props.project.image} />
      <article>
        <h3>{props.project.title}</h3>
        <p>{props.project.text}</p>
        <ul className="projectTech" >{props.project.tech.map(item => (<li key={item.title}>{item}</li>))}</ul>
      </article>
      <div className="projectButton"><a href={props.project.link}><Button variant="secondary">Go see it</Button></a></div>
    </div>
  )
}

export default Cards;
