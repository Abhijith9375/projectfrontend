import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url('https://wallpaperset.com/w/full/6/6/5/377775.jpg')`, backgroundSize: 'cover', minHeight: 'calc(100vh - 64px)', position: 'relative', zIndex: 1 }}>
        <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2 }}>
          <Toolbar>
            <Button component={Link} to="/order" color="inherit" style={{ border: '1px solid white' }}>Order</Button>&nbsp;
            <Button component={Link} to="/pro" color="inherit" style={{ border: '1px solid white' }}>Promotion</Button>&nbsp;
            <Button component={Link} to="/special" color="inherit" style={{ border: '1px solid white' }}>Special</Button>&nbsp;
          </Toolbar>
        </AppBar>
        <br />
        <br />
        <br />
        {/* Add your dashboard content here */}
      </div>
      
    </div>
  );
}

export default Dashboard;