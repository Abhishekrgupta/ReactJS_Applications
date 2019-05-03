import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
class StreamEdit extends React.Component{
  
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formsValue) =>{
    // console.log(formsValue);
    this.props.editStream(this.props.match.params.id, formsValue);
  }

  render() {
    if (!this.props.stream) {
      return (
        <div>Loading...</div>
      )
    }
   return (    
    <div>
      <h3>Edit Stream</h3>
      <StreamForm 
        onSubmit = {this.onSubmit}
        // initialValues={this.props.stream} OR
        // initialValues={{'title':this.props.stream.title, 'description':this.props.stream.description}} OR
        initialValues = {_.pick(this.props.stream, 'title', 'description')}
      />
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps,{
  fetchStream, editStream
})(StreamEdit);