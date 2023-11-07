import React from "react";
// import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Backbutton from "../../Assets/backButton.svg";
import { Button, Input } from "@mui/material";
// import useState from "react";

const QuestionAnswer = () => {
  let navigate = useNavigate();
  // const [chatHistory, setChatHistory] = useState([]);
  // const [updatedResp, setUpdatedResp] = useState([
  //   {
  //     role: "assistant",
  //     content: `I’m BioBot, your creative and helpful collaborator. I am trained on Medical Guidelines and FDA drug labels. \n\n How can I help you today?`,
  //   },
  // ]);

  return (
    <div className="chatbox">
      {" "}
      <div className="back-btnn">
        <span className="back-btn-img" onClick={() => navigate(-1)}>
          <img src={Backbutton} alt="Back Icon" />
        </span>

        <span onClick={() => navigate(-1)}>Back</span>
      </div>{" "}
      <Button variant="contained">Contained</Button>
      <Input className="Qinput" placeholder="type your question"></Input>
    </div>
  );
};

export default QuestionAnswer;
