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
  const [typeOfExercise, setTypeOfExercise] = React.useState("");
  const filteredExercises = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchedExercise.toLowerCase()),
  );
  const [selectedExercise, setSelectedExercise] = React.useState("");
  const [view, setView] = React.useState("all");
  const data = getExerciseDataPoints(
    days,
    selectedExercise,
    typeOfExercise,
    view,
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
      {selectedExercise && (
        <div>
          <button onClick={() => setView("all")}>All</button>
          <button onClick={() => setView("week")}>Week</button>
          <button onClick={() => setView("month")}>Month</button>
        </div>
      )}
      {searchedExercise &&
        filteredExercises.map((exercise) => (
          <button
            key={exercise.id}
            onClick={() => {
              setSelectedExercise(exercise.name);
              setTypeOfExercise(exercise.type);
            }}
          >
            {exercise.name}
          </button>
        ))}
      <p>{`you have selected:${selectedExercise}`}</p>
      {selectedExercise && (
        <>
          {typeOfExercise === "weightsAndReps" && (
            <>
              <ResponsiveContainer height={300} width="100%">
                <LineChart data={data}>
                  <XAxis
                    dataKey="date"
                    angle={-45}
                    textAnchor="end"
                    height={150}
                  />
                  <YAxis />
                  <Line dataKey="exerciseVolume" />
                </LineChart>
              </ResponsiveContainer>
              <ResponsiveContainer height={300} width="100%">
                <LineChart data={data}>
                  <XAxis
                    dataKey="date"
                    angle={-45}
                    textAnchor="end"
                    height={150}
                  />
                  <YAxis />
                  <Line dataKey="maxWeight" />
                </LineChart>
              </ResponsiveContainer>
            </>
          )}
          {typeOfExercise === "bodyweight" && (
            <>
              <ResponsiveContainer height={300} width="100%">
                <LineChart data={data}>
                  <XAxis
                    dataKey="date"
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis />
                  <Line dataKey="exerciseVolume" />
                </LineChart>
              </ResponsiveContainer>
              <ResponsiveContainer height={300} width="100%">
                <LineChart data={data}>
                  <XAxis
                    dataKey="date"
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis />
                  <Line dataKey="totalReps" />
                </LineChart>
              </ResponsiveContainer>
            </>
          )}
          {typeOfExercise === "assisted" && (
            <>
              <ResponsiveContainer height={300} width="100%">
                <LineChart data={data}>
                  <XAxis
                    dataKey="date"
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis />
                  <Line dataKey="exerciseVolume" />
                </LineChart>
              </ResponsiveContainer>
              <ResponsiveContainer height={300} width="100%">
                <LineChart data={data}>
                  <XAxis
                    dataKey="date"
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis />
                  <Line dataKey="maxAssWeight" />
                </LineChart>
              </ResponsiveContainer>
            </>
          )}
          {typeOfExercise === "duration" && (
            <>
              <ResponsiveContainer height={300} width="100%">
                <LineChart data={data}>
                  <XAxis
                    dataKey="date"
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis />
                  <Line dataKey="totalSeconds" />
                </LineChart>
              </ResponsiveContainer>
            </>
          )}
          {typeOfExercise === "weightedBodyweight" && (
            <>
              <ResponsiveContainer height={300} width="100%">
                <LineChart data={data}>
                  <XAxis
                    dataKey="date"
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis />
                  <Line dataKey="exerciseVolume" />
                </LineChart>
              </ResponsiveContainer>
              <ResponsiveContainer height={300} width="100%">
                <LineChart data={data}>
                  <XAxis
                    dataKey="date"
                    angle={-45}
                    textAnchor="end"
                    height={150}
                  />
                  <YAxis />
                  <Line dataKey="maxExtraWeight" />
                </LineChart>
              </ResponsiveContainer>
            </>
          )}
          {typeOfExercise === "weightAndDuration" && (
            <>
              <ResponsiveContainer height={300} width="100%">
                <LineChart data={data}>
                  <XAxis
                    dataKey="date"
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis />
                  <Line dataKey="totalSeconds" />
                </LineChart>
              </ResponsiveContainer>
              <ResponsiveContainer height={300} width="100%">
                <LineChart data={data}>
                  <XAxis
                    dataKey="date"
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis />
                  <Line dataKey="maxWeight" />
                </LineChart>
              </ResponsiveContainer>
            </>
          )}
          {typeOfExercise === "distanceAndDuration" && (
            <>
              <ResponsiveContainer height={300} width="100%">
                <LineChart data={data}>
                  <XAxis
                    dataKey="date"
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis />
                  <Line dataKey="totalSeconds" />
                </LineChart>
              </ResponsiveContainer>
              <ResponsiveContainer height={300} width="100%">
                <LineChart data={data}>
                  <XAxis
                    dataKey="date"
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis />
                  <Line dataKey="maxDistance" />
                </LineChart>
              </ResponsiveContainer>
            </>
          )}
          {typeOfExercise === "weightAndDistance" && (
            <>
              <ResponsiveContainer height={300} width="100%">
                <LineChart data={data}>
                  <XAxis
                    dataKey="date"
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis />
                  <Line dataKey="maxWeight" />
                </LineChart>
              </ResponsiveContainer>
              <ResponsiveContainer height={300} width="100%">
                <LineChart data={data}>
                  <XAxis
                    dataKey="date"
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis />
                  <Line dataKey="maxDistance" />
                </LineChart>
              </ResponsiveContainer>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Graphs;
