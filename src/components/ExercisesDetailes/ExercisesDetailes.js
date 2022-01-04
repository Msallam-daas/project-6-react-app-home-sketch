import React, { useState } from "react";
import "./ExercisesDetailes.css";
import { useParams, useNavigate } from "react-router-dom";
import ReservationForm from "../reservation-form/reservation-form";

function ExercisesDetailes({ Exercises }) {
  const { title } = useParams();
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const checkForUser = () => {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    if (user) {
      setShowForm(true);
    } else {
      navigate("/login");
      setShowForm(false);
    }
  };
  const cancelForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      {Exercises.filter((exercise) => exercise.title === title).map(
        (exercise) => (
          <div>
            <div className="ExerciseDetailesContainer" key={exercise.id}>
              <div className="ExerciseDetailesContainerPhoto">
                <img
                  className="photo"
                  src={exercise.image}
                  alt={exercise.title}
                />
              </div>
              <div className="ExerciseDetailesInfo">
                <h2 className="ExerciseDetailesTitle">{exercise.title}</h2>
                <p className="ExerciseDetailesDesc">{exercise.description}</p>
                <span className="ExerciseDetailesPrice">
                  Price: ${exercise.price}/hour
                </span>
                {!showForm ? (
                  <button className="bookExerciseBtn" onClick={checkForUser}>
                    Book Now
                  </button>
                ) : (
                  <button className="bookExerciseBtn" onClick={cancelForm}>
                    Cancel
                  </button>
                )}
              </div>
            </div>
            {showForm ? <ReservationForm service={exercise} /> : ""}
          </div>
        )
      )}
    </div>
  );
}

export default ExercisesDetailes;
