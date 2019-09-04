import React from 'react';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles(theme => ({    
    card: {
        display: 'flex',
      },
      cardDetails: {
        flex: 1,
      },
      cardMedia: {
        width: 160,
      }
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

const FeaturedPosts = props =>{

    const classes = useStyles();

    return (
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
    );
}

const mapStateToProps = state => {
    return state
  }
  
export default connect(mapStateToProps)(FeaturedPosts);