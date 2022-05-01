import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

export const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
      setModalIsOpen(false)
  }
  return (
    <div className="card">
      <h3>{props.text}</h3>
      <div className="actions">
        <span>Test</span>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClick = {closeModalHandler} />}
    </div>
  );
};
