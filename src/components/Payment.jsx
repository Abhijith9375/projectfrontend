import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Tabs, Tab, Typography, TextField, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const Payment = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  const handleContinue = () => {
    // Handle continue action
  };

  return (
    <div style={{ 
      backgroundImage: `url('https://wallpaperset.com/w/full/6/6/5/377775.jpg')`, 
      backgroundSize: 'cover', 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '800px', 
        padding: '20px', 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        borderRadius: '10px' 
      }}>
        <div style={{ padding: '20px' }}>
          <Typography variant="h5" gutterBottom>
            {tabValue === 0 ? 'Details' : 'Payment Details'}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="Full Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Address" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Location" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Phone Number" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={handleContinue} 
                style={{ marginTop: 20, color: 'white', backgroundColor: 'orangered' }} 
                component={Link} 
                to='/pay'
              >
                Continue
              </Button>&nbsp;
              <Button variant="contained" color="primary" onClick={handleContinue} style={{ marginTop: 20, color: 'white', backgroundColor: 'orangered' }} component={Link} to='/home'>
              Back
            </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Payment;
