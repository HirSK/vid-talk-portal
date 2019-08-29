import SessionList from '../SessionList';
import React from 'react';
import {connect} from 'react-redux';


const MainView = props =>{
    return (
        <div className="col-md-9">
            <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                    <li className="nav-item">
                        <a
                           href="#"
                           className="nav-link active">My Sessions</a>
                    </li>
                </ul>
            </div>
            <SessionList
              sessions={props.sessions}
            />
        </div>
    );
}

const mapStateToProps = state => {
    return state
  }
  
  export default connect(mapStateToProps)(MainView);