import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import {
  TextField,
  InputAdornment,
  Button,
  Card,
  CardContent,
} from "@mui/material";
// import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";

import axios from "axios";

const Searching = () => {
  let conversation = [];

  const token = "ac2a13b0f15c34877c2b67969906e082";
  const [text, setText] = useState();
  const [researchResponse, setReasearchResponse] = useState([]);
  const [showLoader, setShowLoader] = useState();
  const [showData, setShowData] = useState(true);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      // Access-Control-Allow-Origin: *
    },
  };
  const handleSearch = () => {
    conversation = [...conversation, { role: "user", content: text }];
    const bodyParameters = { messages: conversation };
    setShowLoader(true);
    setShowData(false);

    axios
      .post("https://draft.perpetualblock.io/search", bodyParameters, config)
      .then(function (response) {
        setReasearchResponse(response?.data?.choices);
        setShowLoader(false);
        setShowData(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const renderCards = () => {
    const inputText = researchResponse[0]?.message?.content;
    const lines = inputText?.split("\n\n");
    // const newArray = lines?.map((element) => element.replace(/'/g, " "));

    lines?.pop();

    return lines?.map((e, idx) => {
      const a = e.split("\n");
      return (
        <>
          <div className="research-card" key={idx}>
            <Card>
              <CardContent className="research-card-content">
                {/* <pre
                  style={{
                    color: "rgba(1, 26, 89, 1)",
                  }}
                > */}
                <p
                  style={{
                    color: "rgba(1, 26, 89, 1)",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  {a[0]}
                </p>
                <br />
                <a
                  href={` ${a[1]}`}
                  target="_blank"
                  rel="noreferrer"
                >{` ${a[1]}`}</a>
                {/* </pre> */}
              </CardContent>
            </Card>
          </div>
        </>
      );
    });
  };
  const iconStyle = { fontSize: "20px", cursor: "pointer" };
  let navigate = useNavigate();
  const btnStyles = {
    backgroundColor: "black",
    color: "white",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "white",
    },
    // border: "none", // Remove the border
    borderRadius: "10px",
    boxShadow: "none",
    fontSize: "20px",
    alignItems: "center",
    fontWeight: 700,
  };
  const voiceStyle = {
    color: "black",
    fontSize: "40px",
    width: "60px",
  };

  return (
    <div className="search-container">
      <div className="back-btn">
        <KeyboardReturnIcon
          style={iconStyle}
          onClick={() => navigate(-1)}
        ></KeyboardReturnIcon>
        <span style={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
          Back
        </span>
      </div>{" "}
      <div className="searchbar">
        <TextField
          className="research-searchbar"
          placeholder="Search For Your Query"
          style={{
            outline: "none", // Remove the focus border
            "&:focus": {
              outline: "none !important", // Override browser default styles
            },
          }}
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {/* <SearchSharpIcon /> */}
                <KeyboardVoiceIcon style={voiceStyle} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <InputAdornment position="end">
                  <Button
                    style={btnStyles}
                    variant="contained"
                    onClick={handleSearch}
                  >
                    SEARCH
                  </Button>
                </InputAdornment>
              </InputAdornment>
            ),
          }}
        />
      </div>
      {showData && (
        <div className="use-case">
          <p>
            this is AI based solution allows you to ask complex querries. Ask it
            anything ! However , please ensure you do not use any personal
            information.
          </p>
        </div>
      )}
      {showLoader ? (
        <div class="cssload-container">
          <div class="cssload-whirlpool"></div>
        </div>
      ) : (
        <div>{renderCards()}</div>
      )}
    </div>
  );
};

export default Searching;
