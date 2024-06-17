import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AvatarImage from "../assets/caremates.png";
import Navbarfirst from '../components/NavbarPanti';
import zIndex from "@mui/material/styles/zIndex";


const sharedBackground = "#ffffff6b"; 

/* const navbarStyle = {
  marginBottom: "20px",
  padding: "10px",
  margin: "3%",
  top: "20px",
  width: "93%",
  zIndex: 2,
  borderRadius: "20px",
  background: sharedBackground,
  boxShadow: "0px 0px 24px -5px rgba(0, 0, 0, 0.25)",
  WebkitBackdropFilter: "blur(20px)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.77)",
}; */

/* const backgroundSquare = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "88%",
  height: "88%",
  borderRadius: "20px",
  backgroundColor: sharedBackground,
  zIndex: -1,
  overflow: "hidden",
  boxShadow: "0px 0px 24px -5px rgba(0, 0, 0, 0.25)",
  WebkitBackdropFilter: "blur(20px)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.77)",
  marginTop: "1%",
}; */

const notificationListStyle = {
  padding: "90px 20px 20px",
  marginRight: "6%",
  marginLeft: "6%",
  marginTop: "1%",
  listStyleType: "none",
  zIndex: 1,
};

const notificationItemStyle = {
  marginBottom: "10px", 
  borderBottom: "1px solid rgba(255, 255, 255, 0.77)",
  color: "white",
};

const smallTextStyle = {
  fontSize: "12px",
};

const boldTextStyle = {
  fontWeight: "bold", 
};
const imageStyle = {
  marginRight: "10px",
};

const Notif = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <style>
        {`
          body {
            background: linear-gradient(
              45deg,
              #00cbb7da,
              #0098d9de,
              #00baa7d7,
              #0081b8dc
            );
            animation: color 12s ease-in-out infinite;
            background-size: 2000% 2000%;
            background-position: 0%;
            font-family: "Open Sans", sans-serif;
            overflow: hidden;
            margin: 0; /* Pastikan tidak ada margin pada body */
            padding: 0; /* Pastikan tidak ada padding pada body */
            height: 100vh; /* Pastikan body menutupi seluruh layar */
          }

          @keyframes color {
            0% {
              background-position: 0% 50%;
            }
            25% {
              background-position: 25% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            75% {
              background-position: 75% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
      <Navbarfirst />

      {/* <AppBar position="fixed" style={navbarStyle}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Notifikasi
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar> */}
      <div className="notif" style={{paddingTop:"3%"}}>
        <ul style={notificationListStyle}>
          <li style={notificationItemStyle}>
            <img src={AvatarImage} alt="Avatar" style={imageStyle} />
            <strong style={boldTextStyle}>
              Pengajuan dana berhasil terverifikasi,
            </strong>{" "}
            lihat detail dana terkumpul di sini. <br />
            <span style={smallTextStyle}> 16 Mei 2023 </span>
          </li>
          <li style={notificationItemStyle}>
            <img src={AvatarImage} alt="Avatar" style={imageStyle} />
            Pengajuan penggalangan dana sedang diproses. <br />
            <span style={smallTextStyle}> 15 Mei 2023</span>
          </li>
          <li style={notificationItemStyle}>
            <img src={AvatarImage} alt="Avatar" style={imageStyle} />
            Lengkapi data pada profil untuk mengajukan penggalangan dana. <br />
            <span style={smallTextStyle}> 10 Mei 2023 </span>
          </li>
          <li style={notificationItemStyle}>
            <img src={AvatarImage} alt="Avatar" style={imageStyle} />
            <strong style={boldTextStyle}>
              Akun anda sudah terverifikasi,
            </strong>{" "}
            anda bisa mulai mengajukan penggalangan dana. <br />
            <span style={smallTextStyle}> 10 Mei 2023</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Notif;
