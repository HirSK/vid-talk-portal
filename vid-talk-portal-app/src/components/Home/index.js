import Banner from './Banner';
import MainView from './MainView';
import '../../home.css';
import React from 'react';
import {connect} from 'react-redux';



  class Home extends React.Component{
      render(){
          return(
              <div className="home-page">
                  <Banner appName="banner" />
                    <div className="container-page">
                        <div className="row">
                            <MainView />

                            <div className="col-md-3">
                                <div className="sidebar">

                                    <p>Popular Tags</p>

                                </div>
                            </div>
                        </div>
                    </div>
              </div>
          );
      }
  }

  const mapStateToProps = state => {
    return state
  }
  
  export default connect(mapStateToProps)(Home);
