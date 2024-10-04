import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section opening-time">
        <h4>OPENING TIME</h4>
        <p>Mon - Fri: 8AM - 10PM</p>
        <p>Sat: 9AM - 8PM</p>
        <p>Sun: 9AM - 9PM</p>
        <p>We Work All The Holidays</p>
      </div>
      <div className="footer-section information">
        <h4>INFORMATION</h4>
        <ul>
          <li>About Us</li>
          <li>Checkout</li>
          <li>Contact</li>
          <li>Frequently Questions</li>
          <li>Wishlist</li>
        </ul>
      </div>
      <div className="footer-section logo-social">
        <h2>Gamala</h2>
      </div>
      <div className="footer-section my-account">
        <h4>MY ACCOUNT</h4>
        <ul>
          <li>My Account</li>
          <li>Contact</li>
          <li>Shopping Cart</li>
          <li>Checkout</li>
          <li>Shop</li>
          <li>Order History</li>
        </ul>
      </div>
      <div className="footer-section customer-service">
        <h4>CUSTOMER SERVICE</h4>
        <ul>
          <li>Contact Us</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Site Map</li>
          <li>My Account</li>
          <li>Returns</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
