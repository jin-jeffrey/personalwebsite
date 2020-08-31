import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        // vertical cards
        <div className = "card text-center mx-5 img-hover">
            <div className = "overflow-hidden">
                <a href={props.link} target="_blank" rel="noopener noreferrer"><img className="card-img-top cardimg" src={props.imgsrc} alt={props.alt}/></a>
            </div>
            <div className="card-body overflow-auto">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-text text-secondary">{props.description}</p>
            </div>
            <div className="card-footer p-2">
                <small className="text-muted">{props.tech}</small>
            </div>
        </div>
    );
}

export default Card;