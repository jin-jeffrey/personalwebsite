import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        // vertical cards
        // <div className = "card text-center mx-3" style={{width:"28vw"}}>
        //     <div className = "overflow">
        //         <a href={props.link} target="_blank" rel="noopener noreferrer"><img className="card-img-top cardimg" src={props.imgsrc} alt={props.alt}/></a>
        //     </div>
        //     <div className="card-body text-dark bodytext">
        //         <h4 className="card-title">{props.name}</h4>
        //         <p className="card-text text-secondary">{props.description}</p>
        //     </div>
        //     <div className="card-footer p-2">
        //         <small className="text-muted">{props.tech}</small>
        //     </div>
        // </div>
        <div className="card border-light mb-3 card-project">
            <div className="row no-gutters">
                <div className="col-md-4">
                <img src={props.imgsrc} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;