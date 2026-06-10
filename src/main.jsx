import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Day from "./Day.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Moreinfo from "./Moreinfo.jsx";
import ExerciseAddition from "./ExerciseAddition.jsx";
import Graphs from "./Graphs.jsx";
import "./design-system.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Day" element={<Day />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Moreinfo" element={<Moreinfo />} />
        <Route path="/ExerciseAddition" element={<ExerciseAddition />} />
        <Route path="/Graphs" element={<Graphs />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
