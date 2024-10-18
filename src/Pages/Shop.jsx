import React, { useState } from "react";
import NavBar from "../Components/NavBar";

const Shop = () => {
  const [filterCategory, setFilterCatergory] = useState("");
  const [filterPrices, setFilterPrices] = useState(0);

  return (
    <div className="shop-container">
      <div className="shop-header">
        <h2>Shop</h2>
      </div>
      <div className="shop-filter-container">
        <div className="shop-filter">
          <form action=""></form>
        </div>
      </div>
    </div>
  );
};

export default Shop;
