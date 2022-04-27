import React, { useState, useEffect } from 'react';
import { Paper, TextField, Typography, Button, IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';

import { loadServer, updateContact } from '../../redux/actions';

const ContactForm = ({ closeEdit, closeAd }) => {
    
    const [postData, setPostData] = useState({        
        name: '',
        email: '',
        phone: ''               
    });

    // calling current id from redux store
    const currentId = useSelector((state) => state.currentId);

    const classes = useStyles();
    const dispatch = useDispatch();

    // calling current contact from redux store
    const contact = useSelector(
        (state) => currentId ? state.contacts.find(
            (contact) => contact._id === currentId) : null);      
     
    // update form data when a current contact is selected
    useEffect(() => { 
    if (contact) setPostData(contact);
    }, [contact]);

    // clear form data 
    const clear = () => {
        setPostData({ name: '', email: '', phone: '' });        
    }

    // handle input data entry
    const handleChange = (e) => {
        setPostData({
            ...postData,            
            [e.target.name]: e.target.value
        })
    }

    // handle submit form 
    const handleSubmit = (e) => {
        e.preventDefault();

        // if there is no current id, load server with new data
        if (!currentId) {  
            dispatch(loadServer(postData));   
            clear();
        }
        
        // else update the current contact data
          else {     
            dispatch(updateContact(currentId, postData));
            clear();
          }
    }
    
    return (
        <Paper className={classes.paper}>

            <IconButton
                onClick={currentId ? closeEdit : closeAd}
                style={{
                    position: 'absolute',
                    right: '0em',        
                    color: 'red',
                }} type='submit'>
                <HighlightOffIcon fontSize='medium' />
            </IconButton>

            <form style={{textAlign:'center'}} autoComplete='off' noValidate onSubmit={handleSubmit}>
                <div >                    
                    <Typography style={{
                        fontSize: '1rem',
                        fontWeight: 'bold',                        
                        margin: '1em',
                        textAlign: 'center'
                    }}>
                        {!currentId ? 'Add New Contact' : 'Edit Contact'}</Typography>
                    <TextField style={{marginBottom: '2rem', width: '70%'}} size='small'
                        name='name'
                        label='Name'
                        variant='outlined'                            
                        value={postData.name}
                        onChange={handleChange}
                    />                    
                    <TextField style={{marginBottom: '2rem', width: '70%'}} size='small'
                        name='email'
                        label='Email'
                        variant='outlined'                        
                        value={postData.email}
                        onChange={handleChange}
                    />
                    <TextField style={{marginBottom: '1rem', width: '70%'}} size='small'
                        name='phone'
                        label='Phone'
                        variant='outlined'                       
                        value={postData.phone}
                        onChange={handleChange}
                    />                   
                </div>

                <Button style={{marginTop: '4%', width:'70%' }}
                    variant='contained'
                    color='primary'
                    type='sumbit'
                    size='small'                                        
                    > Sumbit
                </Button>

            </form>

      </Paper>  
  );
};

export default ContactForm;
