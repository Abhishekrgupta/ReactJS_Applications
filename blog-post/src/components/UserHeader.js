import React from 'react';
import { connect } from 'react-redux';
// import { fetchUser } from '../actions'
class UserHeader extends React.Component{

  // componentDidMount(){
  //   this.props.fetchUser(this.props.userId);
  // }
  render(){
    
    // THIS FETCHES THE WHOLE LIST OF USERS 
    // const user = this.props.users.find((user) => user.id === this.props.userId);

    //INSTEAD WE CAN TAKE THE USER NEEDED FROM PROPS
    const {user} = this.props;

    if (!user) {
      return null;
    }

    return(
      <div>
        {user.name}
      </div>
    )
  }
}

// EXTRACTING THE USER BEFORE PASSING IT TO THE COMPONENT
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId )
  }
}

export default connect(mapStateToProps
  //,{fetchUser}
   )(UserHeader);