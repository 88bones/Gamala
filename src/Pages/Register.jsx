import React, { useState } from "react";
import axios from "axios";
import registerimg from "../Images/register.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/register.php";

    let fData = new FormData();
    fData.append("email", email);
    fData.append("username", username);
    fData.append("password", password);

    axios
      .post(url, fData)
      .then((response) => {
        setResult("Registration Successful!" + response.data);
        setEmail("");
        setUsername("");
        setPassword("");
      })
      .catch((error) => setResult("Error: " + error.message));
  };

  return (
    <div className="form-container">
      <div className="form">
        <img src={registerimg} alt="" />
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <br />
          <input
            type="text"
            id="username"
            value={username}
            name="username"
            onChange={handleChange}
            placeholder="Username"
            required
          />
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <div className="result">
            <span id="result">{result}</span>
          </div>
          <button type="submit">Register</button>
          <div className="login">
            Don't have an account? <Link to="#">Click Here</Link>
          </div>
        </form>
        {/* Display dynamic result */}
      </div>
    </div>
  );
};

export default Register;
