import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

export function GameFinished() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!showModal) {
    return null;
  }

  return (
    <div
      className="modal show "
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Body className="congrats-modal">
          <h1> Congratulations! </h1>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}
