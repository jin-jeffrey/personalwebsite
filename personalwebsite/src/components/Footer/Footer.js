import React from 'react';
import './Footer.css';


class Footer extends React.Component {
    render(){
        return(
            <container className="footer mt-5">
                <div className="p-5">Designed by <a className="text-dark" href="https://linkedin.com/mr-jeffrey-jin" target="_blank" rel="noopener noreferrer">Jeffrey Jin</a></div>
            </container>
        );
    }
};

export default Footer;