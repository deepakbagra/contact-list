import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';

import initialContacts from '../db';
import { loadServer } from '../redux/actions';

const Home = () => {  
  
  console.log(initialContacts);  

  const dispatch = useDispatch();

  const handleLoadServer = () => {

    for (let i = 0; i < initialContacts.length; ++i) {
      dispatch(loadServer(initialContacts[i]));
    }
  }   
 
    return (
      <div style={{textAlign: 'center'}} >
        <Button variant='contained' color='secondary' style={{marginTop: '8em', marginBottom: '1.5em', alignItems:'center'}} onClick={ handleLoadServer }>Initialise the server</Button>
        <hr></hr>
      </div>
  );
};

export default Home;

