import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main/Main'
import Resume from './components/Resume/Resume.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  render() {
    return( 
      <BrowserRouter>
        <Route path="/" exact component={Main}></Route>
        <Route path="/resume" exact component={Resume}></Route>
      </BrowserRouter>
    )
  }
}

export default App;
