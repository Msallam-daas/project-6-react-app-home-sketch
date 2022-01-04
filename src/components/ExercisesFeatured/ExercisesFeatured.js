import React from "react";
import "./ExercisesFeatured.css";
import Exercises from "../../data/Exercises/Exercises";
import { Link } from "react-router-dom";

function ExercisesFeatured() {
  return (
    <div>
      <div>
        <h1 className="SketchesFeaturedTitle">Most Booked Exercises</h1>
        <span className="line" />
      </div>
      <div className="featuredExercises">
        {Exercises.filter((item, index) => index < 1).map((exercise) => (
          <div className="featuredExercisesContainer" key={exercise.id}>
            <div className="featuredExercisesContainerPhoto">
              <img
                className="featuredExercisesPhoto"
                src={exercise.image}
                alt={exercise.title}
              />
            </div>
            <div className="featuredExerciseInfo">
              <h2 className="featuredExerciseTitle">{exercise.title}</h2>
              <div className="SketcheFeaturedInfo">
                <p className="featuredExerciseDesc">{exercise.description}</p>
                <span className="featuredExercisePrice">
                  Price: ${exercise.price}/hour
                </span>
                <Link
                  to={`/exercises/${exercise.title}`}
                  className="viewExerciseBtn"
                >
                  <button className="viewExerciseBtn">View Exercise</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExercisesFeatured;
