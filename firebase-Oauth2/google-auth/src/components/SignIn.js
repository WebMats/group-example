import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import { auth, googleProvider } from '../firebase';


class SignIn extends Component {
    state = {
        email: '',
        password: '',
    }

    signInWithGoogle = () => {
       auth.signInWithPopup(googleProvider).then(({ user }) => {
           localStorage.setItem('token', user.ra);
           const fbUser = {
              email: user.email,
              fbID: user.uid,
              name: 'TBD'
           };
           this.props.onAuthUser(fbUser);
       }).catch(err => {
          console.log(err);
       })
    }

    signInWithEmailAndPassword = () => {
       const { email, password } = this.state;
       auth.signInWithEmailAndPassword(email, password).then(({ user }) => {
           localStorage.setItem('token', user.ra);
           const fbUser = {
              email: user.email,
              fbID: user.uid,
              name: 'TBD'
           };
           this.props.onAuthUser(fbUser);
       }).catch(err => {
          console.log(err);
       })
    }

    render() {
        return (
            <>
            <div>
                 <form autoComplete='off'>
                      <div>
                         <input 
                              name='email' 
                              type='email' 
                              placeholder='Email' 
                              onChange={(e) => {this.setState({ email: e.target.value })}} 
                          />
                          <input 
                              name='password' 
                              type='password' 
                              placeholder='Password' 
                              onChange={(e) => {this.setState({ password: e.target.value })}} 
                          />
                      </div>
                      <button type='button' onClick={this.signInWithEmailAndPassword}>Sign In</button>
                  </form>
            </div>
            <button type='button' onClick={this.signInWithGoogle}>Sign In with Google</button>
            </>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    onAuthUser: (user) => dispatch(actions.authorizeUser(user))
})

export default connect(null, mapDispatchToProps)(SignIn);
