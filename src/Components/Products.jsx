import React from "react";
import product1 from "../Images/product1.jpg";
import product2 from "../Images/product2.jpg";
import product3 from "../Images/product3.jpg";
import product4 from "../Images/product4.jpg";
import productLong from "../Images/product-long.jpg";
import bundle from "../Images/bundle.jpg";
import { Link } from "react-router-dom";

const Products = () => {
  const Products = [
    {
      image: product1,
      name: "Plant 1",
      price: 3400,
    },
    {
      image: product2,
      name: "Plant 2",
      price: 500,
    },
    {
      image: product3,
      name: "Plant 3",
      price: 1000,
    },
    {
      image: product4,
      name: "Plant 4",
      price: 1500,
    },
  ];

  // const Long = [
  //   {
  //     image: productLong,
  //     title: "House Plants.",
  //     discount: "-50%",
  //     info: "Summer SALE Store.",
  //   },
  // ];

  return (
    <>
      <div className="product-container">
        <div className="h1">
          <h1>Our Products</h1>
        </div>
        <div className="product-items-container">
          <div className="product-long">
            <img src={productLong} alt="" />
            <div className="product-overlay">
              <h2 className="discount">-50%</h2>
              <h3>House Plants.</h3>
              <h2>Summer Sale Store!</h2>
              <Link to="../Pages/Shop">View all items</Link>
            </div>
          </div>

          <ul type="none" id="product-box">
            {Products.map((product, index) => (
              <div className={`small-products small-products-${index + 1}`}>
                <li key={index}>
                  <Link to="#">
                    <img src={product.image} alt="" />
                  </Link>
                  <h2>{product.name}</h2>
                  <h3>Rs. {product.price}</h3>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>

      <div className="bundle-container">
        <div className="bundle-info-container">
          <img src={bundle} alt="" />
          <div className="bundle-overlay">
            <p className="offer">Special Offer!</p>
            <p className="title">Gamala's</p>
            <p className="gift">Gift Boxes</p>
            <p className="info">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              fuga, ut voluptas quaerat aliquid laborum.
            </p>
            <button className="bundle-button">Explore Offers</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
