import React, { useState } from 'react';
import Navbarfirst from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import galeri1 from '../img/img-galeri/galeri1.jpg';
import galeri2 from '../img/img-galeri/galeri2.jpg';
import galeri3 from '../img/img-galeri/galeri3.jpg';
import galeri4 from '../img/img-galeri/galeri4.jpg';
import { Link } from 'react-router-dom';

const Detailyayasan = () => {
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

          .no-scrollbar {
            -ms-overflow-style: none;  /* Internet Explorer 10+ */
            scrollbar-width: none;  /* Firefox */
          }
          
          .no-scrollbar::-webkit-scrollbar {
            display: none;  /* Safari and Chrome */
          }

          .image-container img {
            max-height: 100%;
            width: 100%;
            display: block;
            margin: 0 auto;
          }
        `}
      </style>

      <Navbarfirst />

      <section className="home pt-4 mb-0" style={DetailyayasanStyle}>
        <div className="row m-2" style={{ height: '340px' }}>
          <div className="col-5 p-0 m-0">
            <p style={{ fontSize: '30px', fontWeight: 500, marginBottom:"10px"}}>Yayasan Yatim Piatu Roudlotul Jannah</p>
            <div className="row">
              <div className="col-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 37 32" fill="none">
                  <path d="M18.5 15.3333C17.4779 15.3333 16.4975 14.9821 15.7747 14.357C15.0519 13.7319 14.6459 12.884 14.6459 12C14.6459 11.1159 15.0519 10.2681 15.7747 9.64297C16.4975 9.01785 17.4779 8.66666 18.5 8.66666C19.5222 8.66666 20.5026 9.01785 21.2253 9.64297C21.9481 10.2681 22.3542 11.1159 22.3542 12C22.3542 12.4377 22.2545 12.8712 22.0608 13.2756C21.8671 13.68 21.5832 14.0475 21.2253 14.357C20.8675 14.6665 20.4426 14.9121 19.975 15.0796C19.5074 15.2471 19.0062 15.3333 18.5 15.3333ZM18.5 2.66666C15.6379 2.66666 12.893 3.64999 10.8692 5.40033C8.84535 7.15067 7.70837 9.52464 7.70837 12C7.70837 19 18.5 29.3333 18.5 29.3333C18.5 29.3333 29.2917 19 29.2917 12C29.2917 9.52464 28.1547 7.15067 26.1309 5.40033C24.1071 3.64999 21.3622 2.66666 18.5 2.66666Z" fill="white"/>
                </svg>
              </div>
              <div className="col">
                <p style={{marginBottom:"8px", fontSize: '11px'}}>HM4C+26X, Salam, Suko, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61224</p>
              </div>
            </div>
            <div className="col image-container p-2" style={{ height: '225px', overflow: 'hidden' }}>
              <img className="img-fluid" style={{borderRadius:'30px'}} src={galeri1} alt="" />
            </div>
          </div>
          <div className="col p-0 m-2 rounded-4 no-scrollbar" style={textColStyle}>
            <p style={{ fontWeight: '200', fontSize: '14px', margin: '3%', textAlign: 'justify' }}>
              Yayasan Panti Asuhan Roudlotul Jannah adalah sebuah rumah amal yang menjadi tempat perlindungan dan pembinaan bagi anak-anak yang kurang beruntung di kabupaten Sidoarjo Jawa Timur. Panti asuhan ini didirikan dengan tujuan memberikan perlindungan, pendidikan, dan kasih sayang kepada anak-anak yatim dan kurang mampu dari berbagai latar belakang. 
              <br />Di Yayasan Panti Asuhan Roudlotul Jannah, saat ini terdapat 30 anak asuh yang tinggal di sini. Mereka memiliki rentang usia antara 5 hingga 15 tahun. Anak-anak ini berasal dari berbagai latar belakang, seperti yatim piatu, anak jalanan, dan dari keluarga miskin di sekitar wilayah. Setiap anak mendapatkan perawatan yang holistik, termasuk akses pendidikan formal, pelayanan kesehatan, serta bimbingan spiritual.
              <br />Sumber pendapatan panti asuhan ini berasal dari sumbangan sukarela dan dana bantuan dari individu, perusahaan, dan lembaga amal. Selain itu, panti asuhan juga mengadakan kegiatan penggalangan dana seperti lelang amal dan acara amal lainnya.
              <br />Donatur sangat dibutuhkan untuk memastikan kelangsungan operasional panti asuhan ini. Donasi dapat berupa uang tunai, pakaian, perlengkapan sekolah, dan makanan. Setiap sumbangan dari donatur dianggap sebagai bantuan berharga yang membantu menciptakan masa depan yang lebih baik bagi anak-anak ini.
              <br />Yayasan Panti Asuhan Roudlotul Jannah berkomitmen untuk memberikan cinta dan perhatian kepada setiap anak asuh, membimbing mereka untuk memiliki masa depan yang lebih cerah, dan terus berupaya memberikan pengaruh positif bagi komunitas sekitar.
            </p>
          </div>
        </div>
        <div className="row m-2">
          <div className="col-5 me-1 align-content-center" style={{background:"rgba(255, 255, 255, 0.25)" , borderRadius:"20px"}}>
            <div className="row">
              <Link to="/detaildonasi" className="col-9 text-center m-1 " style={{background:"#FFCC15", borderRadius:"30px", textDecoration: "none"}}>
                <p className="m-0">TOTAL DONASI</p>
                <p className="m-0">100.000</p>
                <p className="m-0">Lihat Selengkapnya </p>
              </Link>
              <Link to="/transaksi2" className="col text-center align-content-center m-2" style={{background:"rgba(255, 255, 255, 0.35)", borderRadius:"20px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                  <path d="M27.3334 20.5C32.0484 20.5 35.875 16.6734 35.875 11.9584C35.875 7.24335 32.0484 3.41669 27.3334 3.41669C22.6184 3.41669 18.7917 7.24335 18.7917 11.9584C18.7917 16.6734 22.6184 20.5 27.3334 20.5ZM36.6438 30.0667C35.9775 29.3834 35.1404 29.0417 34.1667 29.0417H22.2084L18.655 27.7946L19.2188 26.1888L22.2084 27.3334H26.9917C27.5896 27.3334 28.0679 27.0942 28.4609 26.7013C28.8538 26.3084 29.0417 25.83 29.0417 25.3004C29.0417 24.3779 28.5975 23.7459 27.7092 23.3871L15.2896 18.7917H11.9584V34.1667L23.9167 37.5834L37.6346 32.4584C37.6517 31.5529 37.31 30.75 36.6438 30.0667ZM8.5417 18.7917H1.68103V37.5834H8.5417V18.7917Z" fill="#4D96B6"/>
                </svg>
              </Link>
            </div>
          </div>
          <div className="col p-0" style={{background:"rgba(255, 255, 255, 0.25)", borderRadius:"20px"}}>
            <div className="row  m-1">
              <div className="col">
                <p className="m-0">Galeri Kami</p>
              </div>
              <div className="row">
                <div className="col-11">
                  <img className="m-1" style={{width:'20%', height:'85%', borderRadius:"10px"}} src={galeri1} alt="" />
                  <img className="m-1" style={{width:'20%', height:'85%', borderRadius:"10px"}} src={galeri2} alt="" />
                  <img className="m-1" style={{width:'20%', height:'85%', borderRadius:"10px"}} src={galeri3} alt="" />
                  <img className="m-1" style={{width:'20%', height:'85%', borderRadius:"10px"}} src={galeri4} alt="" />
                </div>
                <Link to="/galeripanti" className="col text-center align-content-center rounded-5 m-2 p-0 mt-3" style={{background:"rgba(255, 255, 255, 0.80)", width:"36px", height:"36px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
                  <path d="M13.3594 12C13.3593 12.2129 13.3215 12.4214 13.2504 12.6013C13.1792 12.7812 13.0776 12.925 12.9574 13.0162L4.05115 19.7662C3.88296 19.89 3.69105 19.9027 3.51706 19.8015C3.34308 19.7002 3.20106 19.4933 3.12184 19.2256C3.04261 18.9579 3.03257 18.651 3.0939 18.3715C3.15522 18.092 3.28296 17.8625 3.44939 17.7328L11.0156 12L3.44939 6.26717C3.28296 6.13745 3.15522 5.90794 3.0939 5.62846C3.03257 5.34898 3.04261 5.04207 3.12184 4.77436C3.20106 4.50665 3.34308 4.29973 3.51706 4.19852C3.69105 4.0973 3.88296 4.10996 4.05115 4.23373L12.9574 10.9837C13.0776 11.0749 13.1792 11.2188 13.2504 11.3987C13.3215 11.5786 13.3593 11.7871 13.3594 12Z" fill="#373737"/>
                </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
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

const DetailyayasanStyle = {
  padding: '10px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '88%',
  height: '85%',
  marginTop: '3%',
  borderRadius: '20px',
  zIndex: 2,
};

const textColStyle = {
  background: 'rgba(255, 255, 255, 0.25)',
  overflowY: 'scroll',
  height: '99%',
  padding: '10px',
  borderRadius: '20px',
};

export default Detailyayasan;
