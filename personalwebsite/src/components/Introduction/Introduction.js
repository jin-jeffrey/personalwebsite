import React from 'react';
import './Introduction.css';
import linkedIn from './media/linkedin.png'
import github from './media/github.png'
import code from './media/code.png'
import resume from './media/resume.png'
import resumepdf from './media/resume.pdf'


class Introduction extends React.Component {
    render(){
        return(
            <container className = "intro">
                <div className = "name">Jeffrey Jin</div>
                <div className = "logos">
                    <a className="logo mx-3" href="https://www.linkedin.com/in/mr-jeffrey-jin/" target="_blank" rel="noopener noreferrer"><img className="icon" src={linkedIn} alt="LinkedIn icon"/></a>
                    <a className="logo mx-3" href="https://github.com/jin-jeffrey" target="_blank" rel="noopener noreferrer"><img className="icon" src={github} alt="Github icon"/></a>
                    <a className="logo mx-3" href="https://github.com/jin-jeffrey/personalwebsite" target="_blank" rel="noopener noreferrer"><img className="icon" src={code} alt="Code icon"/></a>
                    <a className="logo mx-3" href={resumepdf} download="jeffrey_jin_resume"><img className="icon" src={resume} alt="Resume icon"/></a>
                </div>
            </container>
        );
    }
};

export default Introduction;