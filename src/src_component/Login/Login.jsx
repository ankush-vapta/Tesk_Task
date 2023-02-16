import React from "react";
import LoginData from "../LoginData/LoginData";
import Contact from '../Contact/Contact.jsx'
import { Routes, Route } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="main-container">

        <Routes>

          <Route path="/" element={ <LoginData/> } />
          <Route path="contact" element={ <Contact/> } />
        </Routes>
      </div>
    </>
  );
};

export default Login;
