import React from "react";
import Dropsets from "./Dropsets";
import { useState } from "react";

function Sets({ num, initialData }) {
  const id = React.useId();
  const [dropSets, setDropSets] = useState(
    initialData?.dropsets?.length
      ? initialData.dropsets
      : [
          {
            id: id + "-0",
            weight: "",
            reps: "",

            minutes: "",
            seconds: "",
          },
        ], // pre-fill dropsets if data was passed, otherwise start with one default
  );

  // function to handle adding a new drop set
  function handleDropSets() {
    const updatedDropSets = [
      ...dropSets,
      {
        id: id + "-" + dropSets.length,
        weight: "",
        reps: "",
        minutes: "",
        seconds: "",
      },
    ];
    setDropSets(updatedDropSets);
  }

  // function to handle removing a drop set
  function handleMinus() {
    if (dropSets.length > 0) {
      const updatedDropSets = dropSets.slice(0, -1);
      setDropSets(updatedDropSets);
    }
  }

  return (
    <>
      <p>Set {num}:</p>
      <br />
      {/* all dropsets come from the array now, each gets its data passed as initialData */}
      {dropSets.map((dropset) => (
        <Dropsets key={dropset.id} initialData={dropset} />
      ))}
      <br />
      {/* this is the button to add a new drop set */}
      <button onClick={handleDropSets}>+ for drop sets</button>
      {/* this is the button to remove a drop set, only shown if there are drop sets */}
      {dropSets.length > 1 && (
        <button onClick={handleMinus}>- for drop sets</button>
      )}
    </>
  );
}

export default Sets;
