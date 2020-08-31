import React from 'react';
import Card from '../Card/Card.js'
import INVM from './media/INVM.png';
import google from './media/google.png';
import BG from './media/bg-gen.png';
import './Projects.css';


class Projects extends React.Component {
    render(){
        return(
            <container className="projects my-5">
                <div className="projectTitle mb-5">PROJECTS</div>
                <div className="proj-group">
                    <div className="proj-item"><Card imgsrc={INVM} alt="INVM" name="INVM: Inventory Manager"
                    link="https://www.invm.dev"
                    tech="HTML, CSS, Python, Django, Bootstrap"
                    description="A webapp designed to help resellers track inventory, sales, and profits. Users can add items, specify item details, and log transactions. "/></div>
                    <div className="proj-item"><Card imgsrc={google} alt="Google" name="Google Automated Activity"
                    link="https://github.com/jin-jeffrey/gmail-activity"
                    tech="Python, Selenium"
                    description="A python project used to create activity on a gmail account. Includes signing in, searching Google, and watching videos on Youtube."/></div>
                    <div className="proj-item"><Card imgsrc={BG} alt="BG Generator" name="Background Generator"
                    link="https://github.com/jin-jeffrey/gmail-activity"
                    tech="Javascript, HTML, CSS"
                    description="A background generator that allows users to select two colors, display the gradient, and provide the CSS."/></div>
                </div>
            </container>
        );
    }
};

export default Projects;