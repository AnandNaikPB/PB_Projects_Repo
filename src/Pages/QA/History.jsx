import React from "react";
import Backbutton from "../../Assets/backButton.svg";
import { useNavigate } from "react-router-dom";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Button } from "antd";

const History = () => {
  let navigate = useNavigate();
  return (
    <div className="biobot-history">
      <div className="back-btnn">
        <span className="back-btn-img" onClick={() => navigate(-1)}>
          <img src={Backbutton} alt="Back Icon" />
        </span>

        <span onClick={() => navigate(-1)}>Back</span>
      </div>
      <h4 className="heading">Your Sessions</h4>
      <Button
        className="create-btn"
        //   onClick={handleNewSession}
      >
        <AddCircleOutlineOutlinedIcon></AddCircleOutlineOutlinedIcon> &nbsp; New
        Session
      </Button>
      <div className="history-card-box">
        {chatHistory.map((chat, idx) => {
          return (
            <div
              key={idx}
              className="chat-card"
              //   style={{
              //     borderLeft:
              //       urlParams.get("chatID") &&
              //       Number(urlParams.get("chatID")) === chat.chatID
              //         ? "5px solid blue"
              //         : "5px solid white",
              //   }}
            >
              <div
                className="chat-card-section-1"
                // onClick={() =>
                //     handleCardClick(chat?.chatID)
                // }
              >
                {/* <img src={historyIcon} alt="" /> */}
                <div className="chat-history-box">
                  <div className="session">
                    Session:
                    {/* {moment(chat?.start_time).format("D MMMM h:mm A")} */}
                  </div>
                  <div className="session-text">{chat?.chatTitle}</div>
                </div>
              </div>
              <div className="more">
                {/* <MoreVertIcon style={{ borderRadius: "50%" }} /> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
