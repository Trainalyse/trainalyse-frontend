import user from "../data/user.json";

function getWeekStart(dateStr) {
  const date = new Date(dateStr);
  const dayOfWeek = date.getDay();
  const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  date.setDate(date.getDate() - diff);
  return date;
}

export function getExerciseDataPoints(
  days,
  exerciseName,
  typeOfExercise,
  view,
) {
  const results = [];

  for (const day of days) {
    const exercise = day.exercises.find((e) => e.exerciseName === exerciseName);
    if (exercise) {
      let exerciseVolume = 0;
      let maxWeight = 0;
      let totalReps = 0;
      let maxAssWeight = 0;
      let totalSeconds = 0;
      for (const set of exercise.sets) {
        for (const dropset of set.dropsets) {
          if (typeOfExercise === "weightsAndReps") {
            exerciseVolume += dropset.weight * dropset.reps;
            maxWeight = Math.max(maxWeight, dropset.weight);
          } else if (typeOfExercise === "bodyweight") {
            exerciseVolume += user.weight * dropset.reps;
            totalReps += Number(dropset.reps);
          } else if (typeOfExercise === "assisted") {
            exerciseVolume += (user.weight - dropset.weight) * dropset.reps;
            maxAssWeight = Math.max(maxAssWeight, dropset.weight);
          } else if (typeOfExercise === "duration") {
            totalSeconds +=
              (dropset.hours || 0) * 3600 +
              (dropset.minutes || 0) * 60 +
              (dropset.seconds || 0);
          }
        }
      }

      results.push({
        date: day.date,
        exerciseVolume: exerciseVolume,
        maxWeight,
        totalReps,
        maxAssWeight,
        totalSeconds,
      });
    }
  }
  const grouped = {};
  for (const day of results) {
    const weekKey = getWeekStart(day.date);
    if (!grouped[weekKey]) {
      grouped[weekKey] = { ...day };
    } else {
      grouped[weekKey].exerciseVolume += day.exerciseVolume;
      grouped[weekKey].maxWeight = Math.max(
        grouped[weekKey].maxWeight,
        day.maxWeight,
      );
      grouped[weekKey].totalReps += day.totalReps;
      grouped[weekKey].maxAssWeight = Math.max(
        grouped[weekKey].maxAssWeight,
        day.maxAssWeight,
      );
      grouped[weekKey].totalSeconds += day.totalSeconds;
    }
  }
  const weekData = Object.values(grouped);
  if (view === "all") {
    return results
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .map((point) => ({
        ...point,
        date: new Date(point.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      }));
  } else if (view === "week") {
    return weekData
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .map((point) => ({
        ...point,
        date: new Date(point.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      }));
  }
}
