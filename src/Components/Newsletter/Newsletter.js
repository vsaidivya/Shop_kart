import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h2>Get Exclusive Offers On Your Email</h2>
      <p>Subscribe to our newsletter and stay updated</p>
      <div className="newsletter-input-container">
        <input
          type="email"
          placeholder="Your Email id"
          className="newsletter-input"
        />
        <button className="newsletter-button">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
