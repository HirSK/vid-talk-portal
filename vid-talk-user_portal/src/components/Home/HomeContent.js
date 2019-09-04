import React from 'react';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({    
    
}));

const HomeContent = props =>{
    const classes = useStyles();

    return (
        <Grid item xs={12} md={8}>

            <Typography variant="h6" gutterBottom>
                Main content goes here
            </Typography>

            <Divider />
                    
        </Grid>
    );
}

const mapStateToProps = state => {
    return state
  }
  
export default connect(mapStateToProps)(HomeContent);