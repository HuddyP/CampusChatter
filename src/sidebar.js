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

function Sidebar() {
  return (
    <div className="sidebar">
      <CampusIcon classname="sidebar_campusIcon" />
      <SidebarOption Icon={HomeIcon} text="Home" active={true} />
      <SidebarOption Icon={CalendarTodayIcon} text="Events" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      <Button variant="outlined" className="sidebar_chatter" fullWidth>
        Start Some Chatter
      </Button>
    </div>
  );
}

export default Sidebar;
