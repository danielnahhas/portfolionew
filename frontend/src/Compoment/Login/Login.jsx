import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);

      const timeoutId = setTimeout(() => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });

      const token = response.data.token;

      localStorage.setItem("token", token);

      setIsLoggedIn(true);
    } catch (error) {
      if (error.response) {
      } else if (error.request) {
      } else {
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");

    setIsLoggedIn(false);

    setUsername("");
    setPassword("");
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isLoggedIn ? (
          // (<button className="form-btn" onClick={handleLogout}>
          //   Logout
          // </button>)
          <Navigate to={"/"} />
        ) : (
          (<button className="form-btn" type="submit">
            Login
          </button>)
          
        )}
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Login;
