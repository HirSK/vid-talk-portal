import Header from './Header';
import Home from './Home/index';
import React from 'react'; 
import {loadPageService} from '../store/actions/servicedata.actions'
import fetch_user from '../store/actions/user.actions'
import {connect} from 'react-redux';



class App extends React.Component {   


  render() {
    
    return (
        <div>
          <Home />
       <button onClick={this.props.fetchuser}>updateee</button>
       <br/>

       users : <button>Fetch users</button>
       {
       
       }
        </div>
                    
    );
  }
} 





const mapStateToProps = state => {
  return {
    service: state.service,
    user : state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadService: () => {dispatch(loadPageService)},
    fetchuser: () => {dispatch(fetch_user)}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);