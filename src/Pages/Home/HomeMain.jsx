import * as React from "react";
// import Cards from "../../Components/Cards/Cards";
import Cards from "../../Components/Cards/CardMain";
import QandA from "../../Assets/gethelp.svg";
import Entity_Extract from "../../Assets/Entity_Extract_logo.png";
import Notice from "../../Assets/notice.svg";
import Library from "../../Assets/library.svg";
import Uploads from "../../Assets/uploads.svg";
import { Link, useNavigate } from "react-router-dom";
import "./homemain.scss";

function HomeMain() {
  const Text_QandA = "Get help with research";
  const Text_Entity_Extract = "get help with notice";
  const Text_Submission_Drafting = "Submission Assistant";
  const Text_Search = "Upload Documents";
  const Text_Search2 = "My library";

  const navigate = useNavigate();

  return (
    <>
      <div className="content_and_cards">
      

        <div className="cards">
          <Link to="/questionanswer" style={{ textDecoration: "none" }}>
            <Cards className="card" image={QandA} title={Text_QandA} />
          </Link>
          <Link to="/entityextract" style={{ textDecoration: "none" }}>
            <Cards
              className="card"
              image={Notice}
              title={Text_Entity_Extract}
            />
          </Link>
          <Link to="/drafting" style={{ textDecoration: "none" }}>
            <Cards
              className="card"
              image={Entity_Extract}
              title={Text_Submission_Drafting}
              onClick={() => navigate("/drafting")}
            />
          </Link>
          <Link to="/search" style={{ textDecoration: "none" }}>
            <Cards className="card" image={Uploads} title={Text_Search} />
          </Link>
          <Link to="/search" style={{ textDecoration: "none" }}>
            <Cards className="card" image={Library} title={Text_Search2} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomeMain;
