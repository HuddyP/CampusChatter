import React from "react";
import "./Widgets.css";

function LeftWidgets() {
  return (
    <div className="widgets">
      <div className="widgets_widgetContainer">
        <h2>Trending Events</h2>
        <div className="widgets_widgetSubContainer">
          <p>Popular Upcoming Event</p>
          <h2>WSC Casino Night</h2>
          <p>Saturday March 16</p>
        </div>
        <div className="widgets_widgetSubContainer">
          <h2>WSC Track and Field: Wildcat Classic</h2>
          <p>March 28 - 29</p>
        </div>
        <div className="widgets_widgetSubContainer">
          <h2>Art Exhibit: Sophie Isaak</h2>
          <p>January 17 - March 20</p>
        </div>
      </div>
    </div>
  );
}

export default LeftWidgets;
