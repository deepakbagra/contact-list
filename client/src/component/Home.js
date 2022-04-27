import React from 'react';
import initialContacts from '../db';

const Home = () => {  
  
  console.log(initialContacts);
   
    return (
        <div style={{display: 'flex', justifyContent: 'center'}} >
           <h1 style={{marginTop: '3em'}}>Welcome To Contact App</h1>
        </div>
  );
};

export default Home;

