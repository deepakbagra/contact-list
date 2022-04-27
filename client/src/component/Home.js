import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';

import initialContacts from '../db';
import { loadServer, listContacts } from '../redux/actions';
import Contacts from '../component/viewContacts/Contacts';
import Footer from './footer/Footer';

const Home = () => {  
  
  // calling contact list from redux store
  const contacts = useSelector((state) => state.contacts);

  const dispatch = useDispatch();

  // initialising the server with local database  
  const handleLoadServer = () => {

    // if contact list in the server is not blank   
    if (contacts.length) {
      alert('server is already initialised');
    }

    // if contact list in the server is blank, initialise it
    else {
      for (let i = 0; i < initialContacts.length; ++i) {
        dispatch(loadServer(initialContacts[i]));
      }
      alert('server is initialised');
    }    
  }
  
  useEffect(() => {
    dispatch(listContacts())
  }, [dispatch])
 
    return (
      <div style={{ textAlign: 'center' }} >        
        <div>
          <Button
            variant='contained'
            color='secondary'
            style={{ marginTop: '8em', alignItems: 'center' }}
            onClick={handleLoadServer}>Initialise the server
          </Button>          
          <hr style={{marginTop: '4em'}}></hr>
        </div>        
        <Contacts />
        <Footer />
      </div>
  );
};

export default Home;

