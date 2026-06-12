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
      let maxExtraWeight = 0;
      let totalSeconds = 0;
      let maxDistance = 0;

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
          } else if (typeOfExercise === "weightedBodyweight") {
            exerciseVolume += (user.weight + dropset.weight) * dropset.reps;
            maxExtraWeight = Math.max(maxExtraWeight, dropset.weight);
          } else if (typeOfExercise === "weightAndDuration") {
            totalSeconds +=
              dropset.weight *
              ((dropset.hours || 0) * 3600 +
                (dropset.minutes || 0) * 60 +
                (dropset.seconds || 0));
            maxWeight = Math.max(maxWeight, dropset.weight);
          } else if (typeOfExercise === "distanceAndDuration") {
            totalSeconds +=
              dropset.distance *
              ((dropset.hours || 0) * 3600 +
                (dropset.minutes || 0) * 60 +
                (dropset.seconds || 0));
            maxDistance = Math.max(maxDistance, dropset.distance);
          } else if (typeOfExercise === "weightAndDistance") {
            totalSeconds += dropset.distance * dropset.weight;
            maxDistance = Math.max(maxDistance, dropset.distance);
          }
        }
      }

      results.push({
        date: day.date,
        exerciseVolume: exerciseVolume,
        maxWeight,
        totalReps,
        maxAssWeight,
        maxExtraWeight,
        maxDistance,
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
      grouped[weekKey].maxExtraWeight = Math.max(
        grouped[weekKey].maxExtraWeight,
        day.maxExtraWeight,
      );
      grouped[weekKey].maxDistance = Math.max(
        grouped[weekKey].maxDistance,
        day.maxDistance,
      );
      grouped[weekKey].totalSeconds += day.totalSeconds;
    }
  }

  const groupedMonth = {};
  for (const day of results) {
    const monthKey = day.date.slice(0, 7);
    if (!groupedMonth[monthKey]) {
      groupedMonth[monthKey] = { ...day };
    } else {
      groupedMonth[monthKey].exerciseVolume += day.exerciseVolume;
      groupedMonth[monthKey].maxWeight = Math.max(
        groupedMonth[monthKey].maxWeight,
        day.maxWeight,
      );
      groupedMonth[monthKey].totalReps += day.totalReps;
      groupedMonth[monthKey].maxAssWeight = Math.max(
        groupedMonth[monthKey].maxAssWeight,
        day.maxAssWeight,
      );
      groupedMonth[monthKey].maxExtraWeight = Math.max(
        groupedMonth[monthKey].maxExtraWeight,
        day.maxExtraWeight,
      );
      groupedMonth[monthKey].maxDistance = Math.max(
        groupedMonth[monthKey].maxDistance,
        day.maxDistance,
      );
      groupedMonth[monthKey].totalSeconds += day.totalSeconds;
    }
  }

  const weekData = Object.values(grouped);
  const monthData = Object.values(groupedMonth);

  if (view === "all") {
    return results
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(-5)
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
      .slice(-5)
      .map((point, index) => ({
        ...point,
        date: `Week ${index + 1}`,
      }));
  } else if (view === "month") {
    return monthData
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(-12)
      .map((point) => ({
        ...point,
        date: new Date(point.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
        }),
      }));
  }
}
