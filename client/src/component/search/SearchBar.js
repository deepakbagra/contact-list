// importing libraries
import React, { useCallback, useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { InputBase, Paper, IconButton } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

// importing local modules
import { listContacts } from '../../redux/actions';

const SearchBar = () => {
    const [input, setInput] = useState('');
    
    const classes = useStyles();    

    const dispatch = useDispatch();    

  // handling search bar input text
    const handleSearch = (e) => {
        const queryText = e?.target?.value;

        setInput(queryText);

      dispatch({ type: 'SEARCH', payload: queryText });      
          
    };

  // after clearing input search text, re render contact list
  const clearInput = useCallback(() => {

    setInput('');

    dispatch(listContacts());

  },[dispatch]);
  
  // side effect when clear input function is called
  useEffect(() => {

    if (input === '') clearInput();

  }, [clearInput, input]);

  return (
    
    // rendering search bar input box 
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