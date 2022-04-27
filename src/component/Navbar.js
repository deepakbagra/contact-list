import React from 'react';
import AppBar from '@mui/material/AppBar';

const Navbar = () => {
  return (
      <AppBar
          position='fixed'
          style=
          {{ height: '5em',          
              background: '#424242',
              justifyContent: 'center',
              textAlign: 'center'
          }}>
          Contact App
      </AppBar>
  )
}

export default Navbar;