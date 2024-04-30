import React, { useState } from 'react';
import { Button, TextField, Typography, InputAdornment, IconButton } from '@mui/material';
import { Person, Visibility, VisibilityOff, Email } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (email === '' || password === '') {
      setLoginMessage('Email and password are required.');
      return;
    }

    axios
      .post('http://localhost:3001/login', { email, password })
      .then((result) => {
        if (result.data === 'success') {
          navigate('/home'); // Navigate to home on successful login
        } else {
          setLoginMessage(result.data); // Display the response as a message
        }
      })
      .catch((err) => {
        setLoginMessage(`Login failed: ${err.message}`);
      });
  };

  return (
    <div
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg")',
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '330px',
          width: '100%',
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>&nbsp;
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email fontSize="small" />
              </InputAdornment>
            ),
          }}
        />&nbsp;
        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'
          }
          variant="outlined"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} onMouseDown={(e) => e.preventDefault()}>
                  {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />&nbsp;
        <Button variant="contained" fullWidth onClick={handleSubmit}>
          Login
        </Button>
        <Typography>{loginMessage}</Typography>
      </div>
    </div>
  );
};

export default Login;
