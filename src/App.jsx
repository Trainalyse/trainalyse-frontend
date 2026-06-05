import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

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
