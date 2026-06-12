import React from "react";
import { useState } from "react";
import Sets from "./Sets";
import ExerciseAddition from "./ExerciseAddition";
import exercises from "./data/exercises.json";

function Exercise({ number, exerciseData }) {
  const id = React.useId();
  const counter = React.useRef(1);
  const [selectedExercise, setSelectedExercise] = React.useState(
    exerciseData?.exerciseName || "",
  );
  const [exerciseMode, setExerciseMode] = React.useState(
    exerciseData?.exerciseName ? "selected" : "searching",
  );
  // "searching" — show Add Exercise button + search UI
  // "selected" — show exercise name + edit button
  const [showSearch, setShowSearch] = React.useState(false);
  const lookUpType =
    exercises.find((e) => e.name === exerciseData?.exerciseName)?.type || "";
  const [exerciseType, setExerciseType] = React.useState(lookUpType);

  const handleExerciseAddition = () => {
    setShowSearch(true);
  };

  function handleEditExercise() {
    setExerciseMode("searching");
  }

  const [sets, setSets] = useState(
    exerciseData?.sets?.length > 0
      ? exerciseData.sets
      : [{ id: id + "-0", dropsets: [] }],
  );

  // function to add a set to the array of sets
  function handleAddSets() {
    setSets([...sets, { id: id + "-" + counter.current++, dropsets: [] }]);
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
      {exerciseMode === "searching" && (
        <>
          <button onClick={handleExerciseAddition}>Search Exercise</button>
          {showSearch && (
            <ExerciseAddition
              selectedExercise={selectedExercise}
              setSelectedExercise={setSelectedExercise}
              setExerciseMode={setExerciseMode}
              setExerciseType={setExerciseType}
            />
          )}
        </>
      )}

      {exerciseMode === "selected" && (
        <>
          <p>{selectedExercise}</p>
          <button onClick={handleEditExercise}>Edit exercise</button>
        </>
      )}

      <br />
      {/* all sets come from the array now, each gets its data passed as initialData */}
      {selectedExercise && (
        <>
          {sets.map((set, index) => (
            <Sets
              key={set.id}
              num={index + 1}
              exerciseType={exerciseType}
              setsData={set}
            />
          ))}
          <br />
          {/* this is the button to add a new set */}

          <button onClick={handleAddSets}>+ for Sets</button>
          {/* this is the button to remove a set, only shown if there are sets */}
          {sets.length > 1 && <button onClick={handleMinus}>- for Sets</button>}
        </>
      )}
    </>
  );
}

export default Exercise;
