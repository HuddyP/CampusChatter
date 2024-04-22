import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import ChatterBox from "./ChatterBox";
import { getFeed } from "./firebase";

function Feed() {
  //Function to call posts within Firebase database, commented out to retain code but remove functionality due to issues and time constraints
  //If re-enabling Firebase support, change all hardcoded values in Post components to Post.(value name)

  /* const [posts, setPosts] = useState([]);

   useEffect(() => {
    const asyncFn = async () => {
      setPosts(await getFeed())
    }
    asyncFn();
  }, []); */

  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <ChatterBox />
      <Post
        displayName={"HuddyP"}
        username={"itshuddyp"}
        text={
          'Welcome to CampusChatter! The "One Stop Shop" for all your campus event wants and needs!'
        }
        avatar={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfeMl3QISZslqQRMc6iu_jrM90R0nQjVm0IzmjZkBrEw&s"
        }
        image={
          "https://st2.depositphotos.com/1001911/9231/v/950/depositphotos_92315424-stock-illustration-waving-hello-emoticon.jpg"
        }
      />
      <Post
        displayName={"Dr. Marysz Rames"}
        username={"WSCPrez"}
        text={
          "So excited for our students that are going to be graduating in just a few weeks! Can't wait to see what all you do in the world!"
        }
        avatar={"https://www.wsc.edu/images/Directory_Marysz_Rames_2022.jpg"}
        image={
          "https://t4.ftcdn.net/jpg/01/99/95/19/360_F_199951929_ESl4xOIf7mQYe5uqMNsLVexQO2Pxrfgw.jpg"
        }
        verified
      />
      <Post
        displayName={"Bowen Student 214"}
        username={"epicdude14"}
        text={
          "Dude who keeps not flushing the toilets in the second floor bowen bathroom, that is DISGUSTING. We're basically adults, so act like one"
        }
        avatar={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfeMl3QISZslqQRMc6iu_jrM90R0nQjVm0IzmjZkBrEw&s"
        }
        image={"https://media.tenor.com/9inxwE3J3RcAAAAe/angry-thiago-mad.png"}
      />
    </div>
  );
}

export default Feed;
