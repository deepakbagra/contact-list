import React, {useState} from 'react';
import {
  Card, CardActions, CardContent,
  Button, Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';

import ContactForm from '../forms/ContactForm';

const Contact = ({ contact }) => {
  
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenEdit, setModalOpenEdit] = useState(false);
 
  const classes = useStyles();
  const dispatch = useDispatch();  
  
  //Modal toggle settings for edit tag
  const handleModalOpenEdit = () => { setModalOpenEdit(true) };
  const handleModalCloseEdit = () => { setModalOpenEdit(false) };  
 
 // on click edit button event listener function
  const handleEditChange = () => {
   
  }
 
    return (
    
        <Card className={classes.card}>
             
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
            
        <CardActions className={classes.actions} >
                
            <div>                         
                <Button className={classes.btn} onClick={handleEditChange}>
                    <EditIcon className={classes.btn} onClick={handleModalOpenEdit} />
                </Button>
            </div>
                
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
