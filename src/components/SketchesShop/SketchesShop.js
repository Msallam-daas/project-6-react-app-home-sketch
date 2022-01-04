import React from "react";
import sketches from "../../data/sketches/sketches";
import { Link } from "react-router-dom";

function SketchesShop() {
  return (
    <div>
      <div>
        <h1 className="SketchesFeaturedTitle">Our Sketches</h1>
        <span className="line" />
      </div>
      <div className="sketchesContainer">
        {sketches.map((sketch) => (
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

export default SketchesShop;
