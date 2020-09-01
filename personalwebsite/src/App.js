import React from 'react';
import Introduction from './components/Introduction/Introduction';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  render() {
    return(
      <main>
        <Introduction />
        <Projects />
        <Footer />
      </main>
    )
  }
}

export default App;
