import React from "react";
import "./SketchesFeatured.css";
import sketches from "../../data/sketches/sketches";
import { Link } from "react-router-dom";

function SketchesFeatured() {
  return (
    <div>
      <div>
        <h1 className="SketchesFeaturedTitle">Our Featured Sketches</h1>
        <span className="line" />
      </div>
      <div className="sketchesContainer">
        {sketches
          .filter((sketch, index) => index < 3)
          .map((sketch) => (
            <div className="sketcheContainer" key={sketch.id}>
              <div className="sketcheContainerPhoto">
                <img
                  className="SketcheFeaturedPhoto"
                  src={sketch.image}
                  alt={sketch.title}
                />
              </div>
              <h2 className="SketcheFeaturedTitle">{sketch.title}</h2>
              <div className="SketcheFeaturedInfo">
                <span className="SketcheFeaturedPrice">
                  Price: ${sketch.price}
                </span>
                <Link to={`/sketches/${sketch.title}`}>
                  <button className="viewSketchBtn">View Sketche</button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SketchesFeatured;
