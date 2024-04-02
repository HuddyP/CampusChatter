import React from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Events from './pages/events/events';
import Sidebar from './sidebar.js'
import Widgets from './Widgets.js'

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
    <div className='app'>
      <Sidebar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "events" element = {<Events />} />
      </Routes>
      <Widgets />
    </div>
  );
}

export default App;
