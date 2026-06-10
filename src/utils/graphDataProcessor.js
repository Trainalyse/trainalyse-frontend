export function getExerciseDataPoints(days, exerciseName) {
  const results = [];
  for (const day of days) {
    const exercise = day.exercises.find((e) => e.exerciseName === exerciseName);
    if (exercise) {
      let exerciseVolume = 0;
      for (const set of exercise.sets) {
        for (const dropset of set.dropsets) {
          exerciseVolume += dropset.weight * dropset.reps;
        }
      }

      results.push({ date: day.date, exerciseVolume: exerciseVolume });
    }
  }
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
}
