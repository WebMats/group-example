import React, { Component } from 'react'
import axios from 'axios';

export default class Groups extends Component {
  state = {
    groups: []
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/group').then((result) => {
      console.log(result.data.groups)
      this.setState({ groups: result.data.groups })
    }).catch((err) => {
      console.log(err)
    });
  }
  render() {
    return (
      <>
      Groups
      <div>
        <ul>
        { !!this.state.groups[0] && 
          this.state.groups.map(group => <li key={group._id}>Name: {group.name}
          <button onClick={() => this.props.history.push(`participants/add`, {groupId: group._id})} >Add Participant</button>
          </li>)
        }
        </ul>
      </div>
      </>
    )
  }
}
