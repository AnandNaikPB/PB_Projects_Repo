import React, { useState } from "react";
import { /* Link, */ useNavigate } from "react-router-dom";
import "./login.scss";
import apiClient, { session } from "../../utils";
import { setHeader } from "../../utils/apiClient";

const API_CONFIG = {
  login: {
    method: "POST",
    url: "login",
    data: {},
  },
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const apiPayload = { ...API_CONFIG.login };
    apiPayload.data = { email: email, password: password };
    try {
      const response = await apiClient(apiPayload);

      if (response.data && response.data.jwt_token) {
        const jwtToken = response.data.jwt_token;
        console.log("login success", jwtToken);
        session.addSession(jwtToken);
        sessionStorage.setItem("jwtToken", jwtToken);
        setHeader(sessionStorage.getItem("jwtToken"));
        navigate("/indianlaw");
      } else {
        console.error("Invalid response format:", response);
        setErrorMessage("Unexpected response format. Please try again.");
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error("Error in summary API call:", error);
      if (error.response && error.response.status === 401) {
        setErrorMessage("Invalid credentials. Please try again.");
        setShowErrorModal(true);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
        setShowErrorModal(true);
      }
    }
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div className="login-heading">
          <span
            className="tax-heading"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Tax-LLM-RnD
          </span>
        </div>
        <div className="loginform-container">
          <div className="login-title">Login</div>
          <hr className="hrline"></hr>
          <div className="inputbox-container">
            <input
              type="text"
              className="inputfield"
              placeholder="Enter Email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="inputfield"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* <div className="forgot-password">Forgot password</div> */}
          {/* <div className="forgot-password"></div> */}
          <button type="submit" className="submit-button animated-button">
            Submit
          </button>
          {/* <div className="singup-account">
            <span className="account">Don’t have an account?</span>
            <Link to="/signup" className="signup-link">
              {" "}
              <span className="singup"> sign up</span>
            </Link>
          </div> */}
        </div>
      </form>

      {showErrorModal && (
        <div className="error-modal">
          <p style={{ margin: "1vw 1vw 0.5vw 1vw" }}>{errorMessage}</p>
          <button onClick={closeErrorModal} style={{ marginBottom: "0.5vw" }}>
            Retry
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
