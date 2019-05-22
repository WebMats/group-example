import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import { auth, googleProvider } from '../firebase';


class Auth extends Component {
    state = {
        email: '',
        password: '',
    }

    signUpWithGoogle = () => {
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

    signUpWithEmailAndPassword = () => {
       const { email, password } = this.state;
       auth.createUserWithEmailAndPassword(email, password).then(({ user }) => {
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
                      <button type='button' onClick={this.signUpWithEmailAndPassword}>Sign Up</button>
                  </form>
            </div>
            <button type='button' onClick={this.signUpWithGoogle}>Sign Up with Google</button>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onAuthUser: (user) => dispatch(actions.authorizeUser(user))
})

export default connect(null, mapDispatchToProps)(Auth);
