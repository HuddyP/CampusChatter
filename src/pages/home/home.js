import React from "react";
import "../../App.css";
import Feed from "../../Feed";
import Sidebar from "../../sidebar";
import Widgets from "../../Widgets";
import EventCalendar from "../events/calendar.js";

function Home() {
  return (
    <div className="app">
      <Sidebar />
      <EventCalendar />
      <Widgets />
    </div>
  );
}

export default Home;
