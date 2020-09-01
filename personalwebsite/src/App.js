import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Introduction from './components/Introduction/Introduction';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

class App extends React.Component{
  componentDidMount(){
    document.title = "Jeffrey Jin"
  }

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
