import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        // vertical cards
        <div className = "card text-center" style={{width:"20vw", height:"40vh"}}>
            <div className = "overflow">
                <a href={props.link} target="_blank" rel="noopener noreferrer"><img className="card-img-top cardimg" src={props.imgsrc} alt={props.alt}/></a>
            </div>
            <div className="card-body text-dark bodytext">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-text text-secondary">{props.description}</p>
            </div>
            <div className="card-footer p-2">
                <small className="text-muted">{props.tech}</small>
            </div>
        </div>
        // <div className="mb-3 card-project">
        //     <div className="row">
        //         <div className="col-md-6">
        //             <img src={props.imgsrc} className="card-img" alt={props.alt} />
        //         </div>
        //         <div className="col-md-6">
        //             <div className="descriptions">
        //                 <h5 className="">{props.name}</h5>
        //                 <p className="">{props.description}</p>
        //                 <p className=""><small className="text-muted tech">{props.tech}</small></p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Card;