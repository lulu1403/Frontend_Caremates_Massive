import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbarfirst from '../components/NavbarPanti';
import caremates from '../img/img-navbarpanti/caremates2.png';
import { Link } from 'react-router-dom';

const Homepanti = () => {
  

  React.useEffect(() => {

  }, []);

  return (
    <div style={backgroundStyle}>
      {/* Komponen Navbarpanti */}
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

          /* Tambahkan gaya CSS untuk slideshow dan ikon */
          .home {
            width: 90%;
            margin-top: 0%;
            z-index: 2;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          .container1 {
            height: 100vh;
          }

          .logo-container {
            position: relative;
            max-width: 80%;
            overflow: hidden;
            border-radius: 8px;
          }

          .logo {
            width: 100%;
            height: auto;
            padding-top: 4%;
            opacity: 0;
            transition: opacity 1s ease-in-out;
            max-width: 100%;
            opacity: 1;
          }

          .logo img {
            width: 70%;
            justify-content: left;
            padding-right: 10%;
            padding-top: 50%;
          }

          .icon {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            justify-content: center;
          }

          .button-ajukan {
            background-color: #4D96B6;
            color: #ffffff;
            font-weight: bold;
            padding: 10px 20px;
            border-radius: 20px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-bottom: 1%;
          }

          .button-ajukan:hover {
            background-color: #155d82;
          }

          /* Media Queries */
          @media (max-width: 768px) {
            .home h2 {
              font-size: 18px;
              padding-left: 0;
              padding-top: 10%;
            }
            .button-ajukan {
              font-size: 14px;
              padding: 8px 16px;
            }
          }

          @media (max-width: 576px) {
            .home h2 {
              font-size: 16px;
              padding-top: 15%;
            }
            .button-ajukan {
              font-size: 12px;
              padding: 6px 12px;
            }
          }
        `}
      </style>
      <Navbarfirst />

      {/* halaman */}
      <section className="home" style={{paddingTop:'0%'}}>
        <Container>
          <Row>
            <Col xs={12} md={8} style={{ paddingTop: '20%' }}>
              <div className="icon" style={{ justifyContent: 'center', paddingRight: '3%', color: 'white', fontFamily: 'Open Sans', textAlign: 'left', fontSize: '', fontStyle: 'normal', fontWeight: '0px', lineHeight: 'normal', marginBottom: '0' }}>
                <h2 style={{ paddingLeft: '7%', fontSize:'125%' }}>Selamat Datang! <br />Selamat Bergabung dengan Caremates.<br />
                  Sebelum melakukan penggalangan dana, pastikan<br /> semua data pada profil telah dilengkapi.</h2>
              </div>
            </Col>

            <Col xs={12} md={4}>
              <div className="logo">
                <img src={caremates} alt="logo" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} style={{ paddingTop: '0%' }}>
              <Link to="/pengajuanpenggalangan" className="icon col-md-12 justify-content-center" style={{textDecoration: 'none'}}>
                <div className="button-ajukan" style={{padding:'2%', }}>Ajukan Penggalangan Dana</div>
              </Link>
            </Col>
          </Row>
        </Container>
        
      </section>
    </div>
  );
};

const backgroundStyle = {
  height: '100vh',
  background: 'linear-gradient(45deg, #00cbb7, #0098d9, #00baa7, #0081b8)',
  animation: 'colorChange 12s ease-in-out infinite',
  backgroundSize: '200% 200%',
  backgroundPosition: '0% 50%',
  fontFamily: '"Open Sans", sans-serif',
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
};

export default Homepanti;
