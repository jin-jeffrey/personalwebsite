import React from 'react';
import './App.css';
import Introduction from './components/Introduction/Introduction';
import Projects from './components/Projects/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  render() {
    return(
      <main>
        <Introduction />
        <Projects />
      </main>
    )
  }
}

export default App;
