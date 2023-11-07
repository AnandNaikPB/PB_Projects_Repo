import React from "react";
import "./drafting.scss";
import arrow from "../../Assets/Vector.svg";
// import { DropzoneArea } from "material-ui-dropzone";
// import { Button } from "antd";
// import axios from "axios";
// import waitResp from "../../assets/wait_response.gif";
// import waitResp from "../../Assets/wait_response.gif";
// import { usePDF } from "react-to-pdf";
// import DownloadIcon from "@mui/icons-material/Download";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

// import PdfViewer from "./pdfPreview";
const SubDraft = () => {
  let navigate = useNavigate();

  // const [showHeading, setShowHeading] = useState(true);
  // const [resp, setResp] = useState();
  // const [showGif, setShowGif] = useState(true);
  // const [files, setFiles] = useState([]);

  // const token =
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVVNFUiJ9.yW_NP3RB0a1fG-O7C5_5H5tdwSqkW70o5Zc9FmeQWsI";
  // const url = "https://fda.perpetualblock.io/";

  // const handleFileUpload = async (files) => {
  //   // setFiles(files);
  //   const formData = new FormData();
  //   formData.append("file", files[0]);
  //   setShowHeading(false);

  //   const headers = {
  //     Authorization: `Bearer ${token}`,
  //   };

  //   try {
  //     const response = await axios.post(url, formData, { headers });
  //     setResp(response?.data?.res);
  //     setShowGif(false);
  //   } catch (error) {
  //     console.error("Error:", error);
  //     // Handle the error here
  //   }
  // };

  // const { toPDF, targetRef } = usePDF({ filename: "download.pdf" });

  return (
    <div className="fdaDraft">
      <img
        alt=""
        src={arrow}
        className="arrow-btn"
        onClick={() => navigate(-1)}
      ></img>

      <div className="heading">
        <div className="heading-title">FDA DRAFT</div>
        <div className="heading-summary">
          Generative AI drafter using templates and legal knowledge to create
          FDA notice responses
        </div>
        <div className="heading-support">Supportable file : Docs, PDFs</div>
      </div>

      <div className="upload-section">
        <div className="upload-section-dotted">
          <div>
            {/* <DropzoneArea */}
            <div>
              {/* showPreviews={false}
              showPreviewsInDropzone={false}
              previewGridProps={{
                container: { spacing: 1, direction: "row" },
              }}
              showAlerts={false}
              acceptedFiles={[
                "application/pdf",
                "application/vnd.google-apps.document",
                "application/vnd.google-apps.spreadsheet",
                "application/msword", // Allow .docs files
              ]} */}
              {/* dropzoneText={ */}
              <div className="insideDropzone">
                <span style={{ fontSize: "1vw", fontWeight: "bold" }}>
                  Drag and Drop File here or
                </span>
                {/* <Button
                    style={{
                      alignSelf: "center",
                      width: "10vw",
                      fontSize: "1vw",
                      marginTop: "1vw",
                      height: "2.2vw",
                      color: "#153359",
                      borderColor: "#153359",
                      borderWidth: "2px",
                      borderRadius: "10px",
                    }}
                  >
                    Browse File
                  </Button> */}
                <Button>Click Here</Button>
              </div>
              {/* } */}
              {/* // onDrop={(files) => handleFileUpload(files)} */}
              {/* filesLimit={1} */}
              {/* maxFileSize={200 * 1024 * 1024} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubDraft;
