import React, { useState } from "react";

import LoftMebelLogo from '../../assets/loflogo.png'
import "./styles.scss";

function Carousel() {
  const banners = [
    { id: 0, image: "banner.png" },
    { id: 1, image: "banner2.jpg" },
  ];



  const [currentImage, setCurrentImage] = useState(0);

  const next = () => {
    if (currentImage <= banners.length - 1) {
      setCurrentImage(currentImage + 1);
    }

    setCurrentImage(banners.length - 1);
  };

  const prev = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }

    setCurrentImage(0);
  };
  return (
    <div className="carousel-section">
      <div
        className="carousel"
        style={{ backgroundImage: `url(${banners[currentImage].image})` }}
      >
         <div className="carousel-details">
         <img src={LoftMebelLogo} alt={LoftMebelLogo} />
          <p>Müasir və Rahat mebellər</p>
          <button>Kataloqa Baxın</button>
         </div>
      </div>

      <button onClick={prev} className="prev">
        {"<"}
      </button>
      <button onClick={next} className="next">
        {">"}
      </button>
    </div>
  );
}

export default Carousel;
