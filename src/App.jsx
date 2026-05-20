import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import days from "./data/days.json";
import Displayedday from "./Displayedday.jsx";

function App() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Day");
  };
  return (
    <>
      <div>Trainalyse</div>
      <button>Date</button>
      <button>Title</button>
      <button>settings</button>

      <hr></hr>
      <ul>
        {/*we import all the days from the dummy data in json and and then we take each day and then while navigating to the
          day component we pass an object as well which has state as key and {day:day} as its value where day is assigned
          the value for day and then we call that component
          with the props of date (of the day) and title (of the day)*/}
        {days.map((day) => (
          <button onClick={() => navigate("/Day", { state: { day } })}>
            <Displayedday date={day.date} title={day.title} />
          </button>
        ))}
      </ul>

      <button onClick={handleClick} className="main">
        +
      </button>

      <hr />

      <nav>
        <ul class="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">graphs</a>
          </li>
          <li>
            <a href="#">improve</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
