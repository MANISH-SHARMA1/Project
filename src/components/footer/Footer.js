import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="categories">
        <h3>CATEGORIES</h3>
        <p>Web Builder</p>
        <p>Hosting</p>
        <p>Data Center</p>
        <p>Robotic-Automation</p>
      </div>

      <div className="contact">
        <h3>CONTACT</h3>
        <p>Contact</p>
        <p>Privacy Policy</p>
        <p>Terms Of Service</p>
        <p>Categories</p>
        <p>About</p>
      </div>

      <div className="country">
        <select>
          <option value="United State">United States</option>
          <option value="United State">England</option>
          <option value="United State">India</option>
          <option value="United State">China</option>
          <option value="United State">Russia</option>
        </select>
      </div>
    </div>
  );
}

export default Footer;
