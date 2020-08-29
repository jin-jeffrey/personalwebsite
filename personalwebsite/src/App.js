import React from 'react';
import './App.css';
import Introduction from './components/Introduction/Introduction';
// import Projects from './components/Projects/Projects';

class App extends React.Component{
  render() {
    return(
      <main>
        <Introduction />
      </main>
    )
  }
}

export default App;
