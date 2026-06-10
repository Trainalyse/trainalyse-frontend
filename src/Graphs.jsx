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

function Graphs() {
  const data = getExerciseDataPoints(days, "Bench Press");
  return (
    <>
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
