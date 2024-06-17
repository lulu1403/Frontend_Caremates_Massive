import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PengajuanpenggalanganStyle = ({ onNavigate }) => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    // Add the no-scroll class to the body element
    document.body.classList.add('no-scroll');

    // Remove the no-scroll class when the component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

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
          body.no-scroll {
            overflow: hidden;
          }
          /* Hide scrollbar for Chrome, Safari and Opera */
          textarea::-webkit-scrollbar {
            display: none;
          }
          /* Hide scrollbar for IE, Edge and Firefox */
          textarea {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}
      </style>
      <section style={{width: '100%'}}>
        <div className="row" style={{paddingTop:'1%'}}>
            <div className="col-1 justify-content-end align-content-center" style={{marginLeft: '20px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" onClick={() => navigate(-1)} style={{cursor: 'pointer'}} fill="none">
                <path d="M12.5 30L27.5 15M12.5 30L27.5 45M12.5 30H47.5" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </div>
        </div>
      </section>
      <section className="home" style={PengajuanpenggalanganStyleStyle}>
        <div className="content">
          <div className="row">
            <p className='m-0' style={{fontSize:'40px', fontWeight:'700'}}>Ajukan Penggalangan Dana</p>
          </div>
          <div className="row pt-4">
            <div className="col-5 justify-content-center align-content-center m-0">
              <p className="m-0" style={{fontSize:'20px'}}>Nominal Dana yang Dibutuhkan</p>
            </div>
            <div className="col-4">
              <input style={{padding:'10px',border:'0', borderColor: 'transparent', outline:'none', borderRadius:'40px', width:'100%' }} type="text" name="nama" id="" placeholder="Tuliskan Nominal" />
            </div>
          </div>
          <div className="row pt-4">
            <p className="m-0" style={{fontSize:'20px'}}>Rencana Alokasi Dana</p>
          </div>
          <div className="row pt-4">
            <div className="col-9" style={{height: '165px'}}>
              <textarea 
                style={{
                  padding: '20px',
                  border: '0',
                  borderColor: 'transparent',
                  outline: 'none',
                  borderRadius: '40px',
                  width: '100%',
                  height: '100%',
                  resize: 'none',  
                  boxSizing: 'border-box',  
                  overflow: 'auto',  
                  whiteSpace: 'pre-wrap',  
                  wordWrap: 'break-word'  
                }} 
                name="nama" 
                id="" 
                placeholder="Deskripsikan Tujuan Dari Penggalangan Dana"
                value={text}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row pt-3 mb-2 justify-content-end" style={{marginTop: 'auto'}}>
          <div className="col-2 " style={{display:'flex', justifyContent:'end'}}>
            <button style={button1Style}>Ajukan</button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Objek gaya untuk latar belakang
const backgroundStyle = {
  height: '100vh', 
  background: 'linear-gradient(45deg, #00cbb7, #0098d9, #00baa7, #0081b8)',
  animation: 'colorChange 12s ease-in-out infinite',
  backgroundSize: '200% 200%',
  backgroundPosition: '0',
  fontFamily: '"Open Sans", sans-serif',
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
};

const PengajuanpenggalanganStyleStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '77%',
  height: '77%',
  margin: 0,
  padding: '2%',
  borderRadius: '20px',
  backgroundColor: '#ffffff6b',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
};

const button1Style = {
  padding: '10px',
  border: 'none',
  borderRadius: '40px',
  backgroundColor: '#4D96B6',
  color: 'white',
  cursor: 'pointer',
  fontSize: '18px',
};

export default PengajuanpenggalanganStyle;
