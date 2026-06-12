export function volumeCalculator(dropset, exerciseType, userWeight) {
  if (exerciseType === "weightsAndReps") return dropset.weight * dropset.reps;
  else if (exerciseType === "bodyweight") return userWeight * dropset.reps;
  else if (exerciseType === "assisted")
    return (userWeight - dropset.weight) * dropset.reps;
  else if (exerciseType === "weightedBodyweight")
    return (dropset.weight + userWeight) * dropset.reps;
  else return 0;
}

export function enduranceCalculator(dropset, exerciseType) {
  if (exerciseType === "duration") {
    const hours = dropset.hours || 0;
    const minutes = dropset.minutes || 0;
    const seconds = dropset.seconds || 0;
    return hours * 3600 + minutes * 60 + seconds;
  } else if (exerciseType === "weightAndDuration") {
    const hours = dropset.hours || 0;
    const minutes = dropset.minutes || 0;
    const seconds = dropset.seconds || 0;
    return dropset.weight * (hours * 3600 + minutes * 60 + seconds);
  } else if (exerciseType === "distanceAndDuration") {
    const hours = dropset.hours || 0;
    const minutes = dropset.minutes || 0;
    const seconds = dropset.seconds || 0;
    return dropset.distance * (hours * 3600 + minutes * 60 + seconds);
  } else if (exerciseType === "weightAndDistance") {
    return dropset.weight * dropset.distance;
  }
}

export function setVolumeCalculator(set, exerciseType, userWeight) {
  let setVolume = 0;
  for (const dropset of set.dropsets) {
    setVolume = setVolume + volumeCalculator(dropset, exerciseType, userWeight);
  }
  return setVolume;
}
