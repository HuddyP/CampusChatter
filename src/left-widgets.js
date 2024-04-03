import React from "react";
import "./Widgets.css";

function LeftWidgets() {
  return (
    <div className="widgets">
      <div className="widgets_widgetContainer">
        <h2>Trending Events</h2>
        <div className="widgets_widgetSubContainer">
          <p>Popular Upcoming Event</p>
          <h2>Class of 2024 Graduation Ceremonies</h2>
          <p>Sunday, May 5th</p>
        </div>
        <div className="widgets_widgetSubContainer">
          <p>Popular Ongoing Event</p>
          <h2>Senior Art Exhibit</h2>
          <p>March 27 - April 19</p>
        </div>
        <div className="widgets_widgetSubContainer">
          <p>Upcoming Athletic Event</p>
          <h2>Track and Field @ Concordia </h2>
          <p>April 5 - 6</p>
        </div>
        <div className="widgets_widgetSubContainer">
          <p>Theater</p>
          <h2>You're a Good Man, Charlie Brown </h2>
          <p>April 4 - 6 and April 7</p>
        </div>
      </div>
    </div>
  );
}

export default LeftWidgets;
