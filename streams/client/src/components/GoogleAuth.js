import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component{

  // WITHOUT REDUX
  // state={
  //   isSignedIn: null
  // };

  // LOADING THE GOOGLE OAUTH API SERVICE TO AUTHENTICATE
  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '685432008636-61b8ugglt12e6bjd1rtst3773d3mn8ku.apps.googleusercontent.com',
        scope: 'email'
      })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // WITHOUT REDUX
          //this.setState({isSignedIn: this.auth.isSignedIn.get() });
          //INSTEAD
          this.onAuthChange(this.auth.isSignedIn.get());

          this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onAuthChange = (isSignedIn) => {
    //this.setState({isSignedIn: this.auth.isSignedIn.get() });
    if(isSignedIn){
      //console.log(this.auth.currentUser.get().getId());
      this.props.signIn( this.auth.currentUser.get().getId() );
    } else {
      this.props.signOut();
    }
  } 

  renderAuthStatus = () => {
    if (this.props.isSignedIn === null) {
      return null 
    } else if(this.props.isSignedIn) {
      return (
        <button 
        className="ui red google button"
        onClick={this.onSignOutClick}
        >
          <i className="google icon" />
            Sign Out
        </button>
      );
    } else {
      return (
        <button 
        className="ui red google button"
        onClick={this.onSignInClick}
        >
          <i className="google icon" />
            Sign In with Google
        </button>
      );
    }
  }

  render(){
    return(
      <div>{this.renderAuthStatus()}</div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, 
  {
    signIn,
    signOut
  })(GoogleAuth);