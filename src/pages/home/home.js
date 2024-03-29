import React from "react";
import "../../App.css";
import Feed from "../../Feed";
import Sidebar from "../../sidebar";
import Widgets from "../../Widgets";

function Home() {
    return (
      <div className="app">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    );
  }
  
  export default Home;