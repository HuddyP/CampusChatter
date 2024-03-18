import { Search } from "@material-ui/icons";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <Search className="widgets_searchIcon" />
        <input placeholder="Search CampusChatter" type="text" />
      </div>

      <div className="widgets_widgetContainer">
        <h2>Trending Events</h2>
        <div className="widgets_widgetContainer">
          <p>Popular Upcoming Event</p>
          <h2>WSC Casino Night</h2>
          <p>Saturday March 16</p>
        </div>
        <div className="widgets_widgetContainer">
          <h2>WSC Track and Field: Wildcat Classic</h2>
          <p>March 28 - 29</p>
        </div>
        <div className="widgets_widgetContainer">
          <h2>Art Exhibit: Sophie Isaak</h2>
          <p>January 17 - March 20</p>
        </div>
      </div>

      <div className="widgets_widgetContainer">
        <h2>People and Clubs to follow: </h2>
        <div className="widgets_widgetContainer">
          <h2>Student Activities Board</h2>
          <p>@SAB</p>
        </div>
        <div className="widgets_widgetContainer">
          <img
            src="https://www.wsc.edu/images/Directory_Marysz_Rames_2022.jpg"
            alt="Rames"
          />
          <h2>Marysz Rames</h2>
          <p>@WSCPrez</p>
        </div>
        <div className="widgets_widgetContainer">
          <h2>Kanter Student Center</h2>
          <p>@StudentCenter</p>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
