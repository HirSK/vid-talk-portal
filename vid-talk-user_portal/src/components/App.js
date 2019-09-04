import Home from './Home';
import React from 'react'; 
import {loadPageService} from '../store/actions/servicedata.actions'
import update_user  from '../store/actions/user.actions'
import {connect} from 'react-redux';



function App(props){   
  
  return (
    <div>

    <Home/>

    {/* <button onClick={props.updateUser}>update</button>
    <br/>
    users : <button onClick={props.updateUser}>Fetch users</button>
    {
      props.users.length ===0? <p>No user found</p>:
      props.users.map(user => <p> {user.id} - {user.first_name} - {user.email}</p> )
    } */}

    </div>   
  );
  
} 

const mapStateToProps = state => {
  return {
    service: state.services,
    users : state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadService: () => {dispatch(loadPageService)},
    updateUser: () => {dispatch(update_user)}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);