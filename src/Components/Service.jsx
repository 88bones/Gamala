import React from "react";
import shipping from "../Images/shipping.png";
import telephone from "../Images/telephone.png";
import reverse from "../Images/reverse.png";

const Service = () => {
  const Services = [
    {
      image: shipping,
      title: "FREE SHIPPING",
      info: "Get your plants for free.",
    },
    {
      image: telephone,
      title: "24/7 SERVICE",
      info: "Call us when you need.",
    },
    {
      image: reverse,
      title: "MONEY BACK",
      info: "Lmao you think??Get Scammed.",
    },
  ];

  return (
    <div className="services">
      <ul type="none">
        {Services.map((service, index) => (
          <li key={index}>
            <img src={service.image} alt="" />
            <div className="info">
              <h3>{service.title}</h3>
              <h5>{service.info}</h5>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Service;
