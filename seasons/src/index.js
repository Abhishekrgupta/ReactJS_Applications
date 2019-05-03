import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './seasonDisplay';
import Spinner from "./Spinner";
class App extends React.Component{

  // constructor(props){
  //   super(props);

  //   //SHOULD ONLY BE INITIALISED ON CONSTRUCTOR ONLY
  //   this.state={
  //     lat:null,
  //     errorMessage:''
  //   }
  // }

  // STATE CAN ALSO BE USED AS BELOW WHICH IS EQUIVALENT TO ABOVE COTR CODE
  state ={
    lat:null,
    errorMessage:''
  }


  //METHOD INVOKED AFTER THE render()
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) =>this.setState({lat : position.coords.latitude}),
      (err) =>this.setState({errorMessage : err.message}) 
    );
  }

  renderContent(){
    if(this.state.errorMessage && !this.state.lat){
      return(
   
            <div>Error: {this.state.errorMessage}</div>
          
        );
    }
    if(!this.state.errorMessage && this.state.lat){
      return(
   
        <SeasonDisplay lat= {this.state.lat} />
          
        );
    }
    
    return <Spinner message='Please select Allow to proceed'/>
  }

// HAVE TO DEFINE RENDER
render(){
  return(
    <div className="border">
    {this.renderContent()}
  </div>
  );
  
  }
}


ReactDOM.render(<App />, document.querySelector('#root'));