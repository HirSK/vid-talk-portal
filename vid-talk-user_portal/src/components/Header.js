import React from 'react';
import {connect} from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Signup from './Users/SignUP';
import LoginFormDialog from './Users/Login';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        
        flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    }
}));


const Header = props =>{

    const classes = useStyles();

    return (
        <Toolbar className={classes.toolbar}>
            <Button size="small">Subscribe</Button>
            <Typography
                component="h1"
                variant="h4"
                color="inherit"
                align="center"
                noWrap
                className={classes.toolbarTitle}
            >
                Vid-Talk
            </Typography>
            <IconButton>
                <SearchIcon />
            </IconButton>
                        
            <LoginFormDialog/>
            <Signup/>           
                        
        </Toolbar> 
    );
}

const mapStateToProps = state => {
    return state
  }
  
export default connect(mapStateToProps)(Header);