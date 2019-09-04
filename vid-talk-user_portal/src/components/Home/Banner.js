import React from 'react';
import {connect} from 'react-redux';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { yellow, green } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({    
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
      overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
      },
      mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(6),
          paddingRight: 0,
        },
      },
}));

const frontButton = createMuiTheme({
    palette: {
      primary: green,
    },
});

const Banner = props =>{
    const classes = useStyles();

    return (
        <Paper className={classes.mainFeaturedPost}>
        {
        <img
            style={{ display: 'none' }}
            src="https://source.unsplash.com/user/erondu"
            alt="background"
        />
        }
        <div className={classes.overlay} />
        <Grid container>

            <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>

                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                Multi-platform open-source video conferencing
                </Typography>

                <Typography variant="h7" color="inherit" paragraph>
                At Jitsi, we believe every video chat should look and sound amazing, 
                between two people or 200. Whether you want to build your own massively 
                multi-user video conference client, or use ours, all our tools are 100% free,
                 open source, and WebRTC compatible
                </Typography>  

                <ThemeProvider theme={frontButton}>
                    <Button variant="contained" color="primary" size="large">
                        START A CALL
                    </Button>
                </ThemeProvider>                     
                
                </div>
            </Grid>
        </Grid>
        </Paper>
    );
}

const mapStateToProps = state => {
    return state
  }
  
export default connect(mapStateToProps)(Banner);