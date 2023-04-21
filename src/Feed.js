import React ,{ useState } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);  
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed_header">
        <h2>Home</h2>
      </div>

      {/* TweetBox*/}
      <TweetBox />

      {/* Post */}
      <Post
        displayName="Siddharth Patil "
        username="siddharth_2333"
        verified={true}
        text="I challage you to build a Twitter clone with React.js"
        image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
        avatar="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
      />

      {/* Post */}
      <Post
        displayName="Siddharth Patil "
        username="siddharth_2333"
        verified={true}
        text="I challage you to build a Twitter clone with React.js"
        image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
        avatar="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
      />
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </div>
  );
}

export default Feed;
