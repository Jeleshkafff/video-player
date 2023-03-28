import React from "react";
import VideoPlayer from "./components/VideoPlayer";
// const path = "./videos/video.mp4";
import path from "./videos/video.mp4";
import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { Router, Routes,Route } from 'react-router-dom';
import FilmPage from "./components/FilmPage"

const App = (props) => {
  console.log(path);
  return (
    <StyledEngineProvider injectFirst>
      <div>
        <Routes>
          <Route path="/" element={<FilmPage/>} /> 
          <Route path="/video" element={<VideoPlayer src={path} />} /> 
        </Routes>
      </div>
    </StyledEngineProvider>
  );
};

export default App;
