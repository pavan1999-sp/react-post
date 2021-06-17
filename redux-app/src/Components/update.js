
import React from 'react';
import './index.css'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import { postupdateHOc } from '../Redux/ConnectedComponents/ApiConnected';
import { PostdisplayHoc } from './PostData';

class Update extends React.Component{
    render(){
        return (
    <Router>
            <div id="container">
                <div id="menu-bar">
                <nav className="navbar navbar-expand-sm bg-info navbar-light">

  

  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" to="/">post-update</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/PostData">Post-display</Link>
    </li>
  </ul>
</nav>
                </div>
                <div id="content">
                
           <Route path="/" exact component={postupdateHOc} ></Route>  
           <Route path="/PostData"  component={PostdisplayHoc} ></Route>  


                </div>
            </div>
    </Router>
        )
    }
}

export default Update;