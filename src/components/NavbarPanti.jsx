import  { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Form, Button, InputGroup,} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import carematesLogo from '../img/img-components/img-beranda/caremates.png';
import profile from '../img/img-navbarpanti/profil.png';

function Navbarfirst({  }) {
  const location = useLocation();
  const [, setActiveLink] = useState('home');

  useEffect(() => {
    const pathToKey = {
      '/': 'home',
      '/beridonasi': 'features',
      '/tentangkami': 'about',
      '/pusatbantuan': 'help'
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
        <Form className="search-bar" style={{width: '50%',
      height: '48px',
      borderRadius: '30px',
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      backdropFilter: 'blur(4px) saturate(180%)',}}>
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Cari..."
            aria-label="Search"
            style={{backgroundColor: 'transparent',
            border: '0',
            outline: 'none',
            padding: '5% 5%',
            fontSize: '20px',
            color: 'white',}}
          />
          <Button
            variant=""
            type="submit"
            style={{width: '60px',
            height: '100px',
            backgroundColor: 'transparent',
            color: 'white',
            cursor: 'pointer',}}
          >
            <i className="bi bi-search"></i>
          </Button>
        </InputGroup>
      </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto" style={navStyle}>
           <NavDropdown title={<span style={{color:'white'}}> Roudlotul Jannah <img src={profile} alt="Profile" style={{ width: '40px', marginRight: '10px' }} /></span>} id="basic-nav-dropdown" >
              <NavDropdown.Item href="/profile" style={{ color: '#4D96B6' }}>Profil</NavDropdown.Item>
              <hr style={{color:'#4D96B6'}}/>
              <NavDropdown.Item href="/notif" style={{ color: '#4D96B6' }}>Notifikasi</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
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
  WebkitBackdropFilter: 'blur(20px)', // Backdrop filter for Chrome, Safari, and Opera
  backdropFilter: 'blur(20px)', // Backdrop filter for Firefox
  border: '1px solid rgba(255, 255, 255, 0.77)',
};

const logoStyle = {
  width: '230px',
};

const navStyle = {
  padding: '10px 10px',
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
