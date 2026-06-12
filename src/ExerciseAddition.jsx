import React from "react";
import exercises from "./data/exercises.json";
import exerciseTypes from "./data/exerciseTypes.json";

function ExerciseAddition({
  selectedExercise,
  setSelectedExercise,
  setExerciseMode,
  setExerciseType,
}) {
  const [searchedExercise, setSearchedExercise] = React.useState("");
  const [addCustomField, setAddCustomField] = React.useState(false);
  const [exerciseSelected, setExerciseSelected] = React.useState(false);
  const filteredExercises = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchedExercise.toLowerCase()),
  );
  const [customExercise, setCustomExercise] = React.useState("");
  const [selectedType, setSelectedType] = React.useState("");

  function handleSubmition() {
    setExerciseMode("selected");
  }

  function handleCustomExercise() {
    setAddCustomField(true);
  }

  function handleConfirmCustomExcAddition() {
    setSelectedExercise(customExercise);
    setExerciseType(selectedType);
    setExerciseSelected(true);
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
      <div>
        {searchedExercise && filteredExercises.length == 0 && (
          <button onClick={handleCustomExercise}>Add custom Exercise</button>
        )}
      </div>
      {addCustomField && (
        <div>
          <input
            type="text"
            placeholder="enter your exercise"
            value={customExercise}
            onChange={(e) => {
              setCustomExercise(e.target.value);
            }}
          />
          <select
            required
            id="customExercise"
            name="customExercise"
            value={selectedType}
            onChange={(event) => {
              setSelectedType(event.target.value);
            }}
          >
            <option value="">— Select a type —</option>
            <optgroup label="exerciseTypes">
              {exerciseTypes.map(({ id, type, label }) => {
                return (
                  <option value={type} key={id}>
                    {label}
                  </option>
                );
              })}
            </optgroup>
          </select>
        </div>
      )}
      {customExercise && selectedType && (
        <button onClick={handleConfirmCustomExcAddition}>Add Exercise</button>
      )}
      {exerciseSelected && <p>{`you have selected:${selectedExercise}`}</p>}

      {exerciseSelected && (
        <button onClick={handleSubmition}>Add Exercise</button>
      )}
    </>
  );
}

export default ExerciseAddition;
