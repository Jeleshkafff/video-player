import React from "react";
import VideoPlayer from "./components/VideoPlayer";
// const path = "./videos/video.mp4";
import path from "./videos/video.mp4";
import "./App.css";
const App = (props) => {
  console.log(path);
  return (
    <div>
      {/* <div className="color"></div> */}
      <VideoPlayer src={path} />
    </div>
  );
};

export default App;
