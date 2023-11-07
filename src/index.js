// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import Navbar from "./Components/Navbar/Navbar.jsx";
// import { BrowserRouter as Router } from "react-router-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <Navbar>
//         <App />
//       </Navbar>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// reportWebVitals();
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Navbar from "./Pages/Navbar/Navbar.jsx";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <Navbar /> */}
    <App />
  </BrowserRouter>
);
reportWebVitals();
