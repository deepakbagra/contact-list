import React, { useCallback, useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { InputBase, Paper, IconButton } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { listContacts } from '../../redux/actions';

const SearchBar = () => {
    const [input, setInput] = useState('');
    
    const classes = useStyles();    

    const dispatch = useDispatch();    

    const handleSearch = (e) => {
        const queryText = e?.target?.value;

        setInput(queryText);

      dispatch({ type: 'SEARCH', payload: queryText });      
          
    };

  const clearInput = useCallback(() => {

    setInput('');

    dispatch(listContacts());

  },[dispatch]);
  
  useEffect(() => {

    if (input === '') clearInput();

  }, [clearInput, input]);

  return (
    <Paper comonent='form' autoComplete='off' noValidate className={classes.searchBar}>
          <InputBase className={classes.searchInput} value={input} onChange={handleSearch} placeholder='search contact by name' />
          { input === '' ?
              <SearchIcon className={classes.searchIcon} />
              : 
              <IconButton onClick={clearInput}> <CloseIcon className={classes.closeIcon} /></IconButton>             
           } 
    </Paper>
  )
}

export default SearchBar;