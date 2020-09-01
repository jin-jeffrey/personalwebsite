import React from 'react';
import { Document, Page } from 'react-pdf';
import resumepdf from './resume.pdf'

class Resume extends React.Component{
  render() {
    return( 
      <main>
        <Document className = "d-flex justify-content-center" file={resumepdf} options={{ workerSrc: "/pdf.worker.js" }}>
            <Page className="border mt-2" pageNumber = {1} />
            <a className="mt-2 ml-5" href={resumepdf} download="jeffrey_jin_resume"><button className="btn btn-outline-info">Save</button></a>
        </Document>
      </main>
    )
  }
}

export default Resume;
