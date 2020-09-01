import React from 'react';
import Introduction from '../Introduction/Introduction';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

class Main extends React.Component{
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

export default Main;
