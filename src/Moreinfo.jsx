import React from "react";
import { useNavigate } from "react-router-dom";

function Moreinfo() {
  const [userAge, setUserAge] = React.useState("");
  const [userWeight, setUserWeight] = React.useState("");
  const [userHeight, setUserHeight] = React.useState("");
  const [userActivity, setUserActivity] = React.useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Some more info</h1>
      <h2>about you</h2>

      <p>AGE</p>
      <input
        type="number"
        placeholder="Enter your Age"
        value={userAge}
        onChange={(e) => setUserAge(e.target.value)}
      />

      <p>WEIGHT</p>
      <input
        type="number"
        placeholder="Enter your Weight"
        value={userWeight}
        onChange={(e) => setUserWeight(e.target.value)}
      />

      <p>HEIGHT</p>
      <input
        type="number"
        placeholder="Enter your Height"
        value={userHeight}
        onChange={(e) => setUserHeight(e.target.value)}
      />

      <p>ACTIVITY</p>
      <input
        type="text"
        placeholder="Your activity in a Week"
        value={userActivity}
        onChange={(e) => setUserActivity(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default Moreinfo;
