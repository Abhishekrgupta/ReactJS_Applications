import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {

  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
    
  }

  renderActions(){
    // <div>
    //   <button className="ui negative button">Delete</button>
    //   <button className="ui button">Cancel</button>
    // </div>
    const { id } = this.props.match.params;
    return(
      <React.Fragment>
        <button 
          className="ui negative button"
          onClick={() => this.props.deleteStream(id)}
          >
          Delete
          </button>
        <Link to = '/' className="ui button">Cancel</Link>
      </React.Fragment>
      )
    }

  renderContent(){
    if (!this.props.stream) {
      return 'Are you sure';
    }

    return `Delete Stream with title: ${this.props.stream.title}`;
  }
   
  render(){
    return (
      <div>
        <Modal  
          title= "Delete Stream"
          content={this.renderContent( )}
          actions={this.renderActions( )}
          onDismiss={() => history.push('/') }
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream : state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);