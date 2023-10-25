import React, { useState } from 'react';
//import { Document, Page } from 'react-pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import PDFfile from '../../src/cv.pdf';
import "react-pdf/dist/esm/Page/TextLayer.css";

export default function Cv() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    const prevPage = () => {
        setPageNumber(pageNumber > 1 ? pageNumber - 1 : 1);
    }
    const nextPage = () => {
        setPageNumber(pageNumber == numPages ? pageNumber : pageNumber + 1);
    }

    return (
        <div className='cv_container'>
            <h1>
                Please check my CV
            </h1>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            <div className='cvpdf_container'>
                <button onClick={prevPage} >previous</button>
                <button onClick={nextPage} >next</button>
                <Document
                    file={PDFfile} onLoadSuccess={onDocumentLoadSuccess} >
                    <Page width={window.innerWidth * 0.4} pageNumber={pageNumber} />
                </Document >

            </div>

        </div>



    );
}