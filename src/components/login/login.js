import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import Swal from "sweetalert2";

const Login = (props) => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !localStorage.getItem("users") ||
      !loginInfo.email ||
      !loginInfo.password
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong email or password!",
      });
      return;
    }

    let usersStroge = JSON.parse(localStorage.getItem("users"));

    let flag = false;
    usersStroge.forEach((userStroge) => {
      if (
        loginInfo.email === userStroge.email &&
        loginInfo.password === userStroge.password
      ) {
        localStorage.setItem("loggedUser", JSON.stringify(userStroge));
        navigate("/");
        flag = true;
      }
    });
    if (!flag) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong email or password!",
      });
    }
    props.setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")));
    setLoginInfo({
      email: "",
      password: "",
    });
  };
  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit} className="loginForm">
        <h1 className="signHeading">Sign In</h1>
        <input
          onChange={handleChange}
          value={loginInfo.email}
          placeholder="Enter Email"
          type="email"
          name="email"
        />
        <input
          onChange={handleChange}
          value={loginInfo.password}
          placeholder="Enter Your Password"
          type="password"
          name="password"
        />
        <button className="loginBtn" type="submit">
          Login
        </button>
        <p className="registerMsg">
          Don't Have an account?{" "}
          <Link to="/register" className="loginRegister">
            Register Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
