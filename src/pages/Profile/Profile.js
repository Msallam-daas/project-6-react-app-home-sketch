import React from "react";
import "./Profile.css";

export default function Profile() {
  let allUsers = JSON.parse(localStorage.getItem("loggedUser"));

  return (
    <div>
      <div>
        <h1 className="SketchesFeaturedTitle">Profile Information</h1>
        <span className="line" />
      </div>
      <div className="profileContainer">
        <div className="personal-info">
          <h2>Personal Information</h2>
          <span className="sectionline" />
          <div className="personalInofContainer">
            <label>First Name:</label>
            <input type="text" value={allUsers.firstName} disabled />
            <label>Last Name:</label>
            <input type="text" value={allUsers.lastName} disabled />
            <label>Email:</label>
            <input type="text" value={allUsers.email} disabled />
            <label>Password:</label>
            <input type="text" value={allUsers.password} disabled />
          </div>
        </div>
        <div className="cart-info">
          <h2>My Cart Items</h2>
          <span className="sectionline" />
          <div className="cartInfoContainer">
            {allUsers.cartItems.map((cartitem) => {
              return (
                <>
                  <p>Sketch Name : {cartitem.title}</p>
                  <p>Sketch Quantity : {cartitem.quantity}X</p>
                  <span className="cartline" />
                </>
              );
            })}
          </div>
        </div>
        <div className="reservations-info">
          <h2>Reservations</h2>
          <span className="sectionline" />
          <div className="reservationsInfoContainer">
            {allUsers.appointments.map((all) => {
              return (
                <>
                  <p>Exercise Name : {all.service}</p>
                  <p> Exercise Date : {all.date}</p>
                  <p> Exercise Start Time : {all.startTime}</p>
                  <p>Exercise Finish Time : {all.finishTime}</p>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
