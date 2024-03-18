import React from "react";
import "./App.css";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

/*
TODO:
Add Routing
Create Calendar page
Figure out other pages and "features" to add to hardcoded prototype
*/

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Widgets />
    </div>
  );
}

export default App;
