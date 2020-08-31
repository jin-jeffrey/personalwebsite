import React from 'react';
import Introduction from './components/Introduction/Introduction';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  render() {
    return(
      <main>
        <Introduction />
        <Projects />
        <Skills />
      </main>
    )
  }
}

export default App;
