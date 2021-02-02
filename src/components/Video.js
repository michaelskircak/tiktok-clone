import React, { useRef, useState } from "react";
import "../home.css";
import ActionBar from "./ActionBar";
import VideoBar from "./VideoBar";
import VideoLayer from "./VideoLayer";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import { Divider } from "@chakra-ui/react";

function Video({
  url,
  audio,
  description,
  account,
  comments,
  shares,
  likes,
  name
}) {
  const videoStyle = {
    // playsinline: "true"
    // min-width: "100%"
    // min-height: "100%"
    // width: "auto"
    // height: "auto"
  };
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div>
      <VideoBar
        className="video-text"
        account={account}
        name={name}
        description={description}
        audio={audio}
      />

      <div className="card-wrapper">
        <VideoLayer />
        <div class="toggle-play">
          <div class="show-play">
            {playing ? <PauseButton /> : <PlayButton />}
          </div>

          <video
            style={videoStyle}
            ref={videoRef}
            controls={false}
            onClick={onVideoPress}
            src={url + `/#t=0.01`}
            autoPlay={false}
          ></video>

          <ActionBar comments={comments} shares={shares} likes={likes} />
        </div>
      </div>
      <br />
      <Divider />
    </div>
  );
}

export default Video;
