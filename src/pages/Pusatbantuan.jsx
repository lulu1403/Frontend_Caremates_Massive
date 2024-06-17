import React, { useState } from 'react';
import styled from '@emotion/styled';
import Navbarfirst from '../components/Navbar';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import pusatbantuanService from '../api/pusatbantuanservice';

const Pusatbantuan = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async () => {
    if (!text) {
      setError('Pertanyaan tidak boleh kosong');
      setSuccess('');
      return;
    }

    try {
      await pusatbantuanService.createPusatbantuan(text, '');
      setSuccess('Pertanyaan berhasil diajukan');
      setError('');
      setText('');
    } catch (err) {
      setError(err.message);
      setSuccess('');
    }
  };

  const StyledAccordion = styled(Accordion)`
    overflow-y: auto;
    max-height: 45vh;
    border-radius: 25px;

    /* Hide scrollbar for Chrome, Safari, and Opera */
    &::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge, and Firefox */
    & {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }

    .accordion-item {
      margin-bottom: 10px;
      background: rgba(255, 255, 255, 0.30);
      border-radius: 28px;
      border: 1px solid #828282;
    }

    .accordion-header {
      border-radius: 28px;
      background-color: transparent;
      color: white; /* Change text color to white */
    }

    .accordion-button {
      border-radius: 28px;
      background-color: transparent;
      color: white; /* Change text color to white */
      transition: background-color 0.3s, color 0.3s;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 28px;
      }

      &:not(.collapsed) {
        background-color: rgba(0, 0, 0, 0.1);
        color: white; /* Change text color to white */
        border-radius: 28px;
      }
    }

    .accordion-body {
      color: white; /* Change text color to white */
    }
  `;

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
            font-size: 20px;
          }
          .search-input:focus {
            font-size: 20px; /* Ukuran font lebih besar saat fokus */
          }
        `}
      </style>

      <Navbarfirst />

      <section className="home pt-5 mb-0" style={pusatbantuanStyle}>
        <div className="row justify-content-center text-center">
          <div className="col justify-content-center">
            <div
              className="container1"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                margin: '0',
                padding: '0',
                background: 'rgba(255, 255, 255, 0.40)',
                borderRadius: '21px',
                border: '1px solid #828282',
                boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.25)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <input
                type="text"
                className="search-input"
                style={{
                  width: '90%',
                  height: '90%',
                  margin: '30px 30px 30px 0px',
                  fontWeight: '30px'
                }}
                value={text}
                onChange={handleChange}
                placeholder="Ajukan Pertanyaan"
              />
            </div>
          </div>
          <div className="col-2 d-flex align-items-center">
            <Button variant="secondary" className="w-100 h-100" style={{fontSize: '16px', padding:'0'}} onClick={handleSubmit}>
              Ajukan
            </Button>
          </div>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <div className="row pt-4">
          <h2 style={{fontWeight: '700', fontSize: '36px'}}>Pertanyaan Teratas</h2>
        </div>
        <StyledAccordion defaultActiveKey="null">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Apa itu Caremates</Accordion.Header>
            <Accordion.Body>
              Caremates adalah platform yang berdedikasi untuk memfasilitasi kesejahteraan sosial dengan menghubungkan para dermawan dengan lembaga seperti panti asuhan yang membutuhkan dukungan.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Bagaimana alur dana hingga sampai ke lembaga?</Accordion.Header>
            <Accordion.Body>
              Dana yang masuk akan langsung ditujukan kepada lembaga terkait, tanpa adanya penampungan dari pihak Caremates. Hal ini untuk menghindari adanya kecurangan atau hal semacamnya, dan untuk mempercepat proses pencairan dana.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Bagaimana cara mendaftarkan lembaga saya?</Accordion.Header>
            <Accordion.Body>
              Untuk mendaftarkan lembaga, klik Daftarkan Lembaga Anda yang berada pada halaman Beranda kami. Selanjutnya anda akan diarahkan untuk mengisi formulir yang sudah disediakan. Ikuti setiap proses dan anda akan berhasil membuat akun lembaga.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Apa saja metode pembayaran untuk berdonasi?</Accordion.Header>
            <Accordion.Body>
              Anda bisa melakukan donasi dengan M-Banking BCA, Mandiri, BRI, serta E-Wallet seperti Shopee Pay, Dana, dan Go Pay.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Apakah wajib membuat akun untuk bisa berdonasi?</Accordion.Header>
            <Accordion.Body>
              Jika anda donatur, anda bisa langsung berdonasi tanpa membuat akun. Hanya pemilik lembaga yang wajib membuat akun.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Apa ada batas minimal untuk berdonasi?</Accordion.Header>
            <Accordion.Body>
              Anda bisa berdonasi mulai dari Rp.10.000.
            </Accordion.Body>
          </Accordion.Item>
        </StyledAccordion>
      </section>
    </div>
  );
};

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

const pusatbantuanStyle = {
  padding: '30px',
  position: 'fixed',
  top: '60%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '88%',
  height: '85%',
  margin: 0,
  borderRadius: '20px',
  zIndex: 2,
};

export default Pusatbantuan;
