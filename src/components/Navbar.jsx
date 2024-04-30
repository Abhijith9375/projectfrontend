import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const OrangeLine = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: 3,
  width: '100%',
  backgroundColor: '#ff4500',
}));

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black', position: 'relative' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Feastify
        </Typography>
        <Button component={Link} to="/home" sx={{ color: '#fff', bgcolor: '#ff4500' }}>Home</Button>&nbsp;
        <Button component={Link} to="/" sx={{ color: '#fff', bgcolor: '#ff4500' }}>Login out</Button>&nbsp;
        {/* <Button component={Link} to="/signup" sx={{ color: '#fff', bgcolor: '#ff4500' }}>Signup</Button>&nbsp; */}
        <Button component={Link} to="/dashboard" sx={{ color: '#fff', bgcolor: '#ff4500' }}>Dashboard</Button>&nbsp;
        <Search>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Toolbar>
      <OrangeLine />
    </AppBar>
  );
}

export default Navbar;
