import React, { Component } from 'react'
import uuid from 'uuid/v4';
import axios from 'axios';

export default class CreateGroup extends Component {
    constructor(props) {
        super(props)
        this.state = {
          emails: [],
          name: '',
          purpose: '',
          code: '',
        }
        this.emailsInput = React.createRef();
      }
    
      parseEmailsHandler = () => {
        const emails = this.emailsInput.current.value.split(',')
        console.log(emails);
        this.setState({ emails })
      }
      
      generateCodeHandler = () => {
        const code = uuid();
        this.setState({ code });
      }
    
      sendEmailsHandler = () => {
        console.log(this.state)
        axios.post('http://localhost:5000/api/join', { ...this.state }).then((result) => {
          console.log(result)
        }).catch((err) => {
          console.log(err);
        });
      }
  render() {
    return (
        <>
        Create a group
    <div>
      <input placeholder="Name" onChange={(e) => {this.setState({ name: e.target.value })} }/>
      <textarea placeholder="Purpose" onChange={(e) => {this.setState({ purpose: e.target.value })}} ></textarea>
    </div>
    <div>
      give us the participants emails (seperate with comma, no spaces)
      <input placeholder="Emails" 
      style={{display:"block", margin: 'auto'}} 
      onKeyPress={(e) => {e.key === "Enter" && this.parseEmailsHandler()}}
      ref={this.emailsInput}/>
    </div>
      <button onClick={this.generateCodeHandler}>generate security code</button>
      { this.state.code && <p>the security code is: {this.state.code}</p>}
      <button 
      disabled={!this.state.code || !this.state.emails.length > 0}
      onClick={this.sendEmailsHandler}
      >Send Emails</button>
      </>
    )
  }
}
