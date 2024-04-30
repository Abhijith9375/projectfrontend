import React, { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from '@mui/material'; // Corrected import
import {
  Person,
  Visibility,
  VisibilityOff,
  Email,
} from '@mui/icons-material'; // Corrected import
import axios from 'axios'; // For HTTP requests
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [signupMessage, setSignupMessage] = useState(''); // Feedback message
  const navigate = useNavigate()

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleEmailChange = (e) => {
    const emailPattern = /^[^\s@]+@[^\s@]+$/;
    setEmail(e.target.value);
    if (!emailPattern.test(e.target.value)) {
      setSignupMessage('Invalid email format'); // Provide feedback for invalid email
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    if (!username || !email || !password) {
      setSignupMessage('All fields are required'); // Ensure all fields are provided
      return;
    }

    axios
      .post('http://localhost:3001/Sign', { username, email, password }) // Adjusted to correct endpoint
      .then(result => {console.log(result)
      navigate('/login')
      })
      .catch(err=> console.log(err))
    }
      
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
          Sign Up
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
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          helperText={signupMessage} // Provide helper text for feedback
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
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton
                onClick={togglePasswordVisibility}
                onMouseDown={(e) => e.preventDefault()}
              >
                {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
              </IconButton>
            ),
          }}
        />&nbsp;

        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
        >
          Sign Up
        </Button>

        <Typography>{signupMessage}</Typography> 
      </div>
    </div>
  );
};

export default Signup;
