import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import EventCalendar from "./pages/events/calendar.js";
import LeftWidgets from "./left-widgets.js";
import RightWidgets from "./right-widgets.js";
import Navbar from "./navbar-index.js";

/*
TODO:

IMPORTANT: FIX ROUTING TO OTHER PAGES

Create "pages" for each sidebar option and widget windows for each widget event
Fix layout issues on Calendar page
Figure out other pages and "features" to add to hardcoded prototype
Fix feeds and create example "chatters" for hardcoding into the feed
Change layout to make design more unique
*/

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <LeftWidgets />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventCalendar />} />
        </Routes>
        <RightWidgets />
      </div>
    </Router>
  );
}

export default App;
