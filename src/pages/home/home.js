import React from "react";
import "../../App.css";
import Feed from "../../Feed";
import Sidebar from "../../sidebar";
import Widgets from "../../Widgets";
import EventCalendar from "../events/calendar.js";

function Home() {
<<<<<<< HEAD
  return (
    <div className="app">
      <Sidebar />
      <EventCalendar />
      <Widgets />
    </div>
  );
}

export default Home;
=======
    return (
      <div className="app">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    );
  }
  
  export default Home;
>>>>>>> 1101e499fa95e6640b97eb3211583b28d9aa7ada
