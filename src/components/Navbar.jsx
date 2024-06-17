import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import carematesLogo from '../img/img-components/img-beranda/caremates.png';

function Navbarfirst({ activeLinkProp }) {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(activeLinkProp || 'home');
  const [hoverLink, setHoverLink] = useState(null);

  useEffect(() => {
    const pathToKey = {
      '/': 'home',
      '/beridonasi': 'features',
      '/tentangkami': 'about',
      '/pusatbantuan': 'help',
      '/detailyayasan': 'features',
      '/galeripanti': 'features',
      '/transaksi2': 'features',
      '/konfirmasidonasi': 'features',
      
    };
    const currentPath = location.pathname;
    setActiveLink(pathToKey[currentPath] || 'home');
  }, [location]);

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" style={navbarStyle}>
        <Navbar.Brand as={Link} to="/beranda">
          <img src={carematesLogo} alt="Caremates Logo" style={logoStyle} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav style={navStyle}>
            {[
              { path: '/', label: 'Beranda', key: 'home' },
              { path: '/beridonasi', label: 'Beri Donasi', key: 'features' },
              { path: '/tentangkami', label: 'Tentang Kami', key: 'about' },
              { path: '/pusatbantuan', label: 'Pusat Bantuan', key: 'help' }
            ].map((link, index) => (
              <Nav.Link
                as={Link}
                to={link.path}
                key={link.key}
                style={{
                  ...navLinkStyle,
                  ...(activeLink === link.key && activeNavLinkStyle),
                  ...(hoverLink === link.key && hoverNavLinkStyle),
                  marginRight: index < 3 ? '20px' : '0'
                }}
                onClick={() => handleSetActive(link.key)}
                onMouseEnter={() => setHoverLink(link.key)}
                onMouseLeave={() => setHoverLink(null)}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      {/* Background Square */}
      <div className="background-square" style={backgroundSquareStyle}></div>
    </>
  );
}

// Navbar styles
const navbarStyle = {
  marginBottom: '20px',
  padding: '10px',
  margin: '2%',
  position: 'fixed',
  width: '93%',
  zIndex: 3,
  borderRadius: '20px',
  background: 'rgba(255, 255, 255, 0.42)',
  boxShadow: '0px 0px 24px -5px rgba(0, 0, 0, 0.25)',
  WebkitBackdropFilter: 'blur(20px)', 
  backdropFilter: 'blur(20px)', 
  border: '1px solid rgba(255, 255, 255, 0.77)',
};

const logoStyle = {
  width: '230px',
};

const navStyle = {
  padding: '10px 10px',
};

const navLinkStyle = {
  borderRadius: '50px',
  color: '#fff',
  padding: '10px 12px',
  transition: 'all 0.3s ease-in-out',
  fontSize: '18px',
  fontFamily: 'Open Sans, sans-serif',
  textDecoration: 'none',
  cursor: 'pointer'
};

const activeNavLinkStyle = {
  backgroundColor: '#4D96B6',
  color: '#fff',
  fontWeight: 'bold',
};

const hoverNavLinkStyle = {
  backgroundColor: '#6FB3D2',
  color: '#fff',
};

const backgroundSquareStyle = {
  position: 'fixed',
  top: '55%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '88%',
  height: '85%',
  margin: 0,
  borderRadius: '20px',
  backgroundColor: '#ffffff6b',
  zIndex: 1,
};

export default Navbarfirst;
