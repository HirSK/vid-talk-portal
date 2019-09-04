import React from 'react';
import {connect} from 'react-redux';
import HomeContent from './HomeContent';
import Sidebar from '../Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({    
    mainGrid: {
        marginTop: theme.spacing(3),
      }
}));

const MainView = props =>{
    const classes = useStyles();

    return (
        <Grid container spacing={5} className={classes.mainGrid}>
            <HomeContent/>
            <Sidebar/>
        </Grid>
    );
}

const mapStateToProps = state => {
    return state
  }
  
export default connect(mapStateToProps)(MainView);