import React, { Component } from 'react';
import { Switch, Redirect, Route, NavLink } from 'react-router-dom';
import { auth } from './firebase';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import './App.css';


class App extends Component {

  logout = () => {
    auth.signOut();
    localStorage.clear('token');
  }
  
  render() {
    return (
      <div className="App">
        <NavLink to="/login">Login</NavLink>
        <button type="button" onClick={this.logout}>Logout</button>
        <Switch>
          <Route path="/" exact component={SignUp} />
          <Route path="/login" exact component={SignIn} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
  componentDidMount() {
    // Uncomment this if you don't have .then() blocks in SignUp SignIn functions.
    // auth.onAuthStateChanged(user => {
    //   localStorage.setItem('token', user.ra);
    //   const fbUser = {
    //      email: user.email,
    //      fbID: user.uid,
    //      name: 'TBD'
    //   };
    //   this.props.onAuthUser(fbUser);
    // }, error => {
    //    console.log(error)
    // })
  }
}

const mapDispatchToProps = dispatch => ({
  onAuthUser: (user) => dispatch(actions.authorizeUser(user))
})

export default connect(null, mapDispatchToProps)(App);
