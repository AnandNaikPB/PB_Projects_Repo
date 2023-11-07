import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./signup.scss";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3040/api/signup", {
        username: name,
        email,
        password,
      });

      // Assuming your API returns a success message
      const successMessage = response.data;

      // You can now use the success message as needed in your app
      console.log("Success:", successMessage);

      // Add your logic for what to do after successful signup
    } catch (error) {
      // Handle signup error, show an alert or error message
      console.error("Signup failed:", error.message);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignUp}>
        <div className="signup-heading">
          <span className="tax-heading">Tax-LLM-RND</span>
        </div>
        <div className="signupform-container">
          <div className="signup-title">Sign up</div>
          <div className="create-account">Create an account</div>
          <div className="inputbox-container">
            <input
              type="text"
              className="inputfield"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
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
          <button type="submit" className="submit-button animated-button">
            Sign Up
          </button>
          <div className="singup-account">
            <span className="account">Already have an account? </span>{" "}
            <Link className="signup-link" to="/">
              {" "}
              <span className="singup"> Login</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
