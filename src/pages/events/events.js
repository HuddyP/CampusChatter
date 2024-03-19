import React from "react";
import "../../App.css";
import Feed from "../../Feed";
import Sidebar from "../../sidebar";
import Widgets from "../../Widgets";

function Events() {
    return (
      <div className="app">
        <Sidebar />
        <Widgets />
      </div>
    );
  }
  
  export default Events;