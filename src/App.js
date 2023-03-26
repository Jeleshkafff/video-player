import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import FilmPage from "./components/FilmPage";
import path from "./videos/video.mp4";
import "./App.css";
import { Router, Routes,Route } from 'react-router-dom';
const App = (props) => {
  console.log(path);
  return (
    <div>
      <Routes>
        <Route path="/" element={<FilmPage/>} /> 
        <Route path="/video" element={<VideoPlayer src={path} />} /> 
      </Routes>
    </div>
  );
};

export default App;
