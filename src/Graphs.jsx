import React from "react";
import days from "./data/days.json";
import { getExerciseDataPoints } from "./utils/graphDataProcessor";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import exercises from "./data/exercises.json";

function Graphs() {
  const [searchedExercise, setSearchedExercise] = React.useState("");
  const filteredExercises = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchedExercise.toLowerCase()),
  );
  const [selectedExercise, setSelectedExercise] = React.useState("");
  const data = getExerciseDataPoints(days, selectedExercise);

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
            }}
          >
            {exercise.name}
          </button>
        ))}
      <p>{`you have selected:${selectedExercise}`}</p>

      <ResponsiveContainer height={300} width="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <Line dataKey="exerciseVolume" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default Graphs;
