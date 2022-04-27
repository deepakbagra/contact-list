import { makeStyles } from "@material-ui/core";


export default makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '20rem',
        width: '23rem',
       
    },
    
    header: {
        fontSize: '0.9rem',
        fontWeight: 'bold',
        marginLeft: '30%',
        margin: '1em'       
    },
    form: {
        marginBottom: '.8rem',        
    },      
    button: {
        marginTop: '4%',       
    },
    xButton: {
        position: 'absolute',
        right: '0em',        
        color: 'red',
    },
    
   
}))