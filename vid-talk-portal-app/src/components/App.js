import Header from './Header';
import Home from './Home';
import React from 'react'; 
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  appName: state.appName
});

class App extends React.Component {   

  render() {
    
    return (
        <div>
          {/* {this.props.appName}         */}
          <Header appName={this.props.appName} />
          <Home />
        </div>
                    
    );
  }
}
export default connect(mapStateToProps, () => ({}) )(App);