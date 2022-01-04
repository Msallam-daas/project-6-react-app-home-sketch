import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./register.css";
import Swal from "sweetalert2";

const Register = (props) => {
  const navigate = useNavigate();
  const [allUsersArray, setAllUsersArray] = useState(
    JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users")).length
      : 0
  );
  const [allUsers, setAllUsers] = useState(
    JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : []
  );
  const [registerInfo, setRegisterInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    appointments: [],
    cartItems: [],
    id: allUsersArray + 1,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const { firstName, lastName, email, password, confirmPassword } =
      registerInfo;
    e.preventDefault();
    setSubmitted(true);
    if (!firstName || !lastName || !email || !password || !confirmPassword)
      return;
    let flag = false;
    if (
      firstName.length > 3 &&
      lastName.length > 3 &&
      email &&
      password.length > 6 &&
      password === confirmPassword
    ) {
      allUsers.forEach((item) => {
        if (item.email === registerInfo.email) {
          flag = true;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email already exists!",
          });
          return;
        }
      });
      if (!flag) {
        allUsers.push(registerInfo);
        localStorage.setItem("users", JSON.stringify(allUsers));
        localStorage.setItem("loggedUser", JSON.stringify(registerInfo));
        navigate("/");
        setAllUsers(JSON.parse(localStorage.getItem("users")));
        props.setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")));
        setRegisterInfo({
          ...registerInfo,
          lastName: "",
          firstName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
    }
  };
  return (
    <div className="registerContainer">
      <form onSubmit={handleSubmit} className="registerForm">
        <h1 className="registerHeading">Register</h1>
        <input
          onChange={handleChange}
          value={registerInfo.firstName}
          placeholder="Enter Your First Name"
          name="firstName"
          type="text"
        />
        {submitted &&
        (registerInfo.firstName.length <= 3 || !registerInfo.firstName) ? (
          <span className="message">
            Please enter a first name with length of 3 characters or more
          </span>
        ) : null}

        <input
          onChange={handleChange}
          value={registerInfo.lastName}
          placeholder="Enter Your Last Name"
          type="text"
          name="lastName"
        />
        {submitted &&
        (registerInfo.lastName.length <= 3 || !registerInfo.lastName) ? (
          <span className="message">
            Please enter a last name with length of 3
          </span>
        ) : null}

        <input
          onChange={handleChange}
          value={registerInfo.email}
          placeholder="Enter Your Email"
          type="email"
          name="email"
        />
        {submitted && !registerInfo.email ? (
          <span className="message">Please enter an email name</span>
        ) : null}

        <input
          onChange={handleChange}
          value={registerInfo.password}
          placeholder="Enter Password"
          type="password"
          name="password"
        />
        {submitted &&
        (registerInfo.password.length <= 6 || !registerInfo.password) ? (
          <span className="message">
            Please enter a password with length of 6
          </span>
        ) : null}

        <input
          onChange={handleChange}
          value={registerInfo.confirmPassword}
          placeholder="Confirm Password"
          type="password"
          name="confirmPassword"
        />
        {submitted &&
        (!registerInfo.confirmPassword ||
          registerInfo.password !== registerInfo.confirmPassword) ? (
          <span className="message">Please make sure the passwords match</span>
        ) : null}

        <button type="submit" className="registerBtn">
          Register
        </button>
        <p className="loginMsg">
          Already have an account ?{" "}
          <Link to="/login" className="registerLogin">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
