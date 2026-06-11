import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import days from "./data/days.json";
import Displayedday from "./Displayedday.jsx";

function App() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Day");
  };

  const handleGraphs = () => {
    navigate("/Graphs");
  };
  //this is for catching reference for the dat input tag
  const dateRef = React.useRef();
  // this is for when we click on title in header then we see the search otherwise it is not visible
  const [showTitleSearch, setShowTitleSearch] = React.useState(false);
  //when the user has selected a particular date
  const [dateWanted, setDateWanted] = React.useState("");
  //when the user has selected a particular title
  const [titleWanted, setTitleWanted] = React.useState("");
  /*when the user has selected a particular date then we filter using that date
  and then if not then we see if the user has selected any title for search and then
  we filter using that title and if nothing is selected then we see all the logged workouts.
  */
  const filteredDays = dateWanted
    ? days.filter((day) => day.date === dateWanted)
    : titleWanted
      ? days.filter((day) =>
          day.title.toLowerCase().includes(titleWanted.toLowerCase()),
        )
      : days;
  return (
    <>
      <div>Trainalyse</div>
      {/*the below logic applies that we dont see date input tag unless clicked on date button */}
      <input
        type="date"
        ref={dateRef}
        style={{ display: "none" }}
        onChange={(e) => {
          setDateWanted(e.target.value);
          setTitleWanted("");
        }}
      />
      <button onClick={() => dateRef.current.showPicker()}>Date</button>
      {/*the below logic applies that we dont see title input tag unless clicked on title button */}
      <button onClick={() => setShowTitleSearch(!showTitleSearch)}>
        Title
      </button>
      {showTitleSearch && (
        <input
          type="text"
          placeholder="Search by title"
          value={titleWanted}
          onChange={(e) => {
            setDateWanted("");
            setTitleWanted(e.target.value);
          }}
        />
      )}
      <button>settings</button>
      <hr></hr>
      {/*this is the logic that maps the filtered days and renders the days button
       according to the date and title entered and otherwise shows no workouts found text.
       .sort((a, b) => new Date(a.date) - new Date(b.date))
       .map((point) => ({
         ...point,
         date: new Date(point.date).toLocaleDateString("en-US", {
           year: "numeric",
           month: "short",
           day: "numeric",
         }),
       }));


       */}
      {filteredDays.length > 0 ? (
        filteredDays
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((day) => (
            <div>
              <button
                key={day.id}
                onClick={() => navigate("/Day", { state: { passedDay: day } })}
              >
                <Displayedday date={day.date} title={day.title} />
              </button>
            </div>
          ))
      ) : (
        <p>No workouts found</p>
      )}

      <button onClick={handleClick} className="main">
        +
      </button>
      <hr />
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <button onClick={handleGraphs}>graphs</button>
          </li>
          <li>
            <a href="#">improve</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
