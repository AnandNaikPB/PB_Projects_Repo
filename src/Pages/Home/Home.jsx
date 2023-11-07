import * as React from "react";

import Cards from "../../Components/Cards/Cards";
import QandA from "../../Assets/QandA_Logo.png";
import Entity_Extract from "../../Assets/Entity_Extract_logo.png";
import Submission_Drafting from "../../Assets/Submission_Drafting.png";
import Search from "../../Assets/Search_logo.png";
import { Link, useNavigate } from "react-router-dom";
// import

import "./Home.scss";

function Home() {
  const Text_QandA = "Q & A";
  const Text_Entity_Extract = "Entity Extract";
  const Text_Submission_Drafting = "Submission Drafting";
  const Text_Search = "Search";

  const navigate = useNavigate();

  return (
    <>
      <div className="content_and_cards">
        <div className="content">
          <div className="welcome-text">
            <h2 style={{ textAlign: "center" }}>Welcome to TaxCopilate</h2>
          </div>

          <div className="pragraph-text">
            <p style={{ textAlign: "center" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              laborum ipsa officiis veniam minima iure, eum cupiditate dolorem,
              recusandae odit minus reprehenderit saepe fugiat dicta libero
              aliquid voluptatibus exercitationem suscipit.
            </p>
          </div>
        </div>

        <div className="cards">
          <Link to="/questionanswer" style={{ textDecoration: "none" }}>
            <Cards className="card" image={QandA} title={Text_QandA} />
          </Link>
          <Link to="/entityextract" style={{ textDecoration: "none" }}>
            <Cards
              className="card"
              image={Entity_Extract}
              title={Text_Entity_Extract}
            />
          </Link>
          <Link to="/drafting" style={{ textDecoration: "none" }}>
            <Cards
              className="card"
              image={Submission_Drafting}
              title={Text_Submission_Drafting}
              onClick={() => navigate("/drafting")}
            />
          </Link>
          <Link to="/search" style={{ textDecoration: "none" }}>
            <Cards className="card" image={Search} title={Text_Search} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
