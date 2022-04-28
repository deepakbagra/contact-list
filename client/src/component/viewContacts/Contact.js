// importing libraries
import React, { useState } from 'react';
import {
  Card, CardActions, CardContent,
  Button, Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// importing local modules
import ContactForm from '../forms/ContactForm';
import { deleteContact } from '../../redux/actions';

const Contact = ({ contact }) => {  
  
    // toggle modal states for edit form
  const [modalOpenEdit, setModalOpenEdit] = useState(false);
 
  const classes = useStyles();
  const dispatch = useDispatch();  
  
  //Modal toggle settings for edit tag
  const handleModalOpenEdit = () => { setModalOpenEdit(true) };
  const handleModalCloseEdit = () => { setModalOpenEdit(false) };  
 
 // on click edit button event listener function
 const handleEditChange = () => {
    dispatch({ type: 'CURRENT_ID', payload: contact._id})
  }
 
    return (
        // rendering a single contact as a card
        // taking props from parent function component(<Contacts>)

        <Card className={classes.card}>

            {/* rendering contact name, email and phone numbers as card contents */}
             
            <CardContent>
                <Typography gutterBottom className={classes.item} >                    
                    {contact.name}                    
                </Typography>

                
                <Typography gutterBottom className={classes.item} >
                    {contact.email}                    
                </Typography>

                <Typography gutterBottom className={classes.item} >
                    {contact.phone}                    
                </Typography>                
          
            </CardContent>
        
            {/* action buttons for edit and delete */}
            
            <CardActions className={classes.actions} >                
                               
                <Button className={classes.btn} onClick={handleEditChange}>
                        <EditIcon
                            className={classes.btn}
                            onClick={handleModalOpenEdit}
                        />
                </Button>           
                
                <Button className={classes.btn}
                    color='secondary'
                    onClick={() => dispatch(deleteContact(contact._id))}
                >
                    <DeleteIcon className={classes.btn} />
                </Button>
                
            <Modal className={classes.modal} open={modalOpenEdit} onClose={handleModalCloseEdit}>
            <>             
                <ContactForm closeEdit={handleModalCloseEdit} />
            </>
            </Modal>
                
        </CardActions>
      </Card>
  );
};

export default Contact;
