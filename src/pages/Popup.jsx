// FungsiPopup.jsx
import React, { useState } from "react";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const Popup = ({ content, handleClose }) => {
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

      .popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(80, 255, 214, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .popup-inner {
        background: rgba(203, 200, 200, 0.468);
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
        padding: 20px;
        border-radius: 15px;
        width: 600px;
        height: 300px;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: relative;
      }

      .custom-btn {
        position: absolute;
        bottom: 25px; /* Mengatur jarak dari bawah */
        right: 25px; /* Mengatur jarak dari kanan */
        background: #ffffff;
        color: #4d96b6;
        border: none;
        border-radius: 20px;
        padding: 5px 10px;
        cursor: pointer;
      }

      button:hover {
        background-color: #21726a;
        color: #ffffff;
      }

      @media (max-width: 600px) {
        .popup-inner {
          width: 90%;
          padding: 15px;
        }

        .custom-btn {
          padding: 8px 16px;
          bottom: 15px; /* Menyesuaikan jarak dari bawah pada layar kecil */
          right: 15px; /* Menyesuaikan jarak dari kanan pada layar kecil */
        }
      }
    `;

    return (
      <div className="popup" style={backgroundStyle}>
        <style>{cssStyle}</style>
        <div className="popup-inner">
          {content}
          <button className="custom-btn" onClick={handleClose}>
            Oke
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      {isOpen && (
        <Popup
          content={
            <>
              <h2>
                Pengajuan penggalangan dana akan segera kami verifikasi dalam
                kurun waktu 1x24 jam.
              </h2>
            </>
          }
          handleClose={() => {
            setIsOpen(false);
            setShowPopupButton(true); // Tampilkan kembali tombol "Buka Popup" setelah menutup popup
          }}
        />
      )}
    </div>
  );
};

export default Popup;
