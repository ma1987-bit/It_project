import React from "react";
import './footer.css'
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <span>©2022 Copyright: Jan-Mahmoud-Lars </span>
      <div className="icon">
        <FaFacebookF />
        <FaInstagram />
        <FaLinkedin />
      </div>
    </div>
  );
};

export default Footer;
