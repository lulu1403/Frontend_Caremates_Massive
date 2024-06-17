import React, { useState, useEffect } from "react";

const Verifikasi = () => {
  const [isVerifikasiOpen, setIsVerifikasiOpen] = useState(true);

  const handleConfirm = () => {
    console.log("Aksi dikonfirmasi");
    setIsVerifikasiOpen(false);
    // Logika untuk menangani konfirmasi
  };

  const handleCancel = () => {
    console.log("Aksi dibatalkan");
    setIsVerifikasiOpen(false);
    // Logika untuk menangani pembatalan
  };

  const backgroundStyle = {
    height: "100vh",
    background: "linear-gradient(45deg, #00cbb7, #0098d9, #00baa7, #0081b8)",
    animation: "colorChange 12s ease-in-out infinite",
    backgroundSize: "200% 200%",
    backgroundPosition: "0% 50%",
    fontFamily: '"Open Sans", sans-serif',
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  };

  const cssStyle = `
    @keyframes colorChange {
      0% { background-position: 0% 50%; }
      25% { background-position: 25% 50%; }
      50% { background-position: 100% 50%; }
      75% { background-position: 75% 50%; }
      100% { background-position: 0% 50%; }
    }

    .verifikasi-popup {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .verifikasi-popup-inner {
      background-color: #fff;
      padding: 20px;
      border-radius: 15px;
      background: #ffcc15;
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
      text-align: center;
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 600px;
      height: 300px;
    }

    .verifikasi-popup-inner h2 {
      color: black;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .verifikasi-popup-inner .buttons {
      display: flex;
      justify-content: center;
      position: absolute;
      bottom: 30px;
    }

    .verifikasi-popup-inner .buttons button {
      margin: 0 50px;
      padding: 10px 20px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }

    .verifikasi-popup-inner .buttons button:first-child {
      background-color: #ffffff;
      color: #ffcc15;
    }

    .verifikasi-popup-inner .buttons button:last-child {
      background-color: #ffffff;
      color: #ffcc15;
    }

    .verifikasi-popup-inner .buttons button:hover {
      background-color: #ffcc15;
      color: #ffffff;
      border: 2px solid #fff;
    }

    @media (max-width: 600px) {
      .verifikasi-popup-inner {
        width: 90%;
        padding: 15px;
      }

      .verifikasi-popup-inner h2 {
        font-size: 1.2em;
        margin-bottom: 15px;
      }

      .verifikasi-popup-inner .buttons {
        gap: 50px;
      }

      .verifikasi-popup-inner .buttons button {
        margin: 0 5px;
        padding: 8px 15px;
        font-size: 0.9em;
      }
    }
  `;

  return (
    <>
      <style>{cssStyle}</style>
      {isVerifikasiOpen && (
        <div className="verifikasi-popup" style={backgroundStyle}>
          <div className="verifikasi-popup-inner">
            <h2>Apakah anda yakin akan menghentikan penggalangan?</h2>
            <div className="buttons">
              <button onClick={handleConfirm}>Ya</button>
              <button onClick={handleCancel}>Tidak</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Verifikasi;
