import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Ranges from "./Color/Color";

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
let style = {
  width: "10px",
  height: "10px",
  backgroundColor: `rgba(${localStorage.getItem("red")}, ${localStorage.getItem(
    "green"
  )}, ${localStorage.getItem("blue")}, ${localStorage.getItem("nothing")})`,
};

// Modal.setAppElement("#yourAppElement");

function Setting() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

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
            <div style={style}></div>
            <h4>Красный</h4>
            <input
              id="myRange"
              type="range"
              min="0"
              max="255"
              value={localStorage.getItem("red")}
              step="1"
              onChange={(event) => {
                console.log(` ${event.target.value}`);
                localStorage.setItem("red", event.target.value);
              }}
            />
          </div>
          <div>
            <h4>Зеленый</h4>
            <input
              type="range"
              min="0"
              max="255"
              value={localStorage.getItem("green")}
              step="1"
              onChange={(event) => {
                console.log(` ${event.target.value}`);
                localStorage.setItem("green", event.target.value);
              }}
            />
          </div>
          <div>
            <h4>Голубой</h4>
            <input
              type="range"
              min="0"
              max="255"
              value={localStorage.getItem("blue")}
              step="1"
              onChange={(event) => {
                console.log(` ${event.target.value}`);
                localStorage.setItem("blue", event.target.value);
                // this.value = event.target.value;
              }}
            />
          </div>
          <div>
            <h4>Прозрачный</h4>
            <input
              type="range"
              min="0"
              max="100"
              value={localStorage.getItem("nothing")}
              step="1"
              onChange={(event) => {
                console.log(` ${event.target.value}`);
                localStorage.setItem("nothing", event.target.value);
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
