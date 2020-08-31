import React from 'react';
import Card from '../Card/Card.js'
import INVM from './media/INVM.png';
import './Projects.css';


class Projects extends React.Component {
    render(){
        return(
            <container className="projects my-5">
                <div className="projectTitle mb-5">PROJECTS</div>
                <div className="proj-group">
                    <div className="proj-item"><Card imgsrc={INVM} alt="INVM" name="INVM: Inventory Manager"
                    link="https://www.invm.dev"
                    tech="HTML5, CSS3, Python, Django, Bootstrap"
                    description="A webapp designed to help resellers track inventory, sales, and profits. Users can add items, specify item details, and log transactions. "/></div>
                    <div className="proj-item"><Card imgsrc="" alt="Google" name="Google Activity Generator"
                    link="https://github.com/jin-jeffrey/gmail-activity"
                    tech="Python, Selenium"
                    description="A python project used to fully automate activity on a gmail account. Functionality include signing in, searching Google for articles and images, and watching videos on Youtube."/></div>
                </div>
            </container>
        );
    }
};

export default Projects;