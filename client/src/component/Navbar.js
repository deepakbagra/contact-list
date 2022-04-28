// libraries imported
import React, { useState } from 'react';
import { AppBar, Button, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import Modal from '@mui/material/Modal';
import SearchBar from './search/SearchBar';
import useStyles from './search/styles';

// local modules imported
import ContactForm from './forms/ContactForm';


const Navbar = () => {

  // toggle modal state management
  const [modalOpen, setModalOpen] = useState(false);  
  
  const classes = useStyles(); // custome style sheet

  const dispatch = useDispatch();
  
  // modal toggle handle for new add contact window
  const handleModalOpen = () => {
    setModalOpen(true);
    dispatch({ type: 'CURRENT_ID', payload: null });
    }         
  const handleModalClose = () => {
    setModalOpen(false);
  }; 
  
    
  return (
    // render nav bar with App title and add new contact action button
      <AppBar
          position='fixed'
          style=
          {{ height: '5em',          
              background: '#424242',              
              textAlign: 'center'
          }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        
          <h2>Contact App</h2>
          <Paper  comonent='form' autoComplete='off' noValidate className={classes.searchBar}>
                <SearchBar />
          </Paper>
          <Button color='inherit'  onClick={handleModalOpen} >                  
              Add New Contact
          </Button>
          
        </div>
          <Modal
              style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
              open={modalOpen}
              onClose={handleModalClose}
          >
          <>            
            <ContactForm closeAd={handleModalClose} />
          </>          
          </Modal>
      </AppBar>
  )
}

export default Navbar;