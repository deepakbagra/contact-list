// importing libraries
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@mui/material';
import React from 'react';

// importing local contact component
import Contact from './Contact';

const Contacts = () => {

  // calling contact list from redux store  
  const contacts = useSelector(state => state.contacts);   
 
  return (
    // iterating over an array of contacts using grid to handle different screen size 

    !contacts?.length ? <div style={{height: '24rem'}}><CircularProgress /> </div> : (
      <Grid container alignItems='stretch' spacing={5} style={{background: '#607d8b'}} >
              {contacts.map((contact) => (
                  <Grid item
                       key={contact._id}
                       xs={12} sm={6} md={4} >
                      <Contact contact={contact} />
                    </Grid>
              )) }
        </Grid>
        )
  );
};

export default Contacts;
