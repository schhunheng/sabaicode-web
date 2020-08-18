import React from 'react';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: `calc(50% - ${(150)}px)`,
        
    },
    search: {
      position: 'relative',
      borderRadius: 20,
      backgroundColor: "#e0e0e0",
      '&:hover': {
        backgroundColor: "#f3f3f3",
      },
      marginLeft: 0,
        width: 300,
        height: 50,
        textAlign:'center',
    
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(2, 10, 1, 1),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
        width: '100%',
      color:'black',
     
    },
  }));
  
const SearchButton = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
             <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
       </div>
    );
};

export default SearchButton;