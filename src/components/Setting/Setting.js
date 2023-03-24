import React from "react";
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
            <input type="range" min="0" max="100" />
          </div>
          <div>
            <h4>Зеленый</h4>
            <input type="range" min="0" max="100" />
          </div>
          <div>
            <h4>Голубой</h4>
            <input type="range" min="0" max="100" />
          </div>
          <div>
            <h4>Прозрачный</h4>
            <input type="range" min="0" max="100" />
          </div>

          {/* <Ranges /> */}
        </form>
      </Modal>
    </div>
  );
}

export default Setting;
