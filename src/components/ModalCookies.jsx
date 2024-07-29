import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ModalCookies.scss';
import a1 from "../assets/images/cloudModal.png";

const ModalCookies = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img src={a1} alt="Cloud" className="mb-3 modal-image" />
          <p>
            We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By clicking “Accept”, you consent to the use of ALL the cookies.
          </p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="outline-secondary" onClick={handleClose}>
            More Info
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Accept
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCookies;