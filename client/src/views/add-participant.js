import React, { Component } from 'react'

export default class addParticipant extends Component {
    state = { 
        groupId: ''
    }
    componentDidMount() {
        console.log(this.props)
    }
  render() {
    return (
      <div>
        Add participant
      </div>
    )
  }
}
