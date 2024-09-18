import React, { useEffect, useState } from "react";

const Banner = ({ banner }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banner.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [banner.length]);

  return (
    <div className="banner-container">
      <div className="banner">
        <img src={banner[currentIndex].name} alt="" />
        <div className={`overlay overlay-${currentIndex}`}>
          <h2>{banner[currentIndex].title}</h2>
          <h4>{banner[currentIndex].info}</h4>
          <button onClick="">{banner[currentIndex].buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
