import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import FriendList from './components/FriendsList';


function App() {
  console.log('localstorage from App', localStorage);

  return (
    <Router>
      <div className="App">

            <div><Link to="/login">Login</Link></div>

            <div><Link to="/protected">Protected Page</Link></div>

        <Switch>
          <ProtectedRoute exact path="/protected" component={FriendList} />
          <Route exact path="/login" component={Login} />
          {/* <Route component={Login} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
