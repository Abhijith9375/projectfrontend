import React, { useState } from 'react';
import { Button, TextField, Typography, InputAdornment, IconButton } from '@mui/material';
import { Person, Visibility, VisibilityOff, Email } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginMessage, setLoginMessage] = useState(''); // Error message state
  const navigate = useNavigate(); // Navigation hook

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    if (username === 'abhi' && password === 'abhi') {
      // If username and password match, navigate to the admin page
      navigate('/adhome');
    } else {
      // If they don't match, set an error message
      setLoginMessage('Admin not found.');
    }
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
          Admin Login
        </Typography>&nbsp;

        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person fontSize="small" />
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
          onChange={(e) => setPassword(e.target.value)}
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

export default Adminlogin;
