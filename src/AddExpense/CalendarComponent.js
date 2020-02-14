import React from "react";
import InfiniteCalendar, {
  Calendar,
  defaultMultipleDateInterpolation,
  withMultipleDates
} from "react-infinite-calendar";
import "react-infinite-calendar/styles.css"; // only needs to be imported once
import "./CalendarComponent.scss";

// Render the Calendar
const CalendarComponent = props => {
  var today = new Date(),
    style = {
      overflow: "hidden"
    };
  let datesObj = {};
  datesObj[today.toLocaleDateString()] = true; // set selected date in the array initially

  return (
    <>
      <div className="calendarContainer" style={style}>
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
        <InfiniteCalendar
          Component={withMultipleDates(Calendar)}
          interpolateSelection={defaultMultipleDateInterpolation}
          width={window.screen.width}
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
      </div>
    </>
  );
};

export default CalendarComponent;
