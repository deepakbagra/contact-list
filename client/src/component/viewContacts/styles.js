import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => ({
   
    card: {
        width: '80%',
        margin: 'auto',
        
    },
   
    item: {
        fontSize: '.9em',
        fontWeight: 'bold',
        marginLeft: '3%',
       
    },
   
   
    name: {
        fontSize: '0.7rem',
        color: 'grey',
        marginLeft: '3%',
        fontWeight: 'bold'
    },
    modal: {
        backgroundColor: 'rgba(255,255,255,0.7)',
    },
    box: {
        height: '30%',
        width: '40%',
        margin: '15% 30%',
        backgroundColor: 'white',
        borderRadius: '1em'
    },
    xButton: {
        position: 'absolute',
        top: '0%',
        left: '95%',
        color: 'white',
    },
    
    btn: {
        fontSize: '1.3rem',
        
    }, 
    actions: {
        height: '3rem',
        justifyContent: 'center'
    },

}))