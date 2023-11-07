import { TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Backbutton from "../../Assets/backButton.svg";
import "./entity.scss";

const EntityExtract = () => {
  let navigate = useNavigate();

  return (
    <>
      <div className="back-btnn">
        <span className="back-btn-img" onClick={() => navigate(-1)}>
          <img src={Backbutton} alt="Back Icon" />
        </span>

        <span onClick={() => navigate(-1)}>Back</span>
      </div>{" "}
      <div className="entityextract-container">
        <div className="entity-title">
          <p>
            This Al-based submission drafting solution allows you to compose
            responses against any tax notice efficiently. If you have
            client-specific information in the notice that you wish not to
            include, you can use our Entity extraction feature to remove it.
            Happy drafting!
          </p>
        </div>
        <div>
          <div className="inputfield-list">
            <TextField
              id="outlined-basic"
              label="Type of taxation"
              variant="outlined"
              className="custom-textfield"
              autoComplete="off"
            />
          </div>
          <div className="inputfield-list-1">
            <TextField
              id="outlined-basic"
              label="Type of notice"
              variant="outlined"
              className="custom-textfield-1"
              autoComplete="off"
            />
          </div>
          <div className="inputfield-list-1">
            <TextField
              id="outlined-basic"
              label="Nature and type of busniess"
              variant="outlined"
              className="custom-textfield-1"
              autoComplete="off"
            />
          </div>
          <div className="inputfield-list-1">
            <TextField
              id="outlined-basic"
              label="Third party information (if any)"
              variant="outlined"
              className="custom-textfield-1"
              autoComplete="off"
            />
          </div>
          <div className="inputfield-list-1">
            <TextField
              id="outlined-basic"
              label="Name and details of parties"
              variant="outlined"
              className="custom-textfield-1"
              autoComplete="off"
            />
          </div>
          <div className="inputfield-list-1">
            <TextField
              id="outlined-basic"
              label="Financial statements"
              variant="outlined"
              className="custom-textfield-1"
              autoComplete="off"
            />
          </div>
          <div className="inputfield-list-1">
            <TextField
              id="outlined-basic"
              label="Any other detail"
              variant="outlined"
              className="custom-textfield-1"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="entity-button">
          <button className="btn">Upload File</button>
          <button className="btn">Proceed to generate draft</button>
          <button className="btn">Close</button>
        </div>
      </div>
    </>
  );
};

export default EntityExtract;
