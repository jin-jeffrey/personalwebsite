import React from 'react';
import { Document } from 'react-pdf';
import resumepdf from './resume.pdf'

class Resume extends React.Component{
  render() {
    return( 
      <main>
          <Document file="resume.pdf" onLoadError={console.error} />
      </main>
    )
  }
}

export default Resume;
