import React, { useState, useEffect } from 'react';
import { Paper, TextField, Typography, Button, IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';import useStyles from './styles';
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
                className={classes.xButton} type='submit'>
                <HighlightOffIcon fontSize='medium' />
            </IconButton>

            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                <div >                    
                    <Typography className={classes.header}>{!currentId ? 'Add New Contact' :'Edit Contact'}</Typography>
                    <TextField className={classes.form} size='small'
                        name='name'
                        label='Name'
                        variant='outlined'
                        fullWidth
                        value={postData.name}
                        onChange={handleChange}
                    />                    
                    <TextField className={classes.form} size='small'
                        name='email'
                        label='Email'
                        variant='outlined'
                        fullWidth
                        value={postData.email}
                        onChange={handleChange}
                    />
                    <TextField className={classes.form} size='small'
                        name='phone'
                        label='Phone'
                        variant='outlined'
                        fullWidth
                        value={postData.phone}
                        onChange={handleChange}
                    />                   
                </div>

                <Button className={classes.button}
                    variant='contained'
                    color='primary'
                    type='sumbit'
                    size='small'
                    fullWidth                    
                    > Sumbit
                </Button>

            </form>

      </Paper>  
  );
};

export default ContactForm;
