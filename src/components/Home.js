import React, { useState, useEffect } from "react";
import Video from "./Video";
import { db } from "../firebase";
import "../header.css";
import "../home.css";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  function hashtag(text) {
    var repl = text.replace(/#(\w+)/g, "#$1");
    return repl;
  }

  return (
    <div className="page-with-header video-feed-container">
      <div className="video-feed-item">
        {videos
          .map(
            (
              {
                comments,
                url,
                likes,
                shares,
                description,
                account,
                audio,
                name
              },
              i
            ) => {
              return (
                <Video
                  className="card-wrapper"
                  key={i}
                  comments={comments}
                  likes={likes}
                  shares={shares}
                  description={hashtag(description)}
                  account={account}
                  audio={audio}
                  url={url}
                  name={name}
                />
              );
            }
          )
          .sort(() => Math.random() - 0.5)}
      </div>
    </div>
  );
};
export default Home;
