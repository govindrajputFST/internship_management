import React from "react";
import "./navbar.css";
import { Tooltip } from "@mui/material";
import ContactUs from './contactus'
// import Tippy from '@tippyjs/react';
// import InternshipT from "./InternshipT";

const Navbar = () => {
  return (
    <div className="mainnav">
    <nav className="navbar">
      <div className="logo">Job<span className="logo-highlight">Portal</span></div>
      {/* <div className="third">
            <Tippy content={<InternshipT></InternshipT>}
                interactive={true}
                // offset={[5, 20]}
                theme="light"
                // animation="scale"
              > 

      <button>Intership</button>
            </Tippy>

      </div> */}
      <ul className="nav-links">
        <li>Home</li>
        <li>Jobs</li>
        <li><a href="contactus"><ContactUs/></a></li>
      </ul>
      <div className="auth-buttons">
        
        
        <button className="signup-btn"> 
      SignIn
    </button>

        {/* <button className="signup-btn"> Sign-up</button> */}
        <button className="signup-btn">Logout</button>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
