import React from 'react';
import App from "./App";
class GoogleAuth extends React.Component{

  state={
    isSignedIn: null
  };

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
          this.setState({isSignedIn: this.auth.isSignedIn.get() });
          //INSTEAD
          //this.onAuthChange(this.auth.isSignedIn.get());
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
    this.setState({isSignedIn: this.auth.isSignedIn.get() });
    // console.log(this.state.isSignedIn);
  } 

  renderAuthStatus = () => {
    if (this.state.isSignedIn === null) {
      return null 
    } else if(this.state.isSignedIn) {
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
      <div className="ui container" style={{marginTop:'20px'}}>
        <div className="ui secondary pointing menu">
          <h3>Welcome to Book Club</h3>
          <div className="right menu">
          {this.renderAuthStatus()}
          </div>
        </div>
        <App isSignedIn={this.state.isSignedIn}/>
      </div>
        
    );
  }
}
export default GoogleAuth;