import React from 'react';
import Navbarfirst from '../components/Navbar';
import { BsEnvelope, BsInstagram, BsWhatsapp  } from "react-icons/bs";
import logo from '../img/img-tentangkami/logo.png'

const tentangkami = () => {

  React.useEffect(() => {

  }, []);
  const iconStyle = {
    color: '#4D96B6',
    fontSize: '300%',
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '40%',
    display: 'inline-block',
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
          body.no-scroll {
            overflow: hidden;
          }

          /* Tambahkan gaya CSS untuk slideshow dan ikon */
          .home {
            width: 90%;
            margin-top: 0%;
            z-index: 2;
            align-item: center;
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
            width: 80%;
            height: auto;
            padding-top : 4%;
            opacity: 0;
            transition: opacity 1s ease-in-out;
            position: absolute;
            max-width: 100%;
            opacity: 1;

          }

          .logo img {
            width: 70%;
            justify-content: center;
            padding-left : 30%;
            padding-top : 25%;
          }
          .icon {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            justify-content: center;
          }
        `}
      </style>

      {/* Komponen Navbar */}
      <Navbarfirst />

      {/* Bagian logo dan tentang kami */}
      <section className="home">
        <div className="container1 justify-content-center" style={{ display: 'flex', paddingTop: '7%'}}>
          <div className="logo-container col-md-6">
            <div className="logo" style={{width: '80%'}}>
              <img src={logo} alt="logo" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10%', paddingLeft:'3%', paddingTop: '70%' }}>
                    <BsEnvelope style={iconStyle} />
                    <BsInstagram style={iconStyle} />
                    <BsWhatsapp style={iconStyle} />
                </div>
          </div>
          
          <div className="icon col-md-6 justify-content-center " style={{justifyContent: 'center', paddingTop: '0%', paddingRight: '7%',color: 'white', fontFamily: 'Open Sans',
                    textAlign:'justify',
                    fontSize: '110%',
                    fontStyle: 'normal',
                    fontWight: '400',
                    lineHeight: 'normal',
                    marginBottom: '0'}}>
          <p style={{}}> Caremates adalah sebuah inisiatif yang lahir dari tekad untuk membangun jaringan 
                    kemanusiaan yang inklusif dan berkelanjutan. Kami hadir sebagai platform yang menghubungkan 
                    para dermawan dengan lebih dari 150 lembaga panti asuhan di seluruh Indonesia, dengan tujuan 
                    utama menciptakan kesejahteraan bagi saudara-saudara kita yang membutuhkan. Melalui kolaborasi 
                    yang kuat dengan lembaga-lembaga tersebut, kami memastikan bahwa donasi Anda disalurkan secara 
                    efisien dan efektif kepada mereka yang membutuhkan. Caremates tidak hanya sekadar sebuah wadah 
                    untuk memberikan bantuan, tetapi juga sebuah wadah untuk menginspirasi dan mendorong perubahan 
                    positif dalam masyarakat. Dengan semangat kebersamaan dan komitmen yang teguh, kami berupaya 
                    menjadi agen perubahan yang membawa manfaat bagi seluruh komunitas.</p>

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

export default tentangkami;
