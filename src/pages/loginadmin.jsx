import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authAdmin from '../api/authadmin';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { FaEye, FaEyeSlash } from "react-icons/fa";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

const colorChange = keyframes`
  0% { background-position: 0% 50%; }
  25% { background-position: 25% 50%; }
  50% { background-position: 100% 50%; }
  75% { background-position: 75% 50%; }
  100% { background-position: 0% 50%; }
`;

const Background = styled.div`
  height: 100vh;
  background: linear-gradient(45deg, #00cbb7, #0098d9, #00baa7, #0081b8);
  animation: ${colorChange} 12s ease-in-out infinite;
  background-size: 200% 200%;
  background-position: 0% 50%;
  font-family: "Open Sans", sans-serif;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

const LoginLogo = styled.div`
  margin-right: 50px;
  flex: 1;

  img {
    width: 300px;
    height: auto;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px; /* Add bottom margin for spacing between logo and form */
  }
`;

const LoginForm = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 130%;
  background: rgba(203, 200, 200, 0.468);
  padding: 70px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 2;
  box-sizing: border-box;

  h2 {
    color: #fff;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const FormGroup = styled.div`
  color: rgb(255, 255, 255);
  margin-bottom: 20px;
  width: 100%;
  position: relative;

  label {
    width: 100%;
    display: block;
    margin-bottom: 10px;
    text-align: left;
  }

  input {
    width: 100%;
    max-width: 300px;
    padding: 10px;
    padding-right: 40px; /* Extra padding for the icon */
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 15px;
    border: none;
    outline: none;
    color: #000;
    text-align: left;
    margin-bottom: 10px;

    @media (max-width: 480px) {
      max-width: 100%;
    }
  }

  svg {
    position: absolute;
    top: 60%;
    right: 15px;
    transform: translateY(-50%);
    cursor: pointer;
    color: #000;
  }
`;

const Button = styled.button`
  display: inline-block;
  padding: 10px;
  background-color: #4db6ac;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #21726a;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 300px; /* Maximum width for the button */
    padding: 10px;
  }
`;

const Loginadmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authAdmin.loginadmin(username, password);
      setSuccess('Login berhasil');
      setError('');
      console.log(response);
      navigate('/admindashboard');
    } catch (err) {
      setError(err.message);
      setSuccess('');
    }
  };

  return (
    <Background>
      <GlobalStyle />
      <LoginContainer>
        <LoginLogo>
          <img src="/src/assets/caremates01.png" alt="Logo" />
        </LoginLogo>
        <LoginForm>
          <h2>Selamat Datang !</h2>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Masukan Username Admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">Masukan Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Masukan Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {showPassword ? (
                <FaEye onClick={togglePasswordVisibility} />
              ) : (
                <FaEyeSlash onClick={togglePasswordVisibility} />
              )}
            </FormGroup>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <Button type="submit">Masuk</Button>
          </form>
        </LoginForm>
      </LoginContainer>
    </Background>
  );
};

export default Loginadmin;
