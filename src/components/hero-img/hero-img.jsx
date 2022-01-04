import React from "react";
import "./hero-img.css";
import { Link } from "react-router-dom";

function HeroImage() {
  return (
    <div class="home-container">
      <div class="home-left">
        <h1>Our most famous sketches drawings</h1>
        <p>Check out our collection now</p>
        <Link to="/sketches">
          <button>SHOP NOW</button>
        </Link>
      </div>
      <div class="home-right">
        <img src="images/cover2.png" alt="controller" />
      </div>
    </div>
  );
}

export default HeroImage;
