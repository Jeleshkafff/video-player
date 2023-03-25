import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Ranges from "./Color/Color";
import { useState } from "react";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0)",
  },
  content: {
    top: "38%",
    left: "85%",
    right: "auto",
    bottom: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    color: "rgb(255, 255, 255)",
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

  return (
    <div className="Back">
      <button onClick={openModal}>
        <i className="material-icons">build</i>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>Закрыть</button>
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
              max="100"
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

          {/* <Ranges /> */}
        </form>
      </Modal>
    </div>
  );
}

export default Setting;
