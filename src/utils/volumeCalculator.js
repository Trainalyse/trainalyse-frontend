export function volumeCalculator(dropset, exerciseType, userWeight) {
  if (exerciseType === "weightsAndReps") return dropset.weight * dropset.reps;
  if (exerciseType === "bodyweight") return userWeight * dropset.reps;
  if (exerciseType === "assisted")
    return (userWeight - dropset.weight) * dropset.reps;
  return 0;
}

export function enduranceCalculator(dropset) {
  const hours = dropset.hours || 0;
  const minutes = dropset.minutes || 0;
  const seconds = dropset.seconds || 0;
  return hours * 3600 + minutes * 60 + seconds;
}

export function setVolumeCalculator(set, exerciseType, userWeight) {
  let setVolume = 0;
  for (const dropset of set.dropsets) {
    setVolume = setVolume + volumeCalculator(dropset, exerciseType, userWeight);
  }
  return setVolume;
}
