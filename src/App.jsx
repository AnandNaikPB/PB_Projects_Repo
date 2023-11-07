import React from "react";
// import Drafting from "./Pages/SubDrafting/Drafting.jsx";
// import Research from "./Pages/Research/index.jsx";
// import SignUpPage from "./Components/LoginPage/SignUpPage.jsx";
// import Searching from "./Pages/Search/index.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
// import EntityExtract from "./Pages/EntityExt/EntityExtract.jsx";
// import QuestionAnswer from "./Pages/QA/QuestionAnswer.jsx";
import Login from "./Pages/Login/Login.jsx";
// import Home from "./Pages/Home/Home.jsx";
import UploadDoc from "./Pages/LSI/UploadDoc.jsx";
import Navbar from "./Pages/Navbar/Navbar";
// import SignUp from "./Pages/SingUp/SignUp.jsx";
// import HomeMain from "./Pages/Home/HomeMain.jsx";
// import AuthRoute from "../src/Components/authRoute/index.js";
// import ErrorBoundary from "./Components/ErrorBoundries/index.jsx";
// import TaxbotChat from "./Pages/QA/TaxbotChat.jsx";

function App() {
  const location = useLocation();

  return (
    <div className="app">
      {/* <ErrorBoundary> */}
      {/* <ToastContainer /> */}
      {/* <Component_1></Component_1> */}
      {location.pathname !== ("/" || "/signup") && <Navbar></Navbar>}
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/indianlaw" element={<UploadDoc />} />
        {/* <Route path="/" element={<SignUpPage />} /> */}
        {/* <AuthRoute path="/home" element={<Home />} /></AuthRoute>
        <AuthRoute path="/drafting" element={<Drafting />} /></AuthRoute>
        <AuthRoute path="/search" element={<Searching />} /></AuthRoute>
        <AuthRoute path="/homemain" element={<HomeMain />} /></AuthRoute>
        <AuthRoute path="/questionanswer" element={<QuestionAnswer />} /></AuthRoute>
        <AuthRoute path="/entityextract" element={<EntityExtract />} /></AuthRoute>
        <AuthRoute path="/signup" element={<SignUp />} /></AuthRoute>
        <AuthRoute path="/research" element={<Research />} /></AuthRoute>
        <AuthRoute path="/indianlaw" element={<UploadDoc />} /></AuthRoute> */}
      </Routes>
      {/* <AuthRoute exact path="/indianlaw" Component={UploadDoc}></AuthRoute> */}

      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;
