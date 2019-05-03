/// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


//buttn text function 
// function getButtonText(){
//   return 'Click me';
// }
// Create React component using class of function

const buttonText = 'Click button';
const labelName = 'Enter the Name';
//const style = {backgroundColor:'blue', color: 'white'};
const App = () => {
  return(
    <div>
      <label htmlFor='name' className="label">{labelName}</label>
      <input id='name' type='text'/>
      <button style={{backgroundColor:'blue', color: 'white'}}>{buttonText}</button>
      {/* Style can Also be used as JSON Object */}
      {/* <button style={style}>{buttonText}</button> */}
    </div>
  );
}

// Display the code/output to the Browser/screen
ReactDOM.render(
          <App />, //Get the function/Class as an React HTML Element/tag
          document.querySelector('#root') // Display the Element to the root component of the main index file.
          );