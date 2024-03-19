import React from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Events from './pages/events/events';

/*
TODO:
Add Routing (might require converting App.js into a routing source instead of a "main page" like right now)
Create "pages" for each sidebar option and widget windows for each widget event
Figure out other pages and "features" to add to hardcoded prototype
Fix feeds and create example "chatters" for hardcoding into the feed
*/

function App() {
  return (
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "events" element = {<Events />} />
      </Routes>
  );
}

export default App;
