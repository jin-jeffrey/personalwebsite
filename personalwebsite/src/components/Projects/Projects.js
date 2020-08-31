import React from 'react';
import Card from '../Card/Card.js'
import INVM from './media/INVM.png';
import google from './media/google.jpg'
import './Projects.css';


class Projects extends React.Component {
    render(){
        return(
            <container className="projects my-5">
                <div className="projectTitle mb-5">PROJECTS</div>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col proj-item"><Card imgsrc={INVM} alt="INVM" name="INVM"
                        link="https://www.invm.dev"
                        tech="HTML5, CSS3, Python, Django, Bootstrap"
                        description="Inventory Manager Project"/></div>
                        <div className="col"><Card imgsrc={google} alt="googleactivity" name="Google Activity Generator"
                        link="https://github.com/jin-jeffrey/gmail-activity"
                        tech="Python, Selenium"
                        description="Generate google activity on"
                        /></div>
                        <div className="col"><Card imgsrc={INVM} alt="hello"/></div>
                    </div>
                    <div className="row">
                        <div className="col proj-item"><Card imgsrc={INVM} alt="INVM" name="INVM"
                        link="https://www.invm.dev"
                        tech="HTML5, CSS3, Python, Django, Bootstrap"
                        description="Inventory Manager Project"/></div>
                        <div className="col"><Card imgsrc={google} alt="googleactivity" name="Google Activity Generator"
                        link="https://github.com/jin-jeffrey/gmail-activity"
                        tech="Python, Selenium"
                        description="Generate google activity on"
                        /></div>
                        <div className="col"><Card imgsrc={INVM} alt="hello"/></div>
                    </div>
                </div>     
            </container>
        );
    }
};

export default Projects;