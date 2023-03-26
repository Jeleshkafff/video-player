import React from "react";
import VideoPlayer from "./components/VideoPlayer";
// const path = "./videos/video.mp4";
import path from "./videos/video.mp4";
import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
const App = (props) => {
  console.log(path);
  return (
    <StyledEngineProvider injectFirst>
      <div>
        {/* <div className="color"></div> */}

        <VideoPlayer src={path} />
      </div>
    </StyledEngineProvider>
  );
};

export default App;
