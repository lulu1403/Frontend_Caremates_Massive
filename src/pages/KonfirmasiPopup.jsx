import React, { useState, useEffect } from "react";

const Konfirmasi = () => {
  const [isKonfirmasiPopupOpen, setIsKonfirmasiPopupOpen] = useState(true);

  return (
    <>
      {isKonfirmasiPopupOpen && (
        <KonfirmasiPopup
          topText="Akun Anda Akan Segera Kami Verifikasi dalam 1x24 jam, Terimakasih"
          bottomText="Periksa secara berkala e-mail anda untuk mendapatkan tautan login setelah akun terverifikasi"
          handleClose={() => {
            setIsKonfirmasiPopupOpen(false);
            setShowKonfirmasiPopupButton(true); // Tampilkan kembali tombol "Buka Konfirmasi Popup" setelah menutup popup
          }}
        />
      )}
    </>
  );
};

const KonfirmasiPopup = ({ topText, bottomText, handleClose }) => {
  const [backgroundStyle, setBackgroundStyle] = useState({});
  const [cssStyle, setCssStyle] = useState("");

  useEffect(() => {
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
      .konfirmasi-popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(12, 66, 54, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .konfirmasi-popup-inner {
        background: rgba(203, 200, 200, 0.468);
        padding: 20px;
        border-radius: 15px;
        width: 600px;
        height: 300px;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
        text-align: center;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .checkmark-wrapper {
        margin: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .checkmark {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        background-color: rgb(255, 255, 255);
        animation: checkmark-animation 0.8s ease-in-out;
      }

      .checkmark::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        width: 18px; /* Adjusted to fit better in the circle */
        height: 30px; /* Adjusted to fit better in the circle */
        border: solid rgba(80, 255, 214, 0.5);
        border-width: 0 4px 4px 0;
        transform: translate(-50%, -50%) rotate(45deg); /* Center the checkmark and rotate */
      }

      @keyframes checkmark-animation {
        0% {
          width: 0;
          height: 0;
          opacity: 0;
        }
        50% {
          width: 80px;
          height: 80px;
          opacity: 0.5;
        }
        100% {
          width: 80px;
          height: 80px;
          opacity: 1;
        }
      }

      .konfirmasi-popup-inner .close-btn {
        position: absolute;
        bottom: 10px; /* Mengatur jarak dari bawah */
        right: 25px; /* Mengatur jarak dari kanan */
        background: #ffffff;
        color: #4d96b6;
        border: none;
        border-radius: 20px;
        padding: 5px 10px;
        cursor: pointer;
      }

      .konfirmasi-popup-inner p.bottom-text {
        margin-top: 10px; /* Atur margin atas sesuai kebutuhan */
      }

      .konfirmasi-popup-inner .close-btn:hover {
        background-color: #21726a;
        color: #ffffff;
      }

      button:hover {
        background-color: #21726a;
        color: #ffffff;
      }

      @media (max-width: 600px) {
        .konfirmasi-popup-inner {
          width: 90%;
          padding: 15px;
        }

        .checkmark {
          width: 60px;
          height: 60px;
        }

        .checkmark::after {
          width: 14px;
          height: 24px;
        }

        .konfirmasi-popup-inner .close-btn {
          padding: 8px 16px;
          bottom: 15px; /* Menyesuaikan jarak dari bawah pada layar kecil */
          right: 15px; /* Menyesuaikan jarak dari kanan pada layar kecil */
        }
      }
    `;

    setBackgroundStyle(backgroundStyle);
    setCssStyle(cssStyle);
  }, []);

  return (
    <div className="konfirmasi-popup" style={backgroundStyle}>
      <style>{cssStyle}</style>
      <div className="konfirmasi-popup-inner">
        <h2>{topText}</h2>
        <div className="checkmark-wrapper">
          <div className="checkmark"></div>
        </div>
        <p className="bottom-text">{bottomText}</p>
        <button className="close-btn" onClick={handleClose}>
          Tutup
        </button>
      </div>
    </div>
  );
};

export default Konfirmasi;
