import React, { useState } from 'react';
import Navbarfirst from '../components/Navbar';
import galeri1 from '../img/img-galeri/galeri1.jpg';
import galeri2 from '../img/img-galeri/galeri2.jpg';
import galeri3 from '../img/img-galeri/galeri3.jpg';
import galeri4 from '../img/img-galeri/galeri4.jpg';
import galeri5 from '../img/img-galeri/galeri5.jpg';
import galeri6 from '../img/img-galeri/galeri6.jpg';
import galeri7 from '../img/img-galeri/galeri7.jpg';
import galeri8 from '../img/img-galeri/galeri8.jpg';

const Galeripanti = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={backgroundStyle}>
      <style>
        {`
          @keyframes colorChange {
            0% { background-position: 0% 50%; }
            25% { background-position: 25% 50%; }
            50% { background-position: 100% 50%; }
            75% { background-position: 75% 50%; }
            100% { background-position: 0% 50%; }
          }

          .search-input {
            font-size: 16px;
            font-family: 'Open Sans';
            color: #333;
            margin-right: 0;
            outline: none;
            border: none;
            background: transparent;
            padding-right: 0;
            font-size: 20px
          }
          .search-input:focus {
            font-size: 20px; /* Ukuran font lebih besar saat fokus */
          }

          .scroll-container {
            overflow-y: auto;
            max-height: 100%;
          }

          /* Hide scrollbar for Chrome, Safari and Opera */
          .scroll-container::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for IE, Edge and Firefox */
          .scroll-container {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}
      </style>

      {/* Komponen Navbar */}
      <Navbarfirst />

      <section className="home" style={GaleripantiStyle}>
        <div className="row">
          <h2 style={{ fontWeight: '700', fontSize: '36px', margin: '0', padding: '3% 2% 1% 2%' }}>Galeri Kami</h2>
        </div>
        <div className="scroll-container">
          <div className="row m-3">
            <div className="col text-center pb-5">
              <img src={galeri1} alt="galeri1" style={imgStyle}/>
            </div>
            <div className="col text-center pb-5">
              <img src={galeri2} alt="galeri2" style={imgStyle}/>
            </div>
            <div className="col text-center pb-5">
              <img src={galeri3} alt="galeri1" style={imgStyle}/>
            </div>
            <div className="col text-center pb-5">
              <img src={galeri4} alt="galeri1" style={imgStyle}/>
            </div>
            <div className="col text-center pb-5">
              <img src={galeri5} alt="galeri1" style={imgStyle}/>
            </div>
            <div className="col text-center pb-5">
              <img src={galeri6} alt="galeri1" style={imgStyle}/>
            </div>
            <div className="col text-center pb-5">
              <img src={galeri7} alt="galeri1" style={imgStyle}/>
            </div>
            <div className="col text-center pb-5">
              <img src={galeri8} alt="galeri1" style={imgStyle}/>
            </div>
            <div className="col text-center pb-5">
              <img src={galeri1} alt="galeri1" style={imgStyle}/>
            </div>
            <div className="col text-center pb-5">
              <img src={galeri2} alt="galeri1" style={imgStyle}/>
            </div>
            <div className="col text-center pb-5">
              <img src={galeri3} alt="galeri1" style={imgStyle}/>
            </div>
            <div className="col text-center pb-5">
              <img src={galeri4} alt="galeri1" style={imgStyle}/>
            </div>
            <div className="col text-center pb-5">
              <img src={galeri5} alt="galeri1" style={imgStyle}/>
            </div>
            <div className="col text-center pb-5">
              <img src={galeri6} alt="galeri1" style={imgStyle}/>
            </div>
            <div className="col text-center pb-5">
              <img src={galeri7} alt="galeri1" style={imgStyle}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Objek gaya untuk latar belakang
const backgroundStyle = {
  height: '100vh', // Memastikan latar belakang menutupi seluruh tinggi viewport
  background: 'linear-gradient(45deg, #00cbb7, #0098d9, #00baa7, #0081b8)',
  animation: 'colorChange 12s ease-in-out infinite',
  backgroundSize: '200% 200%',
  backgroundPosition: '0',
  fontFamily: '"Open Sans", sans-serif',
  margin: 0, // Menghapus margin default dari body
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
};

const GaleripantiStyle = {
  position: 'fixed',
  top: '56%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '88%',
  height: '81%',
  margin: 0,
  borderRadius: '20px',
  zIndex: 2,
  overflow: 'hidden', // Ensure the content is clipped when scrolling
};

const imgStyle = {
  borderRadius: '10px',
  width: '200px',
  height: '200px',
  boxShadow: '1px 1px 15px 1px rgba(0, 0, 0, 0.25)',
};

export default Galeripanti;
