import React from "react";
import "../../App.css";
import { useState } from "react";
import Calendar from "react-calendar";
import "./calendar.css";

function EventCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="app">
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
    </div>
  );
}
export default EventCalendar;
