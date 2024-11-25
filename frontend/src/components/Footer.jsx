import React from "react";
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Your Company. All rights reserved.</p>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
       <FacebookIcon/>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <TwitterIcon/>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <YouTubeIcon/></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <LinkedInIcon/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
