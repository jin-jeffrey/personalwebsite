import React from 'react';
import './Footer.css';


class Footer extends React.Component {
    render(){
        return(
            <container className="footer mt-5">
                <div className="p-5">
                    Designed by <a className="text-dark" href="https://linkedin.com/in/mr-jeffrey-jin" target="_blank" rel="noopener noreferrer"><u>Jeffrey Jin</u></a>
                    <br />
                    <small>Open to Public Use</small>
                </div>
            </container>
        );
    }
};

export default Footer;