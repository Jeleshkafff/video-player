import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Ranges from "./Color/Color";
import { useState } from "react";
import "./Setting.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import "../../../../public/cat.png";
const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0)",
    textAlign: "center",
  },
  content: {
    top: "16%",
    left: "85%",
    right: "auto",
    bottom: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    color: "rgb(255, 255, 255)",
    textAlign: "center",
    // padding: 10
    // marginRight: "-50%",
    // transform: "translate(-50%, -50%)",
  },
};

// Modal.setAppElement("#yourAppElement");

function Setting(props) {
  const { red, green, blue, nothing, onChange } = props;
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  // const [red, setRed] = React.useState(localStorage.getItem("red"));
  // const [green, setGreen] = React.useState(localStorage.getItem("green"));
  // const [blue, setBlue] = React.useState(localStorage.getItem("blue"));
  // const [nothing, setNothing] = React.useState(localStorage.getItem("nothing"));

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  function selecting() {
    console.log(this.value);
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="Back">
      <button className="control-btn" onClick={openModal}>
        <i className="material-icons">build</i>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <img className="catt" src="/cat.png"></img>
        </div>
        {/* <button onClick={closeModal}>Закрыть</button> */}
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Цвета</h2>
        {/* <div>I am a modal</div> */}
        <form>
          {/* <input /> */}
          <div>
            <h4>Красный</h4>
            <input
              id="myRange"
              type="range"
              min="0"
              max="255"
              value={red}
              step="1"
              onChange={(event) => {
                console.log(` ${event.target.value}`);
                localStorage.setItem("red", event.target.value);
                // setRed(event.target.value);
                onChange({ red: event.target.value });
                // this.setState({ red: event.target.value });
              }}
            />
          </div>
          <div>
            <h4>Зеленый</h4>
            <input
              type="range"
              min="0"
              max="255"
              value={green}
              step="1"
              onChange={(event) => {
                console.log(` ${event.target.value}`);
                localStorage.setItem("green", event.target.value);
                // setGreen(event.target.value);
                onChange({ green: event.target.value });
              }}
            />
          </div>
          <div>
            <h4>Голубой</h4>
            <input
              type="range"
              min="0"
              max="255"
              value={blue}
              step="1"
              onChange={(event) => {
                console.log(` ${event.target.value}`);
                localStorage.setItem("blue", event.target.value);
                // this.value = event.target.value;
                // setBlue(event.target.value);
                onChange({ blue: event.target.value });
              }}
            />
          </div>
          <div>
            <h4>Прозрачный</h4>
            <input
              type="range"
              min="0"
              max="70"
              value={nothing}
              step="1"
              onChange={(event) => {
                console.log(` ${event.target.value}`);
                localStorage.setItem("nothing", event.target.value);
                // setNothing(event.target.value);
                onChange({ nothing: event.target.value });
              }}
            />
          </div>

          <div>
            <Button
              className="rttt"
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              // color="#111"
            >
              Темы
            </Button>
            <Menu
              className="menu"
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              anchorPosition={{ left: 1030, top: 700 }}
            >
              <div className="trtr">
                <div className="menu_div">
                  <h4>Дейтераномалия</h4>
                  <button
                    className="color_preset"
                    onClick={(event) => {
                      handleClose();
                      event.preventDefault();
                      localStorage.setItem("red", 183);
                      localStorage.setItem("green", 124);
                      localStorage.setItem("blue", 99);
                      localStorage.setItem("nothing", 25);
                      onChange({ red: 183 });
                      onChange({ green: 124 });
                      onChange({ blue: 99 });
                      onChange({ nothing: 25 });
                    }}
                  >
                    {"<3"}
                  </button>
                </div>
                <div className="menu_div">
                  <h4>Протаномалия</h4>
                  <button
                    className="color_preset"
                    onClick={(event) => {
                      handleClose();
                      event.preventDefault();
                      localStorage.setItem("red", 146);
                      localStorage.setItem("green", 72);
                      localStorage.setItem("blue", 194);
                      localStorage.setItem("nothing", 25);
                      onChange({ red: 146 });
                      onChange({ green: 72 });
                      onChange({ blue: 194 });
                      onChange({ nothing: 25 });
                    }}
                  >
                    {"<3"}
                  </button>
                </div>
                <div className="menu_div">
                  <h4>Тританопия</h4>
                  <button
                    className="color_preset"
                    onClick={(event) => {
                      handleClose();
                      event.preventDefault();
                      localStorage.setItem("red", 224);
                      localStorage.setItem("green", 110);
                      localStorage.setItem("blue", 102);
                      localStorage.setItem("nothing", 19);
                      onChange({ red: 224 });
                      onChange({ green: 110 });
                      onChange({ blue: 102 });
                      onChange({ nothing: 25 });
                    }}
                  >
                    {"<3"}
                  </button>
                </div>
                {/* <MenuItem onClick={}>Profile</MenuItem> */}
                {/* <MenuItem onClick={}>My account</MenuItem> */}
                {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
              </div>
            </Menu>
          </div>

          {/* <Ranges /> */}
        </form>
      </Modal>
    </div>
  );
}

export default Setting;
