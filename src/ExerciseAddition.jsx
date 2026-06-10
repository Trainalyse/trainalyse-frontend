import React from "react";
import exercises from "./data/exercises.json";

function ExerciseAddition({
  selectedExercise,
  setSelectedExercise,
  setExerciseMode,
  setExerciseType,
}) {
  const [searchedExercise, setSearchedExercise] = React.useState("");

  const [exerciseSelected, setExerciseSelected] = React.useState(false);
  const filteredExercises = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchedExercise.toLowerCase()),
  );

  function handleSubmition() {
    setExerciseMode("selected");
  }
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
      {searchedExercise &&
        filteredExercises.map((exercise) => (
          <button
            key={exercise.id}
            onClick={() => {
              setSelectedExercise(exercise.name);
              setExerciseType(exercise.type);
              setExerciseSelected(true);
            }}
          >
            {exercise.name}
          </button>
        ))}
      <p>{`you have selected:${selectedExercise}`}</p>

      {exerciseSelected && (
        <button onClick={handleSubmition}>Add Exercise</button>
      )}
    </>
  );
}

export default ExerciseAddition;
