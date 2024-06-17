import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button, Modal, Col, Row  } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { BsFillPersonFill } from "react-icons/bs";
import Navbarfirst from '../components/NavbarPanti';


const Sudahpenggalangan = () => {
  // Fungsi untuk menampilkan slide secara otomatis
  
  const donationCollected = 1000000; // Variabel untuk donasi terkumpul
  const donationNeeded = 25000000; // Variabel untuk donasi dibutuhkan

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

        }
          .home {
            width: 90%;
            margin-top: 0%;
            z-index: 2;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
        
          .button-merah {
            background-color: #FF1515;
            color: #ffffff;
            font-weight: bold;
            padding: 10px 20px;
            border-radius: 20px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-bottom: 1%;
          }
          .button {
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

          .button:hover {
            background-color: #155d82;
          }
          .button-merah:hover {
            background-color: gray;
          }
        `}
      </style>

      {/* navbar panti */}
      <Navbarfirst/>
      {/* Bagian donasi */}
      <section className="home">
        <div className="container1 justify-content-center" style={{ display: 'flex', paddingTop: '12%'}}>
            <div style={{paddingTop:'12%', textAlign: 'center'}}>
                <h6 style={{fontWeight: 'bold'}}>Selamat Datang!</h6>
                <p style={{fontWeight: '300',fontSize:'90%'}}>Berikut rincian penggalangan dana yang sudah diajukan untuk Pengembangan <br/> fasilitas hafiz Qur’an 
                    Yayasan Yatim Piatu Roudlotul Jannah. </p>
            </div>
            <div className="background-kuning" style={backgroundkuningStyle}>
            <div className="progres-bar" style={{width:'100%', padding: '20px'}}>
            <ProgressBar now={donationCollected / donationNeeded * 100}/> <br/>
            <Row className="justify-content-between">
                      <Col style={bglist}><span style={{ fontWeight: 'bold', color:'black' }}>Donasi Terkumpul: Rp. {donationCollected} </span></Col>
                      <Col className='text-end' style={bglist} ><span style={{color:'black' }}>Donasi Dibutuhkan: Rp. {donationNeeded} </span></Col>
                    </Row>
            </div>
            <div className="d-flex flex-row-reverse" style={{ width: '100%', paddingTop:'0%'}}>
            <Button className='button-merah' variant="">Hentikan Penggalangan Dana</Button>
            <Button className='button' variant=""style={{ marginRight: '20px' }}>Ajukan Pencairan Dana</Button>
            </div>
            <div className="row">
                <div className='col-6'>
                  <p style={{textAlign:'center', fontFamily: 'Open Sans', fontWeight: '300', fontSize:'20px'}}>Detail Pemasukan</p>
                  <hr style={{border:'4px solid', color:'#4D96B6',borderRadius: '30px'}}/>
                  <div className='row' style={{background:"rgba(255, 255, 255, 0.25)", borderRadius:"50px", height:'18%'}}>
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <BsFillPersonFill style={{ width: "35px", height: "40px" }} />
                    </Col>
                    <Col>
                      <p style={{marginTop:'2%', fontSize:'90%'}}>Kawan caremates berdonasi Rp.5000<br/><span style={{fontSize:'60%'}}>5 jam yang lalu</span></p> 
                    </Col>
                  </Row>
                  </div>
                  <div className='row' style={{background:"rgba(255, 255, 255, 0.25)", borderRadius:"50px", marginTop:'2%', height:'18%'}}>
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <BsFillPersonFill style={{ width: "35px", height: "40px" }} />
                    </Col>
                    <Col>
                      <p style={{marginTop:'2%', fontSize:'90%'}}>Kawan caremates berdonasi Rp.5000<br/><span style={{fontSize:'60%'}}>5 jam yang lalu</span></p> 
                    </Col>
                  </Row>
                  </div>
                  <div className='row' style={{background:"rgba(255, 255, 255, 0.25)", borderRadius:"50px", marginTop:'2%', height:'18%'}}>
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <BsFillPersonFill style={{width: "35px", height: "40px"  }} />
                    </Col>
                    <Col>
                      <p style={{marginTop:'2%', fontSize:'90%'}}>Kawan caremates berdonasi Rp.5000<br/><span style={{fontSize:'60%'}}>5 jam yang lalu</span></p> 
                    </Col>
                  </Row>
                  </div>
                </div>
                <div className='col-6'>
                  <p style={{textAlign:'center', fontFamily: 'Open Sans', fontWeight: '300', fontSize:'20px'}}>Detail Pengeluaran</p>
                  <hr style={{border:'4px solid', color:'white',borderRadius: '30px'}}/>
                  <div className='row' style={{background:"rgba(255, 255, 255, 0.25)", borderRadius:"30px", height:'32%'}}>
                  <Row className="align-items-center">
                    <Col>
                      <p style={{marginTop:'2%', fontSize:'80%'}}>Pencairan Dana II</p> 
                    </Col>
                    <Col  className="text-end">
                      <p style={{marginTop:'2%', fontSize:'80%'}}>Rp.40.000</p> 
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col>
                      <p style={{marginTop:'0%', fontSize:'80%'}}>Alokasi  Dana</p> 
                    </Col>
                    <Col  className="text-end">
                      <p style={{marginTop:'0%', fontSize:'80%'}}>Meja Mengaji</p> 
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col>
                      <p style={{marginTop:'0%', fontSize:'80%'}}>Waktu Pencairan Dana</p> 
                    </Col>
                    <Col  className="text-end">
                      <p style={{marginTop:'0%', fontSize:'80%'}}>24 Mei 2024</p> 
                    </Col>
                  </Row>
                  </div>                   
                  <div className='row' style={{background:"rgba(255, 255, 255, 0.25)", borderRadius:"30px", marginTop:'1%', height:'32%'}}>
                  <Row className="align-items-center">
                    <Col>
                      <p style={{marginTop:'1%', fontSize:'80%'}}>Pencairan Dana II</p> 
                    </Col>
                    <Col  className="text-end">
                      <p style={{marginTop:'1%', fontSize:'80%'}}>Rp.40.000</p> 
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col>
                      <p style={{marginTop:'1%', fontSize:'80%'}}>Alokasi  Dana</p> 
                    </Col>
                    <Col  className="text-end">
                      <p style={{marginTop:'1%', fontSize:'80%'}}>Meja Mengaji</p> 
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col>
                      <p style={{marginTop:'1%', fontSize:'80%'}}>Waktu Pencairan Dana</p> 
                    </Col>
                    <Col  className="text-end">
                      <p style={{marginTop:'1%', fontSize:'80%'}}>24 Mei 2024</p> 
                    </Col>
                  </Row>
                  </div>                   
                </div>
                
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
  backgroundPosition: '0% 50%',
  fontFamily: '"Open Sans", sans-serif',
  margin: 0, // Menghapus margin default dari body
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
};

  const backgroundkuningStyle = {
    position: 'fixed',
    top: '32%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '16%',
    margin: 0,
    borderRadius: '20px',
    backgroundColor: '#FFCC15',
    zIndex: 1,
  };

  const bglist = {
    backgroundColor : 'transparent',
    border: '1px',
  }

export default Sudahpenggalangan;
