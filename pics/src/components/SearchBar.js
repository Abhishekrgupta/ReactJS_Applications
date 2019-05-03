import React from "react";

class SearchBar extends React.Component{
  //CONTROLLED HANDLER
  state ={
    term: ''
  }
  // onInputChange(event){
  //   console.log(event.target.value);
    
  // }

  onFormSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  }

  render(){
    return(
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className ="ui form">
          <div className="field">
            <label> Image Search</label>
            {/* UNCONTROLLED WAY TO HANDLERS */}
            {/* <input type="text" onChange = {this.onInputChange}/> */}
            {/* ALTERNATE WAY TO USE EVENT IN HANDLERS USING CALLBACKS*/}
            {/* <input type="text" onChange = {(event) => {console.log(event.target.value)}}/> */}
            
            {/* CONTROLLED WAY */}
            <input type="text" value = {this.state.term} onChange = {(event) => this.setState({term: event.target.value}) } />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;