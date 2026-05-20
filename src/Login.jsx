import React from "react";

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
    <form onSubmit={handleSubmit}>
      <h1>Trainalyse</h1>
      <h2>Welcome back!</h2>

      <div className="card">
        <label className="input-label">USERNAME</label>
        <input
          className="input-field"
          type="text"
          placeholder="Enter your Username"
          value={userName}
          onChange={handleUsername}
        />

        <label className="input-label">EMAIL</label>
        <input
          className="input-field"
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={handleEmail}
        />

        <label className="input-label">PASSWORD</label>
        <input
          className="input-field"
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={handlePassword}
        />

        <button className="btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <h2>Dont have an account?</h2>
      <button className="btn-small" onClick={handleSignUp}>
        Sign up
      </button>
    </form>
  );
}

export default Login;
