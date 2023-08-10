import satData from "./satData";
import "./styling.css";

function Buttons(props) {

  function handleClick() {
    return props.setSat(satData);
  }

  return (
    <div className = "flex-container">
      {props.displaySats.map(( sat, id) => { // adding displaySats?.map works to display the rest, but not the main buttons I want.
        return (
          <button onClick={() => props.filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      <button onClick={handleClick}>All Orbits</button>
    </div>
  );
};

export default Buttons;