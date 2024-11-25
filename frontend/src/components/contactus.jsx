import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <nav className="navbarc" >
      <div
        className="nav-link"
        onMouseEnter={() => setDropdownVisible(true)}
        
      >
   Contact Us
        {isDropdownVisible && (
          <div className="dropdown">
            <h1>Get in Touch</h1>
            <p>
              📧 <strong>Email:</strong> dhonirajput208@gmail.com, piyush2002panwar@gmail.com, bhudeokrit@gmail.com
            </p>
            <p>
              📞 <strong>Retail Business:</strong> 040-681-52890, 
              <strong> E-commerce Business:</strong> 080-692-28600
            </p>
            <p>
              📱 <strong>WhatsApp:</strong> 906-843-0962
            </p>
            <p>
               <strong>Address:</strong> Fluid3 Infotech Pvt. Ltd., Unit-521, Tower B4, Spaze I Tech Park, Sohna Road, Gurugram, Haryana - 122018
            </p>
            <div className="social-icons">
              <span>F</span> {/* Facebook */}
              <span>X</span> {/* X/Twitter */}
              <span>I</span> {/* Instagram */}
              <span>Y</span> {/* YouTube */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ContactUs;
