import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "./firebase";
import "./ChatterBox.css";

function ChatterBox() {
  const [ChatterMessage, setChatterMessage] = useState("");
  const [ChatterImage, setChatterImage] = useState("");

  const sendChatter = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      username: "HuddyP__",
      displayName: 'Hudson "HuddyP" Pfenning',
      avatar: " ",
      verified: true,
      text: ChatterMessage,
      image: ChatterImage,
    });

    setChatterMessage("");
    setChatterImage("");
  };

  return (
    <div className="ChatterBox">
      <form>
        <div className="ChatterBox_input">
          <Avatar src=" " />
          <input
            value={ChatterMessage}
            onChange={(e) => setChatterMessage(e.target.value)}
            placeholder="What's the Chatter?"
            type="text"
          />
        </div>
        <input
          placeholder="Optional: Enter Image URL"
          value={ChatterImage}
          onChange={(e) => setChatterImage(e.target.value)}
          type="text"
          className="ChatterBox_imageInput"
        />
        <Button
          onClick={sendChatter}
          type="submit"
          className="ChatterBox_button"
        >
          Start Some Chatter
        </Button>
      </form>
    </div>
  );
}

export default ChatterBox;
