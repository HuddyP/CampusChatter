import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./navbar.js";
import { ReactComponent as CampusIcon } from "./assets/smallest-logo.svg";
import { ReactComponent as ChatterIcon } from "./assets/chatterlogo.svg";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import "./Widgets.css";
import { Search } from "@material-ui/icons";
// import { Button } from "@material-ui/core";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <CampusIcon className="collegelogo" />

        <NavMenu>
          <NavLink to="/" activeStyle>
            <HomeIcon />
          </NavLink>
          <NavLink to="/events">
            <CalendarTodayIcon />
          </NavLink>
          <NavLink to="/notifications">
            <NotificationsNoneIcon />
          </NavLink>
          <NavLink to="/whispers">
            <MailOutlineIcon />
          </NavLink>
          <NavLink to="/bookmarks">
            <BookmarkBorderIcon />
          </NavLink>
          <NavLink to="/profile">
            <PermIdentityIcon />
          </NavLink>
        </NavMenu>

        {/* Uncomment if Start Some Chatter button wants to be brought back
        
        <Button variant="outlined" className="sidebar_chatter" fullWidth>
          Start Some Chatter
        </Button> */}

        <div className="widgets_input">
          <Search className="widgets_searchIcon" />
          <input placeholder="Search CampusChatter" type="text" />
        </div>

        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>

        <ChatterIcon className="chatterlogo" />
      </Nav>
    </>
  );
};

export default Navbar;
