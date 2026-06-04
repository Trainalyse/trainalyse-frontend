import React from "react";
import { useState } from "react";
import Sets from "./Sets";

function Exercise({ number, initialData }) {
  const id = React.useId();

  const [exerciseName, setExerciseName] = useState(
    initialData?.exerciseName ?? "",
  ); // pre-fill name if data was passed
  const [sets, setSets] = useState(
    initialData?.sets?.length
      ? initialData.sets
      : [{ id: id + "-0", dropsets: [] }], // pre-fill sets if data was passed, otherwise start with one default
  );

  // function to add a set to the array of sets
  function handleAddSets() {
    setSets([...sets, { id: id + "-" + sets.length, dropsets: [] }]);
  }

  // function to remove a set from the array of sets
  function handleMinus() {
    if (sets.length > 0) {
      const updatedSets = sets.slice(0, -1);
      setSets(updatedSets);
    }
  }

  return (
    <>
      <h3>Exercise {number}</h3>
      {/* this is the input field for entering the name of the exercise */}
      <input
        type="text"
        id={id + "-exerciseName"}
        value={exerciseName}
        onChange={(e) => setExerciseName(e.target.value)}
      />

      <br />
      {/* all sets come from the array now, each gets its data passed as initialData */}
      {sets.map((set, index) => (
        <Sets key={set.id} num={index + 1} initialData={set} />
      ))}
      <br />
      {/* this is the button to add a new set */}
      <button onClick={handleAddSets}>+ for Sets</button>
      {/* this is the button to remove a set, only shown if there are sets */}
      {sets.length > 1 && <button onClick={handleMinus}>- for Sets</button>}
    </>
  );
}

export default Exercise;
