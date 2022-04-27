import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    searchBar: {
        height: '1.8rem',
        backgroundColor: '#f9fbe7',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            height: '1.3rem',
            width: '5.5rem',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            height: '1.9rem',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: '2rem',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            height: '2.2rem',            
        }
    },
    searchInput: {
        padding: '0.5rem',
        marginLeft: '0.5rem',
        fontSize: '1rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.4rem',
            marginLeft: '0.1rem'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '0.7rem',
            marginLeft: '0.2rem'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '0.7rem',
            marginLeft: '0.3rem'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: '0.9rem',
            marginLeft: '0.4rem'
        },
    },
    searchIcon: {
        padding: '0.6rem',
        fontSize: '1.2rem',
        [theme.breakpoints.down('xs')]: {
            padding: '0.4rem',
            fontSize: '0.9rem',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            padding: '0.5rem',
            fontSize: '1rem',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '0.6rem',
            fontSize: '1.1rem',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            padding: '0.7rem',
            fontSize: '1.2rem',
        },
    },
    closeIcon: {
        padding: '0.6rem',
        fontSize: '1.2rem',
        [theme.breakpoints.down('xs')]: {
            padding: '0',
            fontSize: '0.85rem',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            padding: '0',
            fontSize: '0.95rem',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '0',
            fontSize: '1rem',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            padding: '0',
            fontSize: '1.2rem',
        },
    },
}))