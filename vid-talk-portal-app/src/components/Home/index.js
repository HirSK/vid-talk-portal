import Header from "../Header";
import React from 'react';
import {connect} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Banner from "./Banner";
import FeaturedPosts from "./FeaturedPosts";
import MainView from "./MainView";
import Footer from "../Footer";


class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header/>
                <Banner/>
                <FeaturedPosts/>
                <MainView/>
                <Footer/>
            </Container>

            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Home);