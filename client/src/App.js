import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import CreateGroup from './views/create-group';
import Groups from './views/groups';
import addParticipant from './views/add-participant';

class App extends Component {
  render() {
  return (
    <div className="App">
      <NavLink to="/groups">View Your Groups</NavLink>
      <Route path="/" exact component={CreateGroup}/>
      <Route path="/groups" component={Groups} />
      <Route path="/participants/add" component={addParticipant} />
    </div>
  );
  }
}

export default App;
