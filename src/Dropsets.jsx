import React from "react";
import { useState } from "react";

function Dropsets() {
  const [weight, setWeight] = useState(""); // pre-fill weight if data was passed
  const [reps, setReps] = useState(""); // pre-fill reps if data was passed
  const [minutes, setMinutes] = useState(""); // pre-fill minutes if data was passed
  const [seconds, setSeconds] = useState(""); // pre-fill seconds if data was passed
  const [hours, setHours] = useState("");

  const id = React.useId(); // for id purposes only

  return (
    <div>
      {/*this is the logic for the different exercise types */}

      <>
        <input
          type="number"
          placeholder="enter Weight"
          id={id + "-weight"}
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="enter Reps"
          id={id + "-reps"}
          value={reps}
          onChange={(e) => {
            setReps(e.target.value);
          }}
        />
      </>

      <>
        <input
          type="number"
          min="0"
          max="24"
          id={id + "-hours"}
          value={hours}
          onChange={(e) => {
            setHours(e.target.value);
          }}
        />
        <label>{hours} : Hours</label>
        <input
          type="number"
          min="0"
          max="59"
          id={id + "-minutes"}
          value={minutes}
          onChange={(e) => {
            setMinutes(e.target.value);
          }}
        />
        <label>{minutes} : Minutes</label>
        <br />
        <input
          type="number"
          min="0"
          max="59"
          id={id + "-seconds"}
          value={seconds}
          onChange={(e) => {
            setSeconds(e.target.value);
          }}
        />
        <label>{seconds} : Seconds</label>
      </>

      <input
        type="number"
        placeholder="enter Reps"
        id={id + "-reps"}
        value={reps}
        onChange={(e) => {
          setReps(e.target.value);
        }}
      />

      <>
        <input
          type="number"
          placeholder="enter Assisted Weight"
          id={id + "-weight"}
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="enter Reps"
          id={id + "-reps"}
          value={reps}
          onChange={(e) => {
            setReps(e.target.value);
          }}
        />
      </>
    </div>
  );
}

export default Dropsets;
