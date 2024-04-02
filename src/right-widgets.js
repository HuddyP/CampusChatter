import React from "react";
import "./Widgets.css";

function RightWidgets() {
  return (
    <div className="widgets">
      <div className="widgets_widgetContainer">
        <h2>People and Clubs to follow: </h2>
        <div className="widgets_widgetSubContainer">
          <h2>Student Activities Board</h2>
          <p>@SAB</p>
        </div>
        <div className="widgets_widgetSubContainer">
          <img
            src="https://www.wsc.edu/images/Directory_Marysz_Rames_2022.jpg"
            alt="Rames"
          />
          <h2>Marysz Rames</h2>
          <p>@WSCPrez</p>
        </div>
        <div className="widgets_widgetSubContainer">
          <h2>Kanter Student Center</h2>
          <p>@StudentCenter</p>
        </div>
      </div>
    </div>
  );
}

export default RightWidgets;
