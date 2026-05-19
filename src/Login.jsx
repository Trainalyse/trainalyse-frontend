import React from "react";

function Login() {
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
  function handleSignUp = () => {
    navigate("/Signup");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Trainalyse</h1>
      <h3>Welcome back!</h3>

      <p>Username</p>
      <input
        type="text"
        placeholder="Enter your username"
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
        value={password}
        onChange={handlePassword}
      />

      <button onClick={handleSubmit}>Submit</button>

      <p>Dont have an account?</p>
      <button onClick={handleSignUp}>Sign up</button>
    </form>
  );
}

export default Login;
