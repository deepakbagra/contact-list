import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@mui/material';
import React from 'react';

import Contact from './Contact';

const Contacts = () => {

  // calling contact list from redux store  
  const contacts = useSelector(state => state.contacts);   
 
  return (
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
