function Displayedday({ date, title }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <ul className="displayedday">
      <div>
        {formattedDate} - {title}
      </div>
    </ul>
  );
}

export default Displayedday;
