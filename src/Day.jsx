import React from "react";
import Exercise from "./Exercise";
import { useLocation } from "react-router-dom";

function Day() {
  {
    /*now we come here and catch the note passed by navigate and catch that note by using useLocation and store
    it in a variable called location*/
  }

  const id = React.useId();
  const location = useLocation();
  const passedDay = location.state?.passedDay;

  const [date, setDate] = React.useState(passedDay?.date || ""); // pre-fill date if data was passed
  const [edit, setEdit] = React.useState(false); //state for editing date
  const [day, setDay] = React.useState(passedDay?.title || ""); // pre-fill title if data was passed
  //this below code also makes sure that while mounting there is one exercise component rendered already

  const [exerciseArray, setExerciseArray] = React.useState(
    passedDay?.exercises || [
      {
        id: id + "-0",
        sets: [],
      },
    ], // pre-fill exercises if data was passed, otherwise start with one default
  );

  // function to add a new exercise to the array
  function handleAddExercise() {
    setExerciseArray([
      ...exerciseArray,
      {
        id: id + "-" + exerciseArray.length,
        sets: [],
      },
    ]);
  }

  // function to remove the last exercise from the array
  function handleMinus() {
    if (exerciseArray.length > 0) {
      const updatedExercises = exerciseArray.slice(0, -1); //0th to last element but the last element is excluded
      setExerciseArray(updatedExercises);
    }
  }

  return (
    <>
      {/*this section is for displaying the date and edit button */}
      {date && !edit ? (
        <>
          <p>
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              weekday: "long",
            })}
          </p>
          <button onClick={() => setEdit(true)}>Edit</button>
        </>
      ) : (
        <input
          type="date"
          placeholder="Enter date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            setEdit(false);
          }}
        />
      )}
      <br />
      {/*this is the part where the user enters the name for the day */}
      <input
        type="text"
        placeholder="Enter day"
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />
      <br />
      {/* all exercises come from the array now, each gets its data passed as initialData */}
      {exerciseArray.map((exercise, index) => (
        <Exercise
          key={exercise.id}
          number={index + 1}
          exerciseData={exercise}
        />
      ))}
      <br />
      {/* this is the button to add a new exercise */}
      <button onClick={handleAddExercise}>+ for Exercises</button>
      {/* this is the button to remove the last exercise, only shown if there are exercises */}
      {exerciseArray.length > 1 && (
        <button onClick={handleMinus}>- for Exercises</button>
      )}
    </>
  );
}

export default Day;
