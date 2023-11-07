import React, { useEffect, useState } from "react";

function PdfViewer({ files }) {
  const [file, setFile] = useState(null);
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
  const [pdfDataUri, setPdfDataUri] = useState("");

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

  useEffect(() => {
    const selectedFile = files[0];
    setFile(selectedFile);
    // setPageNumber(1);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUri = reader.result;
        setPdfDataUri(dataUri);
      };
      reader.readAsDataURL(selectedFile);
    }
  }, []);

  return (
    <>
      {file && (
        <>
          {/* <embed src={pdfDataUri} width="100%" height="95%" /> */}

          <iframe
            src={`${pdfDataUri}#toolbar=0`}
            width="100%"
            height="95%"
            frameborder="0"
            style={{
              border: "none",
              overflow: "hidden", // Hide the scrollbar
            }}
          ></iframe>
          {/* <p>
            Page {pageNumber} of {numPages}
          </p> */}
        </>
      )}
    </>
  );
}

export default PdfViewer;
