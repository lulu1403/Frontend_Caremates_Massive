// src/LogoutPopup.js
import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

function LogoutPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleLogout = () => {
    alert("Logging out...");
    handleClose();
    
  };

  // Membuka popup saat komponen pertama kali di-render
  useEffect(() => {
    handleShow();
  }, []);

  // Fungsi untuk menampilkan popup
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body style={{ textAlign: "center" }}>
          <i
            className="bi bi-box-arrow-right"
            style={{ fontSize: "5rem", color: "#4D96B6" }}
          ></i>
          <p style={{ color: "#4D96B6", fontSize: "1.5rem" }}>
            Apakah anda yakin <br /> ingin keluar?
          </p>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "center" }}>
          <Button
            variant="info"
            color="#4D96B6"
            onClick={handleClose}
            style={{
              marginRight: "15%",
              color: "#D9D9D9",
              width: "30%",
              fontSize: "1.2rem",
            }}
          >
            Batal
          </Button>
          <Button
            variant="light"
            onClick={handleLogout}
            style={{ width: "30%", color: "#4D96B6", fontSize: "1.2rem" }}
          >
            Ya
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogoutPopup;
