import '../../home.css';
import React from 'react';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import { yellow, green } from '@material-ui/core/colors';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'. Built with '}
        <Link color="inherit" href="https://material-ui.com/">
          Material-UI.
        </Link>
      </Typography>
    );
  }

const mapStateToProps = state => ({
    appName: state.appName
  });

  const frontButton = createMuiTheme({
    palette: {
      primary: green,
    },
  });

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
    },
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
    mainGrid: {
      marginTop: theme.spacing(3),
    },
    card: {
      display: 'flex',
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
    markdown: {
      ...theme.typography.body2,
      padding: theme.spacing(3, 0),
    },
    sidebarAboutBox: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
      marginTop: theme.spacing(3),
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      marginTop: theme.spacing(8),
      padding: theme.spacing(6, 0),
    },
  }));
  
   const featuredPosts = [
    {
      title: 'Vid-Talk Meets',
      date: 'Popular',
      description:
        'Run your own conferencing service',
    },
    {
      title: 'Vid-Talk Partner',
      date: 'Popular',
      description:
        'Video talk with your partner',
    },
  ]; 

  const social = ['GitHub', 'Twitter', 'Facebook'];

  export default function Blog() {
      
        const classes = useStyles();

          return(
            <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
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
                <Button variant="outlined" size="small">
                  Login
                </Button>
                <Button variant="outlined" size="small">
                  Sign up
                </Button>
              </Toolbar>             

              <main>

                <Paper className={classes.mainFeaturedPost}>
                {/* Increase the priority of the hero background image */}
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

                <Grid container spacing={4} className={classes.cardGrid}>
                    {featuredPosts.map(post => (
                    <Grid item key={post.title} xs={12} md={6}>
                        <CardActionArea component="a" href="#">
                        <Card className={classes.card}>
                            <div className={classes.cardDetails}>
                            <CardContent>
                                <Typography component="h2" variant="h5">
                                {post.title}
                                </Typography>
                                <Typography variant="subtitle1" component="h5" color="textSecondary">
                                {post.date}
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                {post.description}
                                </Typography>
                                <Typography variant="subtitle1" color="secondary">
                                Continue reading...
                                </Typography>
                            </CardContent>
                            </div>
                            <Hidden xsDown>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            </Hidden>
                        </Card>
                        </CardActionArea>
                    </Grid>
                    ))}
                </Grid>
                
                <Grid container spacing={5} className={classes.mainGrid}>
                  {/* Main content */}
                  <Grid item xs={12} md={8}>
                    <Typography variant="h6" gutterBottom>
                      Anything relevant
                    </Typography>
                    <Divider />
                    
                  </Grid>
                  {/* End main content */}

                  {/* Sidebar */}
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
                  {/* End sidebar */}

                </Grid>
              </main>
            </Container>

            {/* Footer */}
            <footer className={classes.footer}>
              <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                  Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                  Something here to give the footer a purpose!
                </Typography>
                <Copyright />
              </Container>
            </footer>
            {/* End footer */}

          </React.Fragment>
          );
      }
  
