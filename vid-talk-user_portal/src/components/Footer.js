import React from 'react';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({    
    
}));

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'. Developed by '}
        <Link color="inherit" href="https://material-ui.com/">
          DreamSO.
        </Link>
      </Typography>
    );
  }

const Footer = props =>{
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">

            <Typography variant="h6" align="center" gutterBottom>
                Contact us
            </Typography>

            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Hot no : 011xxxxxxx
            </Typography>

            <Copyright />
            </Container>
        </footer>
    );
}

const mapStateToProps = state => {
    return state
  }
  
export default connect(mapStateToProps)(Footer);