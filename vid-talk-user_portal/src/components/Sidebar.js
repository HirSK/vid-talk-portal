import React from 'react';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({    
    
}));
const social = ['GitHub', 'Twitter', 'Facebook'];
const Sidebar = props =>{
    const classes = useStyles();

    return (
        <Grid item xs={12} md={4}>

            <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                About
                </Typography>

                <Typography>
                Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                </Typography>

            </Paper>                
            
            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Social
            </Typography>

            {social.map(network => (
                <Link display="block" variant="body1" href="#" key={network}>
                {network}
                </Link>
            ))}
        </Grid>
    );
}

const mapStateToProps = state => {
    return state
  }
  
export default connect(mapStateToProps)(Sidebar);