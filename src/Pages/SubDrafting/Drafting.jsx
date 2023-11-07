import React, { useState, useRef } from "react";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useNavigate } from "react-router-dom";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import "./draft.scss";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";

const Drafting = () => {
  let navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const iconStyle = { fontSize: "20px", cursor: "pointer" };
  const cloudStyle = { fontSize: "50px", color: grey };

  const buttonStyles = {
    backgroundColor: "#0AB7CC",
    color: "black",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "white",
    },
    borderRadius: "10px",
    boxShadow: "none",
    marginTop: "15px",
    width: "250px",
    height: "55px",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 700,
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setUploadedFiles([...uploadedFiles, file]);
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };
  const deleteFile = (fileName) => {
    const updatedFiles = uploadedFiles.filter((file) => file.name !== fileName);
    setUploadedFiles(updatedFiles);
  };

  return (
    <div className="draft-container">
      <div className="back-btn">
        <KeyboardReturnIcon
          style={iconStyle}
          onClick={() => navigate(-1)}
        ></KeyboardReturnIcon>
        <span style={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
          Back
        </span>
      </div>
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontWeight: "bold", margin: "-3.5rem 0 -2rem 0" }}>
          Upload Documents
        </h2>
      </span>
      <div className="drag-container">
        <div className="upload">
          <div className="cloud-icon">
            <CloudUploadOutlinedIcon style={cloudStyle} />
          </div>
          {selectedFile && (
            <span className="colored-drag">
              {selectedFile.name} Uploaded successfully
            </span>
          )}
          <div>
            <input
              type="file"
              accept=".pdf, .doc, .docx"
              style={{ display: "none" }}
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            <Button
              style={buttonStyles}
              variant="contained"
              onClick={openFileInput}
            >
              Browse File
            </Button>
          </div>
        </div>
      </div>

      <div className="uploaded-files">
        <h3>Uploaded Files:</h3>
        <ul>
          {uploadedFiles.map((file) => (
            <li key={file.name}>
              {file.name}
              <span
                style={{ marginLeft: "10px", cursor: "pointer", color: "red" }}
                onClick={() => deleteFile(file.name)}
              >
                Delete
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drafting;
