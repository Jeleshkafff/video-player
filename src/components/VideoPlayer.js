import React, { Component } from "react";
import "./VideoPlayer.css";
// import { Button, Header, Icon, Modal } from "semantic-ui-react";
import Setting from "./Setting/Setting";
// import { useState } from "react";

// let style = {
//   position: "absolute",
//   width: "1600px",
//   height: "800px",
//   // padding: "1000px",
//   backgroundColor: `rgba(${localStorage.getItem("red")}, ${localStorage.getItem(
//     "green"
//   )}, ${localStorage.getItem("blue")}, ${localStorage.getItem("nothing")}%)`,
// };

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.videoPlayer = React.createRef();
    this.videoRef = React.createRef();
    this.progressBar = React.createRef();
    this.progress = React.createRef();
    this.volumeProgress = React.createRef();
  }

  state = {
    currentTimeInSeconds: 0,
    completeDurationInSeconds: 0,
    currentDuration: { hours: "00", minutes: "00", seconds: "00" },
    completeDuration: { hours: "00", minutes: "00", seconds: "00" },
    isPlaying: false,
    progressPercentage: 0,
    isVolumeOn: true,
    volumeValue: 1,
    volumePercentage: 100,
    isShowingControls: true,
    red: localStorage.getItem("red"),
    green: localStorage.getItem("green"),
    blue: localStorage.getItem("blue"),
    nothing: localStorage.getItem("nothing"),
  };

  componentDidMount() {
    console.log(this.videoRef);
  }

  updateCompleteDuration = () => {
    let tempDur = this.videoRef.current.duration;
    this.setState({
      completeDurationInSeconds: tempDur,
      completeDuration: calculateDuration(tempDur),
    });
  };

  updateCurrentDuration = () => {
    let tempCurrentTime = this.videoRef.current.currentTime;
    let tempDur = this.state.completeDurationInSeconds;
    this.setState({
      currentTimeInSeconds: tempCurrentTime,
      currentDuration: calculateDuration(tempCurrentTime),
      progressPercentage: getPercentage(
        tempCurrentTime.toFixed(2),
        tempDur.toFixed(2)
      ),
    });
  };

  updateEnded = () => {
    this.setState({ isPlaying: false, isShowingControls: true });
    this.videoRef.current.currentTime = 0;
  };

  handlePlay = () => {
    this.videoRef.current.play();
    this.setState({ isPlaying: true });
  };

  handlePause = () => {
    this.videoRef.current.pause();
    this.setState({ isPlaying: false });
  };

  handleProgress = (e) => {
    let tempProgressPosition = e.pageX - this.videoPlayer.current.offsetLeft;
    let tempProgressPercentage =
      (tempProgressPosition / this.videoPlayer.current.clientWidth) * 100;
    this.setState({
      progressPercentage: tempProgressPercentage,
    });
    this.videoRef.current.currentTime =
      (tempProgressPosition * this.state.completeDurationInSeconds) /
      this.progressBar.current.clientWidth;
  };

  toggleVolume = () => {
    this.setState({ isVolumeOn: !this.state.isVolumeOn });
    this.videoRef.current.volume = this.videoRef.current.volume
      ? 0
      : this.state.volumeValue;
  };

  updateVolume = () => {
    this.setState({
      volumePercentage: this.videoRef.current.volume * 100,
    });
  };

  setVolume = (e) => {
    let tempVolumePosition =
      e.pageX -
      this.videoPlayer.current.offsetLeft -
      this.volumeProgress.current.offsetLeft;
    let tempVolumeValue =
      tempVolumePosition / this.volumeProgress.current.clientWidth;

    this.videoRef.current.volume = tempVolumeValue;

    this.setState({
      volumeValue: tempVolumeValue,
      isVolumeOn: true,
    });
  };

  updateShowControls = () => {
    this.setState({ isShowingControls: true });
  };
  updateHideControls = () => {
    // const [red, setRed] = React.useState(localStorage.getItem("red"));
    if (!this.videoRef.current.paused && !this.videoRef.current.ended) {
      this.setState({ isShowingControls: false });
    }
  };

  render() {
    let style = {
      position: "absolute",
      width: "1600px",
      height: "800px",

      // padding: "1000px",
      backgroundColor: `rgba(${this.state.red}, ${this.state.green}, ${this.state.blue}, ${this.state.nothing}%)`,
    };
    console.log(this.RedStste);
    let progressStyle = {
      width: this.state.progressPercentage + "%",
    };
    let volumeProgressStyle = {
      width: this.state.volumePercentage + "%",
    };
    return (
      <div className="test">
        <div style={style}></div>
        <div
          className={`videoPlayer ${
            this.state.isShowingControls ? "show-controls" : "hide-controls"
          }`}
          ref={this.videoPlayer}
          onMouseEnter={this.updateShowControls}
          onMouseLeave={this.updateHideControls}
        >
          <video
            src={this.props.src}
            ref={this.videoRef}
            onTimeUpdate={this.updateCurrentDuration}
            onLoadedData={this.updateCompleteDuration}
            onEnded={this.updateEnded}
            onVolumeChange={this.updateVolume}
          />
          <div className="video-info">
            <div
              className="progress-bar"
              ref={this.progressBar}
              onClick={(e) => this.handleProgress(e)}
            >
              <span
                className="progress"
                style={progressStyle}
                ref={this.progress}
              />
            </div>
            <div className="video-controls">
              <div className="volume-controls">
                <button className="control-btn" onClick={this.toggleVolume}>
                  {this.state.isVolumeOn ? (
                    <i className="material-icons">volume_up</i>
                  ) : (
                    <i className="material-icons">volume_off</i>
                  )}
                </button>
                <div
                  className="volume-progressbar"
                  ref={this.volumeProgress}
                  onClick={(e) => this.setVolume(e)}
                >
                  <span
                    className="volume-progress"
                    style={volumeProgressStyle}
                  />
                </div>
              </div>

              <div className="controls">
                {this.state.isPlaying ? (
                  <button className="control-btn" onClick={this.handlePause}>
                    <i className="material-icons">pause_circle_outline</i>
                  </button>
                ) : (
                  <button className="control-btn" onClick={this.handlePlay}>
                    <i className="material-icons">play_circle_outline</i>
                  </button>
                )}
              </div>

              <div className="time-control">
                <div className="start-time time">
                  {this.state.currentDuration.hours}:
                  {this.state.currentDuration.minutes}:
                  {this.state.currentDuration.seconds}
                </div>

                <div className="end-time time">
                  {this.state.completeDuration.hours}:
                  {this.state.completeDuration.minutes}:
                  {this.state.completeDuration.seconds}
                </div>
                <div>
                  <Setting
                    red={this.state.red}
                    green={this.state.green}
                    blue={this.state.blue}
                    nothing={this.state.nothing}
                    onChange={this.setState.bind(this)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;

/**
 *  function that takes in the complete duration and returns the duration in format {hours:00,minutes:00,seconds:00}
 */
const calculateDuration = function (duration) {
  let seconds = parseInt(duration % 60);
  let minutes = parseInt((duration % 3600) / 60);
  let hours = parseInt(duration / 3600);

  return {
    hours: pad(hours),
    minutes: pad(minutes.toFixed()),
    seconds: pad(seconds.toFixed()),
  };
};

/* used to prepend the single digit value with a Leading 0 and returns in string format*/
const pad = function (number) {
  if (number > -10 && number < 10) {
    return "0" + number;
  } else {
    return number.toString();
  }
};

/**
 * presentTime - currentTime of the vide
 * totalTime - complete Time of the video
 *
 * basic percentage formula which is rounded
 */
const getPercentage = function (presentTime, totalTime) {
  let calcPercentage = (presentTime / totalTime) * 100;
  return Math.round(calcPercentage);
};
