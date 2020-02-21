import React from "react";
import { useState } from "react";
import InfiniteCalendar, {
  Calendar,
  defaultMultipleDateInterpolation,
  withMultipleDates
} from "react-infinite-calendar";
import "react-infinite-calendar/styles.css"; // only needs to be imported once
import "./CalendarComponent.scss";

// Render the Calendar
const CalendarComponent = props => {
  const [isRecurring, setIsRecurring] = useState(false);
  var today = new Date();
  let datesObj = {};
  datesObj[today.toLocaleDateString()] = true; // set selected date in the array initially

  let parentDiv = document.getElementsByClassName("addexpense-container");
  let w = parentDiv[0].style.width;
  console.log("w is " + window.screen.width);
  let headerStyle = {
    width:
      window.screen.width > 700
        ? window.screen.width / 4 - 20 + "px"
        : window.screen.width - 55 + "px"
  };
  console.log(headerStyle);

  return (
    <>
      <div className="calendarContainer">
        <h3 className="cal-header" style={headerStyle}>
          How often?
          <div
            className="nextBtn"
            onClick={() => {
              let arr = [];
              for (let d in datesObj) arr.push(d);
              arr.sort();
              // order of the two useStates doesn't matter here
              props.setSelDates(arr);
              props.goNext();
            }}
          >
            {">"}
          </div>
        </h3>
        {window.screen.width > 700 ? (
          <div className="frequency-ctr" style={headerStyle}>
            <div
              className={
                "frequency onetime" + (!isRecurring ? " selected" : "")
              }
              onClick={() => {
                setIsRecurring(false);
              }}
            >
              <input type="radio" checked={!isRecurring} />
              One time
            </div>

            <div
              className={
                "frequency recurring" + (isRecurring ? " selected" : "")
              }
              onClick={() => {
                setIsRecurring(true);
              }}
            >
              <input type="radio" checked={isRecurring} />
              Recurring
            </div>
          </div>
        ) : null}

        {isRecurring ? (
          <InfiniteCalendar
            Component={withMultipleDates(Calendar)}
            interpolateSelection={defaultMultipleDateInterpolation}
            width={
              window.screen.width > 700
                ? window.screen.width / 4
                : window.screen.width - 35
            }
            height={300}
            selected={[today.toLocaleDateString()]}
            onSelect={date => {
              let dateStr = date.toLocaleDateString();
              if (datesObj[dateStr]) {
                delete datesObj[dateStr];
              } else {
                datesObj[dateStr] = true;
              }
            }}
            minDate={new Date(today.getFullYear(), today.getMonth(), 1)}
            maxDate={new Date(today.getFullYear(), today.getMonth(), 30)}
          />
        ) : (
          <InfiniteCalendar
            height={300}
            onSelect={date => {
              let dateStr = date.toLocaleDateString();
              datesObj = {};
              datesObj[dateStr] = true;
            }}
            minDate={new Date(today.getFullYear(), today.getMonth(), 1)}
            maxDate={new Date(today.getFullYear(), today.getMonth(), 30)}
          />
        )}
      </div>
    </>
  );
};

export default CalendarComponent;
