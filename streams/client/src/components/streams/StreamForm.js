import React from 'react';
import {Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component{
  
  renderError = ({touched, error}) =>{
    if(touched && error){
      return(
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      );
    }
  }

  renderInput = ({input, label, meta }) => {
    // ONE WAY TO ASSIGN THE VALUE TO INPUT

    // return (
    //   <input 
    //   onChange={formProps.input.onChange}
    //   value={formProps.input.value}
    //   />
    // );

    // SHORTHAND/REDUX-FORM WAY TO ASSIGN THE VALUE TO INPUT
    // IT ASSIGN ALL THE PROPERTIES TO THE INPUT
    // return <input {...formProps.input} />

    //BY DESTRUCTURING
    //console.log(meta);
    const className = `field ${meta.touched && meta.error ? 'error' : ''}`
    return(
      <div className={className}>
        <label>{label}</label>
        <input {...input } autoComplete="off" />
        {/* <div>{meta.error}</div> */}
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formsValue) => {
    //console.log(formsValue);
    this.props.onSubmit(formsValue);
  }

  render(){
    return (
    <form 
    className="ui form error"
    onSubmit = {this.props.handleSubmit(this.onSubmit)}
    >
      <Field name="title" component={this.renderInput} label='Enter Title' />
      <Field name="description" component={this.renderInput} label='Enter description' />
      <button className="ui button primary">Submit</button>
    </form>
    
    );
  }
}

const validate = (formsValue) => {
  const errors = {};
  if(!formsValue.title){ 
    errors.title = 'You must enter a title';
  }

  if(!formsValue.description){
    errors.description = 'You must enter a description';
  }

  return errors;
}

export default reduxForm({
  form: 'streamForm',
  validate: validate
})(StreamForm);
