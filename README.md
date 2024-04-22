# CampusChatter

### By Hudson Pfenning

<b>Table of Contents</b>

- [Summary](#summary)
- [How It Works](#how-it-works)
  - [Home Page](#home-page)
  - [Chatter Feed](#chatter-feed)
  - [Calendar Page](#calendar-page)
  - [Other Pages](#other-pages)
- [Tools Used](#tools-used)
- [Maintainers](#maintainers)

## Summary

A React, HTML, CSS and JavaScript project that was written as my Individual Project for my Seminar class
in the spring of 2024. This website is a concept website for a company called CampusChatter, which is a social
media platform that works to "unify" the

## How It Works

This website can be run on your local machine by running the command 'npm start' in a terminal, or it can be visited on
the [Vercel hosted website](https://campus-chatter-p4ac.vercel.app).

<b>IF RUNNING ON LOCAL MACHINE, MAKE SURE TO ADD '--legacy-peer-deps' WHEN DOWNLOADING DEPENDENCIES. THEY WILL NOT
DOWNLOAD WITHOUT IT</b>

### Home Page

The main page of the website, containing the navbar on the top, with router links to the home page, calendar page
and other pages (other pages do not contain content as of this build). Also contains widgets along the left and right
side of the feed which have hardcoded campus events on the left, and suggested profiles to "follow" on the right.

In the center of the screen, there is a feed where the posts can be found

### Chatter Feed

A feed where posts that are created by users can be found. Initially planned to include Firebase functionality, but had to remove
at the last minute due to technical issues and time constraints.

Original plan with Firebase functionality was to have posts be stored within the Firebase database, and the feed calls each post
(along with the information associated with it), format the posts into boxes and display them into the feed. Most of this functionality
still works, but the posts that are "generated" are hard-coded example posts rather than ones that were made and stored within the Firebase
database.

### Calendar Page

The "secondary" page of the website, containing a React calendar. Initially planned on adding functionality to show events on certain days,
along with tags for those events for a hypothetical tag and filter system, but was unable to implement in this build.

## Other Pages

Links to other pages can be found within the navbar, including a notifications page, a whispers page, a bookmarks page and a profile page.

All the routing for these pages works, but there is no "unique" content contained within them, so the pages only render the site-wide elements
such as the navbar and the widgets

## Tools Used

- React Framework
  - React was the foundational framework that I used for this project, and all the other libraries that were used are also offshoots of React
- Libraries
  - Material UI (or MUI)
    \*An astronomically important library for the frontend visual design of the website, offering great icons and other UI based components
  - React Router
    - Probably one of the most essential libraries for getting this project working, adding routing and other navigational abilities to the site
  - Firebase
    - Used to create the feed for the posts (Chatters). Not functional in this build of the prototype, but the code still remains for possible reimplementation in the future

## Maintainers

[@huddyp](https://github.com/HuddyP) Hudson Pfenning
