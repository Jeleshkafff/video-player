import React from "react";
import VideoPlayer from "./components/VideoPlayer";
// const path = "./videos/video.mp4";
import path from "./videos/video.mp4";
const App = (props) => {
  console.log(path);
  return (
    <div>
      <VideoPlayer src={path} />
    </div>
  );
};

export default App;
