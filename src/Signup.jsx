import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password1, setPassword1] = React.useState("");
  const [password2, setPassword2] = React.useState("");

  function handleUsername(event) {
    setUserName(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePassword1(event) {
    setPassword1(event.target.value);
  }
  function handlePassword2(event) {
    setPassword2(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (password1 !== password2) {
      alert("Both passwords don't match");
      return;
    }
    navigate("/Moreinfo");
  }

  function handleLogin() {
    navigate("/Login");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Trainalyse</h1>
      <h3>Create your account</h3>
      <p>Username</p>
      <input
        type="text"
        placeholder="Create your username"
        value={userName}
        onChange={handleUsername}
      />
      <p>Email</p>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmail}
      />
      <p>Password</p>
      <input
        type="password"
        placeholder="Enter your Password"
        value={password1}
        onChange={handlePassword1}
      />
      <p>Confirm password</p>
      <input
        type="password"
        placeholder="Enter your Password"
        value={password2}
        onChange={handlePassword2}
      />
      <button onClick={handleSubmit}>Sign Up</button>
      <p>Already have an account?</p>
      <button onClick={handleLogin}>Log in</button>
    </form>
  );
}

export default Signup;
