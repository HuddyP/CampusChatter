import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import ChatterBox from "./ChatterBox";
import { getFeed } from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

   useEffect(() => {
    const asyncFn = async () => {
      setPosts(await getFeed())
    }
    asyncFn();
  }, []);

  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <ChatterBox />
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
