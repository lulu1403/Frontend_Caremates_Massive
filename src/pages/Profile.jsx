import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdEdit } from "react-icons/md";
import AboutMe from "../components/AboutMe";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="home" style={styles.home}>
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
      <AppBar position="fixed" style={navbarStyle}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Profil
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
      </AppBar>
    </section>
  );
};

const Profile = () => {
  const [profilePic, setProfilePic] = useState("profile1.png");

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("profilePicInput").click();
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.sidebar}>
          {/* Sidebar Content */}
          <div style={styles.profile}>
            <div style={styles.profilePictureContainer}>
              <img
                src={profilePic}
                alt="Profile"
                style={styles.profilePicture}
              />
              <MdEdit style={styles.editIcon} onClick={triggerFileInput} />
              <input
                type="file"
                id="profilePicInput"
                style={{ display: "none" }}
                onChange={handleProfilePicChange}
                accept="image/*"
              />
            </div>
            <h3 style={styles.h3}>Yayasan Yatim Piatu Roudlotul Jannah</h3>
          </div>
          <ul style={styles.sidebarMenu}>
            <li style={styles.menuitem}>
              <Link
                to="/detaildonasi"
                className="btn btn-primary"
                style={styles.button}
              >
                Donasi Berlangsung
              </Link>
            </li>
            <li style={styles.menuitem}>
              <Link
                to="/pengajuanpencairan"
                className="btn btn-primary"
                style={styles.button}
              >
                Pencairan Dana
              </Link>
            </li>
            <li style={styles.menuitem}>
              <Link
                to="/logout"
                className="btn btn-primary"
                style={styles.button}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
        <div style={styles.content}>
          {/* Main Content */}
          <h2 style={styles.h2}>Yayasan Yatim Piatu Roudlotul Jannah</h2>
          <AboutMe />
        </div>
      </div>
    </>
  );
};

const navbarStyle = {
  marginBottom: "20px",
  padding: "10px",
  margin: "3%",
  position: "fixed",
  top: "20px",
  width: "93%",
  zIndex: 2,
  borderRadius: "20px",
  background: "#ffffff6b",
  boxShadow: "0px 0px 24px -5px rgba(0, 0, 0, 0.25)",
  WebkitBackdropFilter: "blur(20px)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.77)",
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "calc(100vh - 100px)", // Adjusted to leave space for header and footer
    marginTop: "40px", // Height of the header
    marginBottom: "50px", // Height of the footer
    padding: "0 90px",
    gap: "20px",
  },
  sidebar: {
    flex: "0 1 250px",
    marginTop: "7%",
    height: "80%",
    backgroundColor: "#ffffff6b",
    padding: "10px",
    borderRadius: "10px",
    overflow: "auto", // Add this line to handle overflow
    maxWidth: "100%", // Ensure sidebar does not exceed the container width
  },
  h3: {
    color: "#fff",
    fontSize: "13px",
    fontWeight: "bold",
  },
  profile: {
    marginTop: "15%",
    textAlign: "center",
    marginBottom: "20px",
  },
  profilePictureContainer: {
    position: "relative",
    display: "inline-block",
  },
  profilePicture: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  editIcon: {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    backgroundColor: "#fff",
    borderRadius: "50%",
    padding: "5px",
    cursor: "pointer",
    fontSize: "25px",
  },
  sidebarMenu: {
    listStyleType: "none",
    padding: 0,
  },
  menuitem: {
    marginBottom: "5px", // Add margin bottom to each list item
  },
  button: {
    width: "100%",
    backgroundColor: "#ffffff6b",
    color: "black",
    borderRadius: "10px",
    marginBottom: "10px",
    border: "none",
    fontSize: "13px",
  },
  content: {
    flex: 1,
    marginTop: "7%",
    height: "80%",
    backgroundColor: "#ffffff6b",
    padding: "10px",
    borderRadius: "10px",
    overflow: "auto",
  },
  h2: {
    marginTop: "3%",
    color: "#fff",
    fontSize: "25px",
    fontWeight: "bold",
    textAlign: "center",
  },
  "@media (max-width: 768px)": {
    container: {
      flexDirection: "column",
      padding: "0 20px",
      height: "auto", // Add this line to allow the container to grow
    },
    sidebar: {
      width: "100%",
      marginTop: "20px",
      height: "auto",
      overflow: "visible", // Ensure the sidebar content is visible on small screens
    },
    content: {
      marginTop: "20px",
      height: "auto",
      marginLeft: "0", // Add this line to center the content
    },
    h2: {
      marginLeft: "0",
      fontSize: "30px",
      textAlign: "center",
    },
  },
};

export default Profile;
