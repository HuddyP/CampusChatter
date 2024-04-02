import React from "react";
import "./sidebar.css";
import SidebarOption from "./sidebarOption";
import { ReactComponent as CampusIcon } from "./assets/smallest-logo.svg"; //change this later to CampusChatter (still needs to be made) or WSC icon
import HomeIcon from "@material-ui/icons/Home";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav>
    <div className="sidebar">
      <CampusIcon className="sidebar_campusIcon" />
      <SidebarOption Icon={HomeIcon} text="Home" active={true} Link="/"/>
      <SidebarOption Icon={CalendarTodayIcon} text="Events" Link="events"/>
      <SidebarOption
        Icon={NotificationsNoneIcon}
        text="Notifications"
        Link
        to="notifications"
      />
      <SidebarOption
        Icon={MailOutlineIcon}
        text="Messages"
        Link
        to="messages"
      />
      <SidebarOption
        Icon={BookmarkBorderIcon}
        text="Bookmarks"
        Link
        to="bookmarks"
      />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" Link to="profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />
      <Button variant="outlined" className="sidebar_chatter" fullWidth>
        Start Some Chatter
      </Button>
    </div>
    </nav>
  );
}

export default Sidebar;
