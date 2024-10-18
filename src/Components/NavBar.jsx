import React, { useState } from "react";
import search from "../Images/search.png";
import account from "../Images/account.png";
import cart from "../Images/cart.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const MenuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/Shop" },
    { name: "New Arrivals", path: "/NewArrivals" },
    { name: "About Us", path: "/AboutUs" },
    { name: "Admin", path: "/AdminDash" },
  ];

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchBar = (e) => {
    e.preventDefault();
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <nav>
      <header>
        <h1 className="logo">Gamala</h1>

        <div className="menu-items">
          <ul type="none">
            {MenuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
          {isSearchVisible && (
            <input type="text" className="search-bar" placeholder="Search..." />
          )}
        </div>

        <div className="header-actions">
          <Link to="#" className="search-button" onClick={toggleSearchBar}>
            <img src={search} alt="search" />
          </Link>

          <Link to="/Register">
            <img src={account} alt="" />
          </Link>
          <a href="#" onClick={(e) => e.preventDefault()}>
            <img src={cart} alt="" />
          </a>
        </div>
      </header>
    </nav>
  );
};

export default NavBar;
