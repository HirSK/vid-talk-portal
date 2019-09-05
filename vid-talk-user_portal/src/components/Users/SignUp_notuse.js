import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import userPostFetch  from '../../store/actions/signup.actions'
import {connect} from 'react-redux';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(0),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(2),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));


function SignUpFormDialog(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
  
    function handleClickOpen() {
      setOpen(true);
    }
  
    function logName() {
        
        console.log(firstName);
        console.log(lastName);
        setOpen(false);
    }
    function handleClose() {
        
        setOpen(false);
      }

   /* const logName = () => {
        // do whatever with the names... let's just log them here
        console.log(firstName);
        console.log(lastName);
    }; */

    function handleSubmit(){
        const user = {
            fName : firstName,
            lName : lastName,
            email :email,
            password : password
        }
        props.userPostFetch(user)
    }

    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassowrd] = useState('');

    
      const handleFirstName = event => {
        setFirstname(event.target.value)
      }
      const handleLastName = event => {
        setLastname(event.target.value)
      }
      const handleEmail = event => {
        setEmail(event.target.value)
      }
      const handlePassword = event => {
        setPassowrd(event.target.value)
      }
      
    
      /*const handleSubmit = event => {
        event.preventDefault()
        const user = {
            fName : firstName,
            lName : lastName,
            email :email,
            password : password
        }
        props.userPostFetch(user)
      }*/
    
    return (
        <div>
          <Button variant="outlined" size="small" color="primary" onClick={handleClickOpen}>
            SIGN UP
          </Button>

          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Vid-Talk</DialogTitle>
            <DialogContent>  
                {/* <DialogContentText></DialogContentText>             */}
                <Container component="main" maxWidth="xs" >
                    <CssBaseline />
                    <div className={classes.paper}>

                        <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                        </Avatar>

                        <Typography component="h1" variant="h5">
                        Sign up
                        </Typography>

                        <form className={classes.form} Validate>
                        <Grid container spacing={1} maxWidth="xs">
                            <Grid item xs={12} sm={6}>
                              <TextField
                                  autoComplete="fname"
                                  name="firstName"
                                  variant="outlined"
                                  required
                                  fullWidth
                                  id="firstName"
                                  label="First Name"
                                  value={firstName}
                                  onChange={handleFirstName}
                                  autoFocus
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  id="lastName"
                                  label="Last Name"
                                  name="lastName"
                                  autoComplete="lname"
                                  value={lastName}
                                  onChange={handleLastName}
                              />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={handleEmail}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={handlePassword}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="confirm_password"
                                label="Confirm password"
                                type="password"
                                id="confirm_password"
                                autoComplete="current-password"
                            />
                            </Grid>

                            <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive marketing promotions and updates via email."
                            />
                            </Grid>

                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                           
                        >
                            Sign Up
                        </Button>

                        <Grid container justify="flex-end">
                            <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                            </Grid>
                        </Grid>

                        </form>
                    </div>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </Container>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleSubmit} color="primary">
                Cancel
            </Button>
            
            </DialogActions>
          </Dialog>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
    userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
  })
  
export default connect(null, mapDispatchToProps)(SignUpFormDialog);