import React, { useState } from "react";
import "./SketchesDetailes.css";
import { useParams, useNavigate } from "react-router-dom";

function SketchesDetailes({ sketches, setLoggedUser }) {
  const { title } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser"))
      ? JSON.parse(localStorage.getItem("loggedUser"))
      : ""
  );

  const addToCart = (item) => {
    if (!user) {
      navigate("/login");
    } else {
      const existingCartItem = user.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingCartItem) {
        user.cartItems.map((cartItem) =>
          cartItem.id === item.id ? (cartItem.quantity += 1) : cartItem
        );
        localStorage.setItem("loggedUser", JSON.stringify(user));
        const allUsers = JSON.parse(localStorage.getItem("users"));
        const filteredAllUsers = allUsers.filter((data) => user.id !== data.id);
        filteredAllUsers.push(user);
        localStorage.setItem("users", JSON.stringify(filteredAllUsers));
        setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")));
      } else {
        user.cartItems.push({ ...item, quantity: 1 });
        localStorage.setItem("loggedUser", JSON.stringify(user));
        const allUsers = JSON.parse(localStorage.getItem("users"));
        const filteredAllUsers = allUsers.filter((data) => user.id !== data.id);
        filteredAllUsers.push(user);
        localStorage.setItem("users", JSON.stringify(filteredAllUsers));
        setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")));
      }
    }
  };

  return (
    <div>
      {sketches
        .filter((sketch) => sketch.title === title)
        .map((sketch) => (
          <div className="sketchesDetailesContainer" key={sketch.id}>
            <div className="sketchesDetailesPhotos">
              <img
                className="sketchesPhotos"
                src={sketch.image}
                alt={sketch.title}
              />
            </div>
            <div className="sketchesDetailesInfo">
              <h2 className="sketchesDetailesTitle">{sketch.title}</h2>
              <p className="sketchesDetailesDesc">{sketch.description}</p>
              <span className="sketchesDetailesPrice">
                Price: ${sketch.price}
              </span>
              <button
                className="buySketchBtn"
                onClick={() => addToCart(sketch)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default SketchesDetailes;
