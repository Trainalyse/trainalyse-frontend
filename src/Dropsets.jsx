import React from "react";
import { useState } from "react";

function Dropsets({ exerciseType, dropSetData }) {
  const [weight, setWeight] = useState(dropSetData?.weight || "");
  const [reps, setReps] = useState(dropSetData?.reps || "");
  const [minutes, setMinutes] = useState(dropSetData?.minutes || "");
  const [seconds, setSeconds] = useState(dropSetData?.seconds || "");
  const [hours, setHours] = useState(dropSetData?.hours || "");
  const [distance, setDistance] = useState(dropSetData?.distance || "");

  const id = React.useId(); // for id purposes only

  return (
    <div>
      {/*this is the logic for the different exercise types */}
      {exerciseType === "weightsAndReps" && (
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
      )}
      {exerciseType === "duration" && (
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
      )}

      {exerciseType === "bodyweight" && (
        <input
          type="number"
          placeholder="enter Reps"
          id={id + "-reps"}
          value={reps}
          onChange={(e) => {
            setReps(e.target.value);
          }}
        />
      )}
      {exerciseType === "assisted" && (
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
      )}
      {exerciseType === "weightedBodyweight" && (
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
      )}
      {exerciseType === "weightAndDuration" && (
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
      )}
      {exerciseType === "distanceAndDuration" && (
        <>
          <input
            type="number"
            placeholder="enter distance"
            id={id + "-distance"}
            value={distance}
            onChange={(e) => {
              setDistance(e.target.value);
            }}
          />
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
      )}
      {exerciseType === "weightAndDistance" && (
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
            placeholder="enter distance"
            id={id + "-distance"}
            value={distance}
            onChange={(e) => {
              setDistance(e.target.value);
            }}
          />
        </>
      )}
    </div>
  );
}

export default Dropsets;
