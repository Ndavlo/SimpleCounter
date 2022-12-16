//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/secondscounter.jsx";

var countSeconds = 0;
var countSeconds2 = 0;
var countMinutes = 0;
var countMinutes2 = 0;
var countHours = 0;
var countHours2 = 0;

setInterval(() => {
  if (countSeconds == 10) {
    countSeconds2++;
    countSeconds = 0;
  } else if (countSeconds2 == 6) {
    countMinutes++;
    countSeconds = 0;
    countSeconds2 = 0;
  } else if (countMinutes == 10) {
    countMinutes2++;
    countSeconds = 0;
    countSeconds2 = 0;
    countMinutes = 0;
  } else if (countMinutes2 == 6) {
    countHours++;
    countSeconds = 0;
    countSeconds2 = 0;
    countMinutes = 0;
    countMinutes2 = 0;
  } else if (countHours == 10) {
    countHours2++;
    countHours = 0;
    countSeconds = 0;
    countSeconds2 = 0;
    countMinutes = 0;
    countMinutes2 = 0;
  } else if (countHours2 == 2 && countHours == 4) {
    countHours = 0;
    countHours2 = 0;
    countSeconds = 0;
    countSeconds2 = 0;
    countMinutes = 0;
    countMinutes2 = 0;
  }
  ReactDOM.render(
    <SecondsCounter
      seconds={countSeconds}
      seconds2={countSeconds2}
      minutes2={countMinutes2}
      minutes={countMinutes}
      hours={countHours}
      hours2={countHours2}
    />,
    document.querySelector("#app")
  );
  countSeconds++;
}, 1000);
