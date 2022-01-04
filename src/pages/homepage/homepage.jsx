import React from "react";
import SketchesFeatured from "../../components/SketchesFeatured/SketchesFeatured";
import HeroImage from "../../components/hero-img/hero-img";
import ImageSlider from "../../components/imageslider/ImageSlider";
import { SliderData } from "../../components/imageslider/SliderData";
import ExercisesFeatured from "../../components/ExercisesFeatured/ExercisesFeatured";
import ContactUS from "../../components/ContactUS/ContactUS.js";
function HomePage() {
  return (
    <div>
      <HeroImage />
      <SketchesFeatured />
      <ExercisesFeatured />
      <ImageSlider slides={SliderData} />
      <ContactUS />
    </div>
  );
}

export default HomePage;
