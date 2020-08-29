import React from 'react';
import './Introduction.css';
import linkedIn from './linkedin.png'
import github from './github.png'
import code from './code.png'
import resume from './resume.png'


class Introduction extends React.Component {
    render(){
        return(
            <container className = "intro">
                <div className = "name">Jeffrey Jin</div>
                <div className = "logos">
                    <a class="logo" href="https://www.linkedin.com/in/mr-jeffrey-jin/"><img src={linkedIn} alt="LinkedIn icon"/></a>
                    <a class="logo" href="https://github.com/jin-jeffrey"><img src={github} alt="Github icon"/></a>
                    <a class="logo" href="https://github.com/jin-jeffrey"><img src={code} alt="Code icon"/></a>
                    <a class="logo" href="https://github.com/jin-jeffrey"><img src={resume} alt="Resume icon"/></a>
                </div>
            </container>
        );
    }
};

export default Introduction;