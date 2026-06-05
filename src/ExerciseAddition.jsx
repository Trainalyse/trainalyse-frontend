import React from "react";
import exercises from "./data/exercises.json";

function ExerciseAddition() {
  const [searchedExercise, setSearchedExercise] = React.useState("");
  const [selectedExercise, setSelectedExercise] = React.useState("");
  const [exerciseSelected, setExerciseSelected] = React.useState(false);
  const filteredExercises = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchedExercise.toLowerCase()),
  );

  return (
    <>
      <p>Search your exercise:</p>
      <input
        type="text"
        placeholder="enter your exercise"
        value={searchedExercise}
        onChange={(e) => {
          setSearchedExercise(e.target.value);
        }}
      />
      {filteredExercises.map((exercise) => (
        <button
          key={exercise.id}
          onClick={() => {
            setSelectedExercise(exercise.name);
            setExerciseSelected(true);
          }}
        >
          {exercise.name}
        </button>
      ))}
      <p>{`you have selected:${selectedExercise}`}</p>

      {exerciseSelected && <button>Add Exercise</button>}
    </>
  );
}

export default ExerciseAddition;
