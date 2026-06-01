import React from "react";
import "./Login.css";

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleUsername(event) {
    setUserName(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleSignUp() {
    navigate("/Signup");
  }

  return (
    <form onSubmit={handleSubmit} className="login-page">
      <h1 className="login-header">Trainalyse</h1>
      <h2 className="login-subtitle">Welcome back!</h2>

      <div className="card login-card">
        <div className="login-inputs">
          <label className="input-label" htmlFor="username">
            USERNAME
          </label>
          <input
            id="username"
            className="input-field"
            type="text"
            placeholder="Enter your Username"
            value={userName}
            onChange={handleUsername}
          />
        </div>
        <div className="login-inputs">
          <label className="input-label" htmlFor="email">
            EMAIL
          </label>
          <input
            id="email"
            className="input-field"
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="login-inputs">
          <label className="input-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            id="password"
            className="input-field"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className="login-inputs">
          <button className="btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      <div className="login-footer ">
        <h2>Dont have an account?</h2>
        <button className="btn-small" onClick={handleSignUp}>
          Sign up
        </button>
      </div>
    </form>
  );
}

export default Login;
